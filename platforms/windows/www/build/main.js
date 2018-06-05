webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PostupyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostupyDetailPage = (function () {
    function PostupyDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PostupyDetailPage.prototype.ionViewDidLoad = function () {
        this.nazov = this.navParams.get('postup').nazov;
        this.text = this.navParams.get('postup').text;
        this.slides = this.navParams.get('postup').slides;
    };
    PostupyDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postupy-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/postupy-detail/postupy-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{nazov}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n      <img src="./assets/imgs/{{slide.image}}">\n      <p class="slide-title">{{slide.text}}</p>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/postupy-detail/postupy-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PostupyDetailPage);
    return PostupyDetailPage;
}());

//# sourceMappingURL=postupy-detail.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VypoctyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VypoctyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VypoctyDetailPage = (function () {
    function VypoctyDetailPage(navCtrl, navParams, vypoctyService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vypoctyService = vypoctyService;
        this.formBuilder = formBuilder;
        this.results = [];
        this.showResults = false;
        this.formOne = this.formBuilder.group({
            width: [''],
            height: [''],
            area: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.formTwo = this.formBuilder.group({
            width: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            height: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            area: [''],
        });
    }
    VypoctyDetailPage_1 = VypoctyDetailPage;
    VypoctyDetailPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('vypocet').id;
        this.nazov = this.navParams.get('vypocet').nazov;
        this.text = this.navParams.get('vypocet').text;
        this.calculation_type = this.navParams.get('vypocet').calculation_type;
        this.widthLabel = this.navParams.get('vypocet').width_label;
        this.heightLabel = this.navParams.get('vypocet').height_label;
    };
    VypoctyDetailPage.prototype.viewItem = function (vypocet) {
        this.navCtrl.push(VypoctyDetailPage_1, {
            vypocet: vypocet
        });
    };
    VypoctyDetailPage.prototype.calcArea = function (val) {
        if (this.formOne.value.width && this.formOne.value.height) {
            this.shadowArea = this.formOne.value.width * this.formOne.value.height;
        }
        if (this.formTwo.value.width && this.formTwo.value.height) {
            this.shadowArea = this.formTwo.value.width * this.formTwo.value.height;
        }
    };
    VypoctyDetailPage.prototype.clearInputs = function () {
        this.width = '';
        this.height = '';
    };
    VypoctyDetailPage.prototype.logForm = function () {
        this.results = [];
        this.showResults = true;
        switch (this.id) {
            case 1:
                var val1 = Math.ceil(this.shadowArea / 2.4);
                var val2 = Math.ceil(this.shadowArea * 2 / 3);
                if (this.width != '' && this.height != '') {
                    var val3 = Math.ceil((Number(this.width) + Number(this.height)) * 2 / 3);
                }
                else {
                    var val3 = Math.ceil(this.shadowArea * 0.22);
                }
                if (this.width != '' && this.height != '') {
                    var val4 = Math.ceil((Number(this.width) + Number(this.height)) * 2 / 30);
                }
                else {
                    var val4 = Math.ceil(this.shadowArea * 0.66 / 30);
                }
                var val5 = val3 * 6;
                var val6 = Math.ceil(this.shadowArea * 2.2);
                var val7 = val2 / 2;
                var val8 = Math.ceil(this.shadowArea * 18);
                var val9 = Math.ceil(this.shadowArea * 0.3);
                var val10 = Math.ceil(this.shadowArea * 0.15);
                var val11 = Math.ceil(this.shadowArea * 1.66);
                var val12 = Math.ceil(this.shadowArea * 0.066);
                this.results.push({ "name": "Sadrokartón 120x200 cm", "unit": "ks", "value": val1 }, { "name": "CD profil 3m", "unit": "ks", "value": val2 }, { "name": "Obvodový UD profil 3m", "unit": "ks", "value": val3 }, { "name": "PVC pás pod UD profil 30m", "unit": "ks", "value": val4 }, { "name": "Hmoždinka do UD profilu", "unit": "ks", "value": val5 }, { "name": "Záves s príslušenstvom", "unit": "ks", "value": val6 }, { "name": "Predlžovacia spojka na CD", "unit": "ks", "value": val7 }, { "name": "Skrutky do sadrokartónu", "unit": "ks", "value": val8 }, { "name": "Základný tmel", "unit": "kg", "value": val9 }, { "name": "Finišový tmel", "unit": "kg", "value": val10 }, { "name": "Výstužná páska", "unit": "bm", "value": val11 }, { "name": "Akryl 310ml", "unit": "ks", "value": val12 });
                break;
            case 2:
                var val1 = Math.ceil(this.shadowArea / 2.4);
                var val2 = Math.ceil(this.shadowArea);
                if (this.width != '' && this.height != '') {
                    var val3 = Math.ceil((Number(this.width) + Number(this.height)) * 2 / 3);
                }
                else {
                    var val3 = Math.ceil(this.shadowArea * 0.22);
                }
                if (this.width != '' && this.height != '') {
                    var val4 = Math.ceil((Number(this.width) + Number(this.height)) * 2 / 30);
                }
                else {
                    var val4 = Math.ceil(this.shadowArea * 0.66 / 30);
                }
                var val5 = val3 * 6;
                var val6 = Math.ceil(this.shadowArea * 1.1);
                var val7 = Math.ceil(this.shadowArea * 0.75);
                var val8 = Math.ceil(this.shadowArea * 18);
                var val9 = Math.ceil(this.shadowArea * 0.3);
                var val10 = Math.ceil(this.shadowArea * 0.15);
                var val11 = Math.ceil(this.shadowArea * 1.66);
                var val12 = Math.ceil(this.shadowArea * 0.066);
                var val13 = Math.ceil(val2 / 2);
                this.results.push({ "name": "Sadrokartón 120x200 cm", "unit": "ks", "value": val1 }, { "name": "CD profil 3m", "unit": "ks", "value": val2 }, { "name": "Obvodový UD profil 3m", "unit": "ks", "value": val3 }, { "name": "PVC pás pod UD profil 30m", "unit": "ks", "value": val4 }, { "name": "Hmoždinka do UD profilu", "unit": "ks", "value": val5 }, { "name": "Záves s príslušenstvom", "unit": "ks", "value": val6 }, { "name": "Križová spojka na CD", "unit": "ks", "value": val13 }, { "name": "Predlžovacia spojka na CD", "unit": "ks", "value": val7 }, { "name": "Skrutky do sadrokartónu", "unit": "ks", "value": val8 }, { "name": "Základný tmel", "unit": "kg", "value": val9 }, { "name": "Finišový tmel", "unit": "kg", "value": val10 }, { "name": "Výstužná páska", "unit": "bm", "value": val11 }, { "name": "Akryl 310ml", "unit": "ks", "value": val12 });
                break;
            case 3:
                var val1 = Math.ceil(this.shadowArea / 2.4);
                var val2 = Math.ceil(this.shadowArea * 2 / 3);
                if (this.width != '' && this.height != '') {
                    var val3 = Math.ceil((Number(this.width) + Number(this.height)) * 2 / 3);
                }
                else {
                    var val3 = Math.ceil(this.shadowArea * 0.22);
                }
                if (this.width != '' && this.height != '') {
                    var val4 = Math.ceil((Number(this.width) + Number(this.height)) * 2 / 30);
                }
                else {
                    var val4 = Math.ceil(this.shadowArea * 0.66 / 30);
                }
                var val5 = val3 * 6;
                var val6 = Math.ceil(this.shadowArea * 2.2);
                var val7 = val2 / 2;
                var val8 = Math.ceil(this.shadowArea * 18);
                var val9 = Math.ceil(this.shadowArea * 0.3);
                var val10 = Math.ceil(this.shadowArea * 0.15);
                var val11 = Math.ceil(this.shadowArea * 1.66);
                var val12 = Math.ceil(this.shadowArea * 0.066);
                var val13 = Math.ceil(this.shadowArea);
                var val14 = Math.ceil(this.shadowArea * 1.1);
                this.results.push({ "name": "Sadrokartón 120x200 cm", "unit": "ks", "value": val1 }, { "name": "CD profil 3m", "unit": "ks", "value": val2 }, { "name": "Obvodový UD profil 3m", "unit": "ks", "value": val3 }, { "name": "PVC pás pod UD profil 30m", "unit": "ks", "value": val4 }, { "name": "Hmoždinka do UD profilu", "unit": "ks", "value": val5 }, { "name": "Záves s príslušenstvom", "unit": "ks", "value": val6 }, { "name": "Predlžovacia spojka na CD", "unit": "ks", "value": val7 }, { "name": "Skrutky do sadrokartónu", "unit": "ks", "value": val8 }, { "name": "Základný tmel", "unit": "kg", "value": val9 }, { "name": "Finišový tmel", "unit": "kg", "value": val10 }, { "name": "Výstužná páska", "unit": "bm", "value": val11 }, { "name": "Akryl 310ml", "unit": "ks", "value": val12 }, { "name": "Tepelná izolácia", "unit": "m<sup>2</sup>", "value": val13 }, { "name": "Parozábranná fólia", "unit": "m<sup>2</sup>", "value": val14 });
                break;
            case 4:
                var val1 = Math.ceil(this.shadowArea / 2.4 * 2);
                var val2 = Math.ceil(this.width / 0.6 + 1);
                var val3 = Math.ceil(this.width / 4 * 2);
                var val4 = Math.ceil(this.width * 2 / 30);
                var val5 = Math.ceil(this.width * 2 / 0.8);
                var val6 = Math.ceil(this.shadowArea * 2 * 12);
                var val7 = Math.ceil(this.shadowArea * 2 * 0.3);
                var val8 = Math.ceil(this.shadowArea * 2 * 0.15);
                var val9 = Math.ceil(this.shadowArea * 2 * 1.66);
                var val10 = Math.ceil(this.shadowArea * 2 * 0.066);
                this.results.push({ "name": "Sadrokartón 120x200 cm", "unit": "ks", "value": val1 }, { "name": "Zvislý CW profil podľa výšky", "unit": "ks", "value": val2 }, { "name": "Obvodový UW profil 4m", "unit": "ks", "value": val3 }, { "name": "PVC pás pod UW profil 30m", "unit": "ks", "value": val4 }, { "name": "Hmoždinka do UW profilu", "unit": "ks", "value": val5 }, { "name": "Skrutky do sadrokartónu", "unit": "ks", "value": val6 }, { "name": "Základný tmel", "unit": "kg", "value": val7 }, { "name": "Finišový tmel", "unit": "kg", "value": val8 }, { "name": "Výstužná páska", "unit": "bm", "value": val9 }, { "name": "Akryl 310ml", "unit": "ks", "value": val10 });
                break;
            case 5:
                var val1 = Math.ceil(this.shadowArea / 2.4);
                var val2 = Math.ceil(this.width / 0.6 + 1);
                var val3 = Math.ceil(this.width / 4 * 2);
                var val4 = Math.ceil(this.width * 2 / 30);
                var val5 = Math.ceil(this.width * 2 / 0.8);
                var val6 = Math.ceil(this.shadowArea * 12);
                var val7 = Math.ceil(this.shadowArea * 0.3);
                var val8 = Math.ceil(this.shadowArea * 0.15);
                var val9 = Math.ceil(this.shadowArea * 1.66);
                var val10 = Math.ceil(this.shadowArea * 0.066);
                this.results.push({ "name": "Sadrokartón 120x200 cm", "unit": "ks", "value": val1 }, { "name": "Zvislý CW profil podľa výšky", "unit": "ks", "value": val2 }, { "name": "Obvodový UW profil 4m", "unit": "ks", "value": val3 }, { "name": "PVC pás pod UW profil 30m", "unit": "ks", "value": val4 }, { "name": "Hmoždinka do UW profilu", "unit": "ks", "value": val5 }, { "name": "Skrutky do sadrokartónu", "unit": "ks", "value": val6 }, { "name": "Základný tmel", "unit": "kg", "value": val7 }, { "name": "Finišový tmel", "unit": "kg", "value": val8 }, { "name": "Výstužná páska", "unit": "bm", "value": val9 }, { "name": "Akryl 310ml", "unit": "ks", "value": val10 });
                break;
            case 6:
                var val1 = Math.ceil(this.shadowArea / 2.4);
                var val2 = Math.ceil(this.width / 0.6 + 1);
                var val3 = Math.ceil(this.width / 3 * 2);
                var val4 = Math.ceil(this.width * 2 / 30);
                var val5 = Math.ceil(this.width * 2 / 0.8);
                var val6 = Math.ceil(this.height * val2);
                var val7 = Math.ceil(this.height * val2);
                var val8 = Math.ceil(this.height * val2 * 4);
                var val9 = Math.ceil(this.shadowArea * 12);
                var val10 = Math.ceil(this.shadowArea * 0.3);
                var val11 = Math.ceil(this.shadowArea * 0.15);
                var val12 = Math.ceil(this.shadowArea * 1.66);
                var val13 = Math.ceil(this.shadowArea * 0.066);
                this.results.push({ "name": "Sadrokartón 120x200 cm", "unit": "ks", "value": val1 }, { "name": "Zvislý CD profil podľa výšky", "unit": "ks", "value": val2 }, { "name": "Obvodový UD profil 3m", "unit": "ks", "value": val3 }, { "name": "PVC pás pod UD profil 30m", "unit": "ks", "value": val4 }, { "name": "Hmoždinka do UD profilu", "unit": "ks", "value": val5 }, { "name": "Záves", "unit": "ks", "value": val6 }, { "name": "Hmoždinka do závesu", "unit": "ks", "value": val7 }, { "name": "Skrutky TEX", "unit": "ks", "value": val8 }, { "name": "Skrutky do sadrokartónu", "unit": "ks", "value": val9 }, { "name": "Základný tmel", "unit": "kg", "value": val10 }, { "name": "Finišový tmel", "unit": "kg", "value": val11 }, { "name": "Výstužná páska", "unit": "bm", "value": val12 }, { "name": "Akryl 310ml", "unit": "ks", "value": val13 });
                break;
            case 7:
                var val1 = Math.ceil(this.shadowArea);
                var val2 = Math.ceil(this.shadowArea * 6);
                var val3 = Math.ceil(this.shadowArea * 0.1);
                var val4 = Math.ceil(this.shadowArea * 0.3);
                var val5 = Math.ceil(this.shadowArea * 0.15);
                var val6 = Math.ceil(this.shadowArea * 1.66);
                var val7 = Math.ceil(this.shadowArea * 0.066);
                this.results.push({ "name": "Sadrokartón podľa výšky", "unit": "ks", "value": val1 }, { "name": "Lepidlo na sadrokartón", "unit": "kg", "value": val2 }, { "name": "Penetračný náter", "unit": "kg", "value": val3 }, { "name": "Základný tmel", "unit": "kg", "value": val4 }, { "name": "Finišový tmel", "unit": "kg", "value": val5 }, { "name": "Výstužná páska", "unit": "bm", "value": val6 }, { "name": "Akryl 310ml", "unit": "ks", "value": val7 });
                break;
            case 8:
                var val1 = Math.ceil(this.shadowArea / 0.36);
                var val2 = Math.ceil(this.shadowArea * 0.232);
                var val3 = Math.ceil(this.shadowArea * 1.388);
                var val4 = Math.ceil(this.shadowArea * 1.388);
                if (this.width != '' && this.height != '') {
                    var val5 = Math.ceil((Number(this.width) + Number(this.height)) * 2 / 3);
                }
                else {
                    var val5 = Math.ceil(this.shadowArea * 0.22);
                }
                var val6 = val5 * 3 * 2;
                var val7 = Math.ceil(this.shadowArea * 0.8);
                this.results.push({ "name": "Kazety", "unit": "ks", "value": val1 }, { "name": "Hlavné profily 360 cm", "unit": "ks", "value": val2 }, { "name": "Priečne profily 120 cm", "unit": "ks", "value": val3 }, { "name": "Priečne profily 60 cm", "unit": "ks", "value": val4 }, { "name": "Obvodové L profily 300 cm", "unit": "ks", "value": val5 }, { "name": "Hmoždinky na obvodové profily", "unit": "ks", "value": val6 }, { "name": "Závesy", "unit": "ks", "value": val7 });
                break;
            case 9:
                var val1 = Math.ceil(this.shadowArea);
                var val2 = Math.ceil(this.shadowArea * 6);
                var val3 = Math.ceil(this.shadowArea * 6);
                var val4 = Math.ceil(this.shadowArea * 1.1);
                var val5 = Math.ceil(this.shadowArea * 6);
                var val6 = Math.ceil(this.shadowArea * 2.4);
                var val7 = Math.ceil(this.shadowArea * 0.2);
                this.results.push({ "name": "Minerálna vlna podľa hrúbky", "unit": "m<sup>2</sup>", "value": val1 }, { "name": "Lepiaca malta", "unit": "kg", "value": val2 }, { "name": "Stierkovacia malta", "unit": "kg", "value": val3 }, { "name": "Sklotextilná sieťka", "unit": "m<sup>2</sup>", "value": val4 }, { "name": "Kotviace hmoždinky", "unit": "ks", "value": val5 }, { "name": "Omietka 1,5 mm zrno", "unit": "kg", "value": val6 }, { "name": "Penetračný náter", "unit": "kg", "value": val7 });
                break;
            case 10:
                var val1 = Math.ceil(this.shadowArea);
                var val2 = Math.ceil(this.shadowArea * 4);
                var val3 = Math.ceil(this.shadowArea * 4);
                var val4 = Math.ceil(this.shadowArea * 1.1);
                var val5 = Math.ceil(this.shadowArea * 5);
                var val6 = Math.ceil(this.shadowArea * 2.4);
                var val7 = Math.ceil(this.shadowArea * 0.2);
                this.results.push({ "name": "Polystyrén podľa hrúbky", "unit": "m<sup>2</sup>", "value": val1 }, { "name": "Lepiaca malta", "unit": "kg", "value": val2 }, { "name": "Stierkovacia malta", "unit": "kg", "value": val3 }, { "name": "Sklotextilná sieťka", "unit": "m<sup>2</sup>", "value": val4 }, { "name": "Kotviace hmoždinky", "unit": "ks", "value": val5 }, { "name": "Omietka 1,5 mm zrno", "unit": "kg", "value": val6 }, { "name": "Penetračný náter", "unit": "kg", "value": val7 });
                break;
        }
    };
    VypoctyDetailPage = VypoctyDetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vypocty-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vypocty-detail/vypocty-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{nazov}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-card *ngIf="showResults == false">\n    <ion-card-header>\n      Výpočet\n    </ion-card-header>\n      <ion-card-content>\n        <form *ngIf=" calculation_type == 1 " [formGroup]="formOne" (ngSubmit)="logForm()">\n          <div >\n            <ion-item>\n              <ion-label stacked>Zadajte plochu</ion-label>\n              <ion-input type="number" formControlName="area" placeholder="" [(ngModel)]="shadowArea" (input)="clearInputs()"></ion-input><ion-label class="afterInput">m<sup>2</sup></ion-label>\n            </ion-item>\n            <h3>alebo</h3>\n            <ion-item>\n              <ion-label stacked>{{this.widthLabel}}</ion-label>\n              <ion-input type="number" formControlName="width" [(ngModel)]="width" (input)="calcArea($event.target.value)"></ion-input>\n              <ion-label class="afterInput">m</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>{{this.heightLabel}}</ion-label>\n              <ion-input type="number" formControlName="height" [(ngModel)]="height" (input)="calcArea($event.target.value)"></ion-input>\n              <ion-label class="afterInput">m</ion-label>\n            </ion-item>\n            \n            <button ion-button type="submit" [disabled]="!formOne.valid">Vypočítať</button>\n          </div>\n        </form>\n\n        <form *ngIf=" calculation_type == 2 " [formGroup]="formTwo" (ngSubmit)="logForm()">\n          <ion-item hidden>\n              <ion-input type="number" formControlName="area" placeholder="" [(ngModel)]="shadowArea" (input)="clearInputs()"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label stacked>{{this.widthLabel}}</ion-label>\n            <ion-input type="number" formControlName="width" [(ngModel)]="width" (input)="calcArea($event.target.value)"></ion-input>\n            <ion-label class="afterInput">m</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>{{this.heightLabel}}</ion-label>\n            <ion-input type="number" formControlName="height" [(ngModel)]="height" (input)="calcArea($event.target.value)"></ion-input>\n            <ion-label class="afterInput">m</ion-label>\n          </ion-item>\n          \n          <button ion-button type="submit" [disabled]="!formTwo.valid">Vypočítať</button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="showResults == true">\n      <ion-card-header>\n        Výpočet\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col class="fadedText">\n              Na {{this.shadowArea}} m<sup>2</sup> budete potrebovať\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor="let result of results">\n            <ion-col col-9>\n              {{result.name}}\n            </ion-col>\n            <ion-col col-3>\n              {{result.value}} <span [innerHTML]="result.unit"></span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vypocty-detail/vypocty-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], VypoctyDetailPage);
    return VypoctyDetailPage;
    var VypoctyDetailPage_1;
}());

