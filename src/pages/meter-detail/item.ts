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
  topPos = 0;
  angle;
  tempPos;

  constructor(public navCtrl: NavController, public navParams: NavParams, private flashlight: Flashlight, private gyroscope: Gyroscope) {


  }

  ionViewDidLoad() {
    //this.turnOnFlashlight();
    this.setupRuler();
    this.spiritLevelInit(1);
  }

  ionViewDidLeave() {
    this.flashlight.switchOff();
    this.spiritLevelInit(2);
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

  spiritLevelInit(action){
    var args = {
      frequency:100,         // ( How often the object sends the values - milliseconds )
      gravityNormalized:true,     // ( If the gravity related values to be normalized )
      orientationBase:GyroNorm.GAME,    // ( Can be GyroNorm.GAME or GyroNorm.WORLD. gn.GAME returns orientation values with respect to the head direction of the device. gn.WORLD returns the orientation values with respect to the actual north direction of the world. )
      decimalCount:2,         // ( How many digits after the decimal point will there be in the return values )
      logger:null,          // ( Function to be called to log messages from gyronorm.js )
      screenAdjusted:false      // ( If set to true it will return screen adjusted values. )
    };
    var gn = new GyroNorm();
    var self = this;
    if(action==1){
    gn.init(args).then(function(){
      gn.start(function(data){
        self.tempPos = data.do.beta*Math.round(self.screenHeight/15)*(-1);
        self.angle = Math.round(data.do.beta*10)/10;

        if(self.tempPos>(window.screen.height-85)/2){
          self.topPos = Math.round((window.screen.height-85)/2);
        }else if((self.tempPos*(-1))>(window.screen.height-135)/2){
          self.topPos = Math.round((window.screen.height-135)/-2);
        }else{
          self.topPos = self.tempPos;
        }
      });
    }).catch(function(e){
      console.log(e);
      // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
    });
    }
    else{
      gn.end();
    }
  }

}
