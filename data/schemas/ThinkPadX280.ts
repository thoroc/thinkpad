// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadX280 = Convert.toThinkPadX280(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadX280 {
    Model:                 string;
    Product:               Product;
    Region:                Region;
    "Country/Region":      string;
    "Machine Type":        MachineType;
    TopSeller:             TopSeller;
    Processor:             Processor;
    Graphics:              Graphics;
    Chipset:               Chipset;
    Memory:                Memory;
    Storage:               Storage;
    Display:               Display;
    Touchscreen:           Optical;
    "Media Reader":        MediaReader;
    Ethernet:              Ethernet;
    Optical:               Optical;
    "WLAN + Bluetooth":    WLANBluetooth;
    WWAN:                  WWAN;
    "SIM Card":            Optical;
    "Smart Card Reader":   SmartCardReader;
    "Monitor Cable":       MonitorCable;
    "Bundled Accessories": BundledAccessories;
    "Case Material":       CaseMaterial;
    Camera:                Camera;
    Microphone:            Microphone;
    Color:                 Color;
    Keyboard:              Keyboard;
    "Fingerprint Reader":  FingerprintReader;
    NFC:                   NFC;
    TPM:                   TPM;
    Battery:               Battery;
    "Power Adapter":       PowerAdapter;
    "System Management":   SystemManagement;
    "Operating System":    OperatingSystem;
    "Bundled Software":    BundledSoftware;
    "Base Warranty":       BaseWarranty;
    "Bundled Service":     BundledService;
    "EAN / UPC / JAN":     string;
    "End of Support":      Date;
    "Announce Date":       Date;
}

export enum BaseWarranty {
    The1YearDepot = "1-year, Depot",
    The1YearDepotWith2YearSystemBoard = "1-year, Depot with 2-year System Board",
    The3YearDepot = "3-year, Depot",
    The3YearOnsite = "3-year, Onsite",
}

export enum Battery {
    Integrated48Wh = "Integrated 48Wh",
}

export enum BundledAccessories {
    None = "None",
    ThinkPadEthernetExtensionAdapterGen2 = "ThinkPad Ethernet Extension Adapter Gen 2",
}

export enum BundledService {
    None = "None",
    The3YAccidentalDamageProtectionAddOn5PS0A23193 = "3Y Accidental Damage Protection Add On (5PS0A23193)",
    The3YSealedBatteryAddOn5WS0A23013 = "3Y Sealed Battery Add On (5WS0A23013)",
    The4YPremierSupportUpgradeFrom3YOnsite5WS0T36167 = "4Y Premier Support Upgrade from 3Y Onsite (5WS0T36167)",
}

export enum BundledSoftware {
    None = "None",
    OfficePersonal2016 = "Office Personal 2016",
}

export enum Camera {
    The720PIRWithoutThinkShutter = "720p + IR without ThinkShutter",
    The720PWithThinkShutter = "720p with ThinkShutter",
}

export enum CaseMaterial {
    CarbonFiberTopMagnesiumAluminumBottom = "Carbon Fiber (Top), Magnesium / Aluminum (Bottom)",
    GlassFiberTopMagnesiumAluminumBottom = "Glass Fiber (Top), Magnesium / Aluminum (Bottom)",
}

export enum Chipset {
    IntelSoCPlatform = "Intel SoC Platform",
}

export enum Color {
    Black = "Black",
}

export enum Display {
    The125FHD1920X1080WVA300NitsAntiGlare = "12.5\" FHD (1920x1080) WVA 300nits Anti-glare",
    The125HD1366X768TN220NitsAntiGlare = "12.5\" HD (1366x768) TN 220nits Anti-glare",
}

export enum Ethernet {
    The1001000MViaOptionalAdapter = "100/1000M via Optional Adapter",
}

export enum FingerprintReader {
    None = "None",
    TouchStyleMatchOnChip = "Touch Style, Match-on-Chip",
}

export enum Graphics {
    IntegratedIntelHDGraphics620 = "Integrated Intel HD Graphics 620",
    IntegratedIntelUHDGraphics620 = "Integrated Intel UHD Graphics 620",
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
    BacklitJapanese = "Backlit, Japanese",
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
    BacklitThai = "Backlit, Thai",
    BacklitTraditionalChinese = "Backlit, Traditional Chinese",
    BacklitTurkish = "Backlit, Turkish",
    NonBacklitArabic = "Non-backlit, Arabic",
    NonBacklitEnglish = "Non-backlit, English",
    NonBacklitEnglishEU = "Non-backlit, English (EU)",
    NonBacklitEnglishUK = "Non-backlit, English (UK)",
    NonBacklitFrench = "Non-backlit, French",
    NonBacklitJapanese = "Non-backlit, Japanese",
    NonBacklitPortuguese = "Non-backlit, Portuguese",
    NonBacklitPortugueseBrazil = "Non-backlit, Portuguese (Brazil)",
    NonBacklitSpanishLA = "Non-backlit, Spanish (LA)",
    NonBacklitThai = "Non-backlit, Thai",
    NonBacklitTraditionalChinese = "Non-backlit, Traditional Chinese",
}

