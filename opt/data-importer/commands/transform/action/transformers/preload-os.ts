import { Languages, toLanguages } from './languages/mod.ts';

export interface PreloadedOS {
  name: string;
  version: string;
  languages: Languages;
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
      languages: {} as Languages, // will fill later
    });
  }
  // Parse languages after last OS/version
  const langMatch = osString.match(/,\s*([^\n]+)/);
  const languages = langMatch ? toLanguages(langMatch[1]) : {} as Languages;
  // Assign languages to all OS objects
  for (const os of osArray) {
    os.languages = languages;
  }
  return osArray;
};
