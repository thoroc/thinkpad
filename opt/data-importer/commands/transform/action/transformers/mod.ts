import { BatteryCells, toBatteryCells } from './battery-cells.ts';
import { Bluetooth, toBluetooth } from './bluetooth.ts';
import { toBoolean } from './boolean.ts';
import { Camera, toCamera } from './camera.ts';
import { Display, toDisplay } from './display.ts';
import { FingerprintReader, toFingerprintReader } from './finger-print-reader.ts';
import { Graphics, toGraphics } from './graphics.ts';
import { Memory, toMemory } from './memory.ts';
import { toMultiTouch } from './multi-touch.ts';
import { PowerAdapter, toPowerAdapter } from './power-adapter.ts';
import { PreloadedOS, toPreloadedOS } from './preload-os.ts';
import { Processor, toProcessor } from './processor.ts';
import { Storage, toStorage } from './storage.ts';
import { toWarranty, Warranty } from './warranty.ts';
import { toWLANDevice, WLANDevice } from './wlan-device.ts';
import { toWWANDevice, WWANDevice } from './wwan-device.ts';

export interface ThinkpadData {
  Model?: string;
  Product?: string;
  Region?: string;
  MachineType?: string;
  TopSeller?: string;
  Processor?: string;
  vPro?: string;
  Graphics?: string;
  Memory?: string;
  Display?: string;
  MultiTouch?: string;
  Storage?: string;
  Optical?: string;
  WLANBluetooth?: string;
  WWANM2Ssd?: string;
  SmartCardReaderM2Ssd?: string;
  SimCard?: string;
  Camera?: string;
  BacklitKeyboard?: string;
  FingerprintReader?: string;
  NFC?: string;
  BatteryCells?: string;
  PowerAdapter?: string;
  Preload?: string;
  BaseWarranty?: string;
  Global?: string;
  AnnDate?: string; // Ann Date (mm/yy)
}

export class ThinkpadTransformer {
  private readonly _model: string;
  private readonly _product: string;
  private readonly _region: string;
  private readonly _machineType: string;
  private readonly _topSeller: string;
  private readonly _processor: string;
  private readonly _vPro: string;
  private readonly _graphics: string;
  private readonly _memory: string;
  private readonly _display: string;
  private readonly _multiTouch: string;
  private readonly _storage: string;
  private readonly _optical: string;
  private readonly _wlanBluetooth: string;
  private readonly _wwanM2Ssd: string;
  private readonly _simCard: string;
  private readonly _smartCardReaderM2Ssd: string;
  private readonly _camera: string;
  private readonly _backlitKeyboard: string;
  private readonly _fingerprintReader: string;
  private readonly _nfc: string;
  private readonly _batteryCells: string;
  private readonly _powerAdapter: string;
  private readonly _preload: string;
  private readonly _baseWarranty: string;
  private readonly _global: string;
  private readonly _annDate: string;

  constructor(data: ThinkpadData) {
    this._model = data.Model || '';
    this._product = data.Product || '';
    this._region = data.Region || '';
    this._machineType = data.MachineType || '';
    this._topSeller = data.TopSeller || '';
    this._processor = data.Processor || '';
    this._vPro = data.vPro || '';
    this._graphics = data.Graphics || '';
    this._memory = data.Memory || '';
    this._display = data.Display || '';
    this._multiTouch = data.MultiTouch || '';
    this._storage = data.Storage || '';
    this._optical = data.Optical || '';
    this._wlanBluetooth = data.WLANBluetooth || '';
    this._wwanM2Ssd = data.WWANM2Ssd || '';
    this._smartCardReaderM2Ssd = data.SmartCardReaderM2Ssd || '';
    this._simCard = data.SimCard || '';
    this._camera = data.Camera || '';
    this._backlitKeyboard = data.BacklitKeyboard || '';
    this._fingerprintReader = data.FingerprintReader || '';
    this._nfc = data.NFC || '';
    this._batteryCells = data.BatteryCells || '';
    this._powerAdapter = data.PowerAdapter || '';
    this._preload = data.Preload || '';
    this._baseWarranty = data.BaseWarranty || '';
    this._global = data.Global || '';
    this._annDate = data.AnnDate || '';
  }

  public get model(): string {
    return this._model;
  }

  public get product(): string {
    return this._product;
  }

  public get region(): string {
    return this._region;
  }

  public get machineType(): string {
    return this._machineType;
  }

  public get topSeller(): boolean {
    return this._topSeller === 'TopSeller';
  }

  public get processor(): Processor {
    return toProcessor(this._processor);
  }

  public get vPro(): boolean {
    return this._vPro === 'vPro';
  }

  public get graphics(): Graphics {
    return toGraphics(this._graphics);
  }

  public get memory(): Memory {
    return toMemory(this._memory);
  }

  public get display(): Display {
    return toDisplay(this._display);
  }

  public get multiTouch(): boolean | string {
    return toMultiTouch(this._multiTouch);
  }

  public get storage(): Storage {
    return toStorage(this._storage);
  }

  public get optical(): string {
    return this._optical;
  }

  public get wlan(): WLANDevice {
    return toWLANDevice(this._wlanBluetooth);
  }

  public get bluetooth(): Bluetooth {
    return toBluetooth(this._wlanBluetooth);
  }

  public get wwan(): WWANDevice {
    return toWWANDevice(this._wwanM2Ssd);
  }

  public get simCard(): string {
    return this._simCard;
  }

  public get smartCardReader(): boolean {
    return this._smartCardReaderM2Ssd === 'Smart Card Reader';
  }

  public get camera(): Camera {
    return toCamera(this._camera);
  }

  public get backlitKeyboard(): boolean {
    return this._backlitKeyboard === 'Backlit Keyboard';
  }

  public get fingerprintReader(): FingerprintReader {
    return toFingerprintReader(this._fingerprintReader);
  }

  public get nfc(): boolean {
    return toBoolean(this._nfc);
  }

  public get batteryCells(): BatteryCells {
    return toBatteryCells(this._batteryCells);
  }

  public get powerAdapter(): PowerAdapter {
    return toPowerAdapter(this._powerAdapter);
  }

  public get preload(): PreloadedOS[] {
    return toPreloadedOS(this._preload);
  }

  public get warranty(): Warranty {
    return toWarranty(this._baseWarranty);
  }

  public get baseWarranty(): string {
    return this._baseWarranty;
  }

  public get global(): boolean {
    return toBoolean(this._global);
  }

  public get annDate(): string {
    return this._annDate;
  }
}
