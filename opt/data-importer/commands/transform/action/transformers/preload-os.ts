export interface PreloadedOS {
  name: string;
  version: string;
}

export const toPreloadedOS = (osString: string): PreloadedOS[] => {
  const pattern =
    /(?<name>Windows\s(?:10|8(?:\.1)?|7))\s*(?<version>DG|Pro\s64(?:-bit)?|Pro\s64|Pro\s64-bit|Pro|64(?:-bit)?)/gi;
  const osArray: PreloadedOS[] = [];
  let match;
  while ((match = pattern.exec(osString)) !== null) {
    osArray.push({
      name: match.groups!.name.trim(),
      version: match.groups!.version.trim(),
    });
  }

  return osArray;
};
