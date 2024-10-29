import type { BluetoothPrintPlugin } from './definitions';

type PickByType<T, Value> = {
  [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};
type WrappedMethods = keyof PickByType<BluetoothPrintPlugin, (...args: any[]) => BluetoothPrintPlugin> | 'write';
type FixedArray<T, L> = readonly T[] & { length: L };

export type WrappedMethodsArgsMap = {
  [P in WrappedMethods]: FixedArray<string, Required<Parameters<BluetoothPrintPlugin[P]>>['length']>;
};
type Promisable<T> = T | PromiseLike<T>;

export type WrappedMethodsMiddlewareMap<T extends WrappedMethodsArgsMap> = {
  [P in WrappedMethods]?: (...args: Parameters<BluetoothPrintPlugin[P]>) => Promisable<Record<T[P][number], unknown>>;
};
