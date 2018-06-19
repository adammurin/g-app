import { Component, ViewChild, ElementRef } from '@angular/core'; 
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-predajna',
  templateUrl: 'item.html'
})

export class PredajnaPage {

  @ViewChild('map') mapElement;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

  }

  ionViewDidLoad() {
    this.jsMap();
  }

  jsMap() {
    let latLng = new google.maps.LatLng(48.14378476391087, 17.148028099987513);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      gestureHandling: 'cooperative',
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
      position: latLng, 
      map: this.map,
      title: 'Gipsol Stavebniny a Sadrokartóny',
      animation: google.maps.Animation.DROP,
    });
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">Gipsol, a.s.</h2>'+
        '<div id="bodyContent">'+
        '<p><b>Predajňa stavebnín a sadrokartónové centrum</b></p>' +
        '<p>Mlynské nivy 56, 821 09 Bratislava</p>'+
        '<p><a href="https://www.google.sk/maps/dir//Gipsol,+a.s.,+Mlynsk%C3%A9+nivy+56,+821+09+Bratislava/@48.1445478,17.1417274,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x476c8927c44f20c9:0x1ab38d5cc80390e5!2m2!1d17.147953!2d48.143817!3e0" target="_blank">Navigovať</a></p>' +
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });
    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });
  }

}
