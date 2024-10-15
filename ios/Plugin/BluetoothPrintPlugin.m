#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(BluetoothPrintPlugin, "BluetoothPrint",
           CAP_PLUGIN_METHOD(startScan, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(stopScan, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(connect, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(writeImage, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(writeText, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(writeRaw, CAPPluginReturnNone);
)
