import Foundation
import Capacitor
import CoreBluetooth

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BluetoothPrintPlugin)
public class BluetoothPrintPlugin: CAPPlugin {
    let manager: PrinterManager = PrinterManager.createESC();
    let blueToothPI = BlueToothFactory.create(BlueToothKind_Ble)!
    
    public override init() {
        super.init()
        
        let handleNotificationSelector = #selector(self.handleNotification(notification: ));
        
        let notifications = [
            NSNotification.Name(BleDeviceConnectedNotify),
            NSNotification.Name(BleServiceFindDevice),
            //                NSNotification.Name(BleDeviceRssiChanged),
            NSNotification.Name(BleServiceStatusChanged),
            NSNotification.Name.PrinterConnected,
            NSNotification.Name.PrinterDisconnected,
            NSNotification.Name(BleDeviceDataChanged)
        ];
        for notification in notifications {
            NSLog("Observing Notifications %@", notification.rawValue)
            NotificationCenter.default.addObserver(
                self,
                selector: handleNotificationSelector,
                name: notification,
                object: nil
            )
        }
    }
    //    var connectedPrinter: PrinterInterface? = nil;
    @objc
    func handleNotification(notification: Notification) {
        DispatchQueue.main.async {
            NSLog("NOTFICATIONN %@", notification.name.rawValue)
            
            switch notification.name {
            case NSNotification.Name(BleServiceFindDevice):
                let devices = self.blueToothPI.getBleDevicelist() as! [RTDeviceinfo]
                self.notifyListeners("discoverDevices", data: [
                    "devices": devices.map({
                        return [
                            "name": $0.name,
                            "address": $0.uuidString
                        ]
                    })
                ])
                break;
            case NSNotification.Name.PrinterConnected/*, NSNotification.Name(BleDeviceConnectedNotify)*/:
                if notification.object == nil {
                    break;
                }
                if (notification.object as! ObserverObj?)?.msgobj == nil {
                    break;
                }
                
                let printerPi = (notification.object as! ObserverObj?)?.msgobj as! RTBlueToothPI
                
                NSLog("CONNECTED NT");
                //self.manager.currentPrinter.printerPi = printerPi
                //                self.printA(printerPi: printerPi);
                
                self.notifyListeners("connected", data: nil)
                break;
            case NSNotification.Name.PrinterDisconnected:
                self.notifyListeners("disconnected", data: nil)
                break;
            case NSNotification.Name(BleDeviceDataChanged):
                let status = (notification.object as! ObserverObj).msgobj as! PrinterStatusObj;
                
                
                
                NSLog("DATACHANGED", status)
                self.notifyListeners("datachanged", data: nil)
                break;
                
            default:
                break;
            }
        }
        
    }
    
    @objc func startScan(_ call: CAPPluginCall) {
        //        blueToothPI.stopScan()
        blueToothPI.startScan(30, isclear: false)
        call.resolve()
    }
    @objc func stopScan(_ call: CAPPluginCall) {
        //       blueToothPI.stopScan()
        call.resolve()
    }
    
    @objc func connect(_ call: CAPPluginCall) {
        guard let address = call.getString("address") else { call.reject("Please provide address!"); return }
        
        
        //        blueToothPI.stopScan()
        manager.connectBLE(address: address)
        NSLog("CONNECT %@", address)
        
        call.resolve()
    }
    @objc func disconnect() {
        manager.disconnect()
    }
    
    func printTestString(printerPi: RTBlueToothPI) {
        if !printerPi.isOpen {
            print("PRINTER NOT OPEN!")
            return;
        }
        
        let textst = manager.currentPrinter.textSets!;
        textst.alignmode = Align_Left
        textst.isTimes_Wide = Set_DisEnable
        textst.isTimes_Heigh = Set_DisEnable
        textst.isUnderline = Set_DisEnable
        let bitmapSetting = manager.currentPrinter.bitmapSetts!
        bitmapSetting.alignmode = Align_Center;
        bitmapSetting.limitWidth = 52*8;//ESC
        
        let cmd = manager.createCmdClass()
        cmd.clear()
        cmd.encodingType = Encoding_GBK
        cmd.append(cmd.getHeaderCmd())
        cmd.append(cmd.getTextCmd(textst, text: "HelloHelloHelloHelloHelloHelloHelloHellAAASo\n"))
        cmd.append(cmd.getLFCRCmd())
        cmd.append(cmd.getPrintEnd())
        
        print(cmd.getCmd()!);
        printerPi.write(cmd.getCmd()!)
        print("End")
    }
    
    @objc func writeImage(_ call: CAPPluginCall) {
        guard let data = parseCallData(call) else { return };
        
        self._writeRaw(call) {
            (cmd, _ts, bs) in
            cmd.getBitMapCmd(bs, image: UIImage(data: data))
        };
    }
    @objc func writeText(_ call: CAPPluginCall) {
        guard let data = call.getString("data") else { call.reject("Invalid Data"); return }
        
        self._writeRaw(call) {
            (cmd, ts, _bs) in
            cmd.getTextCmd(ts, text: data)
        };
    }
    
    @objc func writeRaw(_ call: CAPPluginCall) {
        guard let data = parseCallData(call) else { return };
        
        self._writeRaw(call) {
            (_cmd, _ts, _bs) in
            data
        };
    }
    
    func parseCallData(_ call: CAPPluginCall) -> Data? {
        guard let dataArray = call.getArray("data") as! [NSNumber]? else { call.reject("Invalid Data"); return nil }
        
        var data = Data(count: dataArray.count)
        for i in 0..<data.count {
            data[i] = UInt8(truncating: dataArray[i]);
        }
        
        return data
    }
    func _writeRaw(_ call: CAPPluginCall, dataFn: (Cmd, TextSetting, BitmapSetting) -> Data) {
        if (!manager.currentPrinter.isOpen) {
            call.reject("Printer is not connected!");
            return
        }
        
        let textSettings = manager.currentPrinter.textSets!;
        textSettings.alignmode = Align_Left
        textSettings.isTimes_Wide = Set_DisEnable
        textSettings.isTimes_Heigh = Set_DisEnable
        textSettings.isUnderline = Set_DisEnable
        let bitmapSettings = manager.currentPrinter.bitmapSetts!
        bitmapSettings.alignmode = Align_Center;
        bitmapSettings.limitWidth = 45*8;
        
        let cmd = manager.createCmdClass()
        cmd.clear()
        cmd.encodingType = Encoding_UTF8
        cmd.append(cmd.getHeaderCmd())
        
        cmd.append(dataFn(cmd, textSettings, bitmapSettings))
        cmd.append(cmd.getLFCRCmd())
        cmd.append(cmd.getPrintEnd()!)
        
        NSLog("Printing to %@", self.manager.currentPrinter.printerPi.address);
        self.manager.currentPrinter.write(cmd.getCmd())
        call.resolve()
    }
}
