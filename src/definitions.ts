export interface BluetoothPrintPlugin {
  startScan(): Promise<void>;
  stopScan(): Promise<void>;
  connect(options: { address: string }): Promise<void>;
  disconnect(): Promise<void>;

  writeText(options: { data: string }): Promise<void>;
  writeImage(options: { data: string }): Promise<void>;
  writeRaw(options: { data: number[] }): Promise<void>;

  addListener(event: 'discoverDevices', handler: (data: { devices: any[] }) => void): void;
  addListener(event: 'datachanged', handler: () => void): void;
  addListener(event: 'connected', handler: () => void): void;
  addListener(event: 'disconnected', handler: () => void): void;
}