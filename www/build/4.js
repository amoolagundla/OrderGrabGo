webpackJsonp([4],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoriesPageModule = (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */]
            ]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());

//# sourceMappingURL=categories.module.js.map

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

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_location_accuracy__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ValuesService__ = __webpack_require__(151);
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





var CategoriesPage = (function (_super) {
    __extends(CategoriesPage, _super);
    function CategoriesPage(injector, locationAccuracy, valuesService, geolocation) {
        var _this = _super.call(this, injector) || this;
        _this.locationAccuracy = locationAccuracy;
        _this.valuesService = valuesService;
        _this.geolocation = geolocation;
        _this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                var priority = _this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY;
                _this.locationAccuracy.request(priority)
                    .then(function () { return console.log('Request successful'); })
                    .catch(function (error) {
                    if (error && error.code !== _this.locationAccuracy.ERROR_USER_DISAGREED) {
                    }
                });
            }
        }).catch(function (err) { return console.log(err); });
        return _this;
    }
    CategoriesPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    CategoriesPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView();
        this.loadData();
    };
    CategoriesPage.prototype.goToPlaces = function () {
    };
    CategoriesPage.prototype.getlocation = function () {
        return this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    };
    CategoriesPage.prototype.loadData = function () {
        var _this = this;
        this.getlocation().then(function (resp) {
            _this.valuesService.CheckLocation(resp.coords.latitude, resp.coords.longitude).subscribe(function (data) {
                _this.places = data;
                _this.showContentView();
                _this.onRefreshComplete();
            });
        }).catch(function (error) {
            _this.showEmptyView();
        });
    };
    CategoriesPage.prototype.onReload = function (refresher) {
        this.refresher = refresher;
        this.loadData();
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"C:\nearme\New folder\OrderGrabGo\src\pages\categories\categories.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ \'OrderGrabNGo\'  }}</ion-title>\n\n  </ion-navbar> \n\n	<ion-toolbar color="secondary">\n\n    <ion-searchbar color="dark" debounce="2000"\n\n      placeholder="{{ \'Start Searching\'  }}"\n\n      (ionInput)="onSearchAddress()"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert"\n\n    [text]="\'ERROR_CATEGORIES\' ">\n\n  </empty-view>\n\n\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="bookmark"\n\n    [text]="\'EMPTY_CATEGORIES\' ">\n\n  </empty-view>\n\n\n\n  <ion-refresher (ionRefresh)="onReload($event)" >\n\n    <ion-refresher-content\n\n      pullingText="{{ \'PULL_TO_REFRESH\'  }}"\n\n      refreshingText="{{ \'REFRESHING\'  }}">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n<div *ngIf="isContentViewVisible"> \n\n	<!-- <ion-card *ngFor="let place of places.results">\n\n\n\n    <img src="assets/img/location.png" offset="100"\n\n          [lazyLoad]="place.photos[0].photo_reference">\n\n  <ion-item>\n\n   \n\n    <h6 class="text-danger-big">{{place.name}}</h6>\n\n    <p class="text-danger-small">{{ place.vicinity}}</p>\n\n  </ion-item>\n\n  <ion-item >\n\n   <span item-left></span>\n\n    <span item-left class="text-danger-small">{{place.opening_hours.open_now==true? \'Open\':\'Closed\'}}</span>\n\n    <button ion-button icon-left clear item-end>\n\n      <ion-icon name="navigate"></ion-icon>\n\n      Start\n\n    </button>\n\n  </ion-item> </ion-card> -->\n\n<div class="white_bg" >\n\n    <div class="container margin_60">\n\n        \n\n        <div class="main_title">\n\n            <h2 class="nomargin_top" style="margin-top:-5%;font-size: 22px;\n\n    font-family: -webkit-pictograph;">Choose from Most Popular</h2>\n\n            \n\n        </div>\n\n        \n\n        <div class="row">\n\n            <div class="col-md-6" style="width: -webkit-fill-available;">\n\n                <a href="detail_page.html" class="strip_list" *ngFor="let place of places.results">\n\n                <div class="ribbon_1">Popular</div>\n\n                    <div class="desc">\n\n                        <div class="thumb_strip">\n\n												 <img src="{{place.photos[0].photo_reference}}" offset="100"\n\n         >\n\n                           \n\n                        </div>\n\n                        <div class="rating">\n\n                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>\n\n                        </div>\n\n                        <h3>{{place.name}}</h3>\n\n                        <div class="type" >\n\n                            {{ place.types.join(\', \') }}\n\n                        </div>\n\n                        <div class="location">\n\n                           {{place.vicinity}} <span class="opening">{{place.opening_hours.open_now==true? \'Open\':\'Closed\'}}</span>\n\n                        </div>\n\n                        <ul>\n\n                            <li>Take away<i class="icon_check_alt2 ok"></i></li>\n\n                            <li>Delivery<i class="icon_check_alt2 ok"></i></li>\n\n                        </ul>\n\n                    </div><!-- End desc-->\n\n                </a><!-- End strip_list-->\n\n              \n\n            </div>\n\n        </div><!-- End row -->   \n\n        \n\n        </div><!-- End container -->\n\n        </div>\n\n\n\n</div>\n\n	 <!-- <!-- <ion-list *ngIf="isContentViewVisible">\n\n    <ion-item *ngFor="let place of places.results" (click)="goToPlace(place)"\n\n      color="dark" no-lines>\n\n      <ion-thumbnail item-left>\n\n        <img src="assets/img/location.png" offset="100"\n\n          [lazyLoad]="place.photos[0].photo_reference"\n\n          >\n\n      </ion-thumbnail>\n\n      <h2 class="bold" ion-text color="primary">{{ place.name }}</h2>\n\n     \n\n      <ion-note ion-text color="light" item-right>\n\n        \n\n      </ion-note>\n\n     \n\n    </ion-item> \n\n  </ion-list>  -->\n\n	\n\n	\n\n  \n\n  \n\n  \n\n \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\nearme\New folder\OrderGrabGo\src\pages\categories\categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ValuesService__["a" /* ValuesService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], CategoriesPage);
    return CategoriesPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=categories.js.map

/***/ })

});
//# sourceMappingURL=4.js.map