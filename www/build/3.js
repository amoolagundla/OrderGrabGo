webpackJsonp([3],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashPageModule", function() { return DashPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dash__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashPageModule = (function () {
    function DashPageModule() {
    }
    DashPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__Dash__["a" /* DashPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__Dash__["a" /* DashPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__Dash__["a" /* DashPage */]
            ]
        })
    ], DashPageModule);
    return DashPageModule;
}());

//# sourceMappingURL=Dash.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_local_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_SharedDataService__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ValuesService__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(84);





var BasePage = (function () {
    function BasePage(injector) {
        this.loadingCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]);
        this.toastCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */]);
        this.navCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */]);
        this.alertCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]);
        this.navParams = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]);
        this.localStorage = injector.get(__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]);
        this.storageProviderClass = injector.get(__WEBPACK_IMPORTED_MODULE_0__providers_local_storage__["a" /* LocalStorage */]);
        this.sharedData = injector.get(__WEBPACK_IMPORTED_MODULE_1__providers_SharedDataService__["a" /* SharedDataService */]);
        this._valuesService = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_ValuesService__["a" /* ValuesService */]);
        var menu = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* MenuController */]);
        menu.swipeEnable(this.enableMenuSwipe());
    }
    BasePage.prototype.showLoadingView = function () {
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isContentViewVisible = false;
        this.isLoadingViewVisible = true;
        this.loader = this.loadingCtrl.create({
            content: "<p class=\"item\">Loading Please Wait</p>",
        });
        this.loader.present();
    };
    //This returns a promise but we can get away without handling it in this case.
    BasePage.prototype.setName = function (name, value) {
        var _this = this;
        this.localStorage.set(name, value).then(function () {
            _this.storageProviderClass.token.then(function (token) {
                if (token != null) {
                    //this.GetUserInfo();
                }
                else {
                    _this.setRoot('SignInPage');
                }
            }, function (error) { _this.setRoot('SignInPage'); });
        });
    };
    ;
    BasePage.prototype.navigatePage = function () {
        var _this = this;
        this.storageProviderClass.skipIntroPage.then(function (skipIntroPage) {
            if (skipIntroPage) {
                _this.storageProviderClass.token.then(function (token) {
                    if (token != null) {
                    }
                    else {
                        _this.setRoot('SignInPage');
                    }
                }, function (error) { _this.setRoot('SignInPage'); });
            }
        }).catch(function (e) { return console.log(e); });
    };
    BasePage.prototype.getName = function (name) {
        return this.localStorage.get(name);
    };
    ;
    BasePage.prototype.removeName = function (name) {
        return this.localStorage.remove(name);
    };
    BasePage.prototype.clearKeys = function () {
        this.localStorage.clear().then(function () {
            console.log('Keys have been cleared');
        });
    };
    BasePage.prototype.showContentView = function () {
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = true;
        this.loader.dismiss();
    };
    BasePage.prototype.showEmptyView = function () {
        this.isErrorViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = true;
        this.loader.dismiss();
    };
    BasePage.prototype.showErrorView = function () {
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isErrorViewVisible = true;
        this.loader.dismiss();
    };
    BasePage.prototype.onRefreshComplete = function (data) {
        if (data === void 0) { data = null; }
        if (this.refresher) {
            this.refresher.complete();
        }
        if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (data && data.length === 0) {
                this.infiniteScroll.enable(false);
            }
            else {
                this.infiniteScroll.enable(true);
            }
        }
    };
    BasePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    BasePage.prototype.showConfirm = function (message) {
        return Promise.resolve(true);
    };
    BasePage.prototype.navigateTo = function (page, params) {
        if (params === void 0) { params = {}; }
        this.navCtrl.push(page, params);
    };
    BasePage.prototype.setRoot = function (name) {
        this.navCtrl.setRoot(name);
    };
    ;
    return BasePage;
}());

//# sourceMappingURL=base-page.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_empty_view_empty_view_module__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_fallback__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_img_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_rating__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_img_fallback__["Ng2ImgFallbackModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_img_fallback__["Ng2ImgFallbackModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_rating__["a" /* Ionic2RatingModule */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_view__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmptyViewModule = (function () {
    function EmptyViewModule() {
    }
    EmptyViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */]
            ]
        })
    ], EmptyViewModule);
    return EmptyViewModule;
}());

