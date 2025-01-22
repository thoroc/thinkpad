// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadT470S = Convert.toThinkPadT470S(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadT470S {
  Model: string;
  Product: Product;
  Region: Region;
  'Country/Region': CountryRegion;
  'Machine Type': MachineType;
  TopSeller: TopSeller;
  Processor: Processor;
  Graphics: Graphics;
  Chipset: Chipset;
  Memory: Memory;
  Storage: Storage;
  Display: Display;
  Touchscreen: BundledAccessories;
  'Media Reader': MediaReader;
  Ethernet: Ethernet;
  Optical: BundledAccessories;
  'WLAN + Bluetooth': WLANBluetooth;
  WWAN: WWAN;
  'SIM Card': SIMCard;
  'Smart Card Reader': SmartCardReader;
  'Monitor Cable': MonitorCable;
  'Bundled Accessories': BundledAccessories;
  'Case Material': CaseMaterial;
  Camera: Camera;
  Microphone: Microphone;
  Docking: Docking;
  Color: Color;
  Keyboard: Keyboard;
  'Fingerprint Reader': FingerprintReader;
  NFC: NFC;
  TPM: TPM;
  Battery: Battery;
  'Power Adapter': PowerAdapter;
  'System Management': SystemManagement;
  'Operating System': string;
  'Bundled Software': BundledAccessories;
  'Base Warranty': BaseWarranty;
  'Bundled Service': BundledAccessories;
  'EAN / UPC / JAN': string;
  'End of Support': Date;
  'Announce Date': Date;
}

export enum BaseWarranty {
  The1YearDepot = '1-year, Depot',
  The1YearDepotWith2YearSystemBoard = '1-year Depot with 2-year System Board',
  The3YearDepot = '3-year, Depot',
  The3YearOnsite = '3-year, Onsite',
}

export enum Battery {
  Integrated23WhIntegrated26Wh = 'Integrated 23Wh + Integrated 26Wh',
}

export enum BundledAccessories {
  None = 'None',
  The10PointMultiTouch = '10-point Multi-touch',
}

export enum Camera {
  The720P = '720p',
}

export enum CaseMaterial {
  CFRPHybridTopMagnesiumBottom = 'CFRP Hybrid (Top), Magnesium (Bottom)',
}

export enum Chipset {
  IntelSoCPlatform = 'Intel SoC Platform',
}

export enum Color {
  Black = 'Black',
  Silver = 'Silver',
}

export enum CountryRegion {
  AfricaFrenchPortuguese = 'Africa-French-Portuguese',
  AfricaUK = 'Africa-UK',
  Australia = 'Australia',
  Austria = 'Austria',
  Belgium = 'Belgium',
  Brazil = 'Brazil',
  Bulgaria = 'Bulgaria',
  Canada = 'Canada',
  Croatia = 'Croatia',
  Cyprus = 'Cyprus',
  CzechRepublic = 'Czech Republic',
  Denmark = 'Denmark',
  Egypt = 'Egypt',
  France = 'France',
  Germany = 'Germany',
  Greece = 'Greece',
  HongKongSAROfChina = 'Hong Kong S.A.R. of China',
  Hungary = 'Hungary',
  Iceland = 'Iceland',
  Indonesia = 'Indonesia',
  Israel = 'Israel',
  Italy = 'Italy',
  Japan = 'Japan',
  Korea = 'Korea',
  Luxembourg = 'Luxembourg',
  Malaysia = 'Malaysia',
  MiddleEASTEM = 'Middle-EAST-EM',
  Netherlands = 'Netherlands',
  Norway = 'Norway',
  Philippines = 'Philippines',
  Poland = 'Poland',
  Portugal = 'Portugal',
  Romania = 'Romania',
  Russia = 'Russia',
  SaudiArabia = 'Saudi Arabia',
  Serbia = 'Serbia',
  Singapore = 'Singapore',
  Slovakia = 'Slovakia',
  SouthAfrica = 'South Africa',
  Spain = 'Spain',
  Sweden = 'Sweden',
  Switzerland = 'Switzerland',
  TaiwanRegion = 'Taiwan Region',
  Thailand = 'Thailand',
  Turkey = 'Turkey',
  Uk = 'UK',
  Usa = 'USA',
  Vietnam = 'Vietnam',
}

export enum Display {
  The14FHD1920X1080IPS250NitsAntiGlare = '14" FHD (1920x1080) IPS 250nits Anti-glare',
  The14WQHD2560X1440IPS300NitsAntiGlare = '14" WQHD (2560x1440) IPS 300nits Anti-glare',
}

