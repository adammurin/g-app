import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-vzdialenost-detail',
  templateUrl: 'item.html'
})

export class VzdialenostDetailPage {

	startCoordsLat;
	startCoordsLong;
	endCoordsLat;
	endCoordsLong;
	distance;
	step = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

  }

  ionViewDidLoad() {
  	
  }

  startTracker() {
   		//this.startCoords = this.getLocData();
	  	this.geolocation.getCurrentPosition().then((resp) => {
	  		this.startCoordsLat = resp.coords.latitude;
	  		this.startCoordsLong = resp.coords.longitude;
	  		this.step = 2;
		}).catch((error) => {
			console.log('Error getting location', error);
		});
  }

	endTracker() {
	  	this.geolocation.getCurrentPosition().then((resp) => {
	  		this.endCoordsLat = resp.coords.latitude;
	  		this.endCoordsLong = resp.coords.longitude;
	  		this.distance = this.getDistanceFromLatLonInKm(this.startCoordsLat,this.startCoordsLong,this.endCoordsLat,this.endCoordsLong);
	  		this.step = 3;
		}).catch((error) => {
			console.log('Error getting location', error);
		});
	}

	resetTracker() {
		this.startCoordsLat = '';
  		this.startCoordsLong = '';
  		this.endCoordsLat = '';
  		this.endCoordsLong = '';
  		this.distance = 0;
  		this.step = 1;
	}

	getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
		  var R = 6371000; // Radius of the earth in km
		  var dLat = this.deg2rad(lat2-lat1);
		  var dLon = this.deg2rad(lon2-lon1); 
		  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
		    ; 
		  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		  var d = Math.round(R * c * 10)/10;
		  return d;
		}

	deg2rad(deg) {
	  return deg * (Math.PI/180)
	}


  getLocData() {

  	this.geolocation.getCurrentPosition().then((resp) => {
	 console.log(resp.coords.latitude);
	}).catch((error) => {
	  console.log('Error getting location', error);
	});
/*
	let watch = this.geolocation.watchPosition();
	watch.subscribe((data) => {
	 // data can be a set of coordinates, or an error (if an error occurred).
	 // data.coords.latitude
	 // data.coords.longitude
	});

	*/
}

}
