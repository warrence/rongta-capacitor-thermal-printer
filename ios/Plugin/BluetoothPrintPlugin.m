#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(BluetoothPrintPlugin, "BluetoothPrint",
           CAP_PLUGIN_METHOD(startScan, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(stopScan, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(connect, CAPPluginReturnPromise);
           
           CAP_PLUGIN_METHOD(bold, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(underline, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(doubleWidth, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(doubleHeight, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(inverse, CAPPluginReturnNone);
           
           CAP_PLUGIN_METHOD(barcodeWidth, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(barcodeHeight, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(barcodeTextPlacement, CAPPluginReturnNone);

           CAP_PLUGIN_METHOD(dpi, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(limitWidth, CAPPluginReturnNone);
           
           CAP_PLUGIN_METHOD(align, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(charSpacing, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(lineSpacing, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(font, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(position, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(clearFormatting, CAPPluginReturnNone);
           
           CAP_PLUGIN_METHOD(text, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(image, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(qr, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(barcode, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(raw, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(selfTest, CAPPluginReturnNone);
           
           CAP_PLUGIN_METHOD(beep, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(openDrawer, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(cutPaper, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(feedCutPaper, CAPPluginReturnNone);
           
           CAP_PLUGIN_METHOD(begin, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(write, CAPPluginReturnPromise);
)
