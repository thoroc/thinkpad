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
  const cacheMatch = storageString.match(/\+\s?(\d+)\s*(GB|MB)/);
  if (cacheMatch) {
    storage.hybrid = true;
    storage.cache = { value: parseInt(cacheMatch[1], 10), unit: cacheMatch[2] };
  }

  // 2. Find cache in "/8GB" or "/ 8GB"
  const sizeMatch = storageString.match(
    /(\d+)\s*(GB|TB|MB)\s?(\/(\d+)\s*(GB|TB|MB))?/,
  );
  if (sizeMatch) {
    storage.size = { value: parseInt(sizeMatch[1], 10), unit: sizeMatch[2] };
    if (sizeMatch[4]) {
      storage.cache = { value: parseInt(sizeMatch[4], 10), unit: sizeMatch[5] };
      storage.hybrid = true;
    }
  }

  // 3. Find cache in "(8GB)" or "(8 MB)"
  const parenCacheMatch = storageString.match(/\((\d+)\s*(GB|MB)\)/i);
  if (parenCacheMatch) {
    storage.cache = {
      value: parseInt(parenCacheMatch[1], 10),
      unit: parenCacheMatch[2].toUpperCase(),
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

  const speedMatch = storageString.match(/(\d+)\s*rpm/);
  if (speedMatch) {
    const speed = parseInt(speedMatch[1], 10);
    if (!storage.type?.name) storage.type = { name: 'HDD' };
    storage.speed = speed;
  }

  return storage;
};
