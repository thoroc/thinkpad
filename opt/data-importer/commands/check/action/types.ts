import {
  ArgumentValue,
  Type,
  ValidationError,
} from 'jsr:@cliffy/command@1.0.0-rc.8';

export const OutputType = {
  JSON: 'json',
  TABLE: 'table',
  RAW: 'raw',
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

export const basePath =
  'opt/data-importer/commands/transform/action/transformers';

export const TransformerFixtures: Record<string, string> = {
  battery: `${basePath}/battery-cells.fixtures.json`,
  camera: `${basePath}/camera.fixtures.json`,
  display: `${basePath}/display.fixtures.json`,
  graphics: `${basePath}/graphics.fixtures.json`,
  processor: `${basePath}/processor.fixtures.json`,
  memory: `${basePath}/memory/system.fixtures.json`,
  'power-adapter': `${basePath}/power-adapter.fixtures.json`,
  storage: `${basePath}/storage.fixtures.json`,
  wlan: `${basePath}/wlan-device.fixtures.json`,
  wwan: `${basePath}/wwan-device.fixtures.json`,
  warranty: `${basePath}/warranty.fixtures.json`,
};

export type TransformerFixtures = keyof typeof TransformerFixtures;

export class TransformerFixturesType extends Type<string> {
  private readonly fixtures = Object.keys(
    TransformerFixtures
  ) as (keyof typeof TransformerFixtures)[];

  public parse({ label, name, value }: ArgumentValue): string {
    if (!this.fixtures.includes(value as keyof typeof TransformerFixtures)) {
      throw new ValidationError(
        `${label} "${name}" must be a valid transformer fixture, but got "${value}". Possible values are: ${this.fixtures.join(
          ', '
        )}`
      );
    }

    return value;
  }
}
