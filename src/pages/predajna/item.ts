import { Component, ViewChild, ElementRef } from '@angular/core'; 
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-predajna',
  templateUrl: 'item.html'
})

export class PredajnaPage {
  //map: GoogleMap;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.platform.ready().then(() =>
      console.log('toast')
    );
  }

  ionViewDidLoad() {
    //this.loadMap();
    //this.initMap();
  }

  loadMap() {
    console.log("map init");
    // Create a map after the view is ready and the native platform is ready.
    this.map = GoogleMaps.create('map_canvas');



    this.map.addMarker({
      title: 'Gipsol - predajňa stavebnín a sadrokartónové centrum',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 48.1441051,
        lng: 17.1496938
      }
    }).then((marker: Marker) => {

      marker.showInfoWindow();

    });
  }
  initMap() {
    console.log(document.getElementById('map'));
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
}
