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
 * Available printer font types.
 * - `A`: Size of 12x24.
 * - `B`: Size of 9x24.
 * */
export type PrinterFont = typeof PrinterFonts[number];
export type BarcodeType = typeof BarcodeTypes[number];
export type DataCodeType = typeof DataCodeTypes[number];

export interface BluetoothDevice {
  name: string;
  address: string;
}

export interface BluetoothPrintPlugin {
  /**
   * @category Connectivity
   */
  startScan(): Promise<void>;
  /**
   * @category Connectivity
   */
  stopScan(): Promise<void>;
  /**
   * @category Connectivity
   */
  connect(options: { address: string }): Promise<void>;
  /**
   * @category Connectivity
   */
  disconnect(): Promise<void>;

  /**
   * @category Event Listeners
   * @categoryDescription
   * Emitted when new devices are discovered.
   *
   * @remarks
   * If you're using Angular as your framework of choice, the handler doesn't run in zone.
   */
  addListener(
    event: 'discoverDevices',
    handler: (data: { devices: BluetoothDevice[] }) => void,
  ): Promise<PluginListenerHandle>;
  /**
   * @category Event Listeners
   * @categoryDescription
   * Emitted when the printer status changes. Currently not meaningful at all.
   *
   * @remarks
   * If you're using Angular as your framework of choice, the handler doesn't run in zone.
   */
  addListener(
    event: 'datachanged',
    handler: () => void,
  ): Promise<PluginListenerHandle>;
  /**
   * @category Event Listeners
   * @categoryDescription
   * Emitted when a printer is successfully connected.
   *
   * @remarks
   * If you're using Angular as your framework of choice, the handler doesn't run in zone.
   */
  addListener(
    event: 'connected',
    handler: () => void,
  ): Promise<PluginListenerHandle>;
  /**
   * @category Event Listeners
   * @categoryDescription
   * Emitted when a printer is disconnected.
   *
   * @remarks
   * If you're using Angular as your framework of choice, the handler doesn't run in zone.
   */
  addListener(
    event: 'disconnected',
    handler: () => void,
  ): Promise<PluginListenerHandle>;

  //#region Text Formatting
  /**
   * @category Text Formatting
   * @categoryDescription
   * Formats following texts as bold.
   *
   * @param enabled - Defaults to `true` if not specified.
   *
   * @see {@linkcode IsEnabled}
   * @see {@linkcode BluetoothPrintPlugin.text}
   */
  bold(enabled?: IsEnabled): this;
  /**
   * @category Text Formatting
   * @categoryDescription
   * Formats following texts as underlined.
   *
   * @param enabled - Defaults to `true` if not specified.
   *
   * @see {@linkcode IsEnabled}
   * @see {@linkcode BluetoothPrintPlugin.text}
   * */
  underline(enabled?: IsEnabled): this;
  /**
   * @category Text Formatting
   * @categoryDescription
   * Formats following texts with double width of each character.
   *
   * @param enabled - Defaults to `true` if not specified.
   *
   * @see {@linkcode IsEnabled}
   * @see {@linkcode BluetoothPrintPlugin.text}
   * @see {@linkcode BluetoothPrintPlugin.doubleHeight}
   */
  doubleWidth(enabled?: IsEnabled): this;
  /**
   * @category Text Formatting
   * @categoryDescription
   * Formats following texts with double height of each character.
   *
   * @param enabled - Defaults to `true` if not specified.
   *
   * @see {@linkcode IsEnabled}
   * @see {@linkcode BluetoothPrintPlugin.text}
   * @see {@linkcode BluetoothPrintPlugin.doubleWidth}
   */
  doubleHeight(enabled?: IsEnabled): this;

  /**
   * @category Text Formatting
   * @categoryDescription
   * Formats following texts with inverted colors. (white text on black background)
   *
   * @param enabled - Defaults to `true` if not specified.
   *
   * @see {@linkcode IsEnabled}
   * @see {@linkcode BluetoothPrintPlugin.text}
   */
  inverse(enabled?: IsEnabled): this;
  //#endregion

