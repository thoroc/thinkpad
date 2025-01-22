// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadX260 = Convert.toThinkPadX260(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadX260 {
  Model: string;
  Product: Product;
  Region: Region;
  "Machine Type": MachineType;
  TopSeller: Global;
  Processor: Processor;
  vPro: VPro;
  Graphics: Graphics;
  Memory: Memory;
  Display: Display;
  "Multi-touch": MultiTouch;
  Storage: Storage;
  Optical: MultiTouch;
  "WLAN + Bluetooth": WLANBluetooth;
  WWAN: MultiTouch;
  "SIM Card": SIMCard;
  "Smart Card Reader": SmartCardReader;
  Camera: Camera;
  Keyboard: Keyboard;
  "Fingerprint Reader": FingerprintReader;
  Battery: Battery;
  "Power Adapter": PowerAdapter;
  "Operating System": OperatingSystem;
  Warranty: Warranty;
  Global: Global;
  "Ann Date (mm/yy)": ANNDateMmYy;
}

export enum ANNDateMmYy {
  The0116 = "01/16",
  The0117 = "01/17",
  The0216 = "02/16",
  The0316 = "03/16",
  The0416 = "04/16",
  The0516 = "05/16",
  The0616 = "06/16",
  The0716 = "07/16",
  The0916 = "09/16",
  The1016 = "10/16",
  The1216 = "12/16",
}

export enum Battery {
  None6Cell48Wh = "None + 6-cell (48Wh)",
  The3Cell23Wh3Cell23Wh = "3-cell (23Wh) + 3-cell (23Wh)",
  The3Cell23Wh6Cell48Wh = "3-cell (23Wh) + 6-cell (48Wh)",
}

export enum Camera {
  The720P = "720p",
}

export enum Display {
  The125FHD1920X1080IPS = '12.5" FHD (1920x1080) IPS',
  The125HD1366X768 = '12.5" HD (1366x768)',
  The125HD1366X768IPS = '12.5" HD (1366x768) IPS',
}

export enum FingerprintReader {
  FingerprintReader = "Fingerprint Reader",
  None = "None",
}

export enum Global {
  No = "No",
  TopSeller = "TopSeller",
}

export enum Graphics {
  IntegratedIntelHDGraphics520 = "Integrated Intel HD Graphics 520",
}

export enum Keyboard {
  Backlit = "Backlit",
  NonBacklit = "Non-backlit",
}

export enum MachineType {
  The20F5 = "20F5",
  The20F6 = "20F6",
}

export enum Memory {
  The16GBx1 = "16GBx1",
  The4GBx1 = "4GBx1",
  The8GBx1 = "8GBx1",
}

export enum MultiTouch {
  HuaweiMe906S = "HUAWEI ME906S",
  None = "None",
  SierraEM7455 = "Sierra EM7455",
  WWANUpgradable = "WWAN Upgradable",
}

export enum OperatingSystem {
  Windows10DGWindows7Pro64 = "Windows 10 DG Windows 7 Pro 64",
  Windows10Pro64 = "Windows 10 Pro 64",
}

export enum PowerAdapter {
  The45W = "45W",
}

export enum Processor {
  CoreI36006U2C20GHz3MB = "Core i3-6006U (2C, 2.0GHz, 3MB)",
  CoreI36100U2C23GHz3MB = "Core i3-6100U (2C, 2.3GHz, 3MB)",
  CoreI56200U2C2328GHz3MB = "Core i5-6200U (2C, 2.3 / 2.8GHz, 3MB)",
  CoreI56300U2C2430GHz3MB = "Core i5-6300U (2C, 2.4 / 3.0GHz, 3MB)",
  CoreI76500U2C2531GHz4MB = "Core i7-6500U (2C, 2.5 / 3.1GHz, 4MB)",
  CoreI76600U2C2634GHz4MB = "Core i7-6600U (2C, 2.6 / 3.4GHz, 4MB)",
}

export enum Product {
  ThinkPadX260 = "ThinkPad X260",
}

export enum Region {
  East = "EAST",
  Emea = "EMEA",
  Mea = "MEA",
  Us = "US",
  We = "WE",
}

export enum SIMCard {
  LenovoConnect = "Lenovo Connect",
  None = "None",
}

export enum SmartCardReader {
  None = "None",
  SmartCardReader = "Smart Card Reader",
}

export enum Storage {
  The128GBSSD = "128GB SSD",
  The180GBSSDOpal2 = "180GB SSD Opal2",
  The192GBSSD = "192GB SSD",
  The1TB5400RPM = "1TB 5400rpm",
  The240GBSSDOpal2 = "240GB SSD Opal2",
  The256GBSSDOpal2 = "256GB SSD Opal2",
  The256GBSSDPCIeNVMeOpal2 = "256GB SSD PCIe NVMe Opal2",
  The480GBSSDOpal2 = "480GB SSD Opal2",
  The500GB7200RPM = "500GB 7200rpm",
  The500GB8GBSSHD5400RPM = "500GB (8GB) SSHD 5400rpm",
  The512GBSSD = "512GB SSD",
  The512GBSSDOpal2 = "512GB SSD Opal2",
}

export enum WLANBluetooth {
  Intel8260AC2X2BT41 = "Intel 8260 ac, 2x2 + BT4.1",
}

export enum Warranty {
  The3YearDepot = "3-year, Depot",
  The3YearOnsite = "3-year, Onsite",
}

export enum VPro {
  No = "No",
  VPro = "vPro",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toThinkPadX260(json: string): ThinkPadX260[] {
    return cast(JSON.parse(json), a(r("ThinkPadX260")));
  }

