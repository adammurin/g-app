import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NastrojeDetailPage } from '../nastroje-detail/item';
import { MeterDetailPage } from '../meter-detail/item';
import { PrevodnikDetailPage } from '../prevodnik-detail/item';
import { VzdialenostDetailPage } from '../vzdialenost-detail/item';
import { QrDetailPage } from '../qr-detail/item';

@Component({
  selector: 'page-nastroje',
  templateUrl: 'list.html'
})
export class NastrojePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


    viewMeter(){
      this.navCtrl.push(MeterDetailPage, {

      });
    }
    viewPrevodnik(){
      this.navCtrl.push(PrevodnikDetailPage, {

      });
    }
    viewVzdialenost(){
      this.navCtrl.push(VzdialenostDetailPage, {

      });
    }
    viewQr(){
      this.navCtrl.push(QrDetailPage, {

      });
    }
}
