export interface TransformerOptions {
  Key: string;
  Value: string | boolean;
}

export const Separators = {
  PlusSign: '+',
  MinusSign: '-',
  Slash: '/',
  Ampersand: '&',
} as const;

export type Separator = (typeof Separators)[keyof typeof Separators];

export type Transformed = Record<string, string | boolean>;
