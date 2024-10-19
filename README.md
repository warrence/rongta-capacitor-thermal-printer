# Capacitor Thermal Printer

An unofficial fast and reliable [Rongta](https://www.rongtatech.com/) Printer plugin implementation for Capacitor. Both on Android and iOS!
- [x] Using the official RTPrinter SDK
- [x] Cross-platform compatibility (Android & iOS)
- [x] ***Swift*** speeds on iOS of [BLE](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) **(known for it's pain-in-the-ass speed)**

## Install

```bash
npm install capacitor-thermal-printer
npx cap sync
```

## API

<docgen-index>

* [`bold(...)`](#bold)
* [`underline(...)`](#underline)
* [`doubleWidth(...)`](#doublewidth)
* [`doubleHeight(...)`](#doubleheight)
* [`inverse(...)`](#inverse)
* [`dpi(...)`](#dpi)
* [`limitWidth(...)`](#limitwidth)
* [`align(...)`](#align)
* [`charSpacing(...)`](#charspacing)
* [`lineSpacing(...)`](#linespacing)
* [`font(...)`](#font)
* [`position(...)`](#position)
* [`clearFormatting()`](#clearformatting)
* [`barcodeWidth(...)`](#barcodewidth)
* [`barcodeHeight(...)`](#barcodeheight)
* [`barcodeTextPlacement(...)`](#barcodetextplacement)
* [`text(...)`](#text)
* [`image(...)`](#image)
* [`qr(...)`](#qr)
* [`barcode(...)`](#barcode)
* [`raw(...)`](#raw)
* [`raw(...)`](#raw)
* [`selfTest()`](#selftest)
* [`beep()`](#beep)
* [`openDrawer()`](#opendrawer)
* [`cutPaper(...)`](#cutpaper)
* [`feedCutPaper(...)`](#feedcutpaper)
* [`begin()`](#begin)
* [`write()`](#write)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### bold(...)

```typescript
bold(enabled?: IsEnabled | undefined) => this
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`enabled`** | <code><a href="#isenabled">IsEnabled</a></code> |

**Returns:** <code>this</code>

--------------------


### underline(...)

```typescript
underline(enabled?: IsEnabled | undefined) => this
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`enabled`** | <code><a href="#isenabled">IsEnabled</a></code> |

**Returns:** <code>this</code>

--------------------


### doubleWidth(...)

```typescript
doubleWidth(enabled?: IsEnabled | undefined) => this
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`enabled`** | <code><a href="#isenabled">IsEnabled</a></code> |

**Returns:** <code>this</code>

--------------------


### doubleHeight(...)

```typescript
doubleHeight(enabled?: IsEnabled | undefined) => this
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`enabled`** | <code><a href="#isenabled">IsEnabled</a></code> |

**Returns:** <code>this</code>

--------------------


### inverse(...)

```typescript
inverse(enabled?: IsEnabled | undefined) => this
```

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`enabled`** | <code><a href="#isenabled">IsEnabled</a></code> |

**Returns:** <code>this</code>

--------------------


### dpi(...)

```typescript
dpi(dpi: PrinterDPI) => this
```

| Param     | Type                    |
| --------- | ----------------------- |
| **`dpi`** | <code>200 \| 300</code> |

**Returns:** <code>this</code>

--------------------


### limitWidth(...)

```typescript
limitWidth(width: number) => this
```

| Param       | Type                |
| ----------- | ------------------- |
| **`width`** | <code>number</code> |

**Returns:** <code>this</code>

--------------------


### align(...)

```typescript
align(alignment: PrintAlignment) => this
```

| Param           | Type                                       |
| --------------- | ------------------------------------------ |
| **`alignment`** | <code>'left' \| 'center' \| 'right'</code> |

**Returns:** <code>this</code>

--------------------


### charSpacing(...)

```typescript
charSpacing(charSpacing: number) => this
```

| Param             | Type                |
| ----------------- | ------------------- |
| **`charSpacing`** | <code>number</code> |

**Returns:** <code>this</code>

--------------------


### lineSpacing(...)

```typescript
lineSpacing(lineSpacing: number) => this
```

| Param             | Type                |
| ----------------- | ------------------- |
| **`lineSpacing`** | <code>number</code> |

**Returns:** <code>this</code>

--------------------


### font(...)

```typescript
font(font: PrinterFont) => this
```

| Param      | Type                    |
| ---------- | ----------------------- |
| **`font`** | <code>'A' \| 'B'</code> |

**Returns:** <code>this</code>

--------------------


### position(...)

```typescript
position(x: number, y: number) => this
```

| Param   | Type                |
| ------- | ------------------- |
| **`x`** | <code>number</code> |
| **`y`** | <code>number</code> |

**Returns:** <code>this</code>

--------------------


### clearFormatting()

```typescript
clearFormatting() => this
```

**Returns:** <code>this</code>

--------------------


### barcodeWidth(...)

```typescript
barcodeWidth(width: number) => this
```

| Param       | Type                |
| ----------- | ------------------- |
| **`width`** | <code>number</code> |

**Returns:** <code>this</code>

--------------------


### barcodeHeight(...)

```typescript
barcodeHeight(height: number) => this
```

| Param        | Type                |
| ------------ | ------------------- |
| **`height`** | <code>number</code> |

**Returns:** <code>this</code>

--------------------


### barcodeTextPlacement(...)

```typescript
barcodeTextPlacement(placement: BarcodeTextPlacement) => this
```

| Param           | Type                                                |
| --------------- | --------------------------------------------------- |
| **`placement`** | <code>'none' \| 'above' \| 'below' \| 'both'</code> |

**Returns:** <code>this</code>

--------------------


### text(...)

```typescript
text(text: string) => this
```

| Param      | Type                |
| ---------- | ------------------- |
| **`text`** | <code>string</code> |

**Returns:** <code>this</code>

--------------------


### image(...)

```typescript
image(dataURL: string) => this
```

| Param         | Type                |
| ------------- | ------------------- |
| **`dataURL`** | <code>string</code> |

**Returns:** <code>this</code>

--------------------


### qr(...)

```typescript
qr(data: string) => this
```

| Param      | Type                |
| ---------- | ------------------- |
| **`data`** | <code>string</code> |

**Returns:** <code>this</code>

--------------------


### barcode(...)

```typescript
barcode(type: BarcodeType, data: string) => this
```

| Param      | Type                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------- |
| **`type`** | <code>'UPC_A' \| 'EAN8' \| 'EAN13' \| 'CODE39' \| 'ITF' \| 'CODABAR' \| 'CODE128'</code> |
| **`data`** | <code>string</code>                                                                      |

**Returns:** <code>this</code>

--------------------


### raw(...)

```typescript
raw(base64: string) => this
```

| Param        | Type                |
| ------------ | ------------------- |
| **`base64`** | <code>string</code> |

**Returns:** <code>this</code>

--------------------


### raw(...)

```typescript
raw(buffer: number[]) => this
```

| Param        | Type                  |
| ------------ | --------------------- |
| **`buffer`** | <code>number[]</code> |

**Returns:** <code>this</code>

--------------------


### selfTest()

```typescript
selfTest() => this
```

**Returns:** <code>this</code>

--------------------


### beep()

```typescript
beep() => this
```

**Returns:** <code>this</code>

--------------------


### openDrawer()

```typescript
openDrawer() => this
```

**Returns:** <code>this</code>

--------------------


### cutPaper(...)

```typescript
cutPaper(half?: boolean | undefined) => this
```

| Param      | Type                 |
| ---------- | -------------------- |
| **`half`** | <code>boolean</code> |

**Returns:** <code>this</code>

--------------------


### feedCutPaper(...)

```typescript
feedCutPaper(half?: boolean | undefined) => this
```

| Param      | Type                 |
| ---------- | -------------------- |
| **`half`** | <code>boolean</code> |

**Returns:** <code>this</code>

--------------------


### begin()

```typescript
begin() => this
```

**Returns:** <code>this</code>

--------------------


### write()

```typescript
write() => Promise<void>
```

--------------------


### Type Aliases


#### IsEnabled

When `"default"`, uses default internal printer settings.

<code>boolean | 'default'</code>


#### PrinterDPI

<code>typeof PrinterDPIs[number]</code>


#### PrintAlignment

<code>typeof PrintAlignments[number]</code>


#### PrinterFont

- A's Size: 12x24
- B's Size: 9x24

<code>typeof PrinterFonts[number]</code>


#### BarcodeTextPlacement

<code>typeof BarcodeTextPlacements[number]</code>


#### BarcodeType

<code>typeof BarcodeTypes[number]</code>

</docgen-api>
