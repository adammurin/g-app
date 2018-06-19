webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PostupyDetailPage);
    return PostupyDetailPage;
}());

//# sourceMappingURL=postupy-detail.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VypoctyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__ = __webpack_require__(159);
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
            selector: 'page-vypocty-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vypocty-detail/vypocty-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{nazov}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-card padding *ngIf="showResults == false">\n    <ion-card-header>\n      Výpočet\n    </ion-card-header>\n      <ion-card-content>\n        <form *ngIf=" calculation_type == 1 " [formGroup]="formOne" (ngSubmit)="logForm()">\n          <div >\n            <ion-item>\n              <ion-label stacked>Zadajte plochu</ion-label>\n              <ion-input type="number" formControlName="area" placeholder="" [(ngModel)]="shadowArea" (input)="clearInputs()"></ion-input><ion-label class="afterInput">m<sup>2</sup></ion-label>\n            </ion-item>\n            <h3>alebo</h3>\n            <ion-item>\n              <ion-label stacked>{{this.widthLabel}}</ion-label>\n              <ion-input type="number" formControlName="width" [(ngModel)]="width" (input)="calcArea($event.target.value)"></ion-input>\n              <ion-label class="afterInput">m</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>{{this.heightLabel}}</ion-label>\n              <ion-input type="number" formControlName="height" [(ngModel)]="height" (input)="calcArea($event.target.value)"></ion-input>\n              <ion-label class="afterInput">m</ion-label>\n            </ion-item>\n            \n            <button ion-button type="submit" [disabled]="!formOne.valid">Vypočítať</button>\n          </div>\n        </form>\n\n        <form *ngIf=" calculation_type == 2 " [formGroup]="formTwo" (ngSubmit)="logForm()">\n          <ion-item hidden>\n              <ion-input type="number" formControlName="area" placeholder="" [(ngModel)]="shadowArea" (input)="clearInputs()"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label stacked>{{this.widthLabel}}</ion-label>\n            <ion-input type="number" formControlName="width" [(ngModel)]="width" (input)="calcArea($event.target.value)"></ion-input>\n            <ion-label class="afterInput">m</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>{{this.heightLabel}}</ion-label>\n            <ion-input type="number" formControlName="height" [(ngModel)]="height" (input)="calcArea($event.target.value)"></ion-input>\n            <ion-label class="afterInput">m</ion-label>\n          </ion-item>\n          \n          <button ion-button type="submit" [disabled]="!formTwo.valid">Vypočítať</button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n    <ion-card padding *ngIf="showResults == true">\n      <ion-card-header>\n        Výpočet\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col class="fadedText">\n              Na {{this.shadowArea}} m<sup>2</sup> budete potrebovať\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor="let result of results">\n            <ion-col col-9>\n              {{result.name}}\n            </ion-col>\n            <ion-col col-3>\n              {{result.value}} <span [innerHTML]="result.unit"></span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vypocty-detail/vypocty-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], VypoctyDetailPage);
    return VypoctyDetailPage;
    var VypoctyDetailPage_1;
}());

