// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadT480 = Convert.toThinkPadT480(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadT480 {
  Model: string;
  Product: Product;
  Region: Region;
  "Country/Region": string;
  "Machine Type": MachineType;
  TopSeller: TopSeller;
  Processor: Processor;
  Graphics: Graphics;
  Chipset: Chipset;
  Memory: Memory;
  Storage: Storage;
  "Optane Memory": BundledSoftware;
  Display: Display;
  Touchscreen: Touchscreen;
  "Media Reader": MediaReader;
  Ethernet: Ethernet;
  Optical: BundledSoftware;
  "WLAN + Bluetooth": WLANBluetooth;
  WWAN: WWAN;
  "SIM Card": BundledSoftware;
  "Smart Card Reader": SmartCardReader;
  "Monitor Cable": MonitorCable;
  "Case Material": CaseMaterial;
  Camera: Camera;
  Microphone: Microphone;
  Color: Color;
  Keyboard: Keyboard;
  "Fingerprint Reader": FingerprintReader;
  NFC: NFC;
  TPM: TPM;
  Battery: Battery;
  "Power Adapter": PowerAdapter;
  "System Management": SystemManagement;
  "Operating System": OperatingSystem;
  "Bundled Software": BundledSoftware;
  "Base Warranty": BaseWarranty;
  "Bundled Service": BundledService;
  "EAN / UPC / JAN": string;
  "End of Support": string;
  "Announce Date": Date;
}

export enum BaseWarranty {
  The1YearDepot = "1-year, Depot",
  The1YearDepotWith2YearSystemBoard = "1-year, Depot with 2-year System Board",
  The3YearDepot = "3-year, Depot",
  The3YearOnsite = "3-year, Onsite",
  The3YearOnsiteWith3YearBattery = "3-year, Onsite with 3-year Battery",
}

export enum Battery {
  Integrated24WhSwappable24Wh = "Integrated 24Wh + Swappable 24Wh",
  Integrated24WhSwappable72Wh = "Integrated 24Wh + Swappable 72Wh",
  Swappable24Wh = "Swappable 24Wh",
  Swappable48Wh = "Swappable 48Wh",
  Swappable72Wh = "Swappable 72Wh",
}

export enum BundledService {
  None = "None",
  The3YOnsiteKeepYourDrive5PS0A22942 =
    "3Y Onsite +Keep Your Drive (5PS0A22942)",
  The3YSealedBatteryAddOn5WS0A23013 = "3Y Sealed Battery Add On (5WS0A23013)",
}

export enum BundledSoftware {
  None = "None",
  The16GBOptaneMemory = "16GB Optane Memory",
}

export enum Camera {
  The720PIRWithoutThinkShutter = "720p + IR without ThinkShutter",
  The720PWithThinkShutter = "720p with ThinkShutter",
}

export enum CaseMaterial {
  MagnesiumTopGFRPBottom = "Magnesium (Top), GFRP (Bottom)",
  PPSTopGFRPBottom = "PPS (Top), GFRP (Bottom)",
}

export enum Chipset {
  IntelSoCPlatform = "Intel SoC Platform",
}

export enum Color {
  Black = "Black",
}

export enum Display {
  The14FHD1920X1080WVA250NitsAntiGlare =
    '14" FHD (1920x1080) WVA 250nits Anti-glare',
  The14HD1366X768TN220NitsAntiGlare = '14" HD (1366x768) TN 220nits Anti-glare',
  The14WQHD2560X1440WVA300NitsAntiGlare =
    '14" WQHD (2560x1440) WVA 300nits Anti-glare',
}

export enum Ethernet {
  The1001000M = "100/1000M",
}

export enum FingerprintReader {
  None = "None",
  TouchStyleMatchOnChip = "Touch Style, Match-on-Chip",
}

export enum Graphics {
  IntegratedIntelHDGraphics620 = "Integrated Intel HD Graphics 620",
  IntegratedIntelUHDGraphics620 = "Integrated Intel UHD Graphics 620",
  NVIDIAGeForceMX1502GBGDDR5 = "NVIDIA GeForce MX150 2GB GDDR5",
}

