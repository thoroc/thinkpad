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

export interface Languages {
  values?: string[];
  family?: string;
}

export const LanguagesFamilyMap: Record<string, string> = {
  'WE': 'Western European',
  'FR': 'French',
  'DE': 'German',
  'NL': 'Dutch',
  'IT': 'Italian',
  'EN': 'English',
  'ES': 'Spanish',
  'PT': 'Portuguese',
  'DK': 'Danish',
  'NO': 'Norwegian',
  'SE': 'Swedish',
  'SV': 'Swedish',
  'PL': 'Polish',
  'FI': 'Finnish',
  'TR': 'Turkish',
};

export const toLanguages = (languageString: string): Languages => {
  const languages = {} as Languages;

  if (languageString.toUpperCase() === 'NONE') {
    return languages;
  }

  const pattern =
    /^(?:(?<family>[A-Za-z]+)\s*\((?<codes>[A-Za-z\/]+)\))|(?<values>[A-Za-z\s]+(?:\s*\/\s*[\(\)A-Za-z\s]+)*)$/;
  const match = pattern.exec(languageString);

  if (!match) return languages;

  if (
    match.groups?.family && match.groups?.codes &&
    match.groups?.codes.length > 1
  ) {
    languages.family = LanguagesFamilyMap[match.groups.family.trim()] ||
      match.groups.family.trim();
    languages.values = match.groups.codes.split('/').map((code) => {
      return LanguagesFamilyMap[code.trim()] || code.trim();
    });
  } else if (match.groups?.values) {
    languages.values = match.groups.values.split('/').map((v) => v.trim());
  }

  return languages;
};