//# sourceMappingURL=empty-view.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyView = (function () {
    function EmptyView() {
        this.text = '';
        this.icon = 'alert';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyView.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyView.prototype, "icon", void 0);
    EmptyView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'empty-view',template:/*ion-inline-start:"C:\nearme\New folder\OrderGrabGo\src\components\empty-view\empty-view.html"*/'<div class="container">\n\n  <ion-icon [name]="icon"></ion-icon>\n\n  <p ion-item no-lines>{{ text }}</p>\n\n</div>\n\n'/*ion-inline-end:"C:\nearme\New folder\OrderGrabGo\src\components\empty-view\empty-view.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmptyView);
    return EmptyView;
}());

//# sourceMappingURL=empty-view.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(366);
/// <reference path="../../providers/shareddataservice.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashPage = (function (_super) {
    __extends(DashPage, _super);
    function DashPage(injector, _barcodeScanner) {
        var _this = _super.call(this, injector) || this;
        _this._barcodeScanner = _barcodeScanner;
        _this.qrData = null;
        _this.createdCode = null;
        _this.scannedCode = null;
        _this.user = _this.userInfo;
        _this.firstName = 'OrderGrabGo';
        _this.scannedObject = '';
        _this.scanData = false;
        _this.sharedData.UserInfo.subscribe(function (data) {
            if (data.FirstName != undefined) {
                _this.user = data;
                _this.userInfo = _this.user;
                _this.firstName = 'Hello ' + _this.userInfo.FirstName;
            }
        });
        return _this;
    }
    DashPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    DashPage.prototype.onFilter = function (filter) {
    };
    DashPage.prototype.qrCodeScan = function () {
        var _this = this;
        this._barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedObject = barcodeData.text;
        }, function (err) {
            console.log(err);
        });
    };
    DashPage.prototype.login = function () {
        this.navigateTo('CategoriesPage');
    };
    DashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Dash',template:/*ion-inline-start:"C:\nearme\New folder\OrderGrabGo\src\pages\dashboard-page\Dash.html"*/'\n\n\n\n<ion-header>\n\n <ion-navbar color="third">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title >{{firstName}}</ion-title>\n\n		 <ion-buttons end>\n\n           <button ion-button (click)="qrCodeScan()"><i class="fa fa-qrcode  fa-4x" aria-hidden="true"></i></button>\n\n						\n\n     \n\n        </ion-buttons>\n\n  </ion-navbar> \n\n	\n\n</ion-header>\n\n\n\n<ion-content padding #container style="background-size: cover;background-position: center center;">\n\n    \n\n    <!--<button ion-button full icon-left (click)="scan()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button>-->\n\n    \n\n    \n\n<table class="table" style="margin-top: 40%;">\n\n    \n\n    <tbody>\n\n      <tr>\n\n        <button ion-button block class="btn btn-lg " color="primary" style="width: 68%;margin-left: 15%;"   icon-start (click)="login()">\n\n            <ion-icon ios="ios-restaurant" md="md-restaurant"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n  Order Now\n\n</button><br/><br/>\n\n      </tr>\n\n      <tr>\n\n      <button ion-button block class="btn btn-lg " color="primary" style="width: 68%;margin-left: 15%;"  icon-start>\n\n <ion-icon ios="ios-mail" md="md-mail"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n\n  Messages\n\n</button><br/><br/>\n\n      </tr>\n\n      <tr>\n\n        <button ion-button block class="btn btn-lg " color="primary" style="width: 68%;margin-left: 15%;"  icon-start>\n\n  <ion-icon ios="ios-car" md="md-car"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n  Parking\n\n</button><br/><br/>\n\n      </tr>\n\n			<tr>\n\n        <button ion-button block class="btn btn-lg " color="primary" style="width: 68%;margin-left: 15%;"  icon-start>\n\n  <ion-icon ios="ios-cash" md="md-cash"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n\n  Donate\n\n</button><br/><br/>\n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n	\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\nearme\New folder\OrderGrabGo\src\pages\dashboard-page\Dash.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], DashPage);
    return DashPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=Dash.js.map

/***/ })

});
//# sourceMappingURL=3.js.map