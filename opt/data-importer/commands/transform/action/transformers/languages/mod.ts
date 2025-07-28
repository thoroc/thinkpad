import { Language, toLanguage } from './language.ts';

export interface Languages {
  values?: Language[];
  family?: string;
}

export const LanguagesFamilyMap: Record<string, string> = {
  'WE': 'Western European',
};

export const toLanguages = (languageString: string): Languages => {
  const languages = {} as Languages;

  if (languageString.toUpperCase() === 'NONE') {
    return languages;
  }

  const pattern =
    /^(?<language>[A-Za-z]+)\s*\((?<region>[A-Za-z]+)\)$|^(?:(?<family>[A-Za-z]+)\s*\((?<codes>[A-Za-z\/]+)\))|(?<values>[A-Za-z\s]+(?:\s*\/\s*[\(\)A-Za-z\s]+)*)$/;
  // /^(?:(?<family>[A-Za-z]+)\s*\((?<codes>[A-Za-z\/]+)\))|(?<values>[A-Za-z\s]+(?:\s*\/\s*[\(\)A-Za-z\s]+)*)$/;
  const match = pattern.exec(languageString);

  if (!match) return languages;

  if (
    match.groups?.family && match.groups?.codes &&
    match.groups?.codes.length > 1
  ) {
    languages.family = LanguagesFamilyMap[match.groups.family.trim()] ||
      match.groups.family.trim();
    languages.values = match.groups.codes.split('/').map((code) => {
      const language = {} as Language;

      language.name = toLanguage({ code }).name;
      language.code = code.trim().toLowerCase();

      return language;
    });

    return languages;
  }

  if (match.groups?.language && match.groups?.region) {
    languages.values = [
      {
        name: match.groups.language,
        code: toLanguage({
          name: match.groups.language,
        }).code,
        region: match.groups.region,
      },
    ];
  }

  if (match.groups?.values) {
    languages.values = match.groups.values.split('/').map((value) => {
      return {
        name: value.trim(),
        code: toLanguage({ name: value }).code,
      };
    });
  }

  return languages;
};
