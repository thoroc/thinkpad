// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadT450S = Convert.toThinkPadT450S(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadT450S {
    Model:                                 string;
    Product:                               Product;
    Region:                                Region;
    "Machine Type":                        MachineType;
    TopSeller:                             TopSeller;
    Processor:                             Processor;
    vPro:                                  VPro;
    Graphics:                              Graphics;
    "Memory (soldered+DIMM)":              MemorySolderedDIMM;
    Display:                               Display;
    "Multi-touch":                         MultiTouch;
    Storage:                               Storage;
    "M.2 SSD":                             M2SSD;
    Optical:                               MultiTouch;
    "WLAN & Bluetooth":                    WLANBluetooth;
    WWAN:                                  WWAN;
    "SIM Card":                            MultiTouch;
    "Smart Card Reader":                   SmartCardReader;
    Camera:                                Camera;
    "Backlit Keyboard":                    BacklitKeyboard;
    "Fingerprint Reader":                  FingerprintReader;
    "Battery Cells (internal + external)": BatteryCellsInternalExternal;
    "Power Adapter (watt)":                PowerAdapterWatt;
    Preload:                               Preload;
    "Base Warranty":                       BaseWarranty;
    Global:                                Global;
    "Ann Date (mm/yy)":                    ANNDateMmYy;
}

export enum ANNDateMmYy {
    The0115 = "01/15",
    The0315 = "03/15",
    The0815 = "08/15",
    The0915 = "09/15",
}

export enum BacklitKeyboard {
    BacklitKeyboard = "Backlit Keyboard",
    None = "None",
}

export enum BaseWarranty {
    The1YearDepot = "1-year depot",
    The3YearDepot = "3-year depot",
    The3YearOnsite = "3-year onsite",
    The3YearOnsiteOnsiteInternationalDelivery = "3-year onsite, Onsite International Delivery",
}

export enum BatteryCellsInternalExternal {
    The3Cell23Wh3Cell23Wh = "3-cell (23Wh) + 3-cell (23Wh)",
    The3Cell23Wh6Cell48Wh = "3-cell (23Wh) + 6-cell (48wh)",
}

export enum Camera {
    The720P = "720p",
}

export enum Display {
    The14FHD1920X1080IPS = "14\" FHD (1920x1080) IPS",
    The14HD1600X900 = "14\" HD+ (1600x900)",
}

export enum FingerprintReader {
    FingerprintReader = "Fingerprint Reader",
}

export enum Global {
    No = "No",
    Yes = "Yes",
}

export enum Graphics {
    IntelHDGraphics5500 = "Intel HD Graphics 5500",
}

export enum M2SSD {
    None = "None",
    The16GBSSD = "16GB SSD",
}

export enum MachineType {
    The20BW = "20BW",
    The20Bx = "20BX",
}

export enum MemorySolderedDIMM {
    The40GB = "4+0GB",
    The42GB = "4+2GB",
    The44GB = "4+4GB",
    The48GB = "4+8GB",
}

export enum MultiTouch {
    None = "None",
    The10PointMultiTouch = "10-point multi-touch",
}

export enum PowerAdapterWatt {
    The45W = "45W",
}

export enum Preload {
    Windows10DGWindows7Pro64 = "Windows 10 DG Windows 7 Pro 64",
    Windows10Pro64 = "Windows 10 Pro 64",
    Windows81DGWindows7Pro64 = "Windows 8.1 DG Windows 7 Pro 64",
    Windows81Pro64Bit = "Windows 8.1 Pro 64-bit",
}

export enum Processor {
    I55200U2C2227GHz3MB1600MHz = "i5-5200U (2C, 2.2 / 2.7GHz, 3MB, 1600MHz)",
    I55300U2C2329GHz3MB1600MHz = "i5-5300U (2C, 2.3 / 2.9GHz, 3MB, 1600MHz)",
    I75600U2C2632GHz4MB1600MHz = "i7-5600U (2C, 2.6 / 3.2GHz, 4MB, 1600MHz)",
}

export enum Product {
    T450S = "T450s",
}

export enum Region {
    Us = "US",
    We = "WE",
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
    The500GB5400RPM8GBSSHD = "500GB 5400rpm + 8GB SSHD",
    The500GB7200RPM = "500GB 7200rpm",
    The512GBSSD = "512GB SSD",
}

export enum TopSeller {
    No = "No",
    TopSeller = "TopSeller",
}

export enum WLANBluetooth {
    Intel7265ABGNBT40 = "Intel 7265 a/b/g/n + BT4.0",
    Intel7265ACBT40 = "Intel 7265 ac + BT4.0",
}

export enum WWAN {
    EricssonN5321 = "Ericsson N5321",
    SierraEM7345 = "Sierra EM7345",
    WWANUpgradable = "WWAN upgradable",
}

export enum VPro {
    No = "No",
    VPro = "vPro",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThinkPadT450S(json: string): ThinkPadT450S[] {
        return cast(JSON.parse(json), a(r("ThinkPadT450S")));
    }

