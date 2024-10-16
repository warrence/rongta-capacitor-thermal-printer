package com.malik12tree.bluetooth_print;

import android.Manifest;
import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothClass;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.BitmapFactory;
import android.os.Build;
import android.util.Log;

import androidx.annotation.RequiresApi;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import com.rt.printerlibrary.bean.BluetoothEdrConfigBean;
import com.rt.printerlibrary.bean.Position;
import com.rt.printerlibrary.cmd.Cmd;
import com.rt.printerlibrary.cmd.EscFactory;
import com.rt.printerlibrary.connect.PrinterInterface;
import com.rt.printerlibrary.enumerate.BmpPrintMode;
import com.rt.printerlibrary.enumerate.CommonEnum;
import com.rt.printerlibrary.enumerate.ConnectStateEnum;
import com.rt.printerlibrary.enumerate.ESCFontTypeEnum;
import com.rt.printerlibrary.enumerate.SettingEnum;
import com.rt.printerlibrary.factory.cmd.CmdFactory;
import com.rt.printerlibrary.factory.connect.BluetoothFactory;
import com.rt.printerlibrary.factory.connect.PIFactory;
import com.rt.printerlibrary.factory.printer.ThermalPrinterFactory;
import com.rt.printerlibrary.observer.PrinterObserver;
import com.rt.printerlibrary.observer.PrinterObserverManager;
import com.rt.printerlibrary.printer.RTPrinter;
import com.rt.printerlibrary.setting.BitmapSetting;
import com.rt.printerlibrary.setting.TextSetting;

import org.json.JSONException;

import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;

@CapacitorPlugin(
        name = "BluetoothPrint",
        permissions = {
                @Permission(
                        strings = {
                                Manifest.permission.ACCESS_COARSE_LOCATION
                        }, alias = "ACCESS_COARSE_LOCATION"
                ),
                @Permission(
                        strings = {
                                Manifest.permission.ACCESS_FINE_LOCATION
                        }, alias = "ACCESS_FINE_LOCATION"
                ),
                @Permission(
                        strings = {
                                Manifest.permission.BLUETOOTH
                        }, alias = "BLUETOOTH"
                ),
                @Permission(
                        strings = {
                                Manifest.permission.BLUETOOTH_ADMIN
                        }, alias = "BLUETOOTH_ADMIN"
                ),
                @Permission(
                        strings = {
                                Manifest.permission.BLUETOOTH_SCAN
                        }, alias = "BLUETOOTH_SCAN"
                ),
                @Permission(
                        strings = {
                                Manifest.permission.BLUETOOTH_CONNECT
                        }, alias = "BLUETOOTH_CONNECT"
                )
        }

)
public class BluetoothPrintPlugin extends Plugin implements PrinterObserver {
    private static final String TAG = "BluetoothPrintPlugin";

    BluetoothManager bluetoothManager = null;
    BluetoothAdapter mBluetoothAdapter = null;
    ArrayList<String> bluetoothPermissions = new ArrayList<>();

    ArrayList<BluetoothDevice> devices = new ArrayList<>();
    private RTPrinter rtPrinter = null;
    BluetoothEdrConfigBean bluetoothEdrConfigBean = null;
    BroadcastReceiver mBluetoothReceiver = null;
    boolean mRegistered = false;

    private class BluetoothDeviceReceiver extends BroadcastReceiver {

