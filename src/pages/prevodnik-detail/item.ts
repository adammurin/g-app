import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-prevodnik-detail',
  templateUrl: 'item.html'
})

export class PrevodnikDetailPage {

	private formOne : FormGroup;
	private formTwo : FormGroup;

	category;

	categories: any;
	lengths: any;
	items: any;

	convertFrom;
	convertTo;
	onvertFromVal;
	convertToVal;
	convertFromRate;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

  this.formOne = this.formBuilder.group({
      category: [''],
    });

   this.formTwo = this.formBuilder.group({
   		length: [''],
      convertFrom: [''],
      convertTo: [''],
      convertFromVal: ['', Validators.required],
      convertToVal: [''],
      convertFromRate: [''],
    });

  }

  ionViewDidLoad() {
  	this.setOptions();
  	this.items = this.lengths;
  	this.convertTo = this.items[0].rate;
  	this.convertFromVal = "1";
  	this.convertFrom = this.items[3].rate;
  	this.category = this.categories[0];
  	this.valueSelected();
  }

  setOptions() {
  	this.categories = [
  		{
  			"name": "Dĺžka",
  			"key": "lengths"
  		},
  		{
  			"name": "Hmotnosť",
  			"key": "weights"
  		},
  		{
  			"name": "Plocha",
  			"key": "areas"
  		},
  		{
  			"name": "Čas",
  			"key": "times"
  		}
  	],
  	this.lengths = [
		{
			"code": "mm",
			"name": "Milimeter",
			"rate": "0.001"
		},
		{
			"code": "cm",
			"name": "Centimeter",
			"rate": "0.01"
		},
		{
			"code": "dm",
			"name": "Decimeter",
			"rate": "0.1"
		},
		{
			"code": "m",
			"name": "Meter",
			"rate": "1"
		},
		{
			"code": "km",
			"name": "Kilometer",
			"rate": "1000"
		},
		{
			"code": "inch",
			"name": "Palec",
			"rate": "0.0254"
		},
		{
			"code": "",
			"name": "Stopa",
			"rate": "0.3048"
		},
		{
			"code": "",
			"name": "Yard",
			"rate": "0.9144"
		},
		{
			"code": "",
			"name": "Míľa",
			"rate": "1609.344"
		},
		{
			"code": "",
			"name": "Námorná míľa",
			"rate": "1852"
		}
	];
	this.weights = [
		{
			"code": "mg",
			"name": "Miligram",
			"rate": "0.001"
		},
		{
			"code": "g",
			"name": "Gram",
			"rate": "0.01"
		},
		{
			"code": "kg",
			"name": "Kilogram",
			"rate": "0.1"
		},
		{
			"code": "t",
			"name": "Tona",
			"rate": "1"
		},
		{
			"code": "oz",
			"name": "Unca",
			"rate": "1000"
		},
		{
			"code": "lb",
			"name": "Libra",
			"rate": "0.0254"
		}
	];
	this.areas = [
		{
			"code": "mg",
			"name": "Miligram",
			"rate": "0.001"
		},
		{
			"code": "g",
			"name": "Gram",
			"rate": "0.01"
		},
		{
			"code": "kg",
			"name": "Kilogram",
			"rate": "0.1"
		},
		{
			"code": "t",
			"name": "Tona",
			"rate": "1"
		},
		{
			"code": "oz",
			"name": "Unca",
			"rate": "1000"
		},
		{
			"code": "lb",
			"name": "Libra",
			"rate": "0.0254"
		}
	];
	this.times = [
		{
			"code": "",
			"name": "Nanosekunda",
			"rate": "0.001"
		},
		{
			"code": "",
			"name": "Mikrosekunda",
			"rate": "0.01"
		},
		{
			"code": "",
			"name": "Milisekunda",
			"rate": "0.1"
		},
		{
			"code": "",
			"name": "Sekunda",
			"rate": "1"
		},
		{
			"code": "",
			"name": "Minúta",
			"rate": "1"
		},
		{
			"code": "",
			"name": "Hodina",
			"rate": "0.0254"
		},
		{
			"code": "",
			"name": "Deň",
			"rate": "0.0254"
		},
		{
			"code": "",
			"name": "Týždeň",
			"rate": "0.0254"
		},
		{
			"code": "",
			"name": "Mesiac",
			"rate": "0.0254"
		},
		{
			"code": "",
			"name": "Rok",
			"rate": "0.0254"
		}
	];
  }

   categorySelected() {
   console.log(this.category);
   	if(this.category == "lengths"){
		this.items = this.lengths;
   	} else if(this.category == "weights") {
  		this.items = this.weights;
  	} else if(this.category == "areas") {
  		this.items = this.areas;
  	} else if(this.category == "times") {
  		this.items = this.times;
  	}
  }

  valueSelected() {
  	var temp = this.convertFromVal * this.convertFrom / this.convertTo;
  	temp = this.round(temp,5);
	this.convertToVal = temp;
  	console.log(this.convertToVal);

  }

  convert() {
  	console.log(this.convertFromRate);
  }

  round(number, precision) {
	  var shift = function (number, precision) {
	    var numArray = ("" + number).split("e");
	    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
	  };
	  return shift(Math.round(shift(number, +precision)), -precision);
	}

}