export enum Keyboard {
  BacklitArabic = "Backlit, Arabic",
  BacklitBelgian = "Backlit, Belgian",
  BacklitBulgarian = "Backlit, Bulgarian",
  BacklitCzechSlovak = "Backlit, Czech / Slovak",
  BacklitDanish = "Backlit, Danish",
  BacklitEnglish = "Backlit, English",
  BacklitEnglishEU = "Backlit, English (EU)",
  BacklitEnglishIndia = "Backlit, English (India)",
  BacklitEnglishUK = "Backlit, English (UK)",
  BacklitFrench = "Backlit, French",
  BacklitGerman = "Backlit, German",
  BacklitGreek = "Backlit, Greek",
  BacklitHebrew = "Backlit, Hebrew",
  BacklitHungarian = "Backlit, Hungarian",
  BacklitIcelandic = "Backlit, Icelandic",
  BacklitItalian = "Backlit, Italian",
  BacklitKorean = "Backlit, Korean",
  BacklitNordicDKFINOSVEN = "Backlit, Nordic (DK/FI/NO/SV/EN)",
  BacklitNorwegian = "Backlit, Norwegian",
  BacklitPortuguese = "Backlit, Portuguese",
  BacklitPortugueseBrazil = "Backlit, Portuguese (Brazil)",
  BacklitRussian = "Backlit, Russian",
  BacklitSlovenian = "Backlit, Slovenian",
  BacklitSpanish = "Backlit, Spanish",
  BacklitSpanishLA = "Backlit, Spanish (LA)",
  BacklitSwedishFinnish = "Backlit, Swedish / Finnish",
  BacklitSwiss = "Backlit, Swiss",
  BacklitTraditionalChinese = "Backlit, Traditional Chinese",
  BacklitTurkish = "Backlit, Turkish",
  NonBacklitEnglish = "Non-backlit, English",
  NonBacklitFrench = "Non-backlit, French",
  NonBacklitJapanese = "Non-backlit, Japanese",
  NonBacklitPortugueseBrazil = "Non-backlit, Portuguese (Brazil)",
  NonBacklitSpanishLA = "Non-backlit, Spanish (LA)",
  NonBacklitTraditionalChinese = "Non-backlit, Traditional Chinese",
}

export enum MachineType {
  The20L5 = "20L5",
  The20L6 = "20L6",
}

export enum MediaReader {
  The4In1CardReader = "4-in-1 Card Reader",
}

export enum Memory {
  The1X16GBSODIMMDDR42400 = "1x 16GB SO-DIMM DDR4-2400",
  The1X4GBSODIMMDDR42400 = "1x 4GB SO-DIMM DDR4-2400",
  The1X8GBSODIMMDDR42400 = "1x 8GB SO-DIMM DDR4-2400",
  The2X16GBSODIMMDDR42400 = "2x 16GB SO-DIMM DDR4-2400",
  The2X4GBSODIMMDDR42400 = "2x 4GB SO-DIMM DDR4-2400",
  The2X8GBSODIMMDDR42400 = "2x 8GB SO-DIMM DDR4-2400",
}

export enum Microphone {
  The2XArray = "2x, Array",
}

export enum MonitorCable {
  None = "None",
  The1XUSBCToDP = "1x USB-C to DP",
}

export enum NFC {
  NFC = "NFC",
  None = "None",
}

export enum OperatingSystem {
  None = "None",
  Windows10Home64 = "Windows 10 Home 64",
  Windows10Pro64 = "Windows 10 Pro 64",
}

export enum PowerAdapter {
  The45WUSBC = "45W USB-C",
  The65WUSBC = "65W USB-C",
}

export enum Processor {
  IntelCoreI38130U2C4T2234GHz4MB =
    "Intel Core i3-8130U (2C / 4T, 2.2 / 3.4GHz, 4MB)",
  IntelCoreI57200U2C4T2531GHz3MB =
    "Intel Core i5-7200U (2C / 4T, 2.5 / 3.1GHz, 3MB)",
  IntelCoreI57300U2C4T2635GHz3MB =
    "Intel Core i5-7300U (2C / 4T, 2.6 / 3.5GHz, 3MB)",
  IntelCoreI58250U4C8T1634GHz6MB =
    "Intel Core i5-8250U (4C / 8T, 1.6 / 3.4GHz, 6MB)",
  IntelCoreI58350U4C8T1736GHz6MB =
    "Intel Core i5-8350U (4C / 8T, 1.7 / 3.6GHz, 6MB)",
  IntelCoreI78550U4C8T1840GHz8MB =
    "Intel Core i7-8550U (4C / 8T, 1.8 / 4.0GHz, 8MB)",
  IntelCoreI78650U4C8T1942GHz8MB =
    "Intel Core i7-8650U (4C / 8T, 1.9 / 4.2GHz, 8MB)",
}