export enum Docking {
  None = 'None',
  WiGigDock = 'WiGig Dock',
}

export enum Ethernet {
  The1001000M = '100/1000M',
}

export enum FingerprintReader {
  None = 'None',
  TouchStyleMatchOnChip = 'Touch Style, Match-on-Chip',
}

export enum Graphics {
  IntegratedIntelHDGraphics520 = 'Integrated Intel HD Graphics 520',
  IntegratedIntelHDGraphics620 = 'Integrated Intel HD Graphics 620',
}

export enum Keyboard {
  BacklitArabic = 'Backlit, Arabic',
  BacklitBelgian = 'Backlit, Belgian',
  BacklitBulgarian = 'Backlit, Bulgarian',
  BacklitCzech = 'Backlit, Czech',
  BacklitDanish = 'Backlit, Danish',
  BacklitEnglish = 'Backlit, English',
  BacklitEnglishEU = 'Backlit, English (EU)',
  BacklitEnglishUK = 'Backlit, English (UK)',
  BacklitFrench = 'Backlit, French',
  BacklitGerman = 'Backlit, German',
  BacklitGreek = 'Backlit, Greek',
  BacklitHebrew = 'Backlit, Hebrew',
  BacklitHungarian = 'Backlit, Hungarian',
  BacklitIcelandic = 'Backlit, Icelandic',
  BacklitItalian = 'Backlit, Italian',
  BacklitKorean = 'Backlit, Korean',
  BacklitNordicDKFINOSVEN = 'Backlit, Nordic (DK/FI/NO/SV/EN)',
  BacklitNorwegian = 'Backlit, Norwegian',
  BacklitPortuguese = 'Backlit, Portuguese',
  BacklitPortugueseBrazil = 'Backlit, Portuguese (Brazil)',
  BacklitRussian = 'Backlit, Russian',
  BacklitSlovak = 'Backlit, Slovak',
  BacklitSlovenian = 'Backlit, Slovenian',
  BacklitSpanish = 'Backlit, Spanish',
  BacklitSwedishFinnish = 'Backlit, Swedish / Finnish',
  BacklitSwiss = 'Backlit, Swiss',
  BacklitThai = 'Backlit, Thai',
  BacklitTraditionalChinese = 'Backlit, Traditional Chinese',
  BacklitTurkish = 'Backlit, Turkish',
  NonBacklitEnglish = 'Non-backlit, English',
  NonBacklitJapanese = 'Non-backlit, Japanese',
  NonBacklitPortugueseBrazil = 'Non-backlit, Portuguese (Brazil)',
  NonBacklitThai = 'Non-backlit, Thai',
}

export enum MachineType {
  The20HF = '20HF',
  The20Hg = '20HG',
  The20JS = '20JS',
  The20Jt = '20JT',
}

export enum MediaReader {
  The4In1CardReader = '4-in-1 Card Reader',
}

export enum Memory {
  The4GBSolderedDDR42133 = '4GB Soldered DDR4-2133',
  The4GBSolderedDDR4213316GBSODIMMDDR42133 = '4GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133',
  The4GBSolderedDDR421334GBSODIMMDDR42133 = '4GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133',
  The4GBSolderedDDR421338GBSODIMMDDR42133 = '4GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133',
  The8GBSolderedDDR42133 = '8GB Soldered DDR4-2133',
  The8GBSolderedDDR4213316GBSODIMMDDR42133 = '8GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133',
  The8GBSolderedDDR421334GBSODIMMDDR42133 = '8GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133',
  The8GBSolderedDDR421338GBSODIMMDDR42133 = '8GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133',
}

export enum Microphone {
  The2XArray = '2x, Array',
}

export enum MonitorCable {
  None = 'None',
  The1XHDMIToVGA = '1x HDMI to VGA',
}

export enum NFC {
  NFC = 'NFC',
  None = 'None',
}

export enum PowerAdapter {
  The45WSlimTip = '45W Slim Tip',
  The45WUSBC = '45W USB-C',
  The65WUSBC = '65W USB-C',
}

