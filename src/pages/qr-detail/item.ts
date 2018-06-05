import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-qr-detail',
  templateUrl: 'item.html'
})

export class QrDetailPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner, private barcodeScanner: BarcodeScanner,private toast: Toast, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.scan();
  }


    scan() {
      //this.selectedProduct = {};
      this.barcodeScanner.scan().then((barcodeData) => {
          console.log('Barcode data', barcodeData.text);
          //this.showResult(barcodeData);
          /*this.toast.show(barcodeData.text, '50000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
          */
      }, (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    }

    showResult(barcodeData) {
      let alert = this.alertCtrl.create({
        title: 'Kód',
        subTitle: barcodeData.text,
        buttons: ['OK']
      });
      alert.present();
    }
}
