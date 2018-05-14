import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-qr-detail',
  templateUrl: 'item.html'
})

export class QrDetailPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner, private barcodeScanner: BarcodeScanner) {

  }

  ionViewDidLoad() {
  	this.initScanner();
  }


	initScanner(){


this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted
       console.log("permission ok");

       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
       console.log("permission not ok, permanently");
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
       console.log("permission not ok, temporarly");
     }
  })
  .catch((e: any) => console.log('Error is', e));

	}
}
