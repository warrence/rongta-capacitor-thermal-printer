import type { BluetoothPrintPlugin } from './definitions';

type PickByType<T, Value> = {
  [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};
type WrappedMethods =
  | keyof PickByType<
      BluetoothPrintPlugin,
      (...args: any[]) => BluetoothPrintPlugin
    >
  | 'write';
type FixedArray<T, L> = readonly T[] & { length: L };

export type WrappedMethodsMap = {
  [P in WrappedMethods]: FixedArray<
    string,
    Required<Parameters<BluetoothPrintPlugin[P]>>['length']
  >;
};
