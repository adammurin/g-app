import { Component, ViewChild, ElementRef } from '@angular/core'; 
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-kontakty',
  templateUrl: 'item.html'
})

export class KontaktyPage {
  
  showInfoFirst = false;
  showInfoSecond = false;
  showInfoThird = false;
  showInfoFourth = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.platform.ready().then(() =>
      console.log('toast')
    );
  }

  ionViewDidLoad() {

  }

  showRowInfoFirst() {
    this.showInfoFirst = !this.showInfoFirst ;
  }

  showRowInfoSecond() {
    this.showInfoSecond = !this.showInfoSecond ;
  }

  showRowInfoThird() {
    this.showInfoThird = !this.showInfoThird ;
  }

  showRowInfoFourth() {
    this.showInfoFourth = !this.showInfoFourth ;
  }

}
