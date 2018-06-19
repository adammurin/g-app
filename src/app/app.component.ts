import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LetakyPage } from '../pages/letaky/list';
import { VypoctyPage } from '../pages/vypocty/list';
import { PostupyPage } from '../pages/postupy/list';
import { NastrojePage } from '../pages/nastroje/list';
import { PredajnaPage } from '../pages/predajna/item';
import { KontaktyPage } from '../pages/kontakty/item';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;
  links: Array<{title: string, link: string, icon: string}>;
  GyroNorm;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Úvod', component: HomePage, icon: 'home.png'},
      { title: 'Akciové letáky', component: LetakyPage, icon: 'news.png'},
      { title: 'Pracovné postupy', component: PostupyPage, icon: 'procedures.png'},
      { title: 'Výpočet spotreby materiálu', component: VypoctyPage, icon: 'calc.png'},
      { title: 'Nástroje', component: NastrojePage, icon: 'tools.png'},
      { title: 'Predajňa', component: PredajnaPage, icon: 'store.png'},
      { title: 'Kontakty', component: KontaktyPage, icon: 'contacts.png'}
    ];

    this.links = [
      { title: 'Web', link: 'https://www.gipsol.sk', icon: 'ic_web.png'},
      { title: 'E-shop', link: 'http://shop.gipsol.sk', icon: 'ic_shopping_cart.png'},
      { title: 'Facebook', link: 'https://www.facebook.com/gipsol.sk/', icon: 'ic_facebook.png' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
