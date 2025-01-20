// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadT450 = Convert.toThinkPadT450(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadT450 {
    Model:                string;
    Product:              Product;
    Region:               Region;
    "Machine Type":       MachineType;
    TopSeller:            TopSeller;
    Processor:            Processor;
    vPro:                 VPro;
    Graphics:             Graphics;
    Memory:               Memory;
    Display:              Display;
    "Multi-touch":        MultiTouch;
    Storage:              Storage;
    "M.2 SSD":            M2SSD;
    Optical:              MultiTouch;
    "WLAN + Bluetooth":   WLANBluetooth;
    WWAN:                 WWAN;
    "SIM Card":           MultiTouch;
    "Smart Card Reader":  SmartCardReader;
    Camera:               Camera;
    Keyboard:             Keyboard;
    "Fingerprint Reader": FingerprintReader;
    Battery:              Battery;
    "Power Adapter":      PowerAdapter;
    "Operating System":   OperatingSystem;
    Warranty:             Warranty;
    Global:               Global;
    "Ann Date (mm/yy)":   ANNDateMmYy;
}

export enum ANNDateMmYy {
    The0115 = "01/15",
    The0116 = "01/16",
    The0315 = "03/15",
    The0415 = "04/15",
    The0515 = "05/15",
    The0615 = "06/15",
    The0715 = "07/15",
    The0815 = "08/15",
    The0915 = "09/15",
}

export enum Battery {
    None6Cell48Wh = "None + 6-cell (48Wh)",
    The3Cell23Wh3Cell23Wh = "3-cell (23Wh) + 3-cell (23Wh)",
    The3Cell23Wh6Cell48Wh = "3-cell (23Wh) + 6-cell (48Wh)",
    The3Cell23Wh6Cell72Wh = "3-cell (23Wh) + 6-cell (72Wh)",
}

export enum Camera {
    The720P = "720p",
}

export enum Display {
    The14FHD1920X1080IPS = "14\" FHD (1920x1080) IPS",
    The14HD1366X768 = "14\" HD (1366x768)",
    The14HD1600X900 = "14\" HD+ (1600x900)",
}

export enum FingerprintReader {
    FingerprintReader = "Fingerprint Reader",
    None = "None",
}

export enum Global {
    Global = "Global",
    No = "No",
}

export enum Graphics {
    IntegratedIntelHDGraphics4400 = "Integrated Intel HD Graphics 4400",
    IntegratedIntelHDGraphics5500 = "Integrated Intel HD Graphics 5500",
}

export enum Keyboard {
    Backlit = "Backlit",
    NonBacklit = "Non-backlit",
}

export enum M2SSD {
    None = "None",
    The16GBSSD = "16GB SSD",
}

export enum MachineType {
    The20Bu = "20BU",
    The20Bv = "20BV",
}

export enum Memory {
    The4GBx1 = "4GBx1",
    The8GBx1 = "8GBx1",
    The8GBx2 = "8GBx2",
}

export enum MultiTouch {
    None = "None",
    The10PointMultiTouch = "10-point Multi-touch",
}

export enum OperatingSystem {
    Windows10DGWindows7Pro64 = "Windows 10 DG Windows 7 Pro 64",
    Windows10Pro64 = "Windows 10 Pro 64",
    Windows81DGWindows7Pro64 = "Windows 8.1 DG Windows 7 Pro 64",
    Windows81Pro64Bit = "Windows 8.1 Pro 64-bit",
}

export enum PowerAdapter {
    The45W = "45W",
}

export enum Processor {
    CoreI34030U2C19GHz3MB = "Core i3-4030U (2C, 1.9GHz, 3MB)",
    CoreI35010U2C21GHz3MB = "Core i3-5010U (2C, 2.1GHz, 3MB)",
    CoreI54300U2C1929GHz3MB = "Core i5-4300U (2C, 1.9 / 2.9GHz, 3MB)",
    CoreI55200U2C2227GHz3MB = "Core i5-5200U (2C, 2.2 / 2.7GHz, 3MB)",
    CoreI55300U2C2329GHz3MB = "Core i5-5300U (2C, 2.3 / 2.9GHz, 3MB)",
    CoreI75600U2C2632GHz4MB = "Core i7-5600U (2C, 2.6 / 3.2GHz, 4MB)",
}

export enum Product {
    ThinkPadT450 = "ThinkPad T450",
}

export enum Region {
    East = "EAST",
    Emea = "EMEA",
    Mea = "MEA",
    Us = "US",
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
    The500GB7200RPM = "500GB 7200rpm",
    The500GB8GBSSHD5400RPM = "500GB (8GB) SSHD 5400rpm",
    The512GBSSD = "512GB SSD",
}

export enum TopSeller {
    No = "No",
    TopSeller = "TopSeller",
}

export enum WLANBluetooth {
    Intel7265ABGN2X2BT40 = "Intel 7265 a/b/g/n, 2x2 + BT4.0",
    Intel7265AC2X2BT40 = "Intel 7265 ac, 2x2 + BT4.0",
    Intel7265BGN2X2BT40 = "Intel 7265 b/g/n, 2x2 + BT4.0",
    The11BGN2X2BT40 = "11b/g/n, 2x2 + BT4.0",
}

export enum WWAN {
    EricssonN5321 = "Ericsson N5321",
    SierraEM7345 = "Sierra EM7345",
    WWANUpgradable = "WWAN Upgradable",
}

export enum Warranty {
    The1YearDepot = "1-year, Depot",
    The3YearDepot = "3-year, Depot",
    The3YearOnsite = "3-year, Onsite",
    The3YearOnsiteOID = "3-year, Onsite, OID",
}

