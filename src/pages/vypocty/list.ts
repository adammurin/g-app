import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VypoctyService } from '../../providers/vypocty-service/vypocty-service';
import { VypoctyDetailPage } from '../vypocty-detail/vypocty-detail';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-vypocty',
  templateUrl: 'list.html',
  providers: [VypoctyService]
})
export class VypoctyPage {

  vypocty: any;

  private form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public vypoctyService: VypoctyService, private formBuilder: FormBuilder) {
    this.getVypocty();
    this.form = this.formBuilder.group({
      width: [''],
      height: [''],
      area: ['', Validators.required],
    });
    
  }

  getVypocty() {
    this.vypoctyService.getVypocty()
    .then(data => {
      this.vypocty = data;
      console.log(this.vypocty);
    });
  }

  viewItem(vypocet){
    this.navCtrl.push(VypoctyDetailPage, {
      vypocet: vypocet
    });
  }

  showResults(){

  }

  logForm(){
    console.log(this.form.value.area/2.4);
    console.log(this.form.value);
  }

}
