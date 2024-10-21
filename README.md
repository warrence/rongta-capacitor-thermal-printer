# Capacitor Thermal Printer

High-speed, reliable bluetooth ESC thermal printer and encoder Capacitor plugin. Both on Android and iOS!

- [x] Using the official RTPrinter SDK by [Rongta Technology](https://www.rongtatech.com/) <3
- [x] Cross-platform compatibility (Android & iOS)
- [x] **_Swift_** speeds on iOS of [BLE](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) **(known for it's pain-in-the-ass speed)**

## Install

```bash
npm install capacitor-thermal-printer
npx cap sync
```

## Example

Make sure to check the Ionic Angular example in the [example](./example) folder.

### 1. Import the plugin

```ts
import { BluetoothPrint } from 'capacitor-thermal-printer';
```

### 2. Connect to printer

```ts
await BluetoothPrint.connect({
  address: 'XX:XX:XX:XX:XX:XX',
})
  .then(() => console.log('Connected!'))
  .catch(e => console.error('Failed to connect!', e));
```

You can also use the `startScan` method to discover nearby devices.

- On Android, only printers will be discovered.
- On iOS, all bluetooth devices will be discovered.

```ts
await BluetoothPrint.addListener('discoverDevices', devices => {
  console.log('Discovered devices list:', devices);
});

await BluetoothPrint.startScan();
```

### 3. Print sample receipt

```ts
await BluetoothPrint.begin()
  .align('center')

  .image('...')

  .bold()
  .underline()
  .text('The amazing store\n')

  .doubleWidth()
  .text('RECEIPT\n')
  .clearFormatting()

  .text('Item 1: $10.00\n')
  .text('Item 2: $15.00\n')

  .align('right')
  .text('Total: $25.00\n')

  .align('center')
  .qr('https://example.com')
  .barcode('UPC_A', '123456789012')

  .cutPaper()

  .write()
  .then(() => console.log('Printed!'))
  .catch(e => console.error('Failed to print!', e));
```

## Documentation

Check out the [Docs](./docs/README.md)!

## Issues

If you encounter any issues with this plugin, please report them at [Issues](https://github.com/Malik12tree/capacitor-thermal-printer/issues)

## Contributing

We're open to, and grateful for, any contributions made! Make sure to check [Contribution Guidelines](./CONTRIBUTING.md)
