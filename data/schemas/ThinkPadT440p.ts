// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadT440P = Convert.toThinkPadT440P(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadT440P {
  Model: string;
  Product: Product;
  Region: Region;
  'Machine Type': MachineType;
  TopSeller: TopSeller;
  Processor: Processor;
  vPro: VPro;
  Graphics: Graphics;
  Memory: Memory;
  Display: Display;
  Storage: Storage;
  Optical: Optical;
  'WLAN & Bluetooth': WLANBluetooth;
  'WWAN / M.2 SSD': NFC;
  'SIM Card': SIMCard;
  'Smart Card Reader': SmartCardReader;
  Camera: Camera;
  'Backlit Keyboard': BacklitKeyboard;
  'Fingerprint Reader': FingerprintReader;
  NFC: NFC;
  'Battery Cells': BatteryCells;
  'Power Adapter (watt)': PowerAdapterWatt;
  Preload: Preload;
  'Base Warranty': BaseWarranty;
  Global: Global;
  'Ann Date (mm/yy)': string;
}

export enum BacklitKeyboard {
  BacklitKeyboard = 'Backlit Keyboard',
  None = 'None',
}

export enum BaseWarranty {
  The1YearDepot = '1-year depot',
  The3YearDepot = '3-year depot',
  The3YearOnsite = '3-year onsite',
}

export enum BatteryCells {
  The6Cell56Wh = '6-cell (56Wh)',
  The9Cell999Wh = '9-cell (99.9Wh)',
}

export enum Camera {
  The720P = '720p',
}

export enum Display {
  The14FHD1920X1080IPS = '14" FHD (1920x1080) IPS',
  The14HD1366X768 = '14" HD (1366x768)',
  The14HD1600X900 = '14" HD+ (1600x900)',
}

export enum FingerprintReader {
  FingerprintReader = 'Fingerprint Reader',
  None = 'None',
}

export enum Global {
  No = 'No',
  Yes = 'Yes',
}

export enum Graphics {
  IntelHDGraphics4600 = 'Intel HD Graphics 4600',
  NVIDIAGeForceGT730M = 'NVIDIA GeForce GT 730M',
}

export enum MachineType {
  The20An = '20AN',
  The20Aw = '20AW',
}

export enum Memory {
  The2GBx2 = '2GBx2',
  The4GBx1 = '4GBx1',
  The4GBx2 = '4GBx2',
  The8GBx1 = '8GBx1',
}

export enum NFC {
  EricssonN5321 = 'Ericsson N5321',
  None = 'None',
  SierraEM7345 = 'Sierra EM7345',
  WWANUpgradable = 'WWAN upgradable',
}

export enum Optical {
  DVDRw = 'DVD±RW',
}

export enum PowerAdapterWatt {
  The135W = '135W',
  The65W = '65W',
  The90W = '90W',
}

export enum Preload {
  Windows10DGWindows7Pro64 = 'Windows 10 DG Windows 7 Pro 64',
  Windows10Pro64 = 'Windows 10 Pro 64',
  Windows81DGWindows7Pro64 = 'Windows 8.1 DG Windows 7 Pro 64',
  Windows8DGWindows7Pro64 = 'Windows 8 DG Windows 7 Pro 64',
  Windows8Pro64Bit = 'Windows 8 Pro 64-bit',
}

export enum Processor {
  I34000M2C24GHz3MB1600MHz = 'i3-4000M (2C, 2.4GHz, 3MB, 1600MHz)',
  I34100M2C25GHz3MB1600MHz = 'i3-4100M (2C, 2.5GHz, 3MB, 1600MHz)',
  I54200M2C2531GHz3MB1600MHz = 'i5-4200M (2C, 2.5 / 3.1GHz, 3MB, 1600MHz)',
  I54210M2C2632GHz3MB1600MHz = 'i5-4210M (2C, 2.6 / 3.2GHz, 3MB, 1600MHz)',
  I54300M2C2633GHz3MB1600MHz = 'i5-4300M (2C, 2.6 / 3.3GHz, 3MB, 1600MHz)',
  I54330M2C2835GHz3MB1600MHz = 'i5-4330M (2C, 2.8 / 3.5GHz, 3MB, 1600MHz)',
  I74600M2C2936GHz4MB1600MHz = 'i7-4600M (2C, 2.9 / 3.6GHz, 4MB, 1600MHz)',
  I74700MQ4C2434GHz6MB1600MHz = 'i7-4700MQ (4C, 2.4 / 3.4GHz, 6MB, 1600MHz)',
  I74710MQ4C2535GHz6MB1600MHz = 'i7-4710MQ (4C, 2.5 / 3.5GHz, 6MB, 1600MHz)',
  I74800MQ4C2737GHz6MB1600MHz = 'i7-4800MQ (4C, 2.7 / 3.7GHz, 6MB, 1600MHz)',
  I74810MQ4C2838GHz6MB1600MHz = 'i7-4810MQ (4C, 2.8 / 3.8GHz, 6MB, 1600MHz)',
  I74900MQ4C2838GHz8MB1600MHz = 'i7-4900MQ (4C, 2.8 / 3.8GHz, 8MB, 1600MHz)',
}

