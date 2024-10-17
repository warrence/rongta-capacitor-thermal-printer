import { Component, NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BluetoothPrint } from 'capacitor-thermal-printer';

Object.assign(window, { BluetoothPrint });

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  devices: any = [];
  constructor(zone: NgZone, private toastController: ToastController) {
    BluetoothPrint.addListener('discoverDevices', async ({ devices }) => {
      zone.run(() => {
        this.devices = devices
      })
    });
    BluetoothPrint.addListener('connected', async () => {
      const toast = await this.toastController.create({
        message: 'Connected!',
        duration: 1500,
        position: 'bottom',
        color: 'success'
      });

      await toast.present();
    })
    BluetoothPrint.addListener('disconnected', async () => {
      const toast = await this.toastController.create({
        message: 'Disconnected!',
        duration: 1500,
        position: 'bottom',
        color: 'warning'
      });

      await toast.present();
    })
    BluetoothPrint.addListener('datachanged', async () => {
      const toast = await this.toastController.create({
        message: 'Data Changed!',
        duration: 1500,
        position: 'bottom',
      });

      await toast.present();
    })
  }
  async connectDevice(device: any) {
    await BluetoothPrint.connect({
      address: device.address
    })
  }
  getDevices() {
    this.devices = [];
    BluetoothPrint.startScan();
  }

  printImage() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    const fileHandler = () => {
      fileInput.removeEventListener('change', fileHandler)

      if (!fileInput.files!.length) return;


      const reader = new FileReader();
      reader.onload = async () => {
        BluetoothPrint.writeImage({
          data: reader.result as string
        }).catch(e => this.catchPrintError(e));;
      }
      reader.readAsDataURL(fileInput!.files![0]);
    };
    fileInput.addEventListener('change', fileHandler)
    fileInput.click()
  }
  printText(text: string | null | undefined) {
    if (!text) return;

    if (!text.endsWith('\n')) text += '\n';

    BluetoothPrint.writeText({
      data: text
    }).catch(e => this.catchPrintError(e));
  }

  private async catchPrintError(error: Error) {
    const toast = await this.toastController.create({
      message: 'Error: ' + error.message,
      duration: 1500,
      position: 'bottom',
      color: 'danger',
    });

    await toast.present();
  }
}


