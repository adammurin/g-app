import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostupyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postupy-detail',
  templateUrl: 'postupy-detail.html',
})
export class PostupyDetailPage {

	nazov;
	text;
	slides;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	}

  ionViewDidLoad() {
    this.nazov = this.navParams.get('postup').nazov;
    this.text = this.navParams.get('postup').text;
    this.slides = this.navParams.get('postup').slides;
  }

}
