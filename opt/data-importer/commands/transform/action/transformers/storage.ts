export interface Storage {
  type: { name: string; type?: string; connector?: string };
  size: { value: number; unit?: string };
  speed?: number;
  hybrid?: boolean;
  cache?: { value: number; unit?: string };
}

export const toStorage = (storageString: string): Storage => {
  const storage = {} as Storage;

  // 1. Find cache in "+ 8GB" or "+8GB"
  const cacheMatch = storageString.match(
    /\+\s?(?<cacheValue>\d+)\s*(?<cacheUnit>GB|MB)/i,
  );
  if (cacheMatch?.groups) {
    storage.hybrid = true;
    storage.cache = {
      value: parseInt(cacheMatch.groups.cacheValue, 10),
      unit: cacheMatch.groups.cacheUnit.toUpperCase(),
    };
  }

  // 2. Find cache in "/8GB" or "/ 8GB"
  const sizeMatch = storageString.match(
    /(?<sizeValue>\d+)\s*(?<sizeUnit>GB|TB|MB)\s?(\/(?<cacheValue>\d+)\s*(?<cacheUnit>GB|TB|MB))?/i,
  );
  if (sizeMatch?.groups) {
    storage.size = {
      value: parseInt(sizeMatch.groups.sizeValue, 10),
      unit: sizeMatch.groups.sizeUnit.toUpperCase(),
    };
    if (sizeMatch.groups.cacheValue && sizeMatch.groups.cacheUnit) {
      storage.cache = {
        value: parseInt(sizeMatch.groups.cacheValue, 10),
        unit: sizeMatch.groups.cacheUnit.toUpperCase(),
      };
      storage.hybrid = true;
    }
  }

  // 3. Find cache in "(8GB)" or "(8 MB)"
  const parenCacheMatch = storageString.match(
    /\((?<cacheValue>\d+)\s*(?<cacheUnit>GB|MB)\)/i,
  );
  if (parenCacheMatch?.groups) {
    storage.cache = {
      value: parseInt(parenCacheMatch.groups.cacheValue, 10),
      unit: parenCacheMatch.groups.cacheUnit.toUpperCase(),
    };
    storage.hybrid = true;
  }

  const typeMatch = storageString.match(/(SSD|HDD|SSHD|Hybrid)/i);
  if (typeMatch) {
    storage.type = {} as Storage['type'];
    storage.type.name = typeMatch[0].toUpperCase();

    // need to extract the type and connector if present
    if (storage.type.name === 'SSD') {
      const connectorMatch = storageString.match(/(M.2|SATA|PCIe)/i);
      if (connectorMatch) {
        storage.type.connector = connectorMatch[0];
      }

      const typeDetails = storageString.match(/(Opal|NVMe|SATA)/i);
      if (typeDetails) {
        storage.type.type = typeDetails[0];
      }
    }
  }

  const speedMatch = storageString.match(/(?<speed>\d+)\s*rpm/i);
  if (speedMatch?.groups?.speed) {
    const speed = parseInt(speedMatch.groups.speed, 10);
    if (!storage.type?.name) storage.type = { name: 'HDD' };
    storage.speed = speed;
  }

  return storage;
};
