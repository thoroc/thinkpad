// To parse this data:
//
//   import { Convert } from "./file";
//
//   const thinkPadT460S = Convert.toThinkPadT460S(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ThinkPadT460S {
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
    Optical:              MultiTouch;
    "WLAN + Bluetooth":   WLANBluetooth;
    WWAN:                 WWAN;
    "SIM Card":           SIMCard;
    "Smart Card Reader":  SmartCardReader;
    Dock:                 Dock;
    Camera:               Camera;
    Keyboard:             Keyboard;
    "Fingerprint Reader": FingerprintReader;
    Battery:              Battery;
    "Power Adapter":      PowerAdapter;
    "Operating System":   OperatingSystem;
    Warranty:             Warranty;
    "Ann Date (mm/yy)":   ANNDateMmYy;
}

export enum ANNDateMmYy {
    The0117 = "01/17",
    The0216 = "02/16",
    The0316 = "03/16",
    The0416 = "04/16",
    The0516 = "05/16",
    The0616 = "06/16",
    The0716 = "07/16",
    The0816 = "08/16",
    The0817 = "08/17",
    The1016 = "10/16",
    The1116 = "11/16",
    The1216 = "12/16",
}

export enum Battery {
    The3Cell23Wh3Cell26Wh = "3-cell (23Wh) + 3-cell (26Wh)",
}

export enum Camera {
    The720P = "720p",
}

export enum Display {
    The14FHD1920X1080IPS = "14\" FHD (1920x1080) IPS",
    The14WQHD2560X1440IPS = "14\" WQHD (2560x1440) IPS",
}

export enum Dock {
    None = "None",
    WiGigDock = "WiGig Dock",
}

export enum FingerprintReader {
    FingerprintReader = "Fingerprint Reader",
}

export enum Graphics {
    IntegratedIntelHDGraphics520 = "Integrated Intel HD Graphics 520",
    NVIDIAGeForce930M2GB = "NVIDIA GeForce 930M 2GB",
}

export enum Keyboard {
    Backlit = "Backlit",
    NonBacklit = "Non-backlit",
}

export enum MachineType {
    The20F9 = "20F9",
    The20Fa = "20FA",
}

export enum Memory {
    The4GBSoldered = "4GB Soldered",
    The4GBSoldered16GBDIMM = "4GB Soldered + 16GB DIMM",
    The4GBSoldered4GBDIMM = "4GB Soldered + 4GB DIMM",
    The4GBSoldered8GBDIMM = "4GB Soldered + 8GB DIMM",
    The8GBSoldered = "8GB Soldered",
}

export enum MultiTouch {
    None = "None",
    The10PointMultiTouch = "10-point Multi-touch",
}

export enum OperatingSystem {
    Windows10DGWindows7Pro64 = "Windows 10 DG Windows 7 Pro 64",
    Windows10Pro64 = "Windows 10 Pro 64",
}

export enum PowerAdapter {
    The45W = "45W",
    The65W = "65W",
}

export enum Processor {
    CoreI56200U2C2328GHz3MB = "Core i5-6200U (2C, 2.3 / 2.8GHz, 3MB)",
    CoreI56300U2C2430GHz3MB = "Core i5-6300U (2C, 2.4 / 3.0GHz, 3MB)",
    CoreI76600U2C2634GHz4MB = "Core i7-6600U (2C, 2.6 / 3.4GHz, 4MB)",
}

export enum Product {
    ThinkPadT460S = "ThinkPad T460s",
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
    The128GBSSDM2 = "128GB SSD M.2",
    The180GBSSDM2Opal2 = "180GB SSD M.2 Opal2",
    The192GBSSDM2 = "192GB SSD M.2",
    The1TBSSDM2PCIeNVMe = "1TB SSD M.2 PCIe NVMe",
    The240GBSSDM2Opal2 = "240GB SSD M.2 Opal2",
    The256GBSSDM2Opal2 = "256GB SSD M.2 Opal2",
    The256GBSSDM2PCIeNVMeOpal2 = "256GB SSD M.2 PCIe NVMe Opal2",
    The512GBSSDM2 = "512GB SSD M.2",
    The512GBSSDM2Opal2 = "512GB SSD M.2 Opal2",
    The512GBSSDM2PCIeNVMe = "512GB SSD M.2 PCIe NVMe",
}

export enum TopSeller {
    No = "No",
    TopSeller = "TopSeller",
}

export enum WLANBluetooth {
    Intel18260AC2X2BT41 = "Intel 18260 ac, 2x2 + BT4.1",
    Intel8260AC2X2BT41 = "Intel 8260 ac, 2x2 + BT4.1",
}

