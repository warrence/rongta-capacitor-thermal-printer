import { registerPlugin } from '@capacitor/core';

import type { BluetoothPrintPlugin } from './definitions';
import type { WrappedMethodsMap } from './private-definitions';

const BluetoothPrintImplementation = registerPlugin<any>('BluetoothPrint');

const wrappedMethods: WrappedMethodsMap = {
  //#region Text Formatting
  bold: ['enabled'],
  underline: ['enabled'],
  doubleWidth: ['enabled'],
  doubleHeight: ['enabled'],
  inverse: ['enabled'],
  //#endregion

  //#region Image Formatting
  dpi: ['dpi'],
  limitWidth: ['width'],
  //#endregion

  //#region Data Code Formatting
  barcodeWidth: ['width'],
  barcodeHeight: ['height'],
  barcodeTextPlacement: ['placement'],
  //#endregion

  //#region Hybrid Formatting
  align: ['alignment'],
  charSpacing: ['charSpacing'],
  lineSpacing: ['lineSpacing'],
  font: ['font'],
  clearFormatting: [],
  //#endregion

  //#region Content
  text: ['text'],
  image: ['image'],
  qr: ['data'],
  barcode: ['type', 'data'],
  raw: ['data'],
  selfTest: [],
  //#endregion

  //#region Content Actions
  beep: [],
  openDrawer: [],
  cutPaper: ['half'],
  feedCutPaper: ['half'],
  //#endregion

  //#region Printing Actions
  begin: [],
  //#endregion
} as const;

const BluetoothPrint = new Proxy(
  {},
  {
    get(_, prop) {
      if (prop in wrappedMethods) {
        const argNames = wrappedMethods[prop as keyof typeof wrappedMethods];

        return (...args: any[]) => {
          const options = Object.fromEntries(
            argNames.map((name, index) => [name, args[index]]),
          );

          (BluetoothPrintImplementation as any)[prop](options);

          return BluetoothPrint;
        };
      }

      return (BluetoothPrintImplementation as any)[prop];
    },
  },
) as BluetoothPrintPlugin;

export * from './definitions';
export { BluetoothPrint };
