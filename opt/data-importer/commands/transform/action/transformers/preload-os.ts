export interface PreloadedOS {
  name: string;
  version: string;
  languages: string[]; // Optional, e.g., ["Turkish", "English"]
}

export const toPreloadedOS = (osString: string): PreloadedOS[] => {
  const pattern =
    /(?<name>Windows\s(?:10|8(?:\.1)?|7))\s*(?<version>(?:Home|Pro)?\s?(32|64)(?:-bit)?|Pro|DG)/gi;
  const osArray: PreloadedOS[] = [];
  let match;
  while ((match = pattern.exec(osString)) !== null) {
    osArray.push({
      name: match.groups!.name.trim(),
      version: match.groups!.version.trim(),
      languages: [], // will fill later
    });
  }
  // Parse languages after last OS/version
  const langMatch = osString.match(/,\s*([^\n]+)/);
  const languages = langMatch ? langMatch[1].split('/').map((l) => l.trim()) : [];
  // Assign languages to all OS objects
  for (const os of osArray) {
    os.languages = languages;
  }
  return osArray;
};
