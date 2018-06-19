import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NamesService } from '../../providers/names-service/names-service';
import { LetakyService } from '../../providers/letaky-service/letaky-service';
import { Platform } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NamesService,LetakyService]
})
export class HomePage {

	names: any;
  letaky: any;
	date;
	todayName;
  photos: any;
  modal;
	  
  	constructor(public navCtrl: NavController, public namesService: NamesService, public letakyService: LetakyService, public modalCtrl: ModalController, public platform: Platform){
    
    	this.getNames();
      this.getLetaky();
  	}

    getNames() {
      this.namesService.getNames()
      .then(data => {
        this.names = data;
        this.setDateAndName();
      });
    }

    getLetaky() {
    this.platform.ready().then(() => {
      this.letakyService.getLetaky()
      .then(data => {
        this.letaky = data;
        this.letaky = this.letaky.actions;
        this.photos = this.letaky;
        this.setupModal();
      });
      });
    }

    setDateAndName() {
  		var today  = new Date();
  		var month = today.getMonth();
  		var day = today.getDate();
  		this.date = today.toLocaleDateString("sk-SK");
  		this.todayName = this.names[month][day];
    }

    setupModal() {
      var i;
      for(i = 0; i < this.photos.length; i++){
          this.photos[i].url = this.photos[i]['img_url'];
          this.photos[i].index = i;
          delete this.photos[i].img_url;
      }
    }

    openModal(index) {
      this.modal = this.modalCtrl.create(GalleryModal, {
        photos: this.photos,
        initialSlide: index
      });
      this.modal.present();
    }


}
