webpackJsonp([2],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__Home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__Home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__Home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=Home.module.js.map

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

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_local_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_page_base_page__ = __webpack_require__(701);
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




var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(injector, storage, menu) {
        var _this = _super.call(this, injector) || this;
        _this.storage = storage;
        _this.menu = menu;
        _this.storage.skipIntroPage.then(function (skipIntroPage) { return _this.skipIntroPage = skipIntroPage; });
        return _this;
    }
    HomePage.prototype.enableMenuSwipe = function () {
        return false;
    };
    HomePage.prototype.login = function () {
        this.skipIntroPage = true;
        this.storage.skipIntroPage = this.skipIntroPage;
        this.navigatePage();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',template:/*ion-inline-start:"C:\nearme\New folder\OrderGrabGo\src\pages\home-page\home.html"*/'<ion-content>\n\n    <ion-slides pager="true" parallax="true" autoplay="500" loop="true" speed="900">\n\n        <ion-slide class="slide-1" color="dark">\n\n            <img src="https://ordergrabgo.com/img/hero.jpg" class="slide-image" />            \n\n            <section class="parallax-window" data-image-src="https://ordergrabgo.com/img/hero.jpg" data-natural-height="550" data-natural-width="1400" data-parallax="scroll" id="home" style="height: 400px;background-image: url(https://ordergrabgo.com/img/hero.jpg);\n\n    background-size: cover;\n\n    background-position: center center;\n\n    ">\n\n                <div id="subheader" style="background: transparent;">\n\n                    <div class="animated zoomIn" id="sub_content" style="padding-top: 348px;">\n\n\n\n                        <h1 style="font-size: 28px!important;margin-top: -140%;text-align: center;color: #78ef98;font-family: inherit;">OrderGrabGo</h1>\n\n\n\n                        <h4 style="color:white">First in line - EVERYWHERE!</h4>\n\n                        <h6 style="color:white">\n\n                            Tired of waiting in line for lunch?\n\n                            One Profile for restaurants nationwide!\n\n                        </h6>\n\n                        <button type="button" class="btn btn-default" ion-button block (click)="login()">\n\n                            {{ "Let\'s Explore" | translate }}\n\n                        </button>\n\n                    </div>\n\n\n\n                </div>\n\n\n\n            </section>\n\n        </ion-slide>\n\n        <ion-slide class="slide-2">\n\n            <div class="row">\n\n\n\n                <div class="col-md-5" style="margin-left: 14%;">\n\n                    <div class="box_home" id="one">\n\n                        <span>1</span>\n\n                        <h3>Search by address</h3>\n\n                        <p>\n\n                            Find all restaurants available in your zone.\n\n                        </p>\n\n                    </div>\n\n                </div>\n\n                </div>\n\n</ion-slide>\n\n        <ion-slide class="slide-3">\n\n            <div class="row">\n\n                <div class="col-md-5" style=" margin-left: 14%;">\n\n                    <div class="box_home" id="two">\n\n                        <span>2</span>\n\n                        <h3>Choose a restaurant</h3>\n\n                        <p>\n\n                            We have more than 1000s of menus online.\n\n                        </p>\n\n                    </div>\n\n                </div>\n\n                </div>\n\n</ion-slide>\n\n       \n\n        <ion-slide class="slide-4">\n\n            <div class="row">\n\n                <div class="col-md-5" style=" margin-left: 20%;">\n\n                    <div class="box_home" id="three">\n\n                        <span>3</span>\n\n                        <h3>Pay by card or cash</h3>\n\n                        <p>\n\n                            It\'s quick, easy and totally secure.\n\n                        </p>\n\n                    </div>\n\n                </div>\n\n                </div>\n\n</ion-slide>\n\n\n\n        <ion-slide class="slide-5">\n\n            <div class="row">\n\n                <div class="col-md-5" style=" margin-left: 14%;">\n\n                    <div class="box_home" id="four">\n\n                        <span>4</span>\n\n                        <h3>Delivery or takeaway</h3>\n\n                        <p>\n\n                            You are lazy? Are you backing home?\n\n                        </p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </ion-slide>\n\n        <ion-slide class="slide-6">\n\n            \n\n\n\n                <div class="caption" style="margin-top:-34%;">\n\n\n\n                    <h2 color="light" ion-text="" class="text text-md text-md-light" ng-reflect-color="light" style="font-size:21px;font-family:-webkit-body;">\n\n                        Ready to discover?\n\n                    </h2>\n\n</div>\n\n                    <button ion-button large icon-right color="primary" (click)="login()">\n\n                        {{ "GET_STARTED" | translate }}\n\n                        <ion-icon name="arrow-forward"></ion-icon>\n\n                    </button>\n\n        </ion-slide>\n\n       \n\n    </ion-slides>\n\n\n\n    \n\n'/*ion-inline-end:"C:\nearme\New folder\OrderGrabGo\src\pages\home-page\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__providers_local_storage__["a" /* LocalStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_3__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=Home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map