//# sourceMappingURL=vypocty-detail.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/nastroje-detail/item.module": [
		298,
		2
	],
	"../pages/postupy-detail/postupy-detail.module": [
		299,
		1
	],
	"../pages/vypocty-detail/vypocty-detail.module": [
		300,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VypoctyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the VypoctyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VypoctyService = (function () {
    function VypoctyService(http) {
        this.http = http;
        //apiUrl = 'http://127.0.0.1:8000';
        this.apiUrl = './assets/json/vypocty.json';
        //console.log('Hello PostupyService Provider');
    }
    VypoctyService.prototype.getVypocty = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    VypoctyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VypoctyService);
    return VypoctyService;
}());

//# sourceMappingURL=vypocty-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img class="logo" alt="logo" height="40" src="assets/imgs/icons/ic_logo_white_long.png" >\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VypoctyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vypocty_service_vypocty_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vypocty_detail_vypocty_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VypoctyPage = (function () {
    function VypoctyPage(navCtrl, navParams, vypoctyService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vypoctyService = vypoctyService;
        this.formBuilder = formBuilder;
        this.getVypocty();
        this.form = this.formBuilder.group({
            width: [''],
            height: [''],
            area: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
    }
    VypoctyPage.prototype.getVypocty = function () {
        var _this = this;
        this.vypoctyService.getVypocty()
            .then(function (data) {
            _this.vypocty = data;
            console.log(_this.vypocty);
        });
    };
    VypoctyPage.prototype.viewItem = function (vypocet) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__vypocty_detail_vypocty_detail__["a" /* VypoctyDetailPage */], {
            vypocet: vypocet
        });
    };
    VypoctyPage.prototype.showResults = function () {
    };
    VypoctyPage.prototype.logForm = function () {
        console.log(this.form.value.area / 2.4);
        console.log(this.form.value);
    };
    VypoctyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vypocty',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vypocty/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Výpočet spotreby materiálu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let vypocet of vypocty" (click)="viewItem(vypocet)" col-6>\n      <div class="cover-image" [style.background-image]="\'url(./assets/imgs/\' + vypocet.hlavny_obrazok + \')\'">\n      <h2 class="title">{{vypocet.nazov}}</h2>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vypocty/list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VypoctyPage);
    return VypoctyPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postupy_detail_postupy_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostupyPage = (function () {
    function PostupyPage(navCtrl, navParams, postupyService, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postupyService = postupyService;
        this.file = file;
        this.getPostupy();
        //this.getData();
    }
    PostupyPage.prototype.getPostupy = function () {
        var _this = this;
        this.postupyService.getPostupy()
            .then(function (data) {
            _this.postupy = data;
            console.log(_this.postupy);
        });
    };
    PostupyPage.prototype.viewItem = function (postup) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__postupy_detail_postupy_detail__["a" /* PostupyDetailPage */], {
            postup: postup
        });
    };
    PostupyPage.prototype.getData = function () {
        var _this = this;
        this.file.checkDir(this.file.dataDirectory, 'json')
            .then(function (_) { return console.log('Directory exists'); })
            .catch(function (err) { return console.log(_this.file.dataDirectory); });
    };
    PostupyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postupy',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/postupy/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pracovné postupy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let postup of postupy" (click)="viewItem(postup)" col-6>\n      <div class="cover-image" [style.background-image]="\'url(./assets/imgs/\' + postup.hlavny_obrazok + \')\'">\n      <h2 class="title">{{postup.nazov}}</h2>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/postupy/list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__["a" /* PostupyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__["a" /* PostupyService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
    ], PostupyPage);
    return PostupyPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NastrojePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meter_detail_item__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prevodnik_detail_item__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vzdialenost_detail_item__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qr_detail_item__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NastrojePage = (function () {
    function NastrojePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NastrojePage.prototype.viewMeter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__meter_detail_item__["a" /* MeterDetailPage */], {});
    };
    NastrojePage.prototype.viewPrevodnik = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__prevodnik_detail_item__["a" /* PrevodnikDetailPage */], {});
    };
    NastrojePage.prototype.viewVzdialenost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vzdialenost_detail_item__["a" /* VzdialenostDetailPage */], {});
    };
    NastrojePage.prototype.viewQr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__qr_detail_item__["a" /* QrDetailPage */], {});
    };
    NastrojePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nastroje',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/nastroje/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nástroje</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)="viewMeter()" col-6>\n        <ion-card>\n          <img src="./assets/imgs/nastroje/meter.png">\n          <h2 class="title">Meter, baterka, vodováha</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col (click)="viewPrevodnik()" col-6>\n        <ion-card>\n          <img src="./assets/imgs/nastroje/prevodnik.png">\n          <h2 class="title">Prevodník jednotiek</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col (click)="viewVzdialenost()" col-6>\n        <ion-card>\n          <img src="./assets/imgs/nastroje/vzdialenost.png">\n          <h2 class="title">Meranie vzdialenosti</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col (click)="viewQr()" col-6>\n        <ion-card>\n          <img src="./assets/imgs/nastroje/qr.png">\n          <h2 class="title">Čítačka QR kódov</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/nastroje/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NastrojePage);
    return NastrojePage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_gyroscope__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeterDetailPage = (function () {
    function MeterDetailPage(navCtrl, navParams, flashlight, gyroscope) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flashlight = flashlight;
        this.gyroscope = gyroscope;
        this.flashLightOn = false;
        this.rulers = [];
        this.labels = [];
        this.topPos = 100;
    }
    MeterDetailPage.prototype.ionViewDidLoad = function () {
        //this.turnOnFlashlight();
        this.setupRuler();
        this.spiritLevelInit();
    };
    MeterDetailPage.prototype.ionViewDidLeave = function () {
        this.flashlight.switchOff();
    };
    MeterDetailPage.prototype.setupRuler = function () {
        this.screenHeight = (((window.screen.height - 135) * window.devicePixelRatio * 0.79) / (window.devicePixelRatio * 5));
        var temp = Math.round(this.screenHeight / 10) * 10;
        this.rulers = Array(temp).fill(0).map(function (x, i) { return i; });
        var temp2 = Math.round(temp / 10);
        this.labels = Array(temp2 + 1).fill(0).map(function (x, i) { return i; });
    };
    MeterDetailPage.prototype.turnOnFlashlight = function () {
        this.flashlight.switchOn();
        this.flashLightOn = false;
    };
    MeterDetailPage.prototype.toggleFlashLight = function () {
        if (this.flashLightOn) {
            this.flashlight.switchOff();
        }
        else {
            this.flashlight.switchOn();
        }
        this.flashLightOn = !this.flashLightOn;
    };
    MeterDetailPage.prototype.spiritLevelInit = function () {
        console.log(this.topPos);
        var options = {
            frequency: 100
        };
        this.gyroscope.getCurrent(options)
            .then(function (orientation) {
            console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        })
            .catch();
        this.gyroscope.watch()
            .subscribe(function (orientation) {
            console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
            animateBall();
        });
        function animateBall() {
            console.log('balls moving');
        }
    };
    MeterDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meter-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/meter-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="sideMeter">\n          <div class="inner">\n            <div class="rulers">\n              <div *ngFor="let ruler of rulers" class="ruler">\n              </div>\n            </div>\n            <div class="labels">\n              <div *ngFor="let label of labels" class="label">\n                {{label}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="inner flashLightInner">\n          <div class="flashLight" (click)="toggleFlashLight()" [ngClass]="{\'active\': this.flashLightOn}">\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="balanceItem">\n          {{this.topPos}}\n          <div class="ball" [ngStyle]="{\'top.px\': this.topPos}">\n          </div>\n          <div class="center">\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/meter-detail/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__["a" /* Flashlight */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_gyroscope__["a" /* Gyroscope */]])
    ], MeterDetailPage);
    return MeterDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevodnikDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrevodnikDetailPage = (function () {
    function PrevodnikDetailPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.formOne = this.formBuilder.group({
            category: [''],
        });
        this.formTwo = this.formBuilder.group({
            length: [''],
            convertFrom: [''],
            convertTo: [''],
            convertFromVal: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            convertToVal: [''],
            convertFromRate: [''],
        });
    }
    PrevodnikDetailPage.prototype.ionViewDidLoad = function () {
        this.setOptions();
        this.items = this.lengths;
        this.convertTo = this.items[1].rate;
        this.convertFromVal = "1";
        this.convertFrom = this.items[3].rate;
        this.category = this.categories[0].key;
        this.valueSelected();
    };
    PrevodnikDetailPage.prototype.setOptions = function () {
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
    };
    PrevodnikDetailPage.prototype.categorySelected = function () {
        if (this.category == "lengths") {
            this.items = this.lengths;
        }
        else if (this.category == "weights") {
            this.items = this.weights;
        }
        else if (this.category == "areas") {
            this.items = this.areas;
        }
        else if (this.category == "times") {
            this.items = this.times;
        }
        this.convertTo = this.items[1].rate;
        this.convertFrom = this.items[3].rate;
        this.valueSelected();
    };
    PrevodnikDetailPage.prototype.valueSelected = function () {
        var temp = this.convertFromVal * this.convertFrom / this.convertTo;
        temp = this.round(temp, 5);
        this.convertToVal = temp;
    };
    PrevodnikDetailPage.prototype.valueSelectedOposite = function () {
        var temp = this.convertToVal * this.convertTo / this.convertFrom;
        temp = this.round(temp, 5);
        this.convertFromVal = temp;
    };
    PrevodnikDetailPage.prototype.convert = function () {
        console.log(this.convertFromRate);
    };
    PrevodnikDetailPage.prototype.round = function (number, precision) {
        var shift = function (number, precision) {
            var numArray = ("" + number).split("e");
            return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
        };
        return shift(Math.round(shift(number, +precision)), -precision);
    };
    PrevodnikDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prevodnik-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/prevodnik-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Prevodník jednotiek</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-card>\n    <ion-card-header>\n      Čo chcete prevádzať?\n    </ion-card-header>\n      <ion-card-content>\n        <form [formGroup]="formOne" (ngSubmit)="logForm()">\n          <div>\n            <ion-item>\n              <ion-label stacked>Zvoľte, ktorú veličinu chcete prevádzať</ion-label>\n              <ion-select formControlName="category" [(ngModel)]="category" interface="popover" (ionChange)="categorySelected()">\n                <ion-option *ngFor="let category of categories" [value]="category.key">\n                  {{category.name}}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </form>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n\n        <form [formGroup]="formTwo" (ngSubmit)="convert()">\n          <ion-item>\n              <ion-select formControlName="convertFrom" [(ngModel)]="convertFrom" interface="popover" (ionChange)="valueSelected()">\n                <ion-option *ngFor="let item of items" [value]="item.rate">\n                  {{item.name}}\n                </ion-option>\n              </ion-select>\n            <ion-input type="text" formControlName="convertFromVal" [(ngModel)]="convertFromVal" (input)="valueSelected()"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-select formControlName="convertTo" [(ngModel)]="convertTo" interface="popover" (ionChange)="valueSelected()">\n                <ion-option *ngFor="let item of items" [value]="item.rate">\n                  {{item.name}}\n                </ion-option>\n              </ion-select>\n            <ion-input type="text" formControlName="convertToVal" [(ngModel)]="convertToVal" (input)="valueSelectedOposite()"></ion-input>\n          </ion-item>\n          \n          <!--<button ion-button type="submit" [disabled]="!formTwo.valid">Submit</button>-->\n        </form>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/prevodnik-detail/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], PrevodnikDetailPage);
    return PrevodnikDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VzdialenostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VzdialenostDetailPage = (function () {
    function VzdialenostDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VzdialenostDetailPage.prototype.ionViewDidLoad = function () {
    };
    VzdialenostDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vzdialenost-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vzdialenost-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meranie vzdialenosti</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="hours">\n          <h1 class="title">Kedy máme otvorené</h1>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col>\n                <b>Sadrokartóny</b>\n              </ion-col>\n              <ion-col>\n                <b>Stavebniny</b>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Pondelok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Utorok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Streda\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Štvrtok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Piatok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Sobota\n              </ion-col>\n              <ion-col>\n                07:00 - 13:00\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Nedeľa\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vzdialenost-detail/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VzdialenostDetailPage);
    return VzdialenostDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QrDetailPage = (function () {
    function QrDetailPage(navCtrl, navParams, qrScanner, barcodeScanner, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.barcodeScanner = barcodeScanner;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
    }
    QrDetailPage.prototype.ionViewDidLoad = function () {
        this.scan();
    };
    QrDetailPage.prototype.scan = function () {
        var _this = this;
        //this.selectedProduct = {};
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData.text);
            //this.showResult(barcodeData);
            /*this.toast.show(barcodeData.text, '50000', 'center').subscribe(
              toast => {
                console.log(toast);
              }
            );
            */
        }, function (err) {
            _this.toast.show(err, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    QrDetailPage.prototype.showResult = function (barcodeData) {
        var alert = this.alertCtrl.create({
            title: 'Kód',
            subTitle: barcodeData.text,
            buttons: ['OK']
        });
        alert.present();
    };
    QrDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/qr-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Čítačka QR kódov</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/qr-detail/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QrDetailPage);
    return QrDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredajnaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PredajnaPage = (function () {
    function PredajnaPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.platform.ready().then(function () {
            return console.log('toast');
        });
    }
    PredajnaPage.prototype.ionViewDidLoad = function () {
        //this.loadMap();
        //this.initMap();
    };
    PredajnaPage.prototype.loadMap = function () {
        console.log("map init");
        // Create a map after the view is ready and the native platform is ready.
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas');
        this.map.addMarker({
            title: 'Gipsol - predajňa stavebnín a sadrokartónové centrum',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 48.1441051,
                lng: 17.1496938
            }
        }).then(function (marker) {
            marker.showInfoWindow();
        });
    };
    PredajnaPage.prototype.initMap = function () {
        console.log(document.getElementById('map'));
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PredajnaPage.prototype, "mapElement", void 0);
    PredajnaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-predajna',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/predajna/item.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Predajňa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="hours">\n          <h1 class="title">Kedy máme otvorené</h1>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col>\n                <b>Sadrokartóny</b>\n              </ion-col>\n              <ion-col>\n                <b>Stavebniny</b>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Pondelok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Utorok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Streda\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Štvrtok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Piatok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Sobota\n              </ion-col>\n              <ion-col>\n                07:00 - 13:00\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Nedeľa\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <!--<div id="map_canvas">\n          <button ion-button (click)="onButtonClick($event)">Start demo</button>\n        </div>-->\n\n        <div #map id="map"></div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/predajna/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], PredajnaPage);
    return PredajnaPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NastrojeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NastrojeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NastrojeDetailPage = (function () {
    function NastrojeDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NastrojeDetailPage.prototype.ionViewDidLoad = function () {
        this.nazov = this.navParams.get('postup').nazov;
        this.text = this.navParams.get('postup').text;
        this.slides = this.navParams.get('postup').slides;
    };
    NastrojeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nastroje-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/nastroje-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{nazov}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n      <img src="/assets/imgs/{{slide.image}}">\n      <p class="slide-title">{{slide.text}}</p>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/nastroje-detail/item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NastrojeDetailPage);
    return NastrojeDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(238);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_vypocty_detail_vypocty_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_postupy_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_postupy_detail_postupy_detail__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nastroje_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nastroje_detail_item__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_meter_detail_item__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_prevodnik_detail_item__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_vzdialenost_detail_item__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_qr_detail_item__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_predajna_item__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_background_image_background_image__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_toast__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_flashlight__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_gyroscope__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__["a" /* VypoctyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vypocty_detail_vypocty_detail__["a" /* VypoctyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_postupy_list__["a" /* PostupyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_postupy_detail_postupy_detail__["a" /* PostupyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nastroje_list__["a" /* NastrojePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_nastroje_detail_item__["a" /* NastrojeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_meter_detail_item__["a" /* MeterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_prevodnik_detail_item__["a" /* PrevodnikDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_vzdialenost_detail_item__["a" /* VzdialenostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_qr_detail_item__["a" /* QrDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_predajna_item__["a" /* PredajnaPage */],
                __WEBPACK_IMPORTED_MODULE_17__directives_background_image_background_image__["a" /* BackgroundImageDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/nastroje-detail/item.module#NastrojeDetailPageModule', name: 'NastrojeDetailPage', segment: 'item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postupy-detail/postupy-detail.module#PostupyDetailPageModule', name: 'PostupyDetailPage', segment: 'postupy-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vypocty-detail/vypocty-detail.module#VypoctyDetailPageModule', name: 'VypoctyDetailPage', segment: 'vypocty-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__["a" /* VypoctyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vypocty_detail_vypocty_detail__["a" /* VypoctyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_postupy_list__["a" /* PostupyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_postupy_detail_postupy_detail__["a" /* PostupyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nastroje_list__["a" /* NastrojePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_nastroje_detail_item__["a" /* NastrojeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_meter_detail_item__["a" /* MeterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_prevodnik_detail_item__["a" /* PrevodnikDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_vzdialenost_detail_item__["a" /* VzdialenostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_qr_detail_item__["a" /* QrDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_predajna_item__["a" /* PredajnaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_flashlight__["a" /* Flashlight */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_gyroscope__["a" /* Gyroscope */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_vypocty_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_postupy_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nastroje_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_predajna_item__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home.png' },
            { title: 'Akciové letáky', component: __WEBPACK_IMPORTED_MODULE_6__pages_postupy_list__["a" /* PostupyPage */], icon: 'news.png' },
            { title: 'Pracovné postupy', component: __WEBPACK_IMPORTED_MODULE_6__pages_postupy_list__["a" /* PostupyPage */], icon: 'procedures.png' },
            { title: 'Výpočet spotreby materiálu', component: __WEBPACK_IMPORTED_MODULE_5__pages_vypocty_list__["a" /* VypoctyPage */], icon: 'calc.png' },
            { title: 'Nástroje', component: __WEBPACK_IMPORTED_MODULE_7__pages_nastroje_list__["a" /* NastrojePage */], icon: 'tools.png' },
            { title: 'Predajňa', component: __WEBPACK_IMPORTED_MODULE_8__pages_predajna_item__["a" /* PredajnaPage */], icon: 'store.png' },
            { title: 'Kontakty', component: __WEBPACK_IMPORTED_MODULE_6__pages_postupy_list__["a" /* PostupyPage */], icon: 'contacts.png' }
        ];
        this.links = [
            { title: 'Web', link: 'https://www.gipsol.sk', icon: 'ic_web.png' },
            { title: 'E-shop', link: 'http://shop.gipsol.sk', icon: 'ic_shopping_cart.png' },
            { title: 'Facebook', link: 'https://www.facebook.com/gipsol.sk/', icon: 'ic_facebook.png' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <img class="logo" alt="logo" height="40" src="assets/imgs/icons/ic_logo_white_long.png" >\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <a menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <img alt="{{p.title}}" height="20" src="assets/imgs/icons/nav/{{p.icon}}">\n        {{p.title}}\n      </a>\n    </ion-list>\n    <ion-list class="bottomPos">\n      <div *ngFor="let l of links">\n        <a ion-item href="{{l.link}}" target="_blank">\n          <img alt="{{l.title}}" height="20" src="assets/imgs/icons/{{l.icon}}">\n          {{l.title}}\n        </a>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PostupyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostupyService = (function () {
    function PostupyService(http) {
        this.http = http;
        //apiUrl = 'http://127.0.0.1:8000';
        this.apiUrl = './assets/json/postupy.json';
        console.log('Hello PostupyService Provider');
    }
    PostupyService.prototype.getPostupy = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PostupyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PostupyService);
    return PostupyService;
}());

//# sourceMappingURL=postupy-service.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BackgroundImageDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var BackgroundImageDirective = (function () {
    function BackgroundImageDirective() {
    }
    BackgroundImageDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[background-image]' // Attribute selector
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundImageDirective);
    return BackgroundImageDirective;
}());

//# sourceMappingURL=background-image.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map