export enum Processor {
  IntelCoreI56200U2C4T2328GHz3MB = 'Intel Core i5-6200U (2C / 4T, 2.3 / 2.8GHz, 3MB)',
  IntelCoreI56300U2C4T2430GHz3MB = 'Intel Core i5-6300U (2C / 4T, 2.4 / 3.0GHz, 3MB)',
  IntelCoreI57200U2C4T2531GHz3MB = 'Intel Core i5-7200U (2C / 4T, 2.5 / 3.1GHz, 3MB)',
  IntelCoreI57300U2C4T2635GHz3MB = 'Intel Core i5-7300U (2C / 4T, 2.6 / 3.5GHz, 3MB)',
  IntelCoreI76600U2C4T2634GHz4MB = 'Intel Core i7-6600U (2C / 4T, 2.6 / 3.4GHz, 4MB)',
  IntelCoreI77500U2C4T2735GHz4MB = 'Intel Core i7-7500U (2C / 4T, 2.7 / 3.5GHz, 4MB)',
  IntelCoreI77600U2C4T2839GHz4MB = 'Intel Core i7-7600U (2C / 4T, 2.8 / 3.9GHz, 4MB)',
}

export enum Product {
  ThinkPadT470S = 'ThinkPad T470s',
}

export enum Region {
  Anz = 'ANZ',
  Asean = 'ASEAN',
  Brazil = 'BRAZIL',
  Eet = 'EET',
  Htk = 'HTK',
  Japan = 'JAPAN',
  Mea = 'MEA',
  Na = 'NA',
  Russia = 'RUSSIA',
  We = 'WE',
}

export enum SIMCard {
  MicroSIMCardLenovoConnect = 'Micro-SIM Card Lenovo Connect',
  None = 'None',
}

export enum SmartCardReader {
  None = 'None',
  SmartCardReader = 'Smart Card Reader',
}

export enum Storage {
  The128GBSSDM22280SATA6GBS = '128GB SSD M.2 2280 SATA6Gb/s',
  The180GBSSDM22280SATA6GBSOpal2 = '180GB SSD M.2 2280 SATA6Gb/s Opal2',
  The1TBSSDM22280PCIeNVMeOpal2 = '1TB SSD M.2 2280 PCIe NVMe Opal2',
  The256GBSSDM22280PCIeNVMeOpal2 = '256GB SSD M.2 2280 PCIe NVMe Opal2',
  The256GBSSDM22280SATA6GBSOpal2 = '256GB SSD M.2 2280 SATA6Gb/s Opal2',
  The512GBSSDM22280PCIeNVMeOpal2 = '512GB SSD M.2 2280 PCIe NVMe Opal2',
  The512GBSSDM22280SATA6GBSOpal2 = '512GB SSD M.2 2280 SATA6Gb/s Opal2',
}

export enum SystemManagement {
  IntelVPro = 'Intel vPro',
  None = 'None',
}

export enum TPM {
  DiscreteTPM12 = 'Discrete TPM 1.2',
  DiscreteTPM20 = 'Discrete TPM 2.0',
}

export enum TopSeller {
  No = 'No',
  TopSeller = 'TopSeller',
}

export enum WLANBluetooth {
  Intel1826511AC2X2BT41 = 'Intel 18265 11ac, 2x2 + BT4.1',
  Intel826011AC2X2BT41 = 'Intel 8260 11ac, 2x2 + BT4.1',
  Intel826511AC2X2BT41 = 'Intel 8265 11ac, 2x2 + BT4.1',
  None = 'None',
}

export enum WWAN {
  None = 'None',
  SierraEM7430 = 'Sierra EM7430',
  SierraEM7455 = 'Sierra EM7455',
  WWANUpgradable = 'WWAN Upgradable',
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toThinkPadT470S(json: string): ThinkPadT470S[] {
    return cast(JSON.parse(json), a(r('ThinkPadT470S')));
  }

