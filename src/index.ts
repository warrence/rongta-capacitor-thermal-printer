import { registerPlugin } from '@capacitor/core';

import type { BluetoothPrintPlugin } from './definitions';
import type { WrappedMethodsMap } from './private-definitions';
import CallablePromise from './utils/CallablePromise';

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
  write: [],
  //#endregion
} as const;

/// ! To preserve the builder pattern while maintaining thread safety,
/// ! each method call is queued asynchronously before being executed.
/// ! However, a synchronous reference to the object is returned immediately
/// ! achieving our target of a builder pattern!
const callQueue: CallablePromise<void>[] = [];
const BluetoothPrint = new Proxy(
  {},
  {
    get(_, prop) {
      if (!(prop in wrappedMethods)) {
        return BluetoothPrintImplementation[prop];
      }

      const argNames = wrappedMethods[prop as keyof typeof wrappedMethods];

      // TODO: Memoize
      return (...args: any[]) => {
        // Capture and clone the arguments before anything.
        const options = Object.fromEntries(
          argNames.map((name, index) => [name, structuredClone(args[index])]),
        );

        const trailingLock = callQueue.pop();
        const lock = new CallablePromise<void>();
        callQueue.push(lock);

        const promise = Promise.resolve(trailingLock).then(async () => {
          try {
            await BluetoothPrintImplementation[prop](options);
          } finally {
            lock.resolve();
          }
        });
        if (prop === 'write') return promise;

        return BluetoothPrint;
      };
    },
  },
) as BluetoothPrintPlugin;

export * from './definitions';
export { BluetoothPrint };