export enum WWAN {
    HuaweiMe906S = "HUAWEI ME906S",
    None = "None",
    SierraEM7455 = "Sierra EM7455",
    WWANUpgradable = "WWAN Upgradable",
}

export enum Warranty {
    The1YearDepot = "1-year, Depot",
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
    public static toThinkPadT460S(json: string): ThinkPadT460S[] {
        return cast(JSON.parse(json), a(r("ThinkPadT460S")));
    }

    public static thinkPadT460SToJson(value: ThinkPadT460S[]): string {
        return JSON.stringify(uncast(value, a(r("ThinkPadT460S"))), null, 2);
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
    "ThinkPadT460S": o([
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
        { json: "Optical", js: "Optical", typ: r("MultiTouch") },
        { json: "WLAN + Bluetooth", js: "WLAN + Bluetooth", typ: r("WLANBluetooth") },
        { json: "WWAN", js: "WWAN", typ: r("WWAN") },
        { json: "SIM Card", js: "SIM Card", typ: r("SIMCard") },
        { json: "Smart Card Reader", js: "Smart Card Reader", typ: r("SmartCardReader") },
        { json: "Dock", js: "Dock", typ: r("Dock") },
        { json: "Camera", js: "Camera", typ: r("Camera") },
        { json: "Keyboard", js: "Keyboard", typ: r("Keyboard") },
        { json: "Fingerprint Reader", js: "Fingerprint Reader", typ: r("FingerprintReader") },
        { json: "Battery", js: "Battery", typ: r("Battery") },
        { json: "Power Adapter", js: "Power Adapter", typ: r("PowerAdapter") },
        { json: "Operating System", js: "Operating System", typ: r("OperatingSystem") },
        { json: "Warranty", js: "Warranty", typ: r("Warranty") },
        { json: "Ann Date (mm/yy)", js: "Ann Date (mm/yy)", typ: r("ANNDateMmYy") },
    ], false),
    "ANNDateMmYy": [
        "01/17",
        "02/16",
        "03/16",
        "04/16",
        "05/16",
        "06/16",
        "07/16",
        "08/16",
        "08/17",
        "10/16",
        "11/16",
        "12/16",
    ],
    "Battery": [
        "3-cell (23Wh) + 3-cell (26Wh)",
    ],
    "Camera": [
        "720p",
    ],
    "Display": [
        "14\" FHD (1920x1080) IPS",
        "14\" WQHD (2560x1440) IPS",
    ],
    "Dock": [
        "None",
        "WiGig Dock",
    ],
    "FingerprintReader": [
        "Fingerprint Reader",
    ],
    "Graphics": [
        "Integrated Intel HD Graphics 520",
        "NVIDIA GeForce 930M 2GB",
    ],
    "Keyboard": [
        "Backlit",
        "Non-backlit",
    ],
    "MachineType": [
        "20F9",
        "20FA",
    ],
    "Memory": [
        "4GB Soldered",
        "4GB Soldered + 16GB DIMM",
        "4GB Soldered + 4GB DIMM",
        "4GB Soldered + 8GB DIMM",
        "8GB Soldered",
    ],
    "MultiTouch": [
        "None",
        "10-point Multi-touch",
    ],
    "OperatingSystem": [
        "Windows 10 DG Windows 7 Pro 64",
        "Windows 10 Pro 64",
    ],
    "PowerAdapter": [
        "45W",
        "65W",
    ],
    "Processor": [
        "Core i5-6200U (2C, 2.3 / 2.8GHz, 3MB)",
        "Core i5-6300U (2C, 2.4 / 3.0GHz, 3MB)",
        "Core i7-6600U (2C, 2.6 / 3.4GHz, 4MB)",
    ],
    "Product": [
        "ThinkPad T460s",
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
        "128GB SSD M.2",
        "180GB SSD M.2 Opal2",
        "192GB SSD M.2",
        "1TB SSD M.2 PCIe NVMe",
        "240GB SSD M.2 Opal2",
        "256GB SSD M.2 Opal2",
        "256GB SSD M.2 PCIe NVMe Opal2",
        "512GB SSD M.2",
        "512GB SSD M.2 Opal2",
        "512GB SSD M.2 PCIe NVMe",
    ],
    "TopSeller": [
        "No",
        "TopSeller",
    ],
    "WLANBluetooth": [
        "Intel 18260 ac, 2x2 + BT4.1",
        "Intel 8260 ac, 2x2 + BT4.1",
    ],
    "WWAN": [
        "HUAWEI ME906S",
        "None",
        "Sierra EM7455",
        "WWAN Upgradable",
    ],
    "Warranty": [
        "1-year, Depot",
        "3-year, Depot",
        "3-year, Onsite",
    ],
    "VPro": [
        "No",
        "vPro",
    ],
};
