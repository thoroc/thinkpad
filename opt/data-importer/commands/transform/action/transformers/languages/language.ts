import * as iana from 'npm:language-tags';

export interface Language {
  name: string;
  code?: string;
}

export const toLanguage = (
  { name, code }: { name?: string; code?: string },
): Language => {
  if (!name && !code) {
    throw new Error('Name or code must be provided to create a Language');
  }

  if (name && code) {
    return {
      name,
      code: code.toLowerCase(),
    };
  }

  const language = {} as Language;

  if (code && !name) {
    language.code = code.toLowerCase();

    const subtag: iana.Subtag | undefined = iana.language(
      code.toLowerCase(),
    );

    switch (code.toLowerCase()) {
      case 'gr':
      case 'grek':
      case 'el':
        language.name = 'Greek';
        break;
      case 'da':
      case 'dk':
        language.name = 'Danish';
        break;
      default:
        if (subtag) {
          language.name = subtag.data.record.Description[0];
        } else {
          throw new Error(`No language found for code: ${code}`);
        }
        break;
    }

    return language;
  } else if (name && !code) {
    language.name = name;
    const subtags: Array<iana.Subtag> | undefined = iana.search(
      name.toLowerCase(),
    );

    switch (name) {
      case 'Greek':
        language.code = 'el';
        break;
      case 'Danish':
        language.code = 'dk';
        break;
      default:
        if (subtags) {
          language.code = subtags[0].data.subtag;
        } else {
          throw new Error(`No language found for name: ${name}`);
        }
        break;
    }

    return language;
  }

  return language;
};
