export interface Storage {
  type: string;
  capacity: string;
  formFactor?: string;
  interface?: string;
  speed?: string;
  encryption?: string;
  cache?: string;
  length?: string;
}

const ENCRYPTIONS = ['Opal2', 'Opal', 'eDrive'];

const INTERFACES = [
  'PCIe 3.0x4 NVMe',
  'PCIe 3.0x2 NVMe',
  'PCIe x4 NVMe',
  'PCIe x2 NVMe',
  'PCIe NVMe',
  'PCIe',
  'NVMe',
  'SATA6Gb/s',
  'SATA',
];

function parseSingleStorage(part: string): Storage {
  const s: Storage = { type: '', capacity: '' };

  // Cache (for SSHD/Hybrid)
  const cacheMatch = part.match(/(\d+GB) (?:Hybrid|SSHD)/i);
  if (cacheMatch) {
    s.cache = cacheMatch[1];
    s.type = 'HDD';
  }

  // Capacity (e.g. 256GB, 1TB)
  const capMatch = part.match(/(\d+TB|\d+GB)/i);
  if (capMatch) s.capacity = capMatch[1];

  // Type
  if (/SSD/i.test(part)) s.type = 'SSD';
  else if (/HDD/i.test(part)) s.type = 'HDD';
  else if (/SSHD/i.test(part)) s.type = 'HDD';
  else if (/Optane Memory/i.test(part)) s.type = 'Optane Memory';
  else if (!s.type && /rpm/i.test(part)) s.type = 'HDD';

  // Speed (e.g. 5400rpm, 7200rpm)
  const speedMatch = part.match(/(\d{4,5}) ?rpm/i);
  if (speedMatch) s.speed = speedMatch[1] + 'rpm';

  // Encryption (use regexp for whole word match)
  for (const enc of ENCRYPTIONS) {
    const encRe = new RegExp(`(?<![\\w-])${enc}(?![\\w-])`, 'i');
    if (encRe.test(part)) {
      s.encryption = enc;
      break;
    }
  }

  // Interface (use regexp for whole word match)
  for (const iface of INTERFACES) {
    const ifaceRe = new RegExp(
      `(?<![\\w-])${iface.replace(
        /([.*+?^=!:${}()|[\\]\\\/])/g,
        '\\$1'
      )}(?![\\w-])`,
      'i'
    );
    if (ifaceRe.test(part)) {
      s.interface = iface;
      break;
    }
  }

  // Form factor and length
  // Only set formFactor if present in input
  const m2LenMatch = part.match(/M\.2\s*(2242|2280)/i);
  if (m2LenMatch) {
    s.formFactor = `M.2 ${m2LenMatch[1]}`;
    s.length = m2LenMatch[1];
  } else if (/M\.2/i.test(part)) {
    s.formFactor = 'M.2';
  } else if (/2\.5"/.test(part)) {
    s.formFactor = '2.5"';
  }

  // Only set length if present in input
  // Already handled above for M.2 2242/2280

  // Remove undefined fields and fields with empty string
  (Object.keys(s) as (keyof Storage)[]).forEach((k) =>
    s[k] === undefined || s[k] === '' ? delete s[k] : undefined
  );

  return s;
}

export const toStorage = (storageString: string): Storage[] => {
  if (!storageString) return [];

  // Special: Optane Memory Integrated with SSD
  if (/Optane Memory Integrated with/i.test(storageString)) {
    const optaneMatch = storageString.match(
      /(\d+GB) Optane Memory Integrated with (\d+GB) SSD M\.2 2280/i
    );
    if (optaneMatch) {
      return [
        { type: 'SSD', capacity: optaneMatch[2], formFactor: 'M.2 2280' },
        { type: 'Optane Memory', capacity: optaneMatch[1] },
      ];
    }
  }

  // Split on + and handle 2x/3x/4x
  const parts: string[] = [];
  storageString.split(/\+/).forEach((segment) => {
    segment = segment.trim();
    // Handle 2x/3x/4x
    const multiMatch = segment.match(/^(\d+)x\s*(.+)$/i);
    if (multiMatch) {
      const count = parseInt(multiMatch[1], 10);
      for (let i = 0; i < count; i++) {
        parts.push(multiMatch[2].trim());
      }
    } else {
      parts.push(segment);
    }
  });

  return parts.map(parseSingleStorage);
};