export enum MachineType {
    The20Ke = "20KE",
    The20Kf = "20KF",
}

export enum MediaReader {
    MicroSDReader = "MicroSD Reader",
}

export enum Memory {
    The16GBSolderedDDR42400 = "16GB Soldered DDR4-2400",
    The4GBSolderedDDR42400 = "4GB Soldered DDR4-2400",
    The8GBSolderedDDR42400 = "8GB Soldered DDR4-2400",
}

export enum Microphone {
    The2XArray = "2x, Array",
}

export enum MonitorCable {
    None = "None",
    The1XHDMIToVGA = "1x HDMI to VGA",
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

export enum Optical {
    None = "None",
    The10PointMultiTouch = "10-point Multi-touch",
}

export enum PowerAdapter {
    The45WUSBC = "45W USB-C",
    The65WUSBC = "65W USB-C",
}

export enum Processor {
    IntelCoreI37130U2C4T27GHz3MB = "Intel Core i3-7130U (2C / 4T, 2.7GHz, 3MB)",
    IntelCoreI38130U2C4T2234GHz4MB = "Intel Core i3-8130U (2C / 4T, 2.2 / 3.4GHz, 4MB)",
    IntelCoreI57200U2C4T2531GHz3MB = "Intel Core i5-7200U (2C / 4T, 2.5 / 3.1GHz, 3MB)",
    IntelCoreI57300U2C4T2635GHz3MB = "Intel Core i5-7300U (2C / 4T, 2.6 / 3.5GHz, 3MB)",
    IntelCoreI58250U4C8T1634GHz6MB = "Intel Core i5-8250U (4C / 8T, 1.6 / 3.4GHz, 6MB)",
    IntelCoreI58350U4C8T1736GHz6MB = "Intel Core i5-8350U (4C / 8T, 1.7 / 3.6GHz, 6MB)",
    IntelCoreI78550U4C8T1840GHz8MB = "Intel Core i7-8550U (4C / 8T, 1.8 / 4.0GHz, 8MB)",
    IntelCoreI78650U4C8T1942GHz8MB = "Intel Core i7-8650U (4C / 8T, 1.9 / 4.2GHz, 8MB)",
}

export enum Product {
    ThinkPadX280 = "ThinkPad X280",
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
    The128GBSSDM22280SATA6GBS = "128GB SSD M.2 2280 SATA6Gb/s",
    The180GBSSDM22280SATA6GBSOpal2 = "180GB SSD M.2 2280 SATA6Gb/s Opal2",
    The1TBSSDM22280PCIeNVMeOpal2 = "1TB SSD M.2 2280 PCIe NVMe Opal2",
    The256GBSSDM22280PCIeNVMeOpal2 = "256GB SSD M.2 2280 PCIe NVMe Opal2",
    The256GBSSDM22280SATA6GBSOpal2 = "256GB SSD M.2 2280 SATA6Gb/s Opal2",
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

export enum WLANBluetooth {
    Intel826511AC2X2BT41 = "Intel 8265 11ac, 2x2 + BT4.1",
}

export enum WWAN {
    FibocomL830EB = "Fibocom L830-EB",
    FibocomL850GL = "Fibocom L850-GL",
    None = "None",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThinkPadX280(json: string): ThinkPadX280[] {
        return cast(JSON.parse(json), a(r("ThinkPadX280")));
    }