        @SuppressLint("MissingPermission")
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            // When discovery finds a device
            if (BluetoothDevice.ACTION_FOUND.equals(action)) {
                // Get the BluetoothDevice object from the Intent
                BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                int devType = device.getBluetoothClass().getMajorDeviceClass();
                if (devType != BluetoothClass.Device.Major.IMAGING) {
                    return;
                }

                if (!devices.contains(device)) {
                    devices.add(device);
                }

                BluetoothPrintPlugin.this.notifyListeners("discoverDevices", new JSObject() {{
                    put("devices", getJsonDevices());
                }});
            } else if (BluetoothAdapter.ACTION_DISCOVERY_FINISHED.equals(action)) {
                mBluetoothAdapter.cancelDiscovery();
                getContext().unregisterReceiver(mBluetoothReceiver);
                mRegistered = false;
            }
        }
    }

    public BluetoothPrintPlugin() {
        super();

        PrinterObserverManager.getInstance().add(this);
        ThermalPrinterFactory printerFactory = new ThermalPrinterFactory();
        rtPrinter = printerFactory.create();

        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) {
            bluetoothPermissions.add("BLUETOOTH");
            bluetoothPermissions.add("BLUETOOTH_ADMIN");
            bluetoothPermissions.add("ACCESS_FINE_LOCATION");
            bluetoothPermissions.add("ACCESS_COARSE_LOCATION");
        } else {
            bluetoothPermissions.add("BLUETOOTH_CONNECT");
            bluetoothPermissions.add("BLUETOOTH_SCAN");
            bluetoothPermissions.add("ACCESS_FINE_LOCATION");
        }

        Log.d(TAG, "Loading Bluetooth Permissions: " + bluetoothPermissions);

    }

    @Override
    protected void handleOnDestroy() {
        super.handleOnDestroy();

        getContext().unregisterReceiver(mBluetoothReceiver);
        mRegistered = false;

        PrinterObserverManager.getInstance().remove(this);
    }


    @PluginMethod
    @SuppressLint("MissingPermission")
    public void startScan(PluginCall call) {
        if (!bluetoothCheck(call)) return;

        devices = new ArrayList<>();
        mBluetoothReceiver = new BluetoothDeviceReceiver();
        IntentFilter mBluetoothIntentFilter = new IntentFilter();
        mBluetoothIntentFilter.addAction(BluetoothDevice.ACTION_FOUND);
        mBluetoothIntentFilter.addAction(BluetoothAdapter.ACTION_DISCOVERY_FINISHED);

        getContext().registerReceiver(mBluetoothReceiver, mBluetoothIntentFilter);
        boolean success = mBluetoothAdapter.startDiscovery();
        mRegistered = true;

        if (success) {
            call.resolve();
        } else {
            call.reject("Failed to start scan!");
        }
    }

    @PluginMethod
    @SuppressLint("MissingPermission")
    public void stopScan(PluginCall call) {
        if (!bluetoothCheck(call)) return;

        boolean success = mBluetoothAdapter.cancelDiscovery();
        if (mRegistered) {
            getContext().unregisterReceiver(mBluetoothReceiver);
            mRegistered = false;
        }

        if (success) {
            call.resolve();
        } else {
            call.reject("Failed to stop scan!");
        }
    }

    @SuppressLint("MissingPermission")
    @PluginMethod
    public void connect(PluginCall call) {
        String address = call.getString("address");
        if (address == null) {
            call.reject("Please provide address!");
        }

        BluetoothDevice device = null;
        for (BluetoothDevice currentDevice : devices) {
            if (currentDevice.getAddress().equals(address)) {
                device = currentDevice;
                break;
            }
        }
        if (device == null) {
            call.reject("Device not found!");
            return;
        }

        bluetoothEdrConfigBean = new BluetoothEdrConfigBean(device);

        PIFactory piFactory = new BluetoothFactory();
        PrinterInterface printerInterface = piFactory.create();
        printerInterface.setConfigObject(bluetoothEdrConfigBean);
        rtPrinter.setPrinterInterface(printerInterface);
        try {
            rtPrinter.connect(bluetoothEdrConfigBean);

            call.resolve();
        } catch (Exception e) {
            call.reject("Failed to connect!");
        }
    }

    @PluginMethod
    public void writeText(PluginCall call) {
        String data = call.getString("data");
        if (data == null) {
            call.reject("Invalid Data");
            return;
        }

        TextSetting textSetting = new TextSetting();
        textSetting.setUnderline(SettingEnum.Disable);
        textSetting.setEscFontType(ESCFontTypeEnum.FONT_A_12x24);
        _writeRaw(call, (cmd) -> {
            return cmd.getTextCmd(textSetting, data, "UTF-8");
        });
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @PluginMethod
    public void writeImage(PluginCall call) {
        String data = call.getString("data");
        if (data == null) return;

        BitmapSetting bitmapSetting = new BitmapSetting();
        bitmapSetting.setPrintPostion(new Position(0, 0));
        bitmapSetting.setBimtapLimitWidth(45 * 8);
        bitmapSetting.setBmpPrintMode(BmpPrintMode.MODE_SINGLE_COLOR);


        var d = Base64.getDecoder().decode(data.substring(data.indexOf(",") + 1));
        _writeRaw(call, (cmd) -> {
            return cmd.getBitmapCmd(bitmapSetting, BitmapFactory.decodeByteArray(d, 0, d.length));
        });
    }

    byte[] parseCallData(PluginCall call) {
        var start = new Date();

        Log.d(TAG, "Getting Data");
        JSArray dataArray = call.getArray("data");
        if (dataArray == null) {
            call.reject("Invalid Data");
            return null;
        }
        Log.d(TAG, "Got Data");

        var data = new byte[dataArray.length()];
        for (int i = 0; i < dataArray.length(); i++) {
            try {
                data[i] = (byte) (dataArray.getInt(i) & 0xff);
            } catch (JSONException e) {
                call.reject("Invalid Data");
                return null;
            }
        }
        var end = new Date();
        Log.d(TAG, "Parsing Took: " + (end.getTime() - start.getTime()) + "s");

        return data;
    }

    private interface DataFn {
        byte[] getData(Cmd cmd) throws Exception;
    }

    private void _writeRaw(PluginCall call, DataFn dataFn) {
        if (rtPrinter.getPrinterInterface() == null || rtPrinter.getPrinterInterface().getConnectState() != ConnectStateEnum.Connected) {
            call.reject("Printer is not connected!");
            return;
        }

        CmdFactory escFac = new EscFactory();
        Cmd escCmd = escFac.create();
        escCmd.append(escCmd.getHeaderCmd());
        escCmd.setChartsetName("UTF-8");


        try {
            escCmd.append(dataFn.getData(escCmd));
        } catch (Exception e) {
            call.reject("Failed to generate print");
            return;
        }
        escCmd.append(escCmd.getLFCRCmd());
        escCmd.append(escCmd.getLFCRCmd());
        escCmd.append(escCmd.getLFCRCmd());
        escCmd.append(escCmd.getEndCmd());
        rtPrinter.writeMsgAsync(escCmd.getAppendCmds());
    }

    private boolean bluetoothCheck(PluginCall call) {
        if (bluetoothManager == null) {
            bluetoothManager = (BluetoothManager) getContext().getSystemService(Context.BLUETOOTH_SERVICE);
            mBluetoothAdapter = bluetoothManager.getAdapter();
        }


        Log.d(TAG, "Has Bluetooth Permissions: " + hasBluetoothPermission());
        if (!hasBluetoothPermission()) {
            requestPermissionForAliases(
                    bluetoothPermissions.toArray(new String[]{}),
                    call,
                    "permissionCallback"
            );

            return false;
        }

        Log.d(TAG, "Is Bluetooth Enabled: " + mBluetoothAdapter.isEnabled());
        if (mBluetoothAdapter.isEnabled()) {
            return true;
        }

        call.reject("Please enable bluetooth!");
        return false;
    }

    private boolean hasBluetoothPermission() {
//        return getPermissionState("bluetooth") == PermissionState.GRANTED;
        for (String permission : bluetoothPermissions) {
            if (getPermissionState(permission) != PermissionState.GRANTED) {
                return false;
            }
        }

        return true;
    }

    @PermissionCallback
    protected void permissionCallback(PluginCall call) {
        if (hasBluetoothPermission()) {
            try {
                BluetoothPrintPlugin.class
                        .getMethod(call.getMethodName(), PluginCall.class)
                        .invoke(this, call);
            } catch (Exception e) {
                call.reject("Bluetooth method doesn't exit?!");
            }
        } else {
            call.reject("Permission is required to continue!");
        }
    }


    @SuppressLint("MissingPermission")
    private JSArray getJsonDevices() {
        JSArray array = new JSArray();
        for (BluetoothDevice device : devices) {
            array.put(new JSObject() {{
                put("name", device.getName());
                put("address", device.getAddress());
            }});
        }

        return array;
    }

    @Override
    public void printerObserverCallback(PrinterInterface printerInterface, int state) {
        Log.d(TAG, "STATE CHANGE " + state);
        switch (state) {
            case CommonEnum.CONNECT_STATE_SUCCESS:
                rtPrinter.setPrinterInterface(printerInterface);
                notifyListeners("connected", null);
                break;
            case CommonEnum.CONNECT_STATE_INTERRUPTED:
                notifyListeners("disconnected", null);
                break;
        }
    }

    @Override
    public void printerReadMsgCallback(PrinterInterface printerInterface, byte[] bytes) {
    }
}
