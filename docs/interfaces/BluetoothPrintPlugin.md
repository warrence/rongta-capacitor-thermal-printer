[**capacitor-thermal-printer**](../README.md) • **Docs**

***

[capacitor-thermal-printer](../README.md) / BluetoothPrintPlugin

# Interface: BluetoothPrintPlugin

## Connectivity

### startScan()

> **startScan**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions.ts:48](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L48)

***

### stopScan()

> **stopScan**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions.ts:52](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L52)

***

### connect()

> **connect**(`options`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.address` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions.ts:56](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L56)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[definitions.ts:60](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L60)

## Event Listeners

### addListener()

#### addListener(event, handler)

> **addListener**(`event`, `handler`): `Promise`\<`PluginListenerHandle`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"discoverDevices"` |
| `handler` | (`data`) => `void` |

##### Returns

`Promise`\<`PluginListenerHandle`\>

##### Category Description

Emitted when new devices are discovered.

##### Remarks

If you're using Angular as your framework of choice, the handler doesn't run in zone.

##### Defined in

[definitions.ts:70](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L70)

#### addListener(event, handler)

> **addListener**(`event`, `handler`): `Promise`\<`PluginListenerHandle`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"datachanged"` |
| `handler` | () => `void` |

##### Returns

`Promise`\<`PluginListenerHandle`\>

##### Category Description

Emitted when the printer status changes. Currently not meaningful at all.

##### Remarks

If you're using Angular as your framework of choice, the handler doesn't run in zone.

##### Defined in

[definitions.ts:82](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L82)

#### addListener(event, handler)

> **addListener**(`event`, `handler`): `Promise`\<`PluginListenerHandle`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"connected"` |
| `handler` | () => `void` |

##### Returns

`Promise`\<`PluginListenerHandle`\>

##### Category Description

Emitted when a printer is successfully connected.

##### Remarks

If you're using Angular as your framework of choice, the handler doesn't run in zone.

##### Defined in

[definitions.ts:94](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L94)

#### addListener(event, handler)

> **addListener**(`event`, `handler`): `Promise`\<`PluginListenerHandle`\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"disconnected"` |
| `handler` | () => `void` |

##### Returns

`Promise`\<`PluginListenerHandle`\>

##### Category Description

Emitted when a printer is disconnected.

##### Remarks

If you're using Angular as your framework of choice, the handler doesn't run in zone.

##### Defined in

[definitions.ts:106](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L106)

## Text Formatting

### bold()

> **bold**(`enabled`?): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled`? | [`IsEnabled`](../type-aliases/IsEnabled.md) | Defaults to `true` if not specified. |

#### Returns

`this`

#### Category Description

Formats following texts as bold.

#### See

 - [`IsEnabled`](../type-aliases/IsEnabled.md)
 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)

#### Defined in

[definitions.ts:122](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L122)

***

### underline()

> **underline**(`enabled`?): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled`? | [`IsEnabled`](../type-aliases/IsEnabled.md) | Defaults to `true` if not specified. |

#### Returns

`this`

#### Category Description

Formats following texts as underlined.

#### See

 - [`IsEnabled`](../type-aliases/IsEnabled.md)
 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)

#### Defined in

[definitions.ts:133](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L133)

***

### doubleWidth()

> **doubleWidth**(`enabled`?): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled`? | [`IsEnabled`](../type-aliases/IsEnabled.md) | Defaults to `true` if not specified. |

#### Returns

`this`

#### Category Description

Formats following texts with double width of each character.

#### See

 - [`IsEnabled`](../type-aliases/IsEnabled.md)
 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)
 - [`BluetoothPrintPlugin.doubleHeight`](BluetoothPrintPlugin.md#doubleheight)

#### Defined in

[definitions.ts:145](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L145)

***

### doubleHeight()

> **doubleHeight**(`enabled`?): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled`? | [`IsEnabled`](../type-aliases/IsEnabled.md) | Defaults to `true` if not specified. |

#### Returns

`this`

#### Category Description

Formats following texts with double height of each character.

#### See

 - [`IsEnabled`](../type-aliases/IsEnabled.md)
 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)
 - [`BluetoothPrintPlugin.doubleWidth`](BluetoothPrintPlugin.md#doublewidth)

#### Defined in

[definitions.ts:157](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L157)

***

### inverse()

> **inverse**(`enabled`?): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enabled`? | [`IsEnabled`](../type-aliases/IsEnabled.md) | Defaults to `true` if not specified. |

#### Returns

`this`

#### Category Description

Formats following texts with inverted colors. (white text on black background)

#### See

 - [`IsEnabled`](../type-aliases/IsEnabled.md)
 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)