    public static thinkPadX280ToJson(value: ThinkPadX280[]): string {
        return JSON.stringify(uncast(value, a(r("ThinkPadX280"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
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

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
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
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
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

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
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
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
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
    "ThinkPadX280": o([
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
        { json: "Display", js: "Display", typ: r("Display") },
        { json: "Touchscreen", js: "Touchscreen", typ: r("Optical") },
        { json: "Media Reader", js: "Media Reader", typ: r("MediaReader") },
        { json: "Ethernet", js: "Ethernet", typ: r("Ethernet") },
        { json: "Optical", js: "Optical", typ: r("Optical") },
        { json: "WLAN + Bluetooth", js: "WLAN + Bluetooth", typ: r("WLANBluetooth") },
        { json: "WWAN", js: "WWAN", typ: r("WWAN") },
        { json: "SIM Card", js: "SIM Card", typ: r("Optical") },
        { json: "Smart Card Reader", js: "Smart Card Reader", typ: r("SmartCardReader") },
        { json: "Monitor Cable", js: "Monitor Cable", typ: r("MonitorCable") },
        { json: "Bundled Accessories", js: "Bundled Accessories", typ: r("BundledAccessories") },
        { json: "Case Material", js: "Case Material", typ: r("CaseMaterial") },
        { json: "Camera", js: "Camera", typ: r("Camera") },
        { json: "Microphone", js: "Microphone", typ: r("Microphone") },
        { json: "Color", js: "Color", typ: r("Color") },
        { json: "Keyboard", js: "Keyboard", typ: r("Keyboard") },
        { json: "Fingerprint Reader", js: "Fingerprint Reader", typ: r("FingerprintReader") },
        { json: "NFC", js: "NFC", typ: r("NFC") },
        { json: "TPM", js: "TPM", typ: r("TPM") },
        { json: "Battery", js: "Battery", typ: r("Battery") },
        { json: "Power Adapter", js: "Power Adapter", typ: r("PowerAdapter") },
        { json: "System Management", js: "System Management", typ: r("SystemManagement") },
        { json: "Operating System", js: "Operating System", typ: r("OperatingSystem") },
        { json: "Bundled Software", js: "Bundled Software", typ: r("BundledSoftware") },
        { json: "Base Warranty", js: "Base Warranty", typ: r("BaseWarranty") },
        { json: "Bundled Service", js: "Bundled Service", typ: r("BundledService") },
        { json: "EAN / UPC / JAN", js: "EAN / UPC / JAN", typ: "" },
        { json: "End of Support", js: "End of Support", typ: Date },
        { json: "Announce Date", js: "Announce Date", typ: Date },
    ], false),
    "BaseWarranty": [
        "1-year, Depot",
        "1-year, Depot with 2-year System Board",
        "3-year, Depot",
        "3-year, Onsite",
    ],
    "Battery": [
        "Integrated 48Wh",
    ],
    "BundledAccessories": [
        "None",
        "ThinkPad Ethernet Extension Adapter Gen 2",
    ],
    "BundledService": [
        "None",
        "3Y Accidental Damage Protection Add On (5PS0A23193)",
        "3Y Sealed Battery Add On (5WS0A23013)",
        "4Y Premier Support Upgrade from 3Y Onsite (5WS0T36167)",
    ],
    "BundledSoftware": [
        "None",
        "Office Personal 2016",
    ],
    "Camera": [
        "720p + IR without ThinkShutter",
        "720p with ThinkShutter",
    ],
    "CaseMaterial": [
        "Carbon Fiber (Top), Magnesium / Aluminum (Bottom)",
        "Glass Fiber (Top), Magnesium / Aluminum (Bottom)",
    ],
    "Chipset": [
        "Intel SoC Platform",
    ],
    "Color": [
        "Black",
    ],
    "Display": [
        "12.5\" FHD (1920x1080) WVA 300nits Anti-glare",
        "12.5\" HD (1366x768) TN 220nits Anti-glare",
    ],
    "Ethernet": [
        "100/1000M via Optional Adapter",
    ],
    "FingerprintReader": [
        "None",
        "Touch Style, Match-on-Chip",
    ],
    "Graphics": [
        "Integrated Intel HD Graphics 620",
        "Integrated Intel UHD Graphics 620",
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
        "Backlit, Japanese",
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
        "Backlit, Thai",
        "Backlit, Traditional Chinese",
        "Backlit, Turkish",
        "Non-backlit, Arabic",
        "Non-backlit, English",
        "Non-backlit, English (EU)",
        "Non-backlit, English (UK)",
        "Non-backlit, French",
        "Non-backlit, Japanese",
        "Non-backlit, Portuguese",
        "Non-backlit, Portuguese (Brazil)",
        "Non-backlit, Spanish (LA)",
        "Non-backlit, Thai",
        "Non-backlit, Traditional Chinese",
    ],
    "MachineType": [
        "20KE",
        "20KF",
    ],
    "MediaReader": [
        "MicroSD Reader",
    ],
    "Memory": [
        "16GB Soldered DDR4-2400",
        "4GB Soldered DDR4-2400",
        "8GB Soldered DDR4-2400",
    ],
    "Microphone": [
        "2x, Array",
    ],
    "MonitorCable": [
        "None",
        "1x HDMI to VGA",
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
    "Optical": [
        "None",
        "10-point Multi-touch",
    ],
    "PowerAdapter": [
        "45W USB-C",
        "65W USB-C",
    ],
    "Processor": [
        "Intel Core i3-7130U (2C / 4T, 2.7GHz, 3MB)",
        "Intel Core i3-8130U (2C / 4T, 2.2 / 3.4GHz, 4MB)",
        "Intel Core i5-7200U (2C / 4T, 2.5 / 3.1GHz, 3MB)",
        "Intel Core i5-7300U (2C / 4T, 2.6 / 3.5GHz, 3MB)",
        "Intel Core i5-8250U (4C / 8T, 1.6 / 3.4GHz, 6MB)",
        "Intel Core i5-8350U (4C / 8T, 1.7 / 3.6GHz, 6MB)",
        "Intel Core i7-8550U (4C / 8T, 1.8 / 4.0GHz, 8MB)",
        "Intel Core i7-8650U (4C / 8T, 1.9 / 4.2GHz, 8MB)",
    ],
    "Product": [
        "ThinkPad X280",
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
        "128GB SSD M.2 2280 SATA6Gb/s",
        "180GB SSD M.2 2280 SATA6Gb/s Opal2",
        "1TB SSD M.2 2280 PCIe NVMe Opal2",
        "256GB SSD M.2 2280 PCIe NVMe Opal2",
        "256GB SSD M.2 2280 SATA6Gb/s Opal2",
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
    "WLANBluetooth": [
        "Intel 8265 11ac, 2x2 + BT4.1",
    ],
    "WWAN": [
        "Fibocom L830-EB",
        "Fibocom L850-GL",
        "None",
    ],
};