  public static thinkPadT470SToJson(value: ThinkPadT470S[]): string {
    return JSON.stringify(uncast(value, a(r('ThinkPadT470S'))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`,
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${
        typ.map((a) => {
          return prettyTypeName(a);
        }).join(', ')
      }]`;
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = '',
  parent: any = '',
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent,
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any,
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  'ThinkPadT470S': o([
    { json: 'Model', js: 'Model', typ: '' },
    { json: 'Product', js: 'Product', typ: r('Product') },
    { json: 'Region', js: 'Region', typ: r('Region') },
    { json: 'Country/Region', js: 'Country/Region', typ: r('CountryRegion') },
    { json: 'Machine Type', js: 'Machine Type', typ: r('MachineType') },
    { json: 'TopSeller', js: 'TopSeller', typ: r('TopSeller') },
    { json: 'Processor', js: 'Processor', typ: r('Processor') },
    { json: 'Graphics', js: 'Graphics', typ: r('Graphics') },
    { json: 'Chipset', js: 'Chipset', typ: r('Chipset') },
    { json: 'Memory', js: 'Memory', typ: r('Memory') },
    { json: 'Storage', js: 'Storage', typ: r('Storage') },
    { json: 'Display', js: 'Display', typ: r('Display') },
    { json: 'Touchscreen', js: 'Touchscreen', typ: r('BundledAccessories') },
    { json: 'Media Reader', js: 'Media Reader', typ: r('MediaReader') },
    { json: 'Ethernet', js: 'Ethernet', typ: r('Ethernet') },
    { json: 'Optical', js: 'Optical', typ: r('BundledAccessories') },
    {
      json: 'WLAN + Bluetooth',
      js: 'WLAN + Bluetooth',
      typ: r('WLANBluetooth'),
    },
    { json: 'WWAN', js: 'WWAN', typ: r('WWAN') },
    { json: 'SIM Card', js: 'SIM Card', typ: r('SIMCard') },
    {
      json: 'Smart Card Reader',
      js: 'Smart Card Reader',
      typ: r('SmartCardReader'),
    },
    { json: 'Monitor Cable', js: 'Monitor Cable', typ: r('MonitorCable') },
    {
      json: 'Bundled Accessories',
      js: 'Bundled Accessories',
      typ: r('BundledAccessories'),
    },
    { json: 'Case Material', js: 'Case Material', typ: r('CaseMaterial') },
    { json: 'Camera', js: 'Camera', typ: r('Camera') },
    { json: 'Microphone', js: 'Microphone', typ: r('Microphone') },
    { json: 'Docking', js: 'Docking', typ: r('Docking') },
    { json: 'Color', js: 'Color', typ: r('Color') },
    { json: 'Keyboard', js: 'Keyboard', typ: r('Keyboard') },
    {
      json: 'Fingerprint Reader',
      js: 'Fingerprint Reader',
      typ: r('FingerprintReader'),
    },
    { json: 'NFC', js: 'NFC', typ: r('NFC') },
    { json: 'TPM', js: 'TPM', typ: r('TPM') },
    { json: 'Battery', js: 'Battery', typ: r('Battery') },
    { json: 'Power Adapter', js: 'Power Adapter', typ: r('PowerAdapter') },
    {
      json: 'System Management',
      js: 'System Management',
      typ: r('SystemManagement'),
    },
    { json: 'Operating System', js: 'Operating System', typ: '' },
    {
      json: 'Bundled Software',
      js: 'Bundled Software',
      typ: r('BundledAccessories'),
    },
    { json: 'Base Warranty', js: 'Base Warranty', typ: r('BaseWarranty') },
    {
      json: 'Bundled Service',
      js: 'Bundled Service',
      typ: r('BundledAccessories'),
    },
    { json: 'EAN / UPC / JAN', js: 'EAN / UPC / JAN', typ: '' },
    { json: 'End of Support', js: 'End of Support', typ: Date },
    { json: 'Announce Date', js: 'Announce Date', typ: Date },
  ], false),
  'BaseWarranty': [
    '1-year, Depot',
    '1-year Depot with 2-year System Board',
    '3-year, Depot',
    '3-year, Onsite',
  ],
  'Battery': [
    'Integrated 23Wh + Integrated 26Wh',
  ],
  'BundledAccessories': [
    'None',
    '10-point Multi-touch',
  ],
  'Camera': [
    '720p',
  ],
  'CaseMaterial': [
    'CFRP Hybrid (Top), Magnesium (Bottom)',
  ],
  'Chipset': [
    'Intel SoC Platform',
  ],
  'Color': [
    'Black',
    'Silver',
  ],
  'CountryRegion': [
    'Africa-French-Portuguese',
    'Africa-UK',
    'Australia',
    'Austria',
    'Belgium',
    'Brazil',
    'Bulgaria',
    'Canada',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Egypt',
    'France',
    'Germany',
    'Greece',
    'Hong Kong S.A.R. of China',
    'Hungary',
    'Iceland',
    'Indonesia',
    'Israel',
    'Italy',
    'Japan',
    'Korea',
    'Luxembourg',
    'Malaysia',
    'Middle-EAST-EM',
    'Netherlands',
    'Norway',
    'Philippines',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Saudi Arabia',
    'Serbia',
    'Singapore',
    'Slovakia',
    'South Africa',
    'Spain',
    'Sweden',
    'Switzerland',
    'Taiwan Region',
    'Thailand',
    'Turkey',
    'UK',
    'USA',
    'Vietnam',
  ],
  'Display': [
    '14" FHD (1920x1080) IPS 250nits Anti-glare',
    '14" WQHD (2560x1440) IPS 300nits Anti-glare',
  ],
  'Docking': [
    'None',
    'WiGig Dock',
  ],
  'Ethernet': [
    '100/1000M',
  ],
  'FingerprintReader': [
    'None',
    'Touch Style, Match-on-Chip',
  ],
  'Graphics': [
    'Integrated Intel HD Graphics 520',
    'Integrated Intel HD Graphics 620',
  ],
  'Keyboard': [
    'Backlit, Arabic',
    'Backlit, Belgian',
    'Backlit, Bulgarian',
    'Backlit, Czech',
    'Backlit, Danish',
    'Backlit, English',
    'Backlit, English (EU)',
    'Backlit, English (UK)',
    'Backlit, French',
    'Backlit, German',
    'Backlit, Greek',
    'Backlit, Hebrew',
    'Backlit, Hungarian',
    'Backlit, Icelandic',
    'Backlit, Italian',
    'Backlit, Korean',
    'Backlit, Nordic (DK/FI/NO/SV/EN)',
    'Backlit, Norwegian',
    'Backlit, Portuguese',
    'Backlit, Portuguese (Brazil)',
    'Backlit, Russian',
    'Backlit, Slovak',
    'Backlit, Slovenian',
    'Backlit, Spanish',
    'Backlit, Swedish / Finnish',
    'Backlit, Swiss',
    'Backlit, Thai',
    'Backlit, Traditional Chinese',
    'Backlit, Turkish',
    'Non-backlit, English',
    'Non-backlit, Japanese',
    'Non-backlit, Portuguese (Brazil)',
    'Non-backlit, Thai',
  ],
  'MachineType': [
    '20HF',
    '20HG',
    '20JS',
    '20JT',
  ],
  'MediaReader': [
    '4-in-1 Card Reader',
  ],
  'Memory': [
    '4GB Soldered DDR4-2133',
    '4GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133',
    '4GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133',
    '4GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133',
    '8GB Soldered DDR4-2133',
    '8GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133',
    '8GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133',
    '8GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133',
  ],
  'Microphone': [
    '2x, Array',
  ],
  'MonitorCable': [
    'None',
    '1x HDMI to VGA',
  ],
  'NFC': [
    'NFC',
    'None',
  ],
  'PowerAdapter': [
    '45W Slim Tip',
    '45W USB-C',
    '65W USB-C',
  ],
  'Processor': [
    'Intel Core i5-6200U (2C / 4T, 2.3 / 2.8GHz, 3MB)',
    'Intel Core i5-6300U (2C / 4T, 2.4 / 3.0GHz, 3MB)',
    'Intel Core i5-7200U (2C / 4T, 2.5 / 3.1GHz, 3MB)',
    'Intel Core i5-7300U (2C / 4T, 2.6 / 3.5GHz, 3MB)',
    'Intel Core i7-6600U (2C / 4T, 2.6 / 3.4GHz, 4MB)',
    'Intel Core i7-7500U (2C / 4T, 2.7 / 3.5GHz, 4MB)',
    'Intel Core i7-7600U (2C / 4T, 2.8 / 3.9GHz, 4MB)',
  ],
  'Product': [
    'ThinkPad T470s',
  ],
  'Region': [
    'ANZ',
    'ASEAN',
    'BRAZIL',
    'EET',
    'HTK',
    'JAPAN',
    'MEA',
    'NA',
    'RUSSIA',
    'WE',
  ],
  'SIMCard': [
    'Micro-SIM Card Lenovo Connect',
    'None',
  ],
  'SmartCardReader': [
    'None',
    'Smart Card Reader',
  ],
  'Storage': [
    '128GB SSD M.2 2280 SATA6Gb/s',
    '180GB SSD M.2 2280 SATA6Gb/s Opal2',
    '1TB SSD M.2 2280 PCIe NVMe Opal2',
    '256GB SSD M.2 2280 PCIe NVMe Opal2',
    '256GB SSD M.2 2280 SATA6Gb/s Opal2',
    '512GB SSD M.2 2280 PCIe NVMe Opal2',
    '512GB SSD M.2 2280 SATA6Gb/s Opal2',
  ],
  'SystemManagement': [
    'Intel vPro',
    'None',
  ],
  'TPM': [
    'Discrete TPM 1.2',
    'Discrete TPM 2.0',
  ],
  'TopSeller': [
    'No',
    'TopSeller',
  ],
  'WLANBluetooth': [
    'Intel 18265 11ac, 2x2 + BT4.1',
    'Intel 8260 11ac, 2x2 + BT4.1',
    'Intel 8265 11ac, 2x2 + BT4.1',
    'None',
  ],
  'WWAN': [
    'None',
    'Sierra EM7430',
    'Sierra EM7455',
    'WWAN Upgradable',
  ],
};
