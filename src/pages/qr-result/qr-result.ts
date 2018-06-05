import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-qr-result',
  templateUrl: 'qr-result.html'
})

export class QrResultPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner, private barcodeScanner: BarcodeScanner,private toast: Toast) {

  }

  ionViewDidLoad() {
    console.log("QR RESULT");
  }

}
