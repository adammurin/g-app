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
	weights: any;
	times: any;
	areas: any;
	items: any;

	convertFrom;
	convertTo;
	convertFromVal;
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
  	this.convertTo = this.items[1].rate;
  	this.convertFromVal = "1";
  	this.convertFrom = this.items[3].rate;
  	this.category = this.categories[0].key;
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
			"rate": "0.000001"
		},
		{
			"code": "g",
			"name": "Gram",
			"rate": "0.001"
		},
		{
			"code": "kg",
			"name": "Kilogram",
			"rate": "1"
		},
		{
			"code": "t",
			"name": "Tona",
			"rate": "1000"
		},
		{
			"code": "oz",
			"name": "Unca",
			"rate": "0.028349523125"
		},
		{
			"code": "lb",
			"name": "Libra",
			"rate": "0.45359237"
		}
	];
	this.areas = [
		{
			"code": "",
			"name": "Milimeter štvorcový",
			"rate": "0.000001"
		},
		{
			"code": "",
			"name": "Centimeter štvorcový",
			"rate": "0.0001"
		},
		{
			"code": "",
			"name": "Decimeter štvorcový",
			"rate": "0.01"
		},
		{
			"code": "",
			"name": "Meter štvorcový",
			"rate": "1"
		},
		{
			"code": "",
			"name": "Kilometer štvorcový",
			"rate": "1000000"
		},
		{
			"code": "",
			"name": "Ár",
			"rate": "100"
		},
		{
			"code": "",
			"name": "Hektár",
			"rate": "10000"
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
			"rate": "60"
		},
		{
			"code": "",
			"name": "Hodina",
			"rate": "3600"
		},
		{
			"code": "",
			"name": "Deň",
			"rate": "86400"
		},
		{
			"code": "",
			"name": "Týždeň",
			"rate": "604800"
		},
		{
			"code": "",
			"name": "Mesiac",
			"rate": "2419200"
		},
		{
			"code": "",
			"name": "Rok",
			"rate": "29030400"
		}
	];
  }

   categorySelected() {
   	if(this.category == "lengths"){
		this.items = this.lengths;
   	} else if(this.category == "weights") {
  		this.items = this.weights;
  	} else if(this.category == "areas") {
  		this.items = this.areas;
  	} else if(this.category == "times") {
  		this.items = this.times;
  	}
  	this.convertTo = this.items[1].rate;
  	this.convertFrom = this.items[3].rate;
  	this.valueSelected();
  }

  valueSelected() {
  	var temp = this.convertFromVal * this.convertFrom / this.convertTo;
  	temp = this.round(temp,5);
	this.convertToVal = temp;
  }

  valueSelectedOposite() {
  	var temp = this.convertToVal * this.convertTo / this.convertFrom;
  	temp = this.round(temp,5);
	this.convertFromVal = temp;
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
