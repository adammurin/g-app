import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { VypoctyService } from '../../providers/vypocty-service/vypocty-service';

/**
 * Generated class for the VypoctyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vypocty-detail',
  templateUrl: 'vypocty-detail.html',
  providers: [VypoctyService]
})
export class VypoctyDetailPage {

  id;
	nazov;
	text;
  results = [];
  shadowArea;
  calculation_type;
  widthLabel;
  heightLabel;
  width;
  height;

  showResults = false;

  private formOne : FormGroup;
  private formTwo : FormGroup;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public vypoctyService: VypoctyService, private formBuilder: FormBuilder) {

    this.formOne = this.formBuilder.group({
      width: [''],
      height: [''],
      area: ['', Validators.required],
    });

    this.formTwo = this.formBuilder.group({
      width: ['', Validators.required],
      height: ['', Validators.required],
      area: [''],
    });
  	
	}

  ionViewDidLoad() {
    this.id = this.navParams.get('vypocet').id;
    this.nazov = this.navParams.get('vypocet').nazov;
    this.text = this.navParams.get('vypocet').text;
    this.calculation_type = this.navParams.get('vypocet').calculation_type;
    this.widthLabel = this.navParams.get('vypocet').width_label;
    this.heightLabel = this.navParams.get('vypocet').height_label;
  }

  viewItem(vypocet){
    this.navCtrl.push(VypoctyDetailPage, {
      vypocet: vypocet
    });
  }

  calcArea(val){
    if(this.formOne.value.width && this.formOne.value.height){
      this.shadowArea = this.formOne.value.width * this.formOne.value.height;
    }
    if(this.formTwo.value.width && this.formTwo.value.height){
      this.shadowArea = this.formTwo.value.width * this.formTwo.value.height;
    }
  }

  clearInputs(){
    this.width = '';
    this.height = '';
  }

  logForm(){

    this.results = [];

    this.showResults = true;

    switch(this.id) {
      case 1:
        var val1 = Math.ceil(this.shadowArea/2.4);
        var val2 = Math.ceil(this.shadowArea*2/3);
        if(this.width!=''&&this.height!=''){
          var val3 = Math.ceil((Number(this.width)+Number(this.height))*2/3);
        }else {
          var val3 = Math.ceil(this.shadowArea*0.22);
        }
        if(this.width!=''&&this.height!=''){
          var val4 = Math.ceil((Number(this.width)+Number(this.height))*2/30);
        }else {
          var val4 = Math.ceil(this.shadowArea*0.66/30);
        }
        var val5 = val3*6;
        var val6 = Math.ceil(this.shadowArea*2.2);
        var val7 = val2/2;
        var val8 = Math.ceil(this.shadowArea*18);
        var val9 = Math.ceil(this.shadowArea*0.3);
        var val10 = Math.ceil(this.shadowArea*0.15);
        var val11 = Math.ceil(this.shadowArea*1.66);
        var val12 = Math.ceil(this.shadowArea*0.066);
        this.results.push(
          {"name":"Sadrokartón 120x200 cm","unit":"ks","value":val1},
          {"name":"CD profil 3m","unit":"ks","value":val2},
          {"name":"Obvodový UD profil 3m","unit":"ks","value":val3},
          {"name":"PVC pás pod UD profil 30m","unit":"ks","value":val4},
          {"name":"Hmoždinka do UD profilu","unit":"ks","value":val5},
          {"name":"Záves s príslušenstvom","unit":"ks","value":val6},
          {"name":"Predlžovacia spojka na CD","unit":"ks","value":val7},
          {"name":"Skrutky do sadrokartónu","unit":"ks","value":val8},
          {"name":"Základný tmel","unit":"kg","value":val9},
          {"name":"Finišový tmel","unit":"kg","value":val10},
          {"name":"Výstužná páska","unit":"bm","value":val11},
          {"name":"Akryl 310ml","unit":"ks","value":val12}
        );
        break;
      case 2:
        var val1 = Math.ceil(this.shadowArea/2.4);
        var val2 = Math.ceil(this.shadowArea);
        if(this.width!=''&&this.height!=''){
          var val3 = Math.ceil((Number(this.width)+Number(this.height))*2/3);
        }else {
          var val3 = Math.ceil(this.shadowArea*0.22);
        }
        if(this.width!=''&&this.height!=''){
          var val4 = Math.ceil((Number(this.width)+Number(this.height))*2/30);
        }else {
          var val4 = Math.ceil(this.shadowArea*0.66/30);
        }
        var val5 = val3*6;
        var val6 = Math.ceil(this.shadowArea*1.1);
        var val7 = Math.ceil(this.shadowArea*0.75);
        var val8 = Math.ceil(this.shadowArea*18);
        var val9 = Math.ceil(this.shadowArea*0.3);
        var val10 = Math.ceil(this.shadowArea*0.15);
        var val11 = Math.ceil(this.shadowArea*1.66);
        var val12 = Math.ceil(this.shadowArea*0.066);
        var val13 = Math.ceil(val2/2);
        this.results.push(
          {"name":"Sadrokartón 120x200 cm","unit":"ks","value":val1},
          {"name":"CD profil 3m","unit":"ks","value":val2},
          {"name":"Obvodový UD profil 3m","unit":"ks","value":val3},
          {"name":"PVC pás pod UD profil 30m","unit":"ks","value":val4},
          {"name":"Hmoždinka do UD profilu","unit":"ks","value":val5},
          {"name":"Záves s príslušenstvom","unit":"ks","value":val6},
          {"name":"Križová spojka na CD","unit":"ks","value":val13},
          {"name":"Predlžovacia spojka na CD","unit":"ks","value":val7},
          {"name":"Skrutky do sadrokartónu","unit":"ks","value":val8},
          {"name":"Základný tmel","unit":"kg","value":val9},
          {"name":"Finišový tmel","unit":"kg","value":val10},
          {"name":"Výstužná páska","unit":"bm","value":val11},
          {"name":"Akryl 310ml","unit":"ks","value":val12}
        );
        break;
      case 3:
        var val1 = Math.ceil(this.shadowArea/2.4);
        var val2 = Math.ceil(this.shadowArea*2/3);
        if(this.width!=''&&this.height!=''){
          var val3 = Math.ceil((Number(this.width)+Number(this.height))*2/3);
        }else {
          var val3 = Math.ceil(this.shadowArea*0.22);
        }
        if(this.width!=''&&this.height!=''){
          var val4 = Math.ceil((Number(this.width)+Number(this.height))*2/30);
        }else {
          var val4 = Math.ceil(this.shadowArea*0.66/30);
        }
        var val5 = val3*6;
        var val6 = Math.ceil(this.shadowArea*2.2);
        var val7 = val2/2;
        var val8 = Math.ceil(this.shadowArea*18);
        var val9 = Math.ceil(this.shadowArea*0.3);
        var val10 = Math.ceil(this.shadowArea*0.15);
        var val11 = Math.ceil(this.shadowArea*1.66);
        var val12 = Math.ceil(this.shadowArea*0.066);
        var val13 = Math.ceil(this.shadowArea);
        var val14 = Math.ceil(this.shadowArea*1.1);
        this.results.push(
          {"name":"Sadrokartón 120x200 cm","unit":"ks","value":val1},
          {"name":"CD profil 3m","unit":"ks","value":val2},
          {"name":"Obvodový UD profil 3m","unit":"ks","value":val3},
          {"name":"PVC pás pod UD profil 30m","unit":"ks","value":val4},
          {"name":"Hmoždinka do UD profilu","unit":"ks","value":val5},
          {"name":"Záves s príslušenstvom","unit":"ks","value":val6},
          {"name":"Predlžovacia spojka na CD","unit":"ks","value":val7},
          {"name":"Skrutky do sadrokartónu","unit":"ks","value":val8},
          {"name":"Základný tmel","unit":"kg","value":val9},
          {"name":"Finišový tmel","unit":"kg","value":val10},
          {"name":"Výstužná páska","unit":"bm","value":val11},
          {"name":"Akryl 310ml","unit":"ks","value":val12},
          {"name":"Tepelná izolácia","unit":"m<sup>2</sup>","value":val13},
          {"name":"Parozábranná fólia","unit":"m<sup>2</sup>","value":val14}
        );
        break;
      case 4:
        var val1 = Math.ceil(this.shadowArea/2.4*2);
        var val2 = Math.ceil(this.width/0.6+1);
        var val3 = Math.ceil(this.width/4*2);
        var val4 = Math.ceil(this.width*2/30);
        var val5 = Math.ceil(this.width*2/0.8);
        var val6 = Math.ceil(this.shadowArea*2*12);
        var val7 = Math.ceil(this.shadowArea*2*0.3);
        var val8 = Math.ceil(this.shadowArea*2*0.15);
        var val9 = Math.ceil(this.shadowArea*2*1.66);
        var val10 = Math.ceil(this.shadowArea*2*0.066);
        this.results.push(
          {"name":"Sadrokartón 120x200 cm","unit":"ks","value":val1},
          {"name":"Zvislý CW profil podľa výšky","unit":"ks","value":val2},
          {"name":"Obvodový UW profil 4m","unit":"ks","value":val3},
          {"name":"PVC pás pod UW profil 30m","unit":"ks","value":val4},
          {"name":"Hmoždinka do UW profilu","unit":"ks","value":val5},
          {"name":"Skrutky do sadrokartónu","unit":"ks","value":val6},
          {"name":"Základný tmel","unit":"kg","value":val7},
          {"name":"Finišový tmel","unit":"kg","value":val8},
          {"name":"Výstužná páska","unit":"bm","value":val9},
          {"name":"Akryl 310ml","unit":"ks","value":val10}
        );
        break;
      case 5:
        var val1 = Math.ceil(this.shadowArea/2.4);
        var val2 = Math.ceil(this.width/0.6+1);
        var val3 = Math.ceil(this.width/4*2);
        var val4 = Math.ceil(this.width*2/30);
        var val5 = Math.ceil(this.width*2/0.8);
        var val6 = Math.ceil(this.shadowArea*12);
        var val7 = Math.ceil(this.shadowArea*0.3);
        var val8 = Math.ceil(this.shadowArea*0.15);
        var val9 = Math.ceil(this.shadowArea*1.66);
        var val10 = Math.ceil(this.shadowArea*0.066);
        this.results.push(
          {"name":"Sadrokartón 120x200 cm","unit":"ks","value":val1},
          {"name":"Zvislý CW profil podľa výšky","unit":"ks","value":val2},
          {"name":"Obvodový UW profil 4m","unit":"ks","value":val3},
          {"name":"PVC pás pod UW profil 30m","unit":"ks","value":val4},
          {"name":"Hmoždinka do UW profilu","unit":"ks","value":val5},
          {"name":"Skrutky do sadrokartónu","unit":"ks","value":val6},
          {"name":"Základný tmel","unit":"kg","value":val7},
          {"name":"Finišový tmel","unit":"kg","value":val8},
          {"name":"Výstužná páska","unit":"bm","value":val9},
          {"name":"Akryl 310ml","unit":"ks","value":val10}
        );
        break;
      case 6:
        var val1 = Math.ceil(this.shadowArea/2.4);
        var val2 = Math.ceil(this.width/0.6+1);
        var val3 = Math.ceil(this.width/3*2);
        var val4 = Math.ceil(this.width*2/30);
        var val5 = Math.ceil(this.width*2/0.8);
        var val6 = Math.ceil(this.height*val2);
        var val7 = Math.ceil(this.height*val2);
        var val8 = Math.ceil(this.height*val2*4);
        var val9 = Math.ceil(this.shadowArea*12);
        var val10 = Math.ceil(this.shadowArea*0.3);
        var val11 = Math.ceil(this.shadowArea*0.15);
        var val12 = Math.ceil(this.shadowArea*1.66);
        var val13 = Math.ceil(this.shadowArea*0.066);
        this.results.push(
          {"name":"Sadrokartón 120x200 cm","unit":"ks","value":val1},
          {"name":"Zvislý CD profil podľa výšky","unit":"ks","value":val2},
          {"name":"Obvodový UD profil 3m","unit":"ks","value":val3},
          {"name":"PVC pás pod UD profil 30m","unit":"ks","value":val4},
          {"name":"Hmoždinka do UD profilu","unit":"ks","value":val5},
          {"name":"Záves","unit":"ks","value":val6},
          {"name":"Hmoždinka do závesu","unit":"ks","value":val7},
          {"name":"Skrutky TEX","unit":"ks","value":val8},
          {"name":"Skrutky do sadrokartónu","unit":"ks","value":val9},
          {"name":"Základný tmel","unit":"kg","value":val10},
          {"name":"Finišový tmel","unit":"kg","value":val11},
          {"name":"Výstužná páska","unit":"bm","value":val12},
          {"name":"Akryl 310ml","unit":"ks","value":val13}
        );
        break;
      case 7:
        var val1 = Math.ceil(this.shadowArea);
        var val2 = Math.ceil(this.shadowArea*6);
        var val3 = Math.ceil(this.shadowArea*0.1);
        var val4 = Math.ceil(this.shadowArea*0.3);
        var val5 = Math.ceil(this.shadowArea*0.15);
        var val6 = Math.ceil(this.shadowArea*1.66);
        var val7 = Math.ceil(this.shadowArea*0.066);
        this.results.push(
          {"name":"Sadrokartón podľa výšky","unit":"ks","value":val1},
          {"name":"Lepidlo na sadrokartón","unit":"kg","value":val2},
          {"name":"Penetračný náter","unit":"kg","value":val3},
          {"name":"Základný tmel","unit":"kg","value":val4},
          {"name":"Finišový tmel","unit":"kg","value":val5},
          {"name":"Výstužná páska","unit":"bm","value":val6},
          {"name":"Akryl 310ml","unit":"ks","value":val7}
        );
        break;
      case 8:
        var val1 = Math.ceil(this.shadowArea/0.36);
        var val2 = Math.ceil(this.shadowArea*0.232);
        var val3 = Math.ceil(this.shadowArea*1.388);
        var val4 = Math.ceil(this.shadowArea*1.388);
        if(this.width!=''&&this.height!=''){
          var val5 = Math.ceil((Number(this.width)+Number(this.height))*2/3);
        }else {
          var val5 = Math.ceil(this.shadowArea*0.22);
        }
        var val6 = val5*3*2;
        var val7 = Math.ceil(this.shadowArea*0.8);
        this.results.push(
          {"name":"Kazety","unit":"ks","value":val1},
          {"name":"Hlavné profily 360 cm","unit":"ks","value":val2},
          {"name":"Priečne profily 120 cm","unit":"ks","value":val3},
          {"name":"Priečne profily 60 cm","unit":"ks","value":val4},
          {"name":"Obvodové L profily 300 cm","unit":"ks","value":val5},
          {"name":"Hmoždinky na obvodové profily","unit":"ks","value":val6},
          {"name":"Závesy","unit":"ks","value":val7}
        );
        break;
      case 9:
        var val1 = Math.ceil(this.shadowArea);
        var val2 = Math.ceil(this.shadowArea*6);
        var val3 = Math.ceil(this.shadowArea*6);
        var val4 = Math.ceil(this.shadowArea*1.1);
        var val5 = Math.ceil(this.shadowArea*6);
        var val6 = Math.ceil(this.shadowArea*2.4);
        var val7 = Math.ceil(this.shadowArea*0.2);
        this.results.push(
          {"name":"Minerálna vlna podľa hrúbky","unit":"m<sup>2</sup>","value":val1},
          {"name":"Lepiaca malta","unit":"kg","value":val2},
          {"name":"Stierkovacia malta","unit":"kg","value":val3},
          {"name":"Sklotextilná sieťka","unit":"m<sup>2</sup>","value":val4},
          {"name":"Kotviace hmoždinky","unit":"ks","value":val5},
          {"name":"Omietka 1,5 mm zrno","unit":"kg","value":val6},
          {"name":"Penetračný náter","unit":"kg","value":val7}
        );
        break;
      case 10:
        var val1 = Math.ceil(this.shadowArea);
        var val2 = Math.ceil(this.shadowArea*4);
        var val3 = Math.ceil(this.shadowArea*4);
        var val4 = Math.ceil(this.shadowArea*1.1);
        var val5 = Math.ceil(this.shadowArea*5);
        var val6 = Math.ceil(this.shadowArea*2.4);
        var val7 = Math.ceil(this.shadowArea*0.2);
        this.results.push(
          {"name":"Polystyrén podľa hrúbky","unit":"m<sup>2</sup>","value":val1},
          {"name":"Lepiaca malta","unit":"kg","value":val2},
          {"name":"Stierkovacia malta","unit":"kg","value":val3},
          {"name":"Sklotextilná sieťka","unit":"m<sup>2</sup>","value":val4},
          {"name":"Kotviace hmoždinky","unit":"ks","value":val5},
          {"name":"Omietka 1,5 mm zrno","unit":"kg","value":val6},
          {"name":"Penetračný náter","unit":"kg","value":val7}
        );
        break;
    }
  }

}
