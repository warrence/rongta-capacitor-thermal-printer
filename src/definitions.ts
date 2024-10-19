import type { PluginListenerHandle } from '@capacitor/core';

export const PrinterDPIs = [200, 300] as const;
export const PrintAlignments = ['left', 'center', 'right'] as const;
export const PrinterFonts = ['A', 'B'] as const;
export const BarcodeTextPlacements = [
  'none',
  'above',
  'below',
  'both',
] as const;
export const BarcodeTypes = [
  'UPC_A',
  'EAN8',
  'EAN13',
  'CODE39',
  'ITF',
  'CODABAR',
  'CODE128',
] as const;
export const DataCodeTypes = ['QR', ...BarcodeTypes] as const;

/**
 * When `"default"`, uses default internal printer settings.
 */
export type IsEnabled = boolean | 'default';
export type PrinterDPI = typeof PrinterDPIs[number];
export type PrintAlignment = typeof PrintAlignments[number];
export type BarcodeTextPlacement = typeof BarcodeTextPlacements[number];
/**
 * - A's Size: 12x24
 * - B's Size: 9x24
 * */
export type PrinterFont = typeof PrinterFonts[number];
export type BarcodeType = typeof BarcodeTypes[number];
export type DataCodeType = typeof DataCodeTypes[number];

interface BluetoothPrintPluginBase {
  startScan(): Promise<void>;
  stopScan(): Promise<void>;
  connect(options: { address: string }): Promise<void>;
  disconnect(): Promise<void>;

  addListener(
    event: 'discoverDevices',
    handler: (data: { devices: any[] }) => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    event: 'datachanged',
    handler: () => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    event: 'connected',
    handler: () => void,
  ): Promise<PluginListenerHandle>;
  addListener(
    event: 'disconnected',
    handler: () => void,
  ): Promise<PluginListenerHandle>;
}

export interface BluetoothPrintPlugin extends BluetoothPrintPluginBase {
  //#region Text Formatting
  bold(enabled?: IsEnabled): this;
  underline(enabled?: IsEnabled): this;
  doubleWidth(enabled?: IsEnabled): this;
  doubleHeight(enabled?: IsEnabled): this;
  inverse(enabled?: IsEnabled): this;
  //#endregion

  //#region Image Formatting
  dpi(dpi: PrinterDPI): this;
  limitWidth(width: number): this;
  //#endregion

  //#region Hybrid Formatting
  align(alignment: PrintAlignment): this;
  charSpacing(charSpacing: number): this;
  lineSpacing(lineSpacing: number): this;
  font(font: PrinterFont): this;
  position(x: number, y: number): this;
  clearFormatting(): this;
  //#endregion

  //#region Data Code Formatting
  barcodeWidth(width: number): this;
  barcodeHeight(height: number): this;
  barcodeTextPlacement(placement: BarcodeTextPlacement): this;
  //#endregion

  //#region Content
  text(text: string): this;
  image(dataURL: string): this;
  qr(data: string): this;
  barcode(type: BarcodeType, data: string): this;
  raw(base64: string): this;
  raw(buffer: number[]): this;
  selfTest(): this;
  //#endregion

  //#region Content Actions
  beep(): this;
  openDrawer(): this;
  cutPaper(half?: boolean): this;
  feedCutPaper(half?: boolean): this;
  //#endregion

  //#region Printing Actions
  begin(): this;
  write(): Promise<void>;
  //#endregion
}

type PickByType<T, Value> = {
  [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};

type WrappedMethods = keyof PickByType<
  BluetoothPrintPlugin,
  (...args: any[]) => BluetoothPrintPlugin
>;

type FixedArray<T, L> = readonly T[] & { length: L };

export type WrappedMethodsMap = {
  [P in WrappedMethods]: FixedArray<
    string,
    Required<Parameters<BluetoothPrintPlugin[P]>>['length']
  >;
};