export enum Product {
  ThinkPadT480 = "ThinkPad T480",
}

export enum Region {
  Anz = "ANZ",
  Asean = "ASEAN",
  Brazil = "BRAZIL",
  Eet = "EET",
  Htk = "HTK",
  India = "INDIA",
  Japan = "JAPAN",
  La = "LA",
  Mea = "MEA",
  Na = "NA",
  Russia = "RUSSIA",
  We = "WE",
}

export enum SmartCardReader {
  None = "None",
  SmartCardReader = "Smart Card Reader",
}

export enum Storage {
  The128GBSSD25SATA6GBS = '128GB SSD 2.5" SATA6Gb/s',
  The128GBSSDM22242PCIeNVMe1TBHDD5400RPM25 =
    '128GB SSD M.2 2242 PCIe NVMe + 1TB HDD 5400rpm 2.5"',
  The180GBSSD25SATA6GBSOpal2 = '180GB SSD 2.5" SATA6Gb/s Opal2',
  The1TBHDD5400RPM25 = '1TB HDD 5400rpm 2.5"',
  The1TBSSDM22280PCIeNVMeOpal2 = "1TB SSD M.2 2280 PCIe NVMe Opal2",
  The256GBSSD25SATA6GBSOpal2 = '256GB SSD 2.5" SATA6Gb/s Opal2',
  The256GBSSDM22280PCIeNVMeOpal2 = "256GB SSD M.2 2280 PCIe NVMe Opal2",
  The500GBHDD7200RPM25 = '500GB HDD 7200rpm 2.5"',
  The512GBSSDM22280PCIeNVMeOpal2 = "512GB SSD M.2 2280 PCIe NVMe Opal2",
}

export enum SystemManagement {
  IntelVPro = "Intel vPro",
  None = "None",
}

export enum TPM {
  DiscreteTPM20 = "Discrete TPM 2.0",
}

export enum TopSeller {
  No = "No",
  TopSeller = "TopSeller",
}

export enum Touchscreen {
  None = "None",
  The10PointMultiTouch = "10-point Multi-touch",
}

export enum WLANBluetooth {
  Intel826511AC2X2BT41 = "Intel 8265 11ac, 2x2 + BT4.1",
}

export enum WWAN {
  FibocomL830EB = "Fibocom L830-EB",
  FibocomL850GL = "Fibocom L850-GL",
  None = "None",
  WWANUpgradable = "WWAN Upgradable",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toThinkPadT480(json: string): ThinkPadT480[] {
    return cast(JSON.parse(json), a(r("ThinkPadT480")));
  }

