// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadT460P = Convert.toThinkPadT460P(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadT460P {
    Model:                string;
    Product:              Product;
    Region:               Region;
    "Machine Type":       MachineType;
    TopSeller:            Global;
    Processor:            Processor;
    vPro:                 VPro;
    Graphics:             Graphics;
    Chipset:              Chipset;
    Memory:               Memory;
    Display:              Display;
    "Multi-touch":        MultiTouch;
    Storage:              Storage;
    Optical:              MultiTouch;
    "WLAN + Bluetooth":   WLANBluetooth;
    WWAN:                 MultiTouch;
    "SIM Card":           SIMCard;
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
    The0117 = "01/17",
    The0316 = "03/16",
    The0416 = "04/16",
    The0516 = "05/16",
    The0616 = "06/16",
    The0716 = "07/16",
    The0816 = "08/16",
    The0916 = "09/16",
    The1016 = "10/16",
    The1116 = "11/16",
    The1216 = "12/16",
}

export enum Battery {
    The3Cell23Wh = "3-cell (23Wh)",
    The6Cell48Wh = "6-cell (48Wh)",
    The6Cell72Wh = "6-cell (72Wh)",
}

export enum Camera {
    The720P = "720p",
}

export enum Chipset {
    IntelQM170 = "Intel QM170",
}

export enum Display {
    The14FHD1920X1080IPS = "14\" FHD (1920x1080) IPS",
    The14WQHD2560X1440IPS = "14\" WQHD (2560x1440) IPS",
}

export enum FingerprintReader {
    FingerprintReader = "Fingerprint Reader",
}

export enum Global {
    No = "No",
    TopSeller = "TopSeller",
}

export enum Graphics {
    IntegratedIntelHDGraphics530 = "Integrated Intel HD Graphics 530",
    NVIDIAGeForce940MX2GB = "NVIDIA GeForce 940MX 2GB",
}

export enum Keyboard {
    Backlit = "Backlit",
}

export enum MachineType {
    The20Fw = "20FW",
    The20Fx = "20FX",
}

export enum Memory {
    The16GBx1 = "16GBx1",
    The4GBx1 = "4GBx1",
    The8GBx1 = "8GBx1",
    The8GBx2 = "8GBx2",
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
    The135W = "135W",
    The90W = "90W",
}

export enum Processor {
    CoreI56300HQ4C2332GHz6MB = "Core i5-6300HQ (4C, 2.3 / 3.2GHz, 6MB)",
    CoreI56440HQ4C2635GHz6MB = "Core i5-6440HQ (4C, 2.6 / 3.5GHz, 6MB)",
    CoreI76700HQ4C2635GHz6MB = "Core i7-6700HQ (4C, 2.6 / 3.5GHz, 6MB)",
    CoreI76820HQ4C2736GHz8MB = "Core i7-6820HQ (4C, 2.7 / 3.6GHz, 8MB)",
}

export enum Product {
    ThinkPadT460P = "ThinkPad T460p",
}

export enum Region {
    East = "EAST",
    Emea = "EMEA",
    Mea = "MEA",
    Us = "US",
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
    The180GBSSDOpal2 = "180GB SSD Opal2",
    The192GBSSD = "192GB SSD",
    The1TB5400RPM = "1TB 5400rpm",
    The256GBSSDOpal2 = "256GB SSD Opal2",
    The500GB7200RPM = "500GB 7200rpm",
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
    public static toThinkPadT460P(json: string): ThinkPadT460P[] {
        return cast(JSON.parse(json), a(r("ThinkPadT460P")));
    }

    public static thinkPadT460PToJson(value: ThinkPadT460P[]): string {
        return JSON.stringify(uncast(value, a(r("ThinkPadT460P"))), null, 2);
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
    "ThinkPadT460P": o([
        { json: "Model", js: "Model", typ: "" },
        { json: "Product", js: "Product", typ: r("Product") },
        { json: "Region", js: "Region", typ: r("Region") },
        { json: "Machine Type", js: "Machine Type", typ: r("MachineType") },
        { json: "TopSeller", js: "TopSeller", typ: r("Global") },
        { json: "Processor", js: "Processor", typ: r("Processor") },
        { json: "vPro", js: "vPro", typ: r("VPro") },
        { json: "Graphics", js: "Graphics", typ: r("Graphics") },
        { json: "Chipset", js: "Chipset", typ: r("Chipset") },
        { json: "Memory", js: "Memory", typ: r("Memory") },
        { json: "Display", js: "Display", typ: r("Display") },
        { json: "Multi-touch", js: "Multi-touch", typ: r("MultiTouch") },
        { json: "Storage", js: "Storage", typ: r("Storage") },
        { json: "Optical", js: "Optical", typ: r("MultiTouch") },
        { json: "WLAN + Bluetooth", js: "WLAN + Bluetooth", typ: r("WLANBluetooth") },
        { json: "WWAN", js: "WWAN", typ: r("MultiTouch") },
        { json: "SIM Card", js: "SIM Card", typ: r("SIMCard") },
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
        "01/17",
        "03/16",
        "04/16",
        "05/16",
        "06/16",
        "07/16",
        "08/16",
        "09/16",
        "10/16",
        "11/16",
        "12/16",
    ],
    "Battery": [
        "3-cell (23Wh)",
        "6-cell (48Wh)",
        "6-cell (72Wh)",
    ],
    "Camera": [
        "720p",
    ],
    "Chipset": [
        "Intel QM170",
    ],
    "Display": [
        "14\" FHD (1920x1080) IPS",
        "14\" WQHD (2560x1440) IPS",
    ],
    "FingerprintReader": [
        "Fingerprint Reader",
    ],
    "Global": [
        "No",
        "TopSeller",
    ],
    "Graphics": [
        "Integrated Intel HD Graphics 530",
        "NVIDIA GeForce 940MX 2GB",
    ],
    "Keyboard": [
        "Backlit",
    ],
    "MachineType": [
        "20FW",
        "20FX",
    ],
    "Memory": [
        "16GBx1",
        "4GBx1",
        "8GBx1",
        "8GBx2",
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
        "135W",
        "90W",
    ],
    "Processor": [
        "Core i5-6300HQ (4C, 2.3 / 3.2GHz, 6MB)",
        "Core i5-6440HQ (4C, 2.6 / 3.5GHz, 6MB)",
        "Core i7-6700HQ (4C, 2.6 / 3.5GHz, 6MB)",
        "Core i7-6820HQ (4C, 2.7 / 3.6GHz, 8MB)",
    ],
    "Product": [
        "ThinkPad T460p",
    ],
    "Region": [
        "EAST",
        "EMEA",
        "MEA",
        "US",
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
        "180GB SSD Opal2",
        "192GB SSD",
        "1TB 5400rpm",
        "256GB SSD Opal2",
        "500GB 7200rpm",
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