export enum VPro {
    No = "No",
    VPro = "vPro",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toThinkPadT450(json: string): ThinkPadT450[] {
        return cast(JSON.parse(json), a(r("ThinkPadT450")));
    }

    public static thinkPadT450ToJson(value: ThinkPadT450[]): string {
        return JSON.stringify(uncast(value, a(r("ThinkPadT450"))), null, 2);
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
    "ThinkPadT450": o([
        { json: "Model", js: "Model", typ: "" },
        { json: "Product", js: "Product", typ: r("Product") },
        { json: "Region", js: "Region", typ: r("Region") },
        { json: "Machine Type", js: "Machine Type", typ: r("MachineType") },
        { json: "TopSeller", js: "TopSeller", typ: r("TopSeller") },
        { json: "Processor", js: "Processor", typ: r("Processor") },
        { json: "vPro", js: "vPro", typ: r("VPro") },
        { json: "Graphics", js: "Graphics", typ: r("Graphics") },
        { json: "Memory", js: "Memory", typ: r("Memory") },
        { json: "Display", js: "Display", typ: r("Display") },
        { json: "Multi-touch", js: "Multi-touch", typ: r("MultiTouch") },
        { json: "Storage", js: "Storage", typ: r("Storage") },
        { json: "M.2 SSD", js: "M.2 SSD", typ: r("M2SSD") },
        { json: "Optical", js: "Optical", typ: r("MultiTouch") },
        { json: "WLAN + Bluetooth", js: "WLAN + Bluetooth", typ: r("WLANBluetooth") },
        { json: "WWAN", js: "WWAN", typ: r("WWAN") },
        { json: "SIM Card", js: "SIM Card", typ: r("MultiTouch") },
        { json: "Smart Card Reader", js: "Smart Card Reader", typ: r("SmartCardReader") },
        { json: "Camera", js: "Camera", typ: r("Camera") },
        { json: "Keyboard", js: "Keyboard", typ: r("Keyboard") },
        { json: "Fingerprint Reader", js: "Fingerprint Reader", typ: r("FingerprintReader") },
        { json: "Battery", js: "Battery", typ: r("Battery") },
        { json: "Power Adapter", js: "Power Adapter", typ: r("PowerAdapter") },
        { json: "Operating System", js: "Operating System", typ: r("OperatingSystem") },
        { json: "Warranty", js: "Warranty", typ: r("Warranty") },
        { json: "Global", js: "Global", typ: r("Global") },
        { json: "Ann Date (mm/yy)", js: "Ann Date (mm/yy)", typ: r("ANNDateMmYy") },
    ], false),
    "ANNDateMmYy": [
        "01/15",
        "01/16",
        "03/15",
        "04/15",
        "05/15",
        "06/15",
        "07/15",
        "08/15",
        "09/15",
    ],
    "Battery": [
        "None + 6-cell (48Wh)",
        "3-cell (23Wh) + 3-cell (23Wh)",
        "3-cell (23Wh) + 6-cell (48Wh)",
        "3-cell (23Wh) + 6-cell (72Wh)",
    ],
    "Camera": [
        "720p",
    ],
    "Display": [
        "14\" FHD (1920x1080) IPS",
        "14\" HD (1366x768)",
        "14\" HD+ (1600x900)",
    ],
    "FingerprintReader": [
        "Fingerprint Reader",
        "None",
    ],
    "Global": [
        "Global",
        "No",
    ],
    "Graphics": [
        "Integrated Intel HD Graphics 4400",
        "Integrated Intel HD Graphics 5500",
    ],
    "Keyboard": [
        "Backlit",
        "Non-backlit",
    ],
    "M2SSD": [
        "None",
        "16GB SSD",
    ],
    "MachineType": [
        "20BU",
        "20BV",
    ],
    "Memory": [
        "4GBx1",
        "8GBx1",
        "8GBx2",
    ],
    "MultiTouch": [
        "None",
        "10-point Multi-touch",
    ],
    "OperatingSystem": [
        "Windows 10 DG Windows 7 Pro 64",
        "Windows 10 Pro 64",
        "Windows 8.1 DG Windows 7 Pro 64",
        "Windows 8.1 Pro 64-bit",
    ],
    "PowerAdapter": [
        "45W",
    ],
    "Processor": [
        "Core i3-4030U (2C, 1.9GHz, 3MB)",
        "Core i3-5010U (2C, 2.1GHz, 3MB)",
        "Core i5-4300U (2C, 1.9 / 2.9GHz, 3MB)",
        "Core i5-5200U (2C, 2.2 / 2.7GHz, 3MB)",
        "Core i5-5300U (2C, 2.3 / 2.9GHz, 3MB)",
        "Core i7-5600U (2C, 2.6 / 3.2GHz, 4MB)",
    ],
    "Product": [
        "ThinkPad T450",
    ],
    "Region": [
        "EAST",
        "EMEA",
        "MEA",
        "US",
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
        "500GB 7200rpm",
        "500GB (8GB) SSHD 5400rpm",
        "512GB SSD",
    ],
    "TopSeller": [
        "No",
        "TopSeller",
    ],
    "WLANBluetooth": [
        "Intel 7265 a/b/g/n, 2x2 + BT4.0",
        "Intel 7265 ac, 2x2 + BT4.0",
        "Intel 7265 b/g/n, 2x2 + BT4.0",
        "11b/g/n, 2x2 + BT4.0",
    ],
    "WWAN": [
        "Ericsson N5321",
        "Sierra EM7345",
        "WWAN Upgradable",
    ],
    "Warranty": [
        "1-year, Depot",
        "3-year, Depot",
        "3-year, Onsite",
        "3-year, Onsite, OID",
    ],
    "VPro": [
        "No",
        "vPro",
    ],
};
