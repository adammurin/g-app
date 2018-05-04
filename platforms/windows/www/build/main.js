webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-postupy-detail',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\postupy-detail\postupy-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{nazov}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n      <img src="/assets/imgs/{{slide.image}}">\n      <p class="slide-title">{{slide.text}}</p>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\postupy-detail\postupy-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        });
    }
    VypoctyDetailPage_1 = VypoctyDetailPage;
    VypoctyDetailPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('vypocet').id;
        this.nazov = this.navParams.get('vypocet').nazov;
        this.text = this.navParams.get('vypocet').text;
        this.calculation_type = this.navParams.get('vypocet').calculation_type;
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
    };
    VypoctyDetailPage.prototype.clearInputs = function () {
        this.width = '';
        this.height = '';
    };
    VypoctyDetailPage.prototype.logForm = function () {
        this.results = [];
        this.showResults = true;
        var val1;
        switch (this.id) {
            case 1:
                val1 = Math.ceil(this.shadowArea / 2.4);
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
                val1 = Math.ceil(this.shadowArea / 2.4);
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
            case 3:
                val1 = Math.ceil(this.shadowArea / 2.4);
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
        }
    };
    VypoctyDetailPage = VypoctyDetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vypocty-detail',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\vypocty-detail\vypocty-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{nazov}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-card *ngIf="showResults == false">\n    <ion-card-header>\n      Výpočet\n    </ion-card-header>\n      <ion-card-content>\n        <form *ngIf=" calculation_type == 1 " [formGroup]="formOne" (ngSubmit)="logForm()">\n          <div >\n            <ion-item>\n              <ion-label stacked>Zadajte plochu stropu</ion-label>\n              <ion-input type="text" formControlName="area" placeholder="" [(ngModel)]="shadowArea" (input)="clearInputs()"></ion-input><ion-label class="afterInput">m<sup>2</sup></ion-label>\n            </ion-item>\n            <h3>alebo</h3>\n            <ion-item>\n              <ion-label stacked>Dĺžka</ion-label>\n              <ion-input type="number" formControlName="width" [(ngModel)]="width" (input)="calcArea($event.target.value)"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Šírka</ion-label>\n              <ion-input type="number" formControlName="height" [(ngModel)]="height" (input)="calcArea($event.target.value)"></ion-input>\n            </ion-item>\n            \n            <button ion-button type="submit" [disabled]="!formOne.valid">Submit</button>\n          </div>\n        </form>\n\n        <form *ngIf=" calculation_type == 2 " [formGroup]="formTwo" (ngSubmit)="logForm()">\n          <ion-item>\n            <ion-label stacked>Dĺžka</ion-label>\n            <ion-input type="text" formControlName="width"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>Šírka</ion-label>\n            <ion-input type="text" formControlName="height"></ion-input>\n          </ion-item>\n          \n          <button ion-button type="submit" [disabled]="!formTwo.valid">Submit</button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf="showResults == true">\n      <ion-card-header>\n        Výpočet\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col class="fadedText">\n              Na {{this.shadowArea}} m<sup>2</sup> budete potrebovať\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor="let result of results">\n            <ion-col col-9>\n              {{result.name}}\n            </ion-col>\n            <ion-col col-3>\n              {{result.value}} <span [innerHTML]="result.unit"></span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\vypocty-detail\vypocty-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
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
		294,
		2
	],
	"../pages/postupy-detail/postupy-detail.module": [
		295,
		1
	],
	"../pages/vypocty-detail/vypocty-detail.module": [
		296,
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
        this.apiUrl = '../../vypocty.json';
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-home',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img class="logo" alt="logo" height="40" src="assets/imgs/icons/ic_logo_white_long.png" >\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n\n\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VypoctyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-vypocty',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\vypocty\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Výpočet spotreby materiálu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let vypocet of vypocty" (click)="viewItem(vypocet)" col-6>\n      <div class="cover-image" [style.background-image]="\'url(/assets/imgs/\' + vypocet.hlavny_obrazok + \')\'">\n      <h2 class="title">{{vypocet.nazov}}</h2>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\vypocty\list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vypocty_service_vypocty_service__["a" /* VypoctyService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VypoctyPage);
    return VypoctyPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostupyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__ = __webpack_require__(291);
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
            console.log(_this.postupy);
        });
    };
    PostupyPage.prototype.viewItem = function (postup) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__postupy_detail_postupy_detail__["a" /* PostupyDetailPage */], {
            postup: postup
        });
    };
    PostupyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postupy',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\postupy\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pracovné postupy</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let postup of postupy" (click)="viewItem(postup)" col-6>\n      <div class="cover-image" [style.background-image]="\'url(/assets/imgs/\' + postup.hlavny_obrazok + \')\'">\n      <h2 class="title">{{postup.nazov}}</h2>\n      </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\postupy\list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__["a" /* PostupyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_postupy_service_postupy_service__["a" /* PostupyService */]])
    ], PostupyPage);
    return PostupyPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NastrojePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meter_detail_item__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prevodnik_detail_item__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vzdialenost_detail_item__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qr_detail_item__ = __webpack_require__(210);
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
            selector: 'page-nastroje',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\nastroje\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nástroje</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)="viewMeter()" col-6>\n        <img src="/assets/imgs/nastroje/meter.png">\n        <h2 class="title">Meter, baterka, vodováha</h2>\n      </ion-col>\n      <ion-col (click)="viewPrevodnik()" col-6>\n        <img src="/assets/imgs/nastroje/prevodnik.png">\n        <h2 class="title">Prevodník jednotiek</h2>\n      </ion-col>\n      <ion-col (click)="viewVzdialenost()" col-6>\n        <img src="/assets/imgs/nastroje/vzdialenost.png">\n        <h2 class="title">Meranie vzdialenosti</h2>\n      </ion-col>\n      <ion-col (click)="viewQr()" col-6>\n        <img src="/assets/imgs/nastroje/qr.png">\n        <h2 class="title">Čítačka QR kódov</h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\nastroje\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NastrojePage);
    return NastrojePage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeterDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__ = __webpack_require__(101);
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
    function MeterDetailPage(navCtrl, navParams, flashlight) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flashlight = flashlight;
    }
    MeterDetailPage.prototype.ionViewDidLoad = function () {
        this.turnOnFlashlight();
    };
    MeterDetailPage.prototype.turnOnFlashlight = function () {
        this.flashlight.switchOn();
    };
    MeterDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meter-detail',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\meter-detail\item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\meter-detail\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__["a" /* Flashlight */]])
    ], MeterDetailPage);
    return MeterDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevodnikDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function PrevodnikDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrevodnikDetailPage.prototype.ionViewDidLoad = function () {
    };
    PrevodnikDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prevodnik-detail',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\prevodnik-detail\item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Prevodník jednotiek</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\prevodnik-detail\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrevodnikDetailPage);
    return PrevodnikDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VzdialenostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-vzdialenost-detail',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\vzdialenost-detail\item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Meranie vzdialenosti</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="hours">\n          <h1 class="title">Kedy máme otvorené</h1>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col>\n                <b>Sadrokartóny</b>\n              </ion-col>\n              <ion-col>\n                <b>Stavebniny</b>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Pondelok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Utorok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Streda\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Štvrtok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Piatok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Sobota\n              </ion-col>\n              <ion-col>\n                07:00 - 13:00\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Nedeľa\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\vzdialenost-detail\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VzdialenostDetailPage);
    return VzdialenostDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(211);
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
    function QrDetailPage(navCtrl, navParams, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
    }
    QrDetailPage.prototype.ionViewDidLoad = function () {
        this.initScanner();
    };
    QrDetailPage.prototype.initScanner = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    QrDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-detail',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\qr-detail\item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Čítačka QR kódov</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\qr-detail\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], QrDetailPage);
    return QrDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredajnaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(292);
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
        this.loadMap();
    };
    PredajnaPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert('clicked');
                });
            });
        });
    };
    PredajnaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-predajna',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\predajna\item.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Predajňa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="hours">\n          <h1 class="title">Kedy máme otvorené</h1>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col>\n                <b>Sadrokartóny</b>\n              </ion-col>\n              <ion-col>\n                <b>Stavebniny</b>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Pondelok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Utorok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Streda\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Štvrtok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Piatok\n              </ion-col>\n              <ion-col>\n                07:00 - 17:00\n              </ion-col>\n              <ion-col>\n                07:00 - 15:30\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Sobota\n              </ion-col>\n              <ion-col>\n                07:00 - 13:00\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Nedeľa\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n              <ion-col>\n                zatvorené\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\predajna\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], PredajnaPage);
    return PredajnaPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NastrojeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-nastroje-detail',template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\pages\nastroje-detail\item.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{nazov}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n      <img src="/assets/imgs/{{slide.image}}">\n      <p class="slide-title">{{slide.text}}</p>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\pages\nastroje-detail\item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NastrojeDetailPage);
    return NastrojeDetailPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(236);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_vypocty_detail_vypocty_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_postupy_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_postupy_detail_postupy_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nastroje_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nastroje_detail_item__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_meter_detail_item__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_prevodnik_detail_item__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_vzdialenost_detail_item__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_qr_detail_item__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_predajna_item__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_background_image_background_image__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_qr_scanner__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_flashlight__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/nastroje-detail/item.module#NastrojeDetailPageModule', name: 'NastrojeDetailPage', segment: 'item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postupy-detail/postupy-detail.module#PostupyDetailPageModule', name: 'PostupyDetailPage', segment: 'postupy-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vypocty-detail/vypocty-detail.module#VypoctyDetailPageModule', name: 'VypoctyDetailPage', segment: 'vypocty-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_flashlight__["a" /* Flashlight */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_flashlight__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_postupy_list__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_nastroje_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_predajna_item__ = __webpack_require__(212);
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
    function MyApp(platform, statusBar, splashScreen, flashlight) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.flashlight = flashlight;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home.png' },
            { title: 'Akciové letáky', component: __WEBPACK_IMPORTED_MODULE_7__pages_postupy_list__["a" /* PostupyPage */], icon: 'news.png' },
            { title: 'Pracovné postupy', component: __WEBPACK_IMPORTED_MODULE_7__pages_postupy_list__["a" /* PostupyPage */], icon: 'procedures.png' },
            { title: 'Výpočet spotreby materiálu', component: __WEBPACK_IMPORTED_MODULE_6__pages_vypocty_list__["a" /* VypoctyPage */], icon: 'calc.png' },
            { title: 'Nástroje', component: __WEBPACK_IMPORTED_MODULE_8__pages_nastroje_list__["a" /* NastrojePage */], icon: 'tools.png' },
            { title: 'Predajňa', component: __WEBPACK_IMPORTED_MODULE_9__pages_predajna_item__["a" /* PredajnaPage */], icon: 'store.png' },
            { title: 'Kontakty', component: __WEBPACK_IMPORTED_MODULE_7__pages_postupy_list__["a" /* PostupyPage */], icon: 'contacts.png' }
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
            _this.flashlight.switchOn();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\xampp\htdocs\ionic\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <img class="logo" alt="logo" height="40" src="assets/imgs/icons/ic_logo_white_long.png" >\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <a menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <img alt="{{p.title}}" height="20" src="assets/imgs/icons/nav/{{p.icon}}">\n        {{p.title}}\n      </a>\n    </ion-list>\n    <ion-list class="bottomPos">\n      <div *ngFor="let l of links">\n        <a ion-item href="{{l.link}}" target="_blank">\n          <img alt="{{l.title}}" height="20" src="assets/imgs/icons/{{l.icon}}">\n          {{l.title}}\n        </a>\n      </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\xampp\htdocs\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_flashlight__["a" /* Flashlight */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
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
        this.apiUrl = '../../postupy.json';
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

/***/ 293:
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

},[214]);
//# sourceMappingURL=main.js.map