webpackJsonp([11],{

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dash__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(811);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashPageModule", function() { return DashPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashPageModule = (function () {
    function DashPageModule() {
    }
    return DashPageModule;
}());
DashPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__Dash__["a" /* DashPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__Dash__["a" /* DashPage */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__Dash__["a" /* DashPage */]
        ]
    })
], DashPageModule);

//# sourceMappingURL=Dash.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_view__ = __webpack_require__(810);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmptyViewModule = (function () {
    function EmptyViewModule() {
    }
    return EmptyViewModule;
}());
EmptyViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */]
        ]
    })
], EmptyViewModule);

//# sourceMappingURL=empty-view.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyView; });
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
    return EmptyView;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EmptyView.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EmptyView.prototype, "icon", void 0);
EmptyView = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'empty-view',template:/*ion-inline-start:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\components\empty-view\empty-view.html"*/'<div class="container">\n  <ion-icon [name]="icon"></ion-icon>\n  <p ion-item no-lines>{{ text }}</p>\n</div>\n'/*ion-inline-end:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\components\empty-view\empty-view.html"*/
    }),
    __metadata("design:paramtypes", [])
], EmptyView);

//# sourceMappingURL=empty-view.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback__["Ng2ImgFallbackModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__["LazyLoadImageModule"],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback__["Ng2ImgFallbackModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__["LazyLoadImageModule"],
            __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_local_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_SharedDataService__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ValuesService__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });






var BasePage = (function () {
    function BasePage(injector) {
        this.loadingCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* LoadingController */]);
        this.toastCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */]);
        this.navCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */]);
        this.alertCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* AlertController */]);
        this.navParams = injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavParams */]);
        this.translate = injector.get(__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]);
        this.localStorage = injector.get(__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]);
        this.storageProviderClass = injector.get(__WEBPACK_IMPORTED_MODULE_1__providers_local_storage__["a" /* LocalStorage */]);
        this.sharedData = injector.get(__WEBPACK_IMPORTED_MODULE_2__providers_SharedDataService__["a" /* SharedDataService */]);
        this._valuesService = injector.get(__WEBPACK_IMPORTED_MODULE_3__providers_ValuesService__["a" /* ValuesService */]);
        var menu = injector.get(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* MenuController */]);
        menu.swipeEnable(this.enableMenuSwipe());
    }
    BasePage.prototype.showLoadingView = function () {
        var _this = this;
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isContentViewVisible = false;
        this.isLoadingViewVisible = true;
        this.translate.get('LOADING').subscribe(function (loadingText) {
            _this.loader = _this.loadingCtrl.create({
                content: "<p class=\"item\">" + loadingText + "</p>",
            });
            _this.loader.present();
        });
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
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.translate.get(['OK', 'CANCEL']).subscribe(function (values) {
                var confirm = _this.alertCtrl.create({
                    title: '',
                    message: message,
                    buttons: [{
                            text: values.CANCEL,
                            handler: function () {
                                reject();
                            }
                        }, {
                            text: values.OK,
                            handler: function () {
                                resolve(true);
                            }
                        }]
                });
                confirm.present();
            });
        });
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

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashPage; });
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
            _this.init();
        });
        return _this;
    }
    DashPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    DashPage.prototype.onFilter = function (filter) {
    };
    DashPage.prototype.init = function () {
        this.navigatePage();
        // Optionally request the permission early
        //this.qrScanner.prepare()
        //    .then((status: QRScannerStatus) => {
        //        if (status.authorized) {
        //            // camera permission was granted
        //            // wait for user to scan something, then the observable callback will be called
        //            this.scanData = true;
        //        } else if (status.denied) {
        //            // camera permission was permanently denied
        //            // you must use QRScanner.openSettings() method to guide the user to the settings page
        //            // then they can grant the permission from there
        //        } else {
        //            // permission was denied, but not permanently. You can ask for permission again at a later time.
        //        }
        //    })
        //    .catch((e: any) => console.log('Error is', e));
    };
    DashPage.prototype.login = function () {
        this.navigateTo('CategoriesPage');
    };
    DashPage.prototype.scan = function () {
        var _this = this;
        this._barcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled) {
                console.log("User cancelled the action!");
                return false;
            }
            console.log("Scanned successfully!");
            console.log(barcodeData);
            _this.scannedObject = barcodeData.text;
        }, function (err) {
            console.log(err);
        });
        //this.barcodeScanner.scan().then((barcodeData) => {
        //    this.scannedCode = barcodeData;
        //}, (err) => {
        //});
    };
    return DashPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));
DashPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'Dash',template:/*ion-inline-start:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\dashboard-page\Dash.html"*/'\n\n<ion-header>\n <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >{{firstName}}</ion-title>\n		 <ion-buttons end>\n           <button ion-button (click)="scan()"><i class="fa fa-qrcode  fa-4x" aria-hidden="true"></i></button>\n						\n     \n        </ion-buttons>\n  </ion-navbar> \n	\n</ion-header>\n\n<ion-content padding #container style="background-size: cover;background-position: center center;background-image:url(http://www.ansonika.com/quickfood/img/sub_header_home.jpg);">\n    \n\n    <button ion-button full icon-left (click)="scan()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>Scan Code</button>\n\n\n\n    \n\n    \n\n    <ion-card *ngIf="scannedCode">\n\n        <ion-card-content>\n\n            Result from Scan: {{ scannedCode }}\n\n        </ion-card-content>\n\n    </ion-card>\n<table class="table" style="\n    margin-top: 25%;">\n    \n    <tbody>\n      <tr>\n        <button ion-button block class="btn btn-lg btn-success"    icon-start (click)="login()">\n <ion-icon ios="ios-restaurant" md="md-restaurant"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n  Order Now\n</button><br/><br/>\n      </tr>\n      <tr>\n      <button ion-button block class="btn btn-lg btn-success"   icon-start>\n <ion-icon ios="ios-mail" md="md-mail"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n  Messages\n</button><br/><br/>\n      </tr>\n      <tr>\n        <button ion-button block class="btn btn-lg btn-success"   icon-start>\n  <ion-icon ios="ios-car" md="md-car"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n  Parking\n</button><br/><br/>\n      </tr>\n			<tr>\n        <button ion-button block class="btn btn-lg btn-success"   icon-start>\n  <ion-icon ios="ios-cash" md="md-cash"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  Donate\n</button><br/><br/>\n      </tr>\n    </tbody>\n  </table>\n	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\dashboard-page\Dash.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], DashPage);

//# sourceMappingURL=Dash.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map