  //#region Image Formatting
  /**
   * @category Image Formatting
   * @categoryDescription
   * Sets the DPI used to correctly encode the width of the image used in {@linkcode BluetoothPrintPlugin.limitWidth} based on the printer.
   *
   * @param dpi - The DPI value.
   *
   * @remarks
   * - The initial DPI is 200.
   * - Must be either 200 or 300. Any other value will be treated as 200.
   *
   * @see {@linkcode PrinterDPI}
   * @see {@linkcode PrinterDPIs}
   * @see {@linkcode BluetoothPrintPlugin.limitWidth}
   * @see {@linkcode BluetoothPrintPlugin.image}
   */
  dpi(dpi: PrinterDPI): this;
  /**
   * @category Image Formatting
   * @categoryDescription
   * Limits the width of following images.
   *
   * @param width - The maximum width of the image in millimeters ranging from 1mm to 880mm.
   *
   * @remarks
   * - The initial maximum width is 45mm.
   * - If the width is less than 1mm, this will fail silently.
   * - If the width is greater than 880mm it will be treated as 880mm.
   *
   * @see {@linkcode BluetoothPrintPlugin.dpi}
   * @see {@linkcode BluetoothPrintPlugin.image}
   */
  limitWidth(width: number): this;
  //#endregion

  //#region Hybrid Formatting
  /**
   * @category Hybrid Formatting
   * @categoryDescription
   * Aligns following texts, images, qr codes and barcodes with the given alignment.
   *
   * @param alignment - Alignment to use.
   *
   * @see {@linkcode PrintAlignment}
   * @see {@linkcode PrintAlignments}
   * @see {@linkcode BluetoothPrintPlugin.text}
   * @see {@linkcode BluetoothPrintPlugin.image}
   * @see {@linkcode BluetoothPrintPlugin.qr}
   * @see {@linkcode BluetoothPrintPlugin.barcode}
   */
  align(alignment: PrintAlignment): this;
  /**
   * @category Hybrid Formatting
   * @categoryDescription
   * Sets the character spacing of following texts and barcode texts.
   *
   * @param charSpacing - The character spacing in millimeters ranging from 0mm to 30mm.
   *
   * @remarks
   * - The initial spacing is 1mm.
   * - If the spacing is less than 0mm it will be treated as 0mm.
   * - If the spacing is greater than 30mm it will be treated as 30mm.
   *
   * @see {@linkcode BluetoothPrintPlugin.text}
   * @see {@linkcode BluetoothPrintPlugin.barcode}
   */
  charSpacing(charSpacing: number): this;
  /**
   * @category Hybrid Formatting
   * @categoryDescription
   * Sets the line spacing of following texts, images, qr codes, barcodes with the given spacing.
   *
   * @param lineSpacing - The line spacing in millimeters ranging from 0mm to 255mm.
   *
   * @remarks
   * - The initial spacing is 30mm.
   * - If the spacing is less than 0mm it will be treated as 0mm.
   * - If the spacing is greater than 255mm it will be treated as 255mm.
   *
   * @see {@linkcode BluetoothPrintPlugin.text}
   * @see {@linkcode BluetoothPrintPlugin.image}
   * @see {@linkcode BluetoothPrintPlugin.qr}
   * @see {@linkcode BluetoothPrintPlugin.barcode}
   */
  lineSpacing(lineSpacing: number): this;
  /**
   * @category Hybrid Formatting
   * @categoryDescription
   * Formats following texts and barcode texts with the given font.
   *
   * @param font - Font to use.
   *
   * @see {@linkcode PrinterFont}
   * @see {@linkcode PrinterFonts}
   * @see {@linkcode BluetoothPrintPlugin.text}
   * @see {@linkcode BluetoothPrintPlugin.barcode}
   */
  font(font: PrinterFont): this;
  /**
   * @category Hybrid Formatting
   * @categoryDescription
   * Clears all formatting.
   */
  clearFormatting(): this;
  //#endregion

  //#region Data Code Formatting
  /**
   * @category Barcode Formatting
   * @categoryDescription
   * Sets the width of following barcodes.
   *
   * @param width - Width of barcode ranging from 3 to 6.
   *
   * @remarks
   * - The initial width is 3.
   * - Depending on the printer model, it may **halt** if the width exceeds it's printing width.
   *
   * @see {@linkcode BluetoothPrintPlugin.barcode}
   * @see {@linkcode BluetoothPrintPlugin.barcodeHeight}
   */
  barcodeWidth(width: number): this;
  /**
   * @category Barcode Formatting
   * @categoryDescription
   * Sets the height of following barcodes.
   *
   * @param height - Height of barcode in millimeters ranging from 1mm to 255mm.
   *
   * @remarks
   * - The initial height is 72mm.
   * - If the height is less than 1mm it will be treated as 1mm.
   * - If the height is greater than 255mm it will be treated as 255mm.
   *
   * @see {@linkcode BluetoothPrintPlugin.barcode}
   * @see {@linkcode BluetoothPrintPlugin.barcodeWidth}
   */
  barcodeHeight(height: number): this;
  /**
   * @category Barcode Formatting
   * @categoryDescription
   * Sets the placement of following barcode texts.
   *
   * @param placement - Placement to use.
   *
   * @see {@linkcode BarcodeTextPlacement}
   * @see {@linkcode BarcodeTextPlacements}
   * @see {@linkcode BluetoothPrintPlugin.barcode}
   */
  barcodeTextPlacement(placement: BarcodeTextPlacement): this;
  //#endregion

