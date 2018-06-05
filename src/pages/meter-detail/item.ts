import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Flashlight } from '@ionic-native/flashlight';

import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import GyroNorm from 'gyronorm';


@Component({
  selector: 'page-meter-detail',
  templateUrl: 'item.html'
})

export class MeterDetailPage {

  flashLightOn = false;
  screenHeight;
  rulers = [];
  labels = [];
  topPos = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight, private gyroscope: Gyroscope) {


  }

  ionViewDidLoad() {
    //this.turnOnFlashlight();
    this.setupRuler();
    this.spiritLevelInit(this.topPos);
  }

  ionViewDidLeave() {
    this.flashlight.switchOff();
  }

  setupRuler(){
    this.screenHeight = (((window.screen.height-135) * window.devicePixelRatio * 0.79) /  (window.devicePixelRatio * 5));
    var temp = Math.round(this.screenHeight/10)*10;
    this.rulers = Array(temp).fill(0).map((x,i)=>i);
    var temp2 = Math.round(temp/10);
    this.labels = Array(temp2+1).fill(0).map((x,i)=>i);
  }

  turnOnFlashlight(){
    this.flashlight.switchOn();
    this.flashLightOn = false;
  }

  toggleFlashLight(){
    if(this.flashLightOn){
      this.flashlight.switchOff();
    }else{
      this.flashlight.switchOn();
    }
    this.flashLightOn = !this.flashLightOn;
  }

  spiritLevelInit(){
    var gn = new GyroNorm();
    var mb = this.moveBall();
    gn.init().then(function(mb){
      console.log(mb);
      gn.start(function(data){

      });
    }).catch(function(e,mb){
      console.log(e);
      // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
      console.log(mb);
    });

  }

  moveBall(){

    console.log(this.topPos);

  }




}