  public static thinkPadX260ToJson(value: ThinkPadX260[]): string {
    return JSON.stringify(uncast(value, a(r("ThinkPadX260"))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${
      JSON.stringify(val)
    }`,
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
        }).join(", ")
      }]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
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
  key: any = "",
  parent: any = "",
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
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any,
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
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
  "ThinkPadX260": o([
    { json: "Model", js: "Model", typ: "" },
    { json: "Product", js: "Product", typ: r("Product") },
    { json: "Region", js: "Region", typ: r("Region") },
    { json: "Machine Type", js: "Machine Type", typ: r("MachineType") },
    { json: "TopSeller", js: "TopSeller", typ: r("Global") },
    { json: "Processor", js: "Processor", typ: r("Processor") },
    { json: "vPro", js: "vPro", typ: r("VPro") },
    { json: "Graphics", js: "Graphics", typ: r("Graphics") },
    { json: "Memory", js: "Memory", typ: r("Memory") },
    { json: "Display", js: "Display", typ: r("Display") },
    { json: "Multi-touch", js: "Multi-touch", typ: r("MultiTouch") },
    { json: "Storage", js: "Storage", typ: r("Storage") },
    { json: "Optical", js: "Optical", typ: r("MultiTouch") },
    {
      json: "WLAN + Bluetooth",
      js: "WLAN + Bluetooth",
      typ: r("WLANBluetooth"),
    },
    { json: "WWAN", js: "WWAN", typ: r("MultiTouch") },
    { json: "SIM Card", js: "SIM Card", typ: r("SIMCard") },
    {
      json: "Smart Card Reader",
      js: "Smart Card Reader",
      typ: r("SmartCardReader"),
    },
    { json: "Camera", js: "Camera", typ: r("Camera") },
    { json: "Keyboard", js: "Keyboard", typ: r("Keyboard") },
    {
      json: "Fingerprint Reader",
      js: "Fingerprint Reader",
      typ: r("FingerprintReader"),
    },
    { json: "Battery", js: "Battery", typ: r("Battery") },
    { json: "Power Adapter", js: "Power Adapter", typ: r("PowerAdapter") },
    {
      json: "Operating System",
      js: "Operating System",
      typ: r("OperatingSystem"),
    },
    { json: "Warranty", js: "Warranty", typ: r("Warranty") },
    { json: "Global", js: "Global", typ: r("Global") },
    { json: "Ann Date (mm/yy)", js: "Ann Date (mm/yy)", typ: r("ANNDateMmYy") },
  ], false),
  "ANNDateMmYy": [
    "01/16",
    "01/17",
    "02/16",
    "03/16",
    "04/16",
    "05/16",
    "06/16",
    "07/16",
    "09/16",
    "10/16",
    "12/16",
  ],
  "Battery": [
    "None + 6-cell (48Wh)",
    "3-cell (23Wh) + 3-cell (23Wh)",
    "3-cell (23Wh) + 6-cell (48Wh)",
  ],
  "Camera": [
    "720p",
  ],
  "Display": [
    '12.5" FHD (1920x1080) IPS',
    '12.5" HD (1366x768)',
    '12.5" HD (1366x768) IPS',
  ],
  "FingerprintReader": [
    "Fingerprint Reader",
    "None",
  ],
  "Global": [
    "No",
    "TopSeller",
  ],
  "Graphics": [
    "Integrated Intel HD Graphics 520",
  ],
  "Keyboard": [
    "Backlit",
    "Non-backlit",
  ],
  "MachineType": [
    "20F5",
    "20F6",
  ],
  "Memory": [
    "16GBx1",
    "4GBx1",
    "8GBx1",
  ],
  "MultiTouch": [
    "HUAWEI ME906S",
    "None",
    "Sierra EM7455",
    "WWAN Upgradable",
  ],
  "OperatingSystem": [
    "Windows 10 DG Windows 7 Pro 64",
    "Windows 10 Pro 64",
  ],
  "PowerAdapter": [
    "45W",
  ],
  "Processor": [
    "Core i3-6006U (2C, 2.0GHz, 3MB)",
    "Core i3-6100U (2C, 2.3GHz, 3MB)",
    "Core i5-6200U (2C, 2.3 / 2.8GHz, 3MB)",
    "Core i5-6300U (2C, 2.4 / 3.0GHz, 3MB)",
    "Core i7-6500U (2C, 2.5 / 3.1GHz, 4MB)",
    "Core i7-6600U (2C, 2.6 / 3.4GHz, 4MB)",
  ],
  "Product": [
    "ThinkPad X260",
  ],
  "Region": [
    "EAST",
    "EMEA",
    "MEA",
    "US",
    "WE",
  ],
  "SIMCard": [
    "Lenovo Connect",
    "None",
  ],
  "SmartCardReader": [
    "None",
    "Smart Card Reader",
  ],
  "Storage": [
    "128GB SSD",
    "180GB SSD Opal2",
    "192GB SSD",
    "1TB 5400rpm",
    "240GB SSD Opal2",
    "256GB SSD Opal2",
    "256GB SSD PCIe NVMe Opal2",
    "480GB SSD Opal2",
    "500GB 7200rpm",
    "500GB (8GB) SSHD 5400rpm",
    "512GB SSD",
    "512GB SSD Opal2",
  ],
  "WLANBluetooth": [
    "Intel 8260 ac, 2x2 + BT4.1",
  ],
  "Warranty": [
    "3-year, Depot",
    "3-year, Onsite",
  ],
  "VPro": [
    "No",
    "vPro",
  ],
};