  public static thinkPadT480ToJson(value: ThinkPadT480[]): string {
    return JSON.stringify(uncast(value, a(r("ThinkPadT480"))), null, 2);
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
  "ThinkPadT480": o([
    { json: "Model", js: "Model", typ: "" },
    { json: "Product", js: "Product", typ: r("Product") },
    { json: "Region", js: "Region", typ: r("Region") },
    { json: "Country/Region", js: "Country/Region", typ: "" },
    { json: "Machine Type", js: "Machine Type", typ: r("MachineType") },
    { json: "TopSeller", js: "TopSeller", typ: r("TopSeller") },
    { json: "Processor", js: "Processor", typ: r("Processor") },
    { json: "Graphics", js: "Graphics", typ: r("Graphics") },
    { json: "Chipset", js: "Chipset", typ: r("Chipset") },
    { json: "Memory", js: "Memory", typ: r("Memory") },
    { json: "Storage", js: "Storage", typ: r("Storage") },
    { json: "Optane Memory", js: "Optane Memory", typ: r("BundledSoftware") },
    { json: "Display", js: "Display", typ: r("Display") },
    { json: "Touchscreen", js: "Touchscreen", typ: r("Touchscreen") },
    { json: "Media Reader", js: "Media Reader", typ: r("MediaReader") },
    { json: "Ethernet", js: "Ethernet", typ: r("Ethernet") },
    { json: "Optical", js: "Optical", typ: r("BundledSoftware") },
    {
      json: "WLAN + Bluetooth",
      js: "WLAN + Bluetooth",
      typ: r("WLANBluetooth"),
    },
    { json: "WWAN", js: "WWAN", typ: r("WWAN") },
    { json: "SIM Card", js: "SIM Card", typ: r("BundledSoftware") },
    {
      json: "Smart Card Reader",
      js: "Smart Card Reader",
      typ: r("SmartCardReader"),
    },
    { json: "Monitor Cable", js: "Monitor Cable", typ: r("MonitorCable") },
    { json: "Case Material", js: "Case Material", typ: r("CaseMaterial") },
    { json: "Camera", js: "Camera", typ: r("Camera") },
    { json: "Microphone", js: "Microphone", typ: r("Microphone") },
    { json: "Color", js: "Color", typ: r("Color") },
    { json: "Keyboard", js: "Keyboard", typ: r("Keyboard") },
    {
      json: "Fingerprint Reader",
      js: "Fingerprint Reader",
      typ: r("FingerprintReader"),
    },
    { json: "NFC", js: "NFC", typ: r("NFC") },
    { json: "TPM", js: "TPM", typ: r("TPM") },
    { json: "Battery", js: "Battery", typ: r("Battery") },
    { json: "Power Adapter", js: "Power Adapter", typ: r("PowerAdapter") },
    {
      json: "System Management",
      js: "System Management",
      typ: r("SystemManagement"),
    },
    {
      json: "Operating System",
      js: "Operating System",
      typ: r("OperatingSystem"),
    },
    {
      json: "Bundled Software",
      js: "Bundled Software",
      typ: r("BundledSoftware"),
    },
    { json: "Base Warranty", js: "Base Warranty", typ: r("BaseWarranty") },
    {
      json: "Bundled Service",
      js: "Bundled Service",
      typ: r("BundledService"),
    },
    { json: "EAN / UPC / JAN", js: "EAN / UPC / JAN", typ: "" },
    { json: "End of Support", js: "End of Support", typ: "" },
    { json: "Announce Date", js: "Announce Date", typ: Date },
  ], false),
  "BaseWarranty": [
    "1-year, Depot",
    "1-year, Depot with 2-year System Board",
    "3-year, Depot",
    "3-year, Onsite",
    "3-year, Onsite with 3-year Battery",
  ],
  "Battery": [
    "Integrated 24Wh + Swappable 24Wh",
    "Integrated 24Wh + Swappable 72Wh",
    "Swappable 24Wh",
    "Swappable 48Wh",
    "Swappable 72Wh",
  ],
  "BundledService": [
    "None",
    "3Y Onsite +Keep Your Drive (5PS0A22942)",
    "3Y Sealed Battery Add On (5WS0A23013)",
  ],
  "BundledSoftware": [
    "None",
    "16GB Optane Memory",
  ],
  "Camera": [
    "720p + IR without ThinkShutter",
    "720p with ThinkShutter",
  ],
  "CaseMaterial": [
    "Magnesium (Top), GFRP (Bottom)",
    "PPS (Top), GFRP (Bottom)",
  ],
  "Chipset": [
    "Intel SoC Platform",
  ],
  "Color": [
    "Black",
  ],
  "Display": [
    '14" FHD (1920x1080) WVA 250nits Anti-glare',
    '14" HD (1366x768) TN 220nits Anti-glare',
    '14" WQHD (2560x1440) WVA 300nits Anti-glare',
  ],
  "Ethernet": [
    "100/1000M",
  ],
  "FingerprintReader": [
    "None",
    "Touch Style, Match-on-Chip",
  ],
  "Graphics": [
    "Integrated Intel HD Graphics 620",
    "Integrated Intel UHD Graphics 620",
    "NVIDIA GeForce MX150 2GB GDDR5",
  ],
  "Keyboard": [
    "Backlit, Arabic",
    "Backlit, Belgian",
    "Backlit, Bulgarian",
    "Backlit, Czech / Slovak",
    "Backlit, Danish",
    "Backlit, English",
    "Backlit, English (EU)",
    "Backlit, English (India)",
    "Backlit, English (UK)",
    "Backlit, French",
    "Backlit, German",
    "Backlit, Greek",
    "Backlit, Hebrew",
    "Backlit, Hungarian",
    "Backlit, Icelandic",
    "Backlit, Italian",
    "Backlit, Korean",
    "Backlit, Nordic (DK/FI/NO/SV/EN)",
    "Backlit, Norwegian",
    "Backlit, Portuguese",
    "Backlit, Portuguese (Brazil)",
    "Backlit, Russian",
    "Backlit, Slovenian",
    "Backlit, Spanish",
    "Backlit, Spanish (LA)",
    "Backlit, Swedish / Finnish",
    "Backlit, Swiss",
    "Backlit, Traditional Chinese",
    "Backlit, Turkish",
    "Non-backlit, English",
    "Non-backlit, French",
    "Non-backlit, Japanese",
    "Non-backlit, Portuguese (Brazil)",
    "Non-backlit, Spanish (LA)",
    "Non-backlit, Traditional Chinese",
  ],
  "MachineType": [
    "20L5",
    "20L6",
  ],
  "MediaReader": [
    "4-in-1 Card Reader",
  ],
  "Memory": [
    "1x 16GB SO-DIMM DDR4-2400",
    "1x 4GB SO-DIMM DDR4-2400",
    "1x 8GB SO-DIMM DDR4-2400",
    "2x 16GB SO-DIMM DDR4-2400",
    "2x 4GB SO-DIMM DDR4-2400",
    "2x 8GB SO-DIMM DDR4-2400",
  ],
  "Microphone": [
    "2x, Array",
  ],
  "MonitorCable": [
    "None",
    "1x USB-C to DP",
  ],
  "NFC": [
    "NFC",
    "None",
  ],
  "OperatingSystem": [
    "None",
    "Windows 10 Home 64",
    "Windows 10 Pro 64",
  ],
  "PowerAdapter": [
    "45W USB-C",
    "65W USB-C",
  ],
  "Processor": [
    "Intel Core i3-8130U (2C / 4T, 2.2 / 3.4GHz, 4MB)",
    "Intel Core i5-7200U (2C / 4T, 2.5 / 3.1GHz, 3MB)",
    "Intel Core i5-7300U (2C / 4T, 2.6 / 3.5GHz, 3MB)",
    "Intel Core i5-8250U (4C / 8T, 1.6 / 3.4GHz, 6MB)",
    "Intel Core i5-8350U (4C / 8T, 1.7 / 3.6GHz, 6MB)",
    "Intel Core i7-8550U (4C / 8T, 1.8 / 4.0GHz, 8MB)",
    "Intel Core i7-8650U (4C / 8T, 1.9 / 4.2GHz, 8MB)",
  ],
  "Product": [
    "ThinkPad T480",
  ],
  "Region": [
    "ANZ",
    "ASEAN",
    "BRAZIL",
    "EET",
    "HTK",
    "INDIA",
    "JAPAN",
    "LA",
    "MEA",
    "NA",
    "RUSSIA",
    "WE",
  ],
  "SmartCardReader": [
    "None",
    "Smart Card Reader",
  ],
  "Storage": [
    '128GB SSD 2.5" SATA6Gb/s',
    '128GB SSD M.2 2242 PCIe NVMe + 1TB HDD 5400rpm 2.5"',
    '180GB SSD 2.5" SATA6Gb/s Opal2',
    '1TB HDD 5400rpm 2.5"',
    "1TB SSD M.2 2280 PCIe NVMe Opal2",
    '256GB SSD 2.5" SATA6Gb/s Opal2',
    "256GB SSD M.2 2280 PCIe NVMe Opal2",
    '500GB HDD 7200rpm 2.5"',
    "512GB SSD M.2 2280 PCIe NVMe Opal2",
  ],
  "SystemManagement": [
    "Intel vPro",
    "None",
  ],
  "TPM": [
    "Discrete TPM 2.0",
  ],
  "TopSeller": [
    "No",
    "TopSeller",
  ],
  "Touchscreen": [
    "None",
    "10-point Multi-touch",
  ],
  "WLANBluetooth": [
    "Intel 8265 11ac, 2x2 + BT4.1",
  ],
  "WWAN": [
    "Fibocom L830-EB",
    "Fibocom L850-GL",
    "None",
    "WWAN Upgradable",
  ],
};
