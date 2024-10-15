# bluetooth-print

Bluetooth Printer.

## Install

```bash
npm install bluetooth-print
npx cap sync
```

## API

<docgen-index>

* [`startScan()`](#startscan)
* [`stopScan()`](#stopscan)
* [`connect(...)`](#connect)
* [`disconnect()`](#disconnect)
* [`writeImage(...)`](#writeimage)
* [`writeRaw(...)`](#writeraw)
* [`writeText(...)`](#writetext)
* [`addListener('discoverDevices', ...)`](#addlistenerdiscoverdevices-)
* [`addListener('datachanged', ...)`](#addlistenerdatachanged-)
* [`addListener('connected', ...)`](#addlistenerconnected-)
* [`addListener('disconnected', ...)`](#addlistenerdisconnected-)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startScan()

```typescript
startScan() => Promise<void>
```

--------------------


### stopScan()

```typescript
stopScan() => Promise<void>
```

--------------------


### connect(...)

```typescript
connect(options: { address: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ address: string; }</code> |

--------------------


### disconnect()

```typescript
disconnect() => Promise<void>
```

--------------------


### writeImage(...)

```typescript
writeImage(options: { data: number[]; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ data: number[]; }</code> |

--------------------


### writeRaw(...)

```typescript
writeRaw(options: { data: number[]; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ data: number[]; }</code> |

--------------------


### writeText(...)

```typescript
writeText(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

--------------------


### addListener('discoverDevices', ...)

```typescript
addListener(event: 'discoverDevices', handler: (data: { devices: any[]; }) => void) => void
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`event`**   | <code>'discoverDevices'</code>                      |
| **`handler`** | <code>(data: { devices: any[]; }) =&gt; void</code> |

--------------------


### addListener('datachanged', ...)

```typescript
addListener(event: 'datachanged', handler: () => void) => void
```

| Param         | Type                       |
| ------------- | -------------------------- |
| **`event`**   | <code>'datachanged'</code> |
| **`handler`** | <code>() =&gt; void</code> |

--------------------


### addListener('connected', ...)

```typescript
addListener(event: 'connected', handler: () => void) => void
```

| Param         | Type                       |
| ------------- | -------------------------- |
| **`event`**   | <code>'connected'</code>   |
| **`handler`** | <code>() =&gt; void</code> |

--------------------


### addListener('disconnected', ...)

```typescript
addListener(event: 'disconnected', handler: () => void) => void
```

| Param         | Type                        |
| ------------- | --------------------------- |
| **`event`**   | <code>'disconnected'</code> |
| **`handler`** | <code>() =&gt; void</code>  |

--------------------

</docgen-api>
