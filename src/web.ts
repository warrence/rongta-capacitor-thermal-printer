import { WebPlugin } from '@capacitor/core';

import type { BluetoothPrintPlugin } from './definitions';

export class BluetoothPrintWeb
  extends WebPlugin
  implements BluetoothPrintPlugin {
  startScan(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  stopScan(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  connect(options: { address: string; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  disconnect(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  writeImage(options: { data: string; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  writeRaw(options: { data: number[]; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  writeText(options: { data: string; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
