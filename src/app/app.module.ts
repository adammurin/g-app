import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule  } from '@angular/common/http';
import { Platform } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LetakyPage } from '../pages/letaky/list';
import { VypoctyPage } from '../pages/vypocty/list';
import { VypoctyDetailPage } from '../pages/vypocty-detail/vypocty-detail';
import { PostupyPage } from '../pages/postupy/list';
import { PostupyDetailPage } from '../pages/postupy-detail/postupy-detail';
import { NastrojePage } from '../pages/nastroje/list';
import { NastrojeDetailPage } from '../pages/nastroje-detail/item';
import { MeterDetailPage } from '../pages/meter-detail/item';
import { PrevodnikDetailPage } from '../pages/prevodnik-detail/item';
import { VzdialenostDetailPage } from '../pages/vzdialenost-detail/item';
import { QrDetailPage } from '../pages/qr-detail/item';
import { PredajnaPage } from '../pages/predajna/item';
import { KontaktyPage } from '../pages/kontakty/item';


import { BackgroundImageDirective } from '../directives/background-image/background-image';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { Flashlight } from '@ionic-native/flashlight';
import { Gyroscope } from "@ionic-native/gyroscope";
import { GyroNorm } from 'gyronorm';
import { Geolocation } from '@ionic-native/geolocation'
import { HTTP } from '@ionic-native/http';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';


import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LetakyPage,
    VypoctyPage,
    VypoctyDetailPage,
    PostupyPage,
    PostupyDetailPage,
    NastrojePage,
    NastrojeDetailPage,
    MeterDetailPage,
    PrevodnikDetailPage,
    VzdialenostDetailPage,
    QrDetailPage,
    PredajnaPage,
    KontaktyPage,
    BackgroundImageDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ionicGalleryModal.GalleryModalModule,NativeHttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LetakyPage,
    VypoctyPage,
    VypoctyDetailPage,
    PostupyPage,
    PostupyDetailPage,
    NastrojePage,
    NastrojeDetailPage,
    MeterDetailPage,
    PrevodnikDetailPage,
    VzdialenostDetailPage,
    QrDetailPage,
    PredajnaPage,
    KontaktyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Toast,
    Flashlight,
    HttpClientModule,
    Gyroscope,
    Geolocation,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: ionicGalleryModal.GalleryModalHammerConfig
      },
      {
        provide: HttpBackend, useClass: NativeHttpFallback, 
        deps: [Platform, NativeHttpBackend, HttpXhrBackend]
      }
  ]
})
export class AppModule {}