export enum Product {
  T440P = 'T440p',
}

export enum Region {
  Us = 'US',
  We = 'WE',
}

export enum SIMCard {
  None = 'None',
  Selectable = 'Selectable',
}

export enum SmartCardReader {
  None = 'None',
  SmartCardReader = 'Smart Card Reader',
}

export enum Storage {
  The128GBSSD = '128GB SSD',
  The180GBSSDOpal = '180GB SSD Opal',
  The240GBSSDOpal = '240GB SSD Opal',
  The256GBSSDEDrive = '256GB SSD eDrive',
  The500GB5400RPM8GBSSHD = '500GB 5400rpm + 8GB SSHD',
  The500GB7200RPM = '500GB 7200rpm',
  The512GBSSD = '512GB SSD',
}

export enum TopSeller {
  No = 'No',
  TopSeller = 'TopSeller',
}

export enum WLANBluetooth {
  Intel7260ABGNBT40 = 'Intel 7260 a/b/g/n + BT4.0',
  Intel7260ACBT40 = 'Intel 7260 ac + BT4.0',
  Intel7260BGNBT40 = 'Intel 7260 b/g/n + BT4.0',
}

export enum VPro {
  No = 'No',
  VPro = 'vPro',
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toThinkPadT440P(json: string): ThinkPadT440P[] {
    return cast(JSON.parse(json), a(r('ThinkPadT440P')));
  }