//# sourceMappingURL=vypocty-detail.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/nastroje-detail/item.module": [
		303,
		2
	],
	"../pages/postupy-detail/postupy-detail.module": [
		304,
		1
	],
	"../pages/vypocty-detail/vypocty-detail.module": [
		305,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VypoctyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_names_service_names_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_letaky_service_letaky_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__ = __webpack_require__(101);
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
    function HomePage(navCtrl, namesService, letakyService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.namesService = namesService;
        this.letakyService = letakyService;
        this.modalCtrl = modalCtrl;
        this.getNames();
        this.getLetaky();
    }
    HomePage.prototype.getNames = function () {
        var _this = this;
        this.namesService.getNames()
            .then(function (data) {
            _this.names = data;
            _this.setDateAndName();
        });
    };
    HomePage.prototype.getLetaky = function () {
        var _this = this;
        this.letakyService.getLetaky()
            .then(function (data) {
            _this.letaky = data;
            _this.letaky = _this.letaky.actions;
            _this.photos = _this.letaky;
            _this.setupModal();
        });
    };
    HomePage.prototype.setDateAndName = function () {
        var today = new Date();
        var month = today.getMonth();
        var day = today.getDate();
        this.date = today.toLocaleDateString("sk-SK");
        this.todayName = this.names[month][day];
    };
    HomePage.prototype.setupModal = function () {
        var i;
        for (i = 0; i < this.photos.length; i++) {
            this.photos[i].url = this.photos[i]['img_url'];
            this.photos[i].index = i;
            delete this.photos[i].img_url;
        }
    };
    HomePage.prototype.openModal = function (index) {
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: this.photos,
            initialSlide: index
        });
        this.modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img class="logo" alt="logo" height="40" src="assets/imgs/icons/ic_logo_white_long.png" >\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n\n  <ion-slides>\n    <ion-slide *ngFor="let letak of letaky" col-6>\n      <img src="{{ letak.url }}" (click)="openModal(letak.index)">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card padding>\n    \n    <div class="contactLinks">\n      <h3>Poradenstvo je vám k dispozícii počas pracovných dní od 07:00 do 15:30.</h3>\n      <a class="phone" href="tel:+421253419284">\n        <img class="icon call" src="assets/imgs/icons/phone_blue.png"/>\n          Zavolajte nám\n      </a><br>\n      <a class="mail" href="mailto:obchod@gipsol.sk">\n        <img class="icon mail" src="assets/imgs/icons/mail-blue.png"/>\n\n        Napíšte nám\n      </a>\n    </div>\n  </ion-card>\n\n  <ion-card padding>\n  	<h3 class="date">{{date}}</h3>\n	Sviatok má {{todayName}}\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_names_service_names_service__["a" /* NamesService */], __WEBPACK_IMPORTED_MODULE_3__providers_letaky_service_letaky_service__["a" /* LetakyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_names_service_names_service__["a" /* NamesService */], __WEBPACK_IMPORTED_MODULE_3__providers_letaky_service_letaky_service__["a" /* LetakyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetakyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
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


var LetakyService = (function () {
    //apiUrl = './assets/json/names.json';
    function LetakyService(http) {
        this.http = http;
        this.apiUrl = 'https://gipsol.sk/app/letaky.json';
    }
    LetakyService.prototype.getLetaky = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    LetakyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LetakyService);
    return LetakyService;
}());

//# sourceMappingURL=letaky-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetakyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_letaky_service_letaky_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_gallery_modal__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LetakyPage = (function () {
    function LetakyPage(navCtrl, letakyService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.letakyService = letakyService;
        this.modalCtrl = modalCtrl;
        this.getLetaky();
    }
    LetakyPage.prototype.getLetaky = function () {
        var _this = this;
        this.letakyService.getLetaky()
            .then(function (data) {
            _this.letaky = data;
            _this.letaky = _this.letaky.actions;
            _this.photos = _this.letaky;
            _this.setupModal();
        });
    };
    LetakyPage.prototype.setupModal = function () {
        var i;
        for (i = 0; i < this.photos.length; i++) {
            this.photos[i].url = this.photos[i]['img_url'];
            this.photos[i].index = i;
            delete this.photos[i].img_url;
        }
    };
    LetakyPage.prototype.openModal = function (index) {
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: this.photos,
            initialSlide: index
        });
        this.modal.present();
    };
    LetakyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-letaky',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/letaky/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Akciové letáky</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n\n    <div class="letakItem" *ngFor="let letak of letaky" col-6>\n      <img src="{{ letak.url }}" (click)="openModal(letak.index)">\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/letaky/list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_letaky_service_letaky_service__["a" /* LetakyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_letaky_service_letaky_service__["a" /* LetakyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], LetakyPage);
    return LetakyPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VypoctyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vypocty_service_vypocty_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vypocty_detail_vypocty_detail__ = __webpack_require__(103);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VypoctyPage);
    return VypoctyPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postupy_detail_postupy_detail__ = __webpack_require__(102);
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
    function PostupyPage(navCtrl, navParams, postupyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postupyService = postupyService;
        this.getPostupy();
    }
    PostupyPage.prototype.getPostupy = function () {
        var _this = this;
        this.postupyService.getPostupy()
            .then(function (data) {
            _this.postupy = data;
        });
    };
    PostupyPage.prototype.viewItem = function (postup) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__postupy_detail_postupy_detail__["a" /* PostupyDetailPage */], {
            postup: postup
        });
    };
    PostupyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postupy',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/postupy/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pracovné postupy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let postup of postupy" (click)="viewItem(postup)" col-6>\n      <div class="cover-image" [style.background-image]="\'url(./assets/imgs/\' + postup.hlavny_obrazok + \')\'">\n      <h2 class="title">{{postup.nazov}}</h2>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/postupy/list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__["a" /* PostupyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__["a" /* PostupyService */]])
    ], PostupyPage);
    return PostupyPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NastrojePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meter_detail_item__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prevodnik_detail_item__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vzdialenost_detail_item__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qr_detail_item__ = __webpack_require__(214);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NastrojePage);
    return NastrojePage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_gyroscope__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gyronorm__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gyronorm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_gyronorm__);
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
        this.topPos = 0;
    }
    MeterDetailPage.prototype.ionViewDidLoad = function () {
        //this.turnOnFlashlight();
        this.setupRuler();
        this.spiritLevelInit(1);
    };
    MeterDetailPage.prototype.ionViewDidLeave = function () {
        this.flashlight.switchOff();
        this.spiritLevelInit(2);
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
    MeterDetailPage.prototype.spiritLevelInit = function (action) {
        var args = {
            frequency: 100,
            gravityNormalized: true,
            orientationBase: __WEBPACK_IMPORTED_MODULE_4_gyronorm___default.a.GAME,
            decimalCount: 2,
            logger: null,
            screenAdjusted: false // ( If set to true it will return screen adjusted values. )
        };
        var gn = new __WEBPACK_IMPORTED_MODULE_4_gyronorm___default.a();
        var self = this;
        if (action == 1) {
            gn.init(args).then(function () {
                gn.start(function (data) {
                    self.tempPos = data.do.beta * Math.round(self.screenHeight / 15) * (-1);
                    self.angle = Math.round(data.do.beta * 10) / 10;
                    if (self.tempPos > (window.screen.height - 85) / 2) {
                        self.topPos = Math.round((window.screen.height - 85) / 2);
                    }
                    else if ((self.tempPos * (-1)) > (window.screen.height - 135) / 2) {
                        self.topPos = Math.round((window.screen.height - 135) / -2);
                    }
                    else {
                        self.topPos = self.tempPos;
                    }
                });
            }).catch(function (e) {
                console.log(e);
                // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
            });
        }
        else {
            gn.end();
        }
    };
    MeterDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meter-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/meter-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meter, baterka, vodováha</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="sideMeter">\n          <div class="inner">\n            <div class="rulers">\n              <div *ngFor="let ruler of rulers" class="ruler">\n              </div>\n            </div>\n            <div class="labels">\n              <div *ngFor="let label of labels" class="label">\n                {{label}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="inner flashLightInner">\n          <div class="flashLight" (click)="toggleFlashLight()" [ngClass]="{\'active\': this.flashLightOn}">\n          </div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class="balanceItem">\n          <div class="inner">\n            <div class="center">\n              <div class="angle">\n                {{ this.angle }}°\n              </div>\n              <div class="ball" [ngStyle]="{\'top.px\': this.topPos}">\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/meter-detail/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__["a" /* Flashlight */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_gyroscope__["a" /* Gyroscope */]])
    ], MeterDetailPage);
    return MeterDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevodnikDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-prevodnik-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/prevodnik-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Prevodník jednotiek</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-card>\n    <ion-card-header>\n      Čo chcete prevádzať?\n    </ion-card-header>\n      <ion-card-content>\n        <form [formGroup]="formOne" (ngSubmit)="logForm()">\n          <div>\n            <ion-item class="select">\n              <ion-label stacked>Zvoľte, ktorú veličinu chcete prevádzať</ion-label>\n              <ion-select formControlName="category" [(ngModel)]="category" interface="popover" (ionChange)="categorySelected()">\n                <ion-option *ngFor="let category of categories" [value]="category.key">\n                  {{category.name}}\n                </ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </form>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n\n        <form [formGroup]="formTwo" (ngSubmit)="convert()">\n          <ion-item class="select">\n              <ion-select formControlName="convertFrom" [(ngModel)]="convertFrom" interface="popover" (ionChange)="valueSelected()">\n                <ion-option *ngFor="let item of items" [value]="item.rate">\n                  {{item.name}}\n                </ion-option>\n              </ion-select>\n            <ion-input type="text" formControlName="convertFromVal" [(ngModel)]="convertFromVal" (input)="valueSelected()"></ion-input>\n          </ion-item>\n          <ion-item class="select">\n              <ion-select formControlName="convertTo" [(ngModel)]="convertTo" interface="popover" (ionChange)="valueSelected()">\n                <ion-option *ngFor="let item of items" [value]="item.rate">\n                  {{item.name}}\n                </ion-option>\n              </ion-select>\n            <ion-input type="text" formControlName="convertToVal" [(ngModel)]="convertToVal" (input)="valueSelectedOposite()"></ion-input>\n          </ion-item>\n          \n          <!--<button ion-button type="submit" [disabled]="!formTwo.valid">Submit</button>-->\n        </form>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/prevodnik-detail/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], PrevodnikDetailPage);
    return PrevodnikDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VzdialenostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(213);
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
    function VzdialenostDetailPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.step = 1;
    }
    VzdialenostDetailPage.prototype.ionViewDidLoad = function () {
    };
    VzdialenostDetailPage.prototype.startTracker = function () {
        var _this = this;
        //this.startCoords = this.getLocData();
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.startCoordsLat = resp.coords.latitude;
            _this.startCoordsLong = resp.coords.longitude;
            _this.step = 2;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    VzdialenostDetailPage.prototype.endTracker = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.endCoordsLat = resp.coords.latitude;
            _this.endCoordsLong = resp.coords.longitude;
            _this.distance = _this.getDistanceFromLatLonInKm(_this.startCoordsLat, _this.startCoordsLong, _this.endCoordsLat, _this.endCoordsLong);
            _this.step = 3;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    VzdialenostDetailPage.prototype.resetTracker = function () {
        this.startCoordsLat = '';
        this.startCoordsLong = '';
        this.endCoordsLat = '';
        this.endCoordsLong = '';
        this.distance = 0;
        this.step = 1;
    };
    VzdialenostDetailPage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371000; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = Math.round(R * c * 10) / 10;
        return d;
    };
    VzdialenostDetailPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    VzdialenostDetailPage.prototype.getLocData = function () {
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
        }).catch(function (error) {
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
    };
    VzdialenostDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vzdialenost-detail',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vzdialenost-detail/item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meranie vzdialenosti</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <div padding><h2>Zmerajte vzdialenosť dvoch bodov</h2></div>\n  <ion-card padding>\n\n    \n    <div *ngIf=" step != 1 " class="positions">\n      <h3>Začiatočná pozícia</h3>\n      LAT: {{ startCoordsLat }}<br>\n      LONG: {{ startCoordsLong }}\n    </div>\n    <div *ngIf=" step == 3 " class="positions">\n      <h3>Konečná pozícia</h3>\n      LAT: {{ endCoordsLat }}<br>\n      LONG: {{ endCoordsLong }}\n    </div>\n    <div *ngIf=" step == 3 " class="positions">\n      <h3>Vzdialenosť</h3>\n      {{ distance }} m\n    </div>\n    <div></div>\n    <button ion-button (click)="startTracker()" *ngIf=" step == 1 ">Označiť začiatok</button>\n    <button ion-button (click)="endTracker()" *ngIf=" step == 2 ">Označiť koniec</button>\n    <button ion-button (click)="resetTracker()" *ngIf=" step == 3 ">Nové meranie</button>\n  </ion-card>\n  <ion-card padding margin-top>\n    Meranie vzdialenosti pomocou GPS je iba orientačné, namerané hodnoty nemusia byť presné. K meraniu je potrebný priamy GPS signál.\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/vzdialenost-detail/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], VzdialenostDetailPage);
    return VzdialenostDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(216);
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
            _this.showResult(barcodeData);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QrDetailPage);
    return QrDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredajnaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
    }
    PredajnaPage.prototype.ionViewDidLoad = function () {
        this.jsMap();
    };
    PredajnaPage.prototype.jsMap = function () {
        var latLng = new google.maps.LatLng(48.14378476391087, 17.148028099987513);
        var mapOptions = {
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
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">Gipsol, a.s.</h2>' +
            '<div id="bodyContent">' +
            '<p><b>Predajňa stavebnín a sadrokartónové centrum</b></p>' +
            '<p>Mlynské nivy 56, 821 09 Bratislava</p>' +
            '<p><a href="https://www.google.sk/maps/dir//Gipsol,+a.s.,+Mlynsk%C3%A9+nivy+56,+821+09+Bratislava/@48.1445478,17.1417274,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x476c8927c44f20c9:0x1ab38d5cc80390e5!2m2!1d17.147953!2d48.143817!3e0" target="_blank">Navigovať</a></p>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });
        marker.addListener('click', function () {
            infowindow.open(this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], PredajnaPage.prototype, "mapElement", void 0);
    PredajnaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-predajna',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/predajna/item.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Predajňa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="hours">\n            \n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <h1 class="title">Kedy máme otvorené</h1>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                </ion-col>\n                <ion-col>\n                  <b>Sadrokartóny</b>\n                </ion-col>\n                <ion-col>\n                  <b>Stavebniny</b>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  Pondelok\n                </ion-col>\n                <ion-col>\n                  07:00 - 17:00\n                </ion-col>\n                <ion-col>\n                  07:00 - 15:30\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  Utorok\n                </ion-col>\n                <ion-col>\n                  07:00 - 17:00\n                </ion-col>\n                <ion-col>\n                  07:00 - 15:30\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  Streda\n                </ion-col>\n                <ion-col>\n                  07:00 - 17:00\n                </ion-col>\n                <ion-col>\n                  07:00 - 15:30\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  Štvrtok\n                </ion-col>\n                <ion-col>\n                  07:00 - 17:00\n                </ion-col>\n                <ion-col>\n                  07:00 - 15:30\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  Piatok\n                </ion-col>\n                <ion-col>\n                  07:00 - 17:00\n                </ion-col>\n                <ion-col>\n                  07:00 - 15:30\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  Sobota\n                </ion-col>\n                <ion-col>\n                  07:00 - 13:00\n                </ion-col>\n                <ion-col>\n                  zatvorené\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  Nedeľa\n                </ion-col>\n                <ion-col>\n                  zatvorené\n                </ion-col>\n                <ion-col>\n                  zatvorené\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n\n          <div #map id="map"></div>\n\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/predajna/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], PredajnaPage);
    return PredajnaPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KontaktyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KontaktyPage = (function () {
    function KontaktyPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.showInfoFirst = false;
        this.showInfoSecond = false;
        this.showInfoThird = false;
        this.showInfoFourth = false;
        this.platform.ready().then(function () {
            return console.log('toast');
        });
    }
    KontaktyPage.prototype.ionViewDidLoad = function () {
    };
    KontaktyPage.prototype.showRowInfoFirst = function () {
        this.showInfoFirst = !this.showInfoFirst;
    };
    KontaktyPage.prototype.showRowInfoSecond = function () {
        this.showInfoSecond = !this.showInfoSecond;
    };
    KontaktyPage.prototype.showRowInfoThird = function () {
        this.showInfoThird = !this.showInfoThird;
    };
    KontaktyPage.prototype.showRowInfoFourth = function () {
        this.showInfoFourth = !this.showInfoFourth;
    };
    KontaktyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kontakty',template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/kontakty/item.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Kontakty</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="rootRow">\n      <ion-col>\n        <div class="rowToggle" (click)="showRowInfoFirst()">\n          <h2>Obchodné oddelenie</h2>\n          <div class="desc">cenové ponuky, technické poradenstvo</div>\n        </div>\n        <div class="rowInfo" *ngIf="showInfoFirst == true">\n          <div class="hodiny">počas pracovných dní od 07:00 do 15:30</div>\n          <ion-row>\n            <ion-col>\n              <div class="type mobile">\n                mobil:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val mobile">\n                <a href="tel:+421940600891">0940/600 891</a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="type tel">\n                tel./fax.:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val tel">\n                <a href="tel:+421253419284">02/5341 9284</a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="type mail">\n                e-mail:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val mail">\n                <a href="mailto:obchod@gipsol.sk">obchod@gipsol.sk</a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="rootRow">\n      <ion-col>\n        <div class="rowToggle" (click)="showRowInfoSecond()">\n          <h2>Odbyt</h2>\n          <div class="desc">tovar na objednávku, revízne klapky</div>\n        </div>\n        <div class="rowInfo" *ngIf="showInfoSecond == true">\n          <div class="hodiny">počas pracovných dní od 07:00 do 15:30</div>\n          <ion-row>\n            <ion-col>\n              <div class="type mobile">\n                mobil:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val mobile">\n                <a href="tel:+421940600891">0940/600 891</a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="type tel">\n                tel./fax.:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val tel">\n                <a href="tel:+421253416042">02/5341 6042</a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="type mail">\n                e-mail:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val mail">\n                <a href="mailto:gipsol@gipsol.sk">gipsol@gipsol.sk</a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="rootRow">\n      <ion-col>\n        <div class="rowToggle" (click)="showRowInfoThird()">\n          <h2>Stavebniny</h2>\n          <div class="desc">informácie</div>\n        </div>\n        <div class="rowInfo" *ngIf="showInfoThird == true">\n          <div class="hodiny">počas pracovných dní od 07:00 do 15:30</div>\n          <ion-row>\n            <ion-col>\n              <div class="type tel">\n                tel./fax.:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val tel">\n                <a href="tel:+421220910135">02/2091 0135</a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="type mail">\n                e-mail:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val mail">\n                <a href="mailto:stavebniny@gipsol.sk">stavebniny@gipsol.sk</a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="rootRow">\n      <ion-col>\n        <div class="rowToggle" (click)="showRowInfoFourth()">\n          <h2>Ekonomický úsek</h2>\n          <div class="desc">fakturácia</div>\n        </div>\n        <div class="rowInfo" *ngIf="showInfoFourth == true">\n          <div class="hodiny">počas pracovných dní od 07:00 do 15:30</div>\n          <ion-row>\n            <ion-col>\n              <div class="type tel">\n                tel./fax.:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val tel">\n                <a href="tel:+421253419282">02/5341 9282</a>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="type mail">\n                e-mail:\n              </div>\n            </ion-col>\n            <ion-col col-8>\n              <div class="val mail">\n                <a href="mailto:ekonomika@gipsol.sk">ekonomika@gipsol.sk</a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/pages/kontakty/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], KontaktyPage);
    return KontaktyPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NastrojeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NastrojeDetailPage);
    return NastrojeDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(242);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_letaky_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_vypocty_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_vypocty_detail_vypocty_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_postupy_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_postupy_detail_postupy_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nastroje_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nastroje_detail_item__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_meter_detail_item__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_prevodnik_detail_item__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_vzdialenost_detail_item__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_qr_detail_item__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_predajna_item__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_kontakty_item__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_background_image_background_image__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_barcode_scanner__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_toast__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_flashlight__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_gyroscope__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_gallery_modal__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_letaky_list__["a" /* LetakyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vypocty_list__["a" /* VypoctyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_vypocty_detail_vypocty_detail__["a" /* VypoctyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_postupy_list__["a" /* PostupyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_postupy_detail_postupy_detail__["a" /* PostupyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_nastroje_list__["a" /* NastrojePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nastroje_detail_item__["a" /* NastrojeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_meter_detail_item__["a" /* MeterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_prevodnik_detail_item__["a" /* PrevodnikDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_vzdialenost_detail_item__["a" /* VzdialenostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_qr_detail_item__["a" /* QrDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_predajna_item__["a" /* PredajnaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_kontakty_item__["a" /* KontaktyPage */],
                __WEBPACK_IMPORTED_MODULE_19__directives_background_image_background_image__["a" /* BackgroundImageDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/nastroje-detail/item.module#NastrojeDetailPageModule', name: 'NastrojeDetailPage', segment: 'item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postupy-detail/postupy-detail.module#PostupyDetailPageModule', name: 'PostupyDetailPage', segment: 'postupy-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vypocty-detail/vypocty-detail.module#VypoctyDetailPageModule', name: 'VypoctyDetailPage', segment: 'vypocty-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27_ionic_gallery_modal__["c" /* GalleryModalModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_letaky_list__["a" /* LetakyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_vypocty_list__["a" /* VypoctyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_vypocty_detail_vypocty_detail__["a" /* VypoctyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_postupy_list__["a" /* PostupyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_postupy_detail_postupy_detail__["a" /* PostupyDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_nastroje_list__["a" /* NastrojePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nastroje_detail_item__["a" /* NastrojeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_meter_detail_item__["a" /* MeterDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_prevodnik_detail_item__["a" /* PrevodnikDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_vzdialenost_detail_item__["a" /* VzdialenostDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_qr_detail_item__["a" /* QrDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_predajna_item__["a" /* PredajnaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_kontakty_item__["a" /* KontaktyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_flashlight__["a" /* Flashlight */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_gyroscope__["a" /* Gyroscope */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */],
                    useClass: __WEBPACK_IMPORTED_MODULE_27_ionic_gallery_modal__["b" /* GalleryModalHammerConfig */],
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_letaky_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_postupy_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_nastroje_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_predajna_item__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_kontakty_item__ = __webpack_require__(218);
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
            { title: 'Úvod', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home.png' },
            { title: 'Akciové letáky', component: __WEBPACK_IMPORTED_MODULE_5__pages_letaky_list__["a" /* LetakyPage */], icon: 'news.png' },
            { title: 'Pracovné postupy', component: __WEBPACK_IMPORTED_MODULE_7__pages_postupy_list__["a" /* PostupyPage */], icon: 'procedures.png' },
            { title: 'Výpočet spotreby materiálu', component: __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__["a" /* VypoctyPage */], icon: 'calc.png' },
            { title: 'Nástroje', component: __WEBPACK_IMPORTED_MODULE_8__pages_nastroje_list__["a" /* NastrojePage */], icon: 'tools.png' },
            { title: 'Predajňa', component: __WEBPACK_IMPORTED_MODULE_9__pages_predajna_item__["a" /* PredajnaPage */], icon: 'store.png' },
            { title: 'Kontakty', component: __WEBPACK_IMPORTED_MODULE_10__pages_kontakty_item__["a" /* KontaktyPage */], icon: 'contacts.png' }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <img class="logo" alt="logo" height="40" src="assets/imgs/icons/ic_logo_white_long.png" >\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <a menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <img alt="{{p.title}}" height="20" src="assets/imgs/icons/nav/{{p.icon}}">\n        {{p.title}}\n      </a>\n    </ion-list>\n    <ion-list class="bottomPos">\n      <div *ngFor="let l of links">\n        <a ion-item href="{{l.link}}" target="_blank">\n          <img alt="{{l.title}}" height="20" src="assets/imgs/icons/{{l.icon}}">\n          {{l.title}}\n        </a>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Applications/MAMP_2018-05-04_13-30-01/htdocs/g-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
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


var NamesService = (function () {
    function NamesService(http) {
        this.http = http;
        this.apiUrl = './assets/json/names.json';
    }
    NamesService.prototype.getNames = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    NamesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NamesService);
    return NamesService;
}());

//# sourceMappingURL=names-service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
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

/***/ 302:
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

},[220]);
//# sourceMappingURL=main.js.map