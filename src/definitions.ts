export interface BluetoothPrintPlugin {
  startScan(): Promise<void>;
  stopScan(): Promise<void>;
  connect(options: { address: string }): Promise<void>;
  disconnect(): Promise<void>;

  writeImage(options: { data: number[] }): Promise<void>;
  writeRaw(options: { data: number[] }): Promise<void>;
  writeText(options: { data: string }): Promise<void>;
 
  addListener(event: 'discoverDevices', handler: (data: { devices: any[] }) => void): void;
  addListener(event: 'datachanged', handler: () => void): void;
  addListener(event: 'connected', handler: () => void): void;
  addListener(event: 'disconnected', handler: () => void): void;
}