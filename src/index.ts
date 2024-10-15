import { registerPlugin } from '@capacitor/core';

import type { BluetoothPrintPlugin } from './definitions';

const BluetoothPrint = registerPlugin<BluetoothPrintPlugin>('BluetoothPrint', {
  web: () => import('./web').then(m => new m.BluetoothPrintWeb()),
});

export * from './definitions';
export { BluetoothPrint };
