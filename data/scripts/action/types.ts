export const OutputType = {
  JSON: "json",
  TABLE: "table",
  RAW: "raw",
};

export type OutputType = keyof typeof OutputType;

export interface Property {
  name: string;
  filePresent: string[];
  values: string[];
}

export interface GroupedProperties {
  keys: string[];
  values: Property[];
}

export interface FlattenProperties {
  keys: string[];
  values: string[];
  filePresent: string[];
}