#### Defined in

[definitions.ts:169](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L169)

## Image Formatting

### dpi()

> **dpi**(`dpi`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dpi` | `200` \| `300` | The DPI value. |

#### Returns

`this`

#### Category Description

Sets the DPI used to correctly encode the width of the image used in [`BluetoothPrintPlugin.limitWidth`](BluetoothPrintPlugin.md#limitwidth) based on the printer.

#### Remarks

- The initial DPI is 200.
- Must be either 200 or 300. Any other value will be treated as 200.

#### See

 - [`PrinterDPI`](../type-aliases/PrinterDPI.md)
 - [`PrinterDPIs`](../variables/PrinterDPIs.md)
 - [`BluetoothPrintPlugin.limitWidth`](BluetoothPrintPlugin.md#limitwidth)
 - [`BluetoothPrintPlugin.image`](BluetoothPrintPlugin.md#image)

#### Defined in

[definitions.ts:189](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L189)

***

### limitWidth()

> **limitWidth**(`width`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | The maximum width of the image in millimeters ranging from 1mm to 880mm. |

#### Returns

`this`

#### Category Description

Limits the width of following images.

#### Remarks

- The initial maximum width is 45mm.
- If the width is less than 1mm, this will fail silently.
- If the width is greater than 880mm it will be treated as 880mm.

#### See

 - [`BluetoothPrintPlugin.dpi`](BluetoothPrintPlugin.md#dpi)
 - [`BluetoothPrintPlugin.image`](BluetoothPrintPlugin.md#image)

#### Defined in

[definitions.ts:205](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L205)

## Barcode Formatting

### barcodeWidth()

> **barcodeWidth**(`width`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | Width of barcode ranging from 3 to 6. |

#### Returns

`this`

#### Category Description

Sets the width of following barcodes.

#### Remarks

- The initial width is 3.
- Depending on the printer model, it may **halt** if the width exceeds it's printing width.

#### See

 - [`BluetoothPrintPlugin.barcode`](BluetoothPrintPlugin.md#barcode)
 - [`BluetoothPrintPlugin.barcodeHeight`](BluetoothPrintPlugin.md#barcodeheight)

#### Defined in

[definitions.ts:294](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L294)

***

### barcodeHeight()

> **barcodeHeight**(`height`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `height` | `number` | Height of barcode in millimeters ranging from 1mm to 255mm. |

#### Returns

`this`

#### Category Description

Sets the height of following barcodes.

#### Remarks

- The initial height is 72mm.
- If the height is less than 1mm it will be treated as 1mm.
- If the height is greater than 255mm it will be treated as 255mm.

#### See

 - [`BluetoothPrintPlugin.barcode`](BluetoothPrintPlugin.md#barcode)
 - [`BluetoothPrintPlugin.barcodeWidth`](BluetoothPrintPlugin.md#barcodewidth)

#### Defined in

[definitions.ts:310](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L310)

***

### barcodeTextPlacement()

> **barcodeTextPlacement**(`placement`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `placement` | `"both"` \| `"none"` \| `"above"` \| `"below"` | Placement to use. |

#### Returns

`this`

#### Category Description

Sets the placement of following barcode texts.

#### See

 - [`BarcodeTextPlacement`](../type-aliases/BarcodeTextPlacement.md)
 - [`BarcodeTextPlacements`](../variables/BarcodeTextPlacements.md)
 - [`BluetoothPrintPlugin.barcode`](BluetoothPrintPlugin.md#barcode)

#### Defined in

[definitions.ts:322](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L322)

## Hybrid Formatting

### align()

> **align**(`alignment`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alignment` | `"center"` \| `"left"` \| `"right"` | Alignment to use. |

#### Returns

`this`

#### Category Description

Aligns following texts, images, qr codes and barcodes with the given alignment.

#### See

 - [`PrintAlignment`](../type-aliases/PrintAlignment.md)
 - [`PrintAlignments`](../variables/PrintAlignments.md)
 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)
 - [`BluetoothPrintPlugin.image`](BluetoothPrintPlugin.md#image)
 - [`BluetoothPrintPlugin.qr`](BluetoothPrintPlugin.md#qr)
 - [`BluetoothPrintPlugin.barcode`](BluetoothPrintPlugin.md#barcode)

#### Defined in

[definitions.ts:223](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L223)

***

### charSpacing()

> **charSpacing**(`charSpacing`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `charSpacing` | `number` | The character spacing in millimeters ranging from 0mm to 30mm. |

#### Returns

`this`

#### Category Description

Sets the character spacing of following texts and barcode texts.

#### Remarks

- The initial spacing is 1mm.
- If the spacing is less than 0mm it will be treated as 0mm.
- If the spacing is greater than 30mm it will be treated as 30mm.

#### See

 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)
 - [`BluetoothPrintPlugin.barcode`](BluetoothPrintPlugin.md#barcode)

#### Defined in

[definitions.ts:239](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L239)

***

### lineSpacing()

> **lineSpacing**(`lineSpacing`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lineSpacing` | `number` | The line spacing in millimeters ranging from 0mm to 255mm. |

#### Returns

`this`

#### Category Description

Sets the line spacing of following texts, images, qr codes, barcodes with the given spacing.

#### Remarks

- The initial spacing is 30mm.
- If the spacing is less than 0mm it will be treated as 0mm.
- If the spacing is greater than 255mm it will be treated as 255mm.

#### See

 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)
 - [`BluetoothPrintPlugin.image`](BluetoothPrintPlugin.md#image)
 - [`BluetoothPrintPlugin.qr`](BluetoothPrintPlugin.md#qr)
 - [`BluetoothPrintPlugin.barcode`](BluetoothPrintPlugin.md#barcode)

#### Defined in

[definitions.ts:257](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L257)

***

### font()

> **font**(`font`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `font` | `"A"` \| `"B"` | Font to use. |

#### Returns

`this`

#### Category Description

Formats following texts and barcode texts with the given font.

#### See

 - [`PrinterFont`](../type-aliases/PrinterFont.md)
 - [`PrinterFonts`](../variables/PrinterFonts.md)
 - [`BluetoothPrintPlugin.text`](BluetoothPrintPlugin.md#text)
 - [`BluetoothPrintPlugin.barcode`](BluetoothPrintPlugin.md#barcode)

#### Defined in

[definitions.ts:270](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L270)

***

### clearFormatting()

> **clearFormatting**(): `this`

#### Returns

`this`

#### Category Description

Clears all formatting.

#### Defined in

[definitions.ts:276](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L276)

## Content

### text()

> **text**(`text`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | Text to use. |

#### Returns

`this`

#### Category Description

Adds text to the print queue.

#### Remarks

To print a newline, explicitly end the text with a newline character (`\n`).

#### Defined in

[definitions.ts:336](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L336)

***

### image()

> **image**(`dataURLOrBase64`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dataURLOrBase64` | `string` | Image data URL or base64. |

#### Returns

`this`

#### Category Description

Adds an image to the print queue.

#### Remarks

The supported image formats the running platform's supported formats.
For maximum compatibility, use PNG and JPEG formats.

#### See

[`BluetoothPrintPlugin.limitWidth`](BluetoothPrintPlugin.md#limitwidth)

#### Defined in

[definitions.ts:350](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L350)

***

### qr()

> **qr**(`data`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | QR code data. |

#### Returns

`this`

#### Category Description

Adds a QR code to the print queue.

#### Defined in

[definitions.ts:358](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L358)

***

### barcode()

> **barcode**(`type`, `data`): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `"UPC_A"` \| `"EAN8"` \| `"EAN13"` \| `"CODE39"` \| `"ITF"` \| `"CODABAR"` \| `"CODE128"` | Barcode type. |
| `data` | `string` | Barcode data. |

#### Returns

`this`

#### Category Description

Adds a barcode to the print queue.

#### See

 - [`BarcodeType`](../type-aliases/BarcodeType.md)
 - [`DataCodeType`](../type-aliases/DataCodeType.md)
 - [`BarcodeTypes`](../variables/BarcodeTypes.md)
 - [`DataCodeTypes`](../variables/DataCodeTypes.md)

#### Defined in

[definitions.ts:372](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L372)

***

### raw()

#### raw(base64)

> **raw**(`base64`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `base64` | `string` | Base64 encoded data. |

##### Returns

`this`

##### Category Description

Adds raw data (base64 encoded) to the print queue. Use only if you know what you are doing.
Using base64 encoding can greatly improve the speed of data transfer through the Capacitor plugin bridge.

##### Defined in

[definitions.ts:381](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L381)

#### raw(buffer)

> **raw**(`buffer`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buffer` | `number`[] | Buffer containing the data. |

##### Returns

`this`

##### Category Description

Adds raw data (buffer) to the print queue. Use only if you know what you are doing.

##### Remarks

Each byte will be truncated/wrapped if it's outside the range of 0 to 255.

##### Defined in

[definitions.ts:392](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L392)

***

### selfTest()

> **selfTest**(): `this`

#### Returns

`this`

#### Category Description

Adds a self-test instruction to the print queue which usually prints general information about the printer and its capabilities.

#### Remarks

The printer may not support this instruction and fail silently.

#### Defined in

[definitions.ts:401](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L401)

## Content Actions

### beep()

> **beep**(): `this`

#### Returns

`this`

#### Category Description

Adds a beep instruction to the print queue.

#### Remarks

The printer may not support this instruction and fail silently.

#### Defined in

[definitions.ts:413](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L413)

***

### openDrawer()

> **openDrawer**(): `this`

#### Returns

`this`

#### Category Description

Adds an open drawer instruction to the print queue.

#### Remarks

The printer may not support this instruction and fail silently.

#### Defined in

[definitions.ts:422](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L422)

***

### cutPaper()

> **cutPaper**(`half`?): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `half`? | `boolean` | If true, performs a half cut depending on the printer model. |

#### Returns

`this`

#### Category Description

Adds a cut instruction to the print queue.

#### Remarks

- The printer may not support the full cut instruction and fail silently.
- The printer may not support the half cut instruction and fail silently.

#### See

[`BluetoothPrintPlugin.feedCutPaper`](BluetoothPrintPlugin.md#feedcutpaper)

#### Defined in

[definitions.ts:436](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L436)

***

### feedCutPaper()

> **feedCutPaper**(`half`?): `this`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `half`? | `boolean` | If true, performs a half cut depending on the printer model. |

#### Returns

`this`

#### Category Description

Adds a cut instruction to the print queue preceded by a line feed.

#### Remarks

- The printer may not support the full cut instruction and fail silently.
- The printer may not support the half cut instruction and fail silently.

#### See

[`BluetoothPrintPlugin.cutPaper`](BluetoothPrintPlugin.md#cutpaper)

#### Defined in

[definitions.ts:449](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L449)

## Printing Actions

### begin()

> **begin**(): `this`

#### Returns

`this`

#### Category Description

Resets the print queue while clearing all formatting.

#### See

 - [`BluetoothPrintPlugin.write`](BluetoothPrintPlugin.md#write)
 - [`BluetoothPrintPlugin.clearFormatting`](BluetoothPrintPlugin.md#clearformatting)

#### Defined in

[definitions.ts:461](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L461)

***

### write()

> **write**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Category Description

Writes the print queue to the printer.

#### Remarks

Calling this method doesn't reset the print queue

#### See

[`BluetoothPrintPlugin.begin`](BluetoothPrintPlugin.md#begin)

#### Defined in

[definitions.ts:472](https://github.com/Malik12tree/capacitor-thermal-printer/blob/13f24ad9c51afbc330a0f5ba3a6781455547e5a3/src/definitions.ts#L472)