  public static thinkPadT440PToJson(value: ThinkPadT440P[]): string {
    return JSON.stringify(uncast(value, a(r('ThinkPadT440P'))), null, 2);
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
  'ThinkPadT440P': o([
    { json: 'Model', js: 'Model', typ: '' },
    { json: 'Product', js: 'Product', typ: r('Product') },
    { json: 'Region', js: 'Region', typ: r('Region') },
    { json: 'Machine Type', js: 'Machine Type', typ: r('MachineType') },
    { json: 'TopSeller', js: 'TopSeller', typ: r('TopSeller') },
    { json: 'Processor', js: 'Processor', typ: r('Processor') },
    { json: 'vPro', js: 'vPro', typ: r('VPro') },
    { json: 'Graphics', js: 'Graphics', typ: r('Graphics') },
    { json: 'Memory', js: 'Memory', typ: r('Memory') },
    { json: 'Display', js: 'Display', typ: r('Display') },
    { json: 'Storage', js: 'Storage', typ: r('Storage') },
    { json: 'Optical', js: 'Optical', typ: r('Optical') },
    {
      json: 'WLAN & Bluetooth',
      js: 'WLAN & Bluetooth',
      typ: r('WLANBluetooth'),
    },
    { json: 'WWAN / M.2 SSD', js: 'WWAN / M.2 SSD', typ: r('NFC') },
    { json: 'SIM Card', js: 'SIM Card', typ: r('SIMCard') },
    {
      json: 'Smart Card Reader',
      js: 'Smart Card Reader',
      typ: r('SmartCardReader'),
    },
    { json: 'Camera', js: 'Camera', typ: r('Camera') },
    {
      json: 'Backlit Keyboard',
      js: 'Backlit Keyboard',
      typ: r('BacklitKeyboard'),
    },
    {
      json: 'Fingerprint Reader',
      js: 'Fingerprint Reader',
      typ: r('FingerprintReader'),
    },
    { json: 'NFC', js: 'NFC', typ: r('NFC') },
    { json: 'Battery Cells', js: 'Battery Cells', typ: r('BatteryCells') },
    {
      json: 'Power Adapter (watt)',
      js: 'Power Adapter (watt)',
      typ: r('PowerAdapterWatt'),
    },
    { json: 'Preload', js: 'Preload', typ: r('Preload') },
    { json: 'Base Warranty', js: 'Base Warranty', typ: r('BaseWarranty') },
    { json: 'Global', js: 'Global', typ: r('Global') },
    { json: 'Ann Date (mm/yy)', js: 'Ann Date (mm/yy)', typ: '' },
  ], false),
  'BacklitKeyboard': [
    'Backlit Keyboard',
    'None',
  ],
  'BaseWarranty': [
    '1-year depot',
    '3-year depot',
    '3-year onsite',
  ],
  'BatteryCells': [
    '6-cell (56Wh)',
    '9-cell (99.9Wh)',
  ],
  'Camera': [
    '720p',
  ],
  'Display': [
    '14" FHD (1920x1080) IPS',
    '14" HD (1366x768)',
    '14" HD+ (1600x900)',
  ],
  'FingerprintReader': [
    'Fingerprint Reader',
    'None',
  ],
  'Global': [
    'No',
    'Yes',
  ],
  'Graphics': [
    'Intel HD Graphics 4600',
    'NVIDIA GeForce GT 730M',
  ],
  'MachineType': [
    '20AN',
    '20AW',
  ],
  'Memory': [
    '2GBx2',
    '4GBx1',
    '4GBx2',
    '8GBx1',
  ],
  'NFC': [
    'Ericsson N5321',
    'None',
    'Sierra EM7345',
    'WWAN upgradable',
  ],
  'Optical': [
    'DVD±RW',
  ],
  'PowerAdapterWatt': [
    '135W',
    '65W',
    '90W',
  ],
  'Preload': [
    'Windows 10 DG Windows 7 Pro 64',
    'Windows 10 Pro 64',
    'Windows 8.1 DG Windows 7 Pro 64',
    'Windows 8 DG Windows 7 Pro 64',
    'Windows 8 Pro 64-bit',
  ],
  'Processor': [
    'i3-4000M (2C, 2.4GHz, 3MB, 1600MHz)',
    'i3-4100M (2C, 2.5GHz, 3MB, 1600MHz)',
    'i5-4200M (2C, 2.5 / 3.1GHz, 3MB, 1600MHz)',
    'i5-4210M (2C, 2.6 / 3.2GHz, 3MB, 1600MHz)',
    'i5-4300M (2C, 2.6 / 3.3GHz, 3MB, 1600MHz)',
    'i5-4330M (2C, 2.8 / 3.5GHz, 3MB, 1600MHz)',
    'i7-4600M (2C, 2.9 / 3.6GHz, 4MB, 1600MHz)',
    'i7-4700MQ (4C, 2.4 / 3.4GHz, 6MB, 1600MHz)',
    'i7-4710MQ (4C, 2.5 / 3.5GHz, 6MB, 1600MHz)',
    'i7-4800MQ (4C, 2.7 / 3.7GHz, 6MB, 1600MHz)',
    'i7-4810MQ (4C, 2.8 / 3.8GHz, 6MB, 1600MHz)',
    'i7-4900MQ (4C, 2.8 / 3.8GHz, 8MB, 1600MHz)',
  ],
  'Product': [
    'T440p',
  ],
  'Region': [
    'US',
    'WE',
  ],
  'SIMCard': [
    'None',
    'Selectable',
  ],
  'SmartCardReader': [
    'None',
    'Smart Card Reader',
  ],
  'Storage': [
    '128GB SSD',
    '180GB SSD Opal',
    '240GB SSD Opal',
    '256GB SSD eDrive',
    '500GB 5400rpm + 8GB SSHD',
    '500GB 7200rpm',
    '512GB SSD',
  ],
  'TopSeller': [
    'No',
    'TopSeller',
  ],
  'WLANBluetooth': [
    'Intel 7260 a/b/g/n + BT4.0',
    'Intel 7260 ac + BT4.0',
    'Intel 7260 b/g/n + BT4.0',
  ],
  'VPro': [
    'No',
    'vPro',
  ],
};