  //#region Content
  /**
   * @category Content
   * @categoryDescription
   * Adds text to the print queue.
   *
   * @param text - Text to use.
   *
   * @remarks
   * To print a newline, explicitly end the text with a newline character (`\n`).
   */
  text(text: string): this;
  /**
   * @category Content
   * @categoryDescription
   * Adds an image to the print queue.
   *
   * @param dataURLOrBase64 - Image data URL or base64.
   *
   * @remarks
   * The supported image formats the running platform's supported formats.
   * For maximum compatibility, use PNG and JPEG formats.
   *
   * @see {@linkcode BluetoothPrintPlugin.limitWidth}
   */
  image(dataURLOrBase64: string): this;
  /**
   * @category Content
   * @categoryDescription
   * Adds a QR code to the print queue.
   *
   * @param data - QR code data.
   */
  qr(data: string): this;
  /**
   * @category Content
   * @categoryDescription
   * Adds a barcode to the print queue.
   *
   * @param type - Barcode type.
   * @param data - Barcode data.
   *
   * @see {@linkcode BarcodeType}
   * @see {@linkcode DataCodeType}
   * @see {@linkcode BarcodeTypes}
   * @see {@linkcode DataCodeTypes}
   */
  barcode(type: BarcodeType, data: string): this;
  /**
   * @category Content
   * @categoryDescription
   * Adds raw data (base64 encoded) to the print queue. Use only if you know what you are doing.
   * Using base64 encoding can greatly improve the speed of data transfer through the Capacitor plugin bridge.
   *
   * @param base64 - Base64 encoded data.
   */
  raw(base64: string): this;
  /**
   * @category Content
   * @categoryDescription
   * Adds raw data (buffer) to the print queue. Use only if you know what you are doing.
   *
   * @param buffer - Buffer containing the data.
   *
   * @remarks
   * Each byte will be truncated/wrapped if it's outside the range of 0 to 255.
   */
  raw(buffer: number[]): this;
  /**
   * @category Content
   * @categoryDescription
   * Adds a self-test instruction to the print queue which usually prints general information about the printer and its capabilities.
   *
   * @remarks
   * The printer may not support this instruction and fail silently.
   */
  selfTest(): this;
  //#endregion

  //#region Content Actions
  /**
   * @category Content Actions
   * @categoryDescription
   * Adds a beep instruction to the print queue.
   *
   * @remarks
   * The printer may not support this instruction and fail silently.
   */
  beep(): this;
  /**
   * @category Content Actions
   * @categoryDescription
   * Adds an open drawer instruction to the print queue.
   *
   * @remarks
   * The printer may not support this instruction and fail silently.
   */
  openDrawer(): this;
  /**
   * @category Content Actions
   * @categoryDescription
   * Adds a cut instruction to the print queue.
   *
   * @param half - If true, performs a half cut depending on the printer model.
   *
   * @remarks
   * - The printer may not support the full cut instruction and fail silently.
   * - The printer may not support the half cut instruction and fail silently.
   *
   * @see {@linkcode BluetoothPrintPlugin.feedCutPaper}
   */
  cutPaper(half?: boolean): this;
  /**
   * @category Content Actions
   * @categoryDescription
   * Adds a cut instruction to the print queue preceded by a line feed.
   *
   * @param half - If true, performs a half cut depending on the printer model.
   * @remarks
   * - The printer may not support the full cut instruction and fail silently.
   * - The printer may not support the half cut instruction and fail silently.
   *
   * @see {@linkcode BluetoothPrintPlugin.cutPaper}
   */
  feedCutPaper(half?: boolean): this;
  //#endregion

  //#region Printing Actions
  /**
   * @category Printing Actions
   * @categoryDescription
   * Resets the print queue while clearing all formatting.
   *
   * @see {@linkcode BluetoothPrintPlugin.write}
   * @see {@linkcode BluetoothPrintPlugin.clearFormatting}
   */
  begin(): this;
  /**
   * @category Printing Actions
   * @categoryDescription
   * Writes the print queue to the printer.
   *
   * @remarks
   * Calling this method doesn't reset the print queue
   *
   * @see {@linkcode BluetoothPrintPlugin.begin}
   */
  write(): Promise<void>;
  //#endregion
}