    public static thinkPadT450SToJson(value: ThinkPadT450S[]): string {
        return JSON.stringify(uncast(value, a(r("ThinkPadT450S"))), null, 2);
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
    "ThinkPadT450S": o([
        { json: "Model", js: "Model", typ: "" },
        { json: "Product", js: "Product", typ: r("Product") },
        { json: "Region", js: "Region", typ: r("Region") },
        { json: "Machine Type", js: "Machine Type", typ: r("MachineType") },
        { json: "TopSeller", js: "TopSeller", typ: r("TopSeller") },
        { json: "Processor", js: "Processor", typ: r("Processor") },
        { json: "vPro", js: "vPro", typ: r("VPro") },
        { json: "Graphics", js: "Graphics", typ: r("Graphics") },
        { json: "Memory (soldered+DIMM)", js: "Memory (soldered+DIMM)", typ: r("MemorySolderedDIMM") },
        { json: "Display", js: "Display", typ: r("Display") },
        { json: "Multi-touch", js: "Multi-touch", typ: r("MultiTouch") },
        { json: "Storage", js: "Storage", typ: r("Storage") },
        { json: "M.2 SSD", js: "M.2 SSD", typ: r("M2SSD") },
        { json: "Optical", js: "Optical", typ: r("MultiTouch") },
        { json: "WLAN & Bluetooth", js: "WLAN & Bluetooth", typ: r("WLANBluetooth") },
        { json: "WWAN", js: "WWAN", typ: r("WWAN") },
        { json: "SIM Card", js: "SIM Card", typ: r("MultiTouch") },
        { json: "Smart Card Reader", js: "Smart Card Reader", typ: r("SmartCardReader") },
        { json: "Camera", js: "Camera", typ: r("Camera") },
        { json: "Backlit Keyboard", js: "Backlit Keyboard", typ: r("BacklitKeyboard") },
        { json: "Fingerprint Reader", js: "Fingerprint Reader", typ: r("FingerprintReader") },
        { json: "Battery Cells (internal + external)", js: "Battery Cells (internal + external)", typ: r("BatteryCellsInternalExternal") },
        { json: "Power Adapter (watt)", js: "Power Adapter (watt)", typ: r("PowerAdapterWatt") },
        { json: "Preload", js: "Preload", typ: r("Preload") },
        { json: "Base Warranty", js: "Base Warranty", typ: r("BaseWarranty") },
        { json: "Global", js: "Global", typ: r("Global") },
        { json: "Ann Date (mm/yy)", js: "Ann Date (mm/yy)", typ: r("ANNDateMmYy") },
    ], false),
    "ANNDateMmYy": [
        "01/15",
        "03/15",
        "08/15",
        "09/15",
    ],
    "BacklitKeyboard": [
        "Backlit Keyboard",
        "None",
    ],
    "BaseWarranty": [
        "1-year depot",
        "3-year depot",
        "3-year onsite",
        "3-year onsite, Onsite International Delivery",
    ],
    "BatteryCellsInternalExternal": [
        "3-cell (23Wh) + 3-cell (23Wh)",
        "3-cell (23Wh) + 6-cell (48wh)",
    ],
    "Camera": [
        "720p",
    ],
    "Display": [
        "14\" FHD (1920x1080) IPS",
        "14\" HD+ (1600x900)",
    ],
    "FingerprintReader": [
        "Fingerprint Reader",
    ],
    "Global": [
        "No",
        "Yes",
    ],
    "Graphics": [
        "Intel HD Graphics 5500",
    ],
    "M2SSD": [
        "None",
        "16GB SSD",
    ],
    "MachineType": [
        "20BW",
        "20BX",
    ],
    "MemorySolderedDIMM": [
        "4+0GB",
        "4+2GB",
        "4+4GB",
        "4+8GB",
    ],
    "MultiTouch": [
        "None",
        "10-point multi-touch",
    ],
    "PowerAdapterWatt": [
        "45W",
    ],
    "Preload": [
        "Windows 10 DG Windows 7 Pro 64",
        "Windows 10 Pro 64",
        "Windows 8.1 DG Windows 7 Pro 64",
        "Windows 8.1 Pro 64-bit",
    ],
    "Processor": [
        "i5-5200U (2C, 2.2 / 2.7GHz, 3MB, 1600MHz)",
        "i5-5300U (2C, 2.3 / 2.9GHz, 3MB, 1600MHz)",
        "i7-5600U (2C, 2.6 / 3.2GHz, 4MB, 1600MHz)",
    ],
    "Product": [
        "T450s",
    ],
    "Region": [
        "US",
        "WE",
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
        "500GB 5400rpm + 8GB SSHD",
        "500GB 7200rpm",
        "512GB SSD",
    ],
    "TopSeller": [
        "No",
        "TopSeller",
    ],
    "WLANBluetooth": [
        "Intel 7265 a/b/g/n + BT4.0",
        "Intel 7265 ac + BT4.0",
    ],
    "WWAN": [
        "Ericsson N5321",
        "Sierra EM7345",
        "WWAN upgradable",
    ],
    "VPro": [
        "No",
        "vPro",
    ],
};
