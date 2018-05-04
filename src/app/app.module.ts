import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule  } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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


import { BackgroundImageDirective } from '../directives/background-image/background-image';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Flashlight } from '@ionic-native/flashlight';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    BackgroundImageDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
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
    PredajnaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    Flashlight,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
