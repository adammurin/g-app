import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-meter-detail',
  templateUrl: 'item.html'
})

export class MeterDetailPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight) {

  }

  ionViewDidLoad() {
    this.turnOnFlashlight();
  }

  turnOnFlashlight(){
    this.flashlight.switchOn();
  }

}
