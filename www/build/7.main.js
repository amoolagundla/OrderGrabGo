webpackJsonp([7],{

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_detail_page__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(811);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlaceDetailPageModule = (function () {
    function PlaceDetailPageModule() {
    }
    return PlaceDetailPageModule;
}());
PlaceDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__place_detail_page__["a" /* PlaceDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__place_detail_page__["a" /* PlaceDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__place_detail_page__["a" /* PlaceDetailPage */]
        ]
    })
], PlaceDetailPageModule);

//# sourceMappingURL=place-detail-page.module.js.map

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

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_preference__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_browser_tab__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_page_base_page__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_service__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
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














var PlaceDetailPage = (function (_super) {
    __extends(PlaceDetailPage, _super);
    function PlaceDetailPage(injector, modalCtrl, storage, preference, callNumber, geolocation, inAppBrowser, browserTab, launchNavigator, socialSharing, events) {
        var _this = _super.call(this, injector) || this;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.preference = preference;
        _this.callNumber = callNumber;
        _this.geolocation = geolocation;
        _this.inAppBrowser = inAppBrowser;
        _this.browserTab = browserTab;
        _this.launchNavigator = launchNavigator;
        _this.socialSharing = socialSharing;
        _this.events = events;
        var options = {
            enableHighAccuracy: true,
            timeout: 10000
        };
        _this.geolocation.getCurrentPosition(options).then(function (pos) {
            _this.location = pos.coords;
        });
        _this.place = _this.navParams.data;
        _this.unit = preference.unit;
        _this.images = [];
        if (_this.place.image) {
            _this.images.push(_this.place.image);
        }
        if (_this.place.imageTwo) {
            _this.images.push(_this.place.imageTwo);
        }
        if (_this.place.imageThree) {
            _this.images.push(_this.place.imageThree);
        }
        if (_this.place.imageFour) {
            _this.images.push(_this.place.imageFour);
        }
        return _this;
    }
    PlaceDetailPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlaceDetailPage.prototype.ionViewDidLoad = function () { };
    PlaceDetailPage.prototype.openSignUpModal = function () {
        this.navigateTo('SignInPage');
    };
    PlaceDetailPage.prototype.openAddReviewModal = function () {
        var modal = this.modalCtrl.create('AddReviewPage', { place: this.place });
        modal.present();
    };
    PlaceDetailPage.prototype.onLike = function () {
        if (__WEBPACK_IMPORTED_MODULE_12__providers_user_service__["a" /* User */].getCurrentUser()) {
            __WEBPACK_IMPORTED_MODULE_2__providers_place_service__["a" /* Place */].like(this.place);
            this.showToast('Liked');
        }
        else {
            this.openSignUpModal();
        }
    };
    PlaceDetailPage.prototype.onRate = function () {
        if (__WEBPACK_IMPORTED_MODULE_12__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.openAddReviewModal();
        }
        else {
            this.openSignUpModal();
        }
    };
    PlaceDetailPage.prototype.onShare = function () {
        this.socialSharing.share(this.place.title, null, null, this.place.website);
    };
    PlaceDetailPage.prototype.onCall = function () {
        this.callNumber.callNumber(this.place.phone, true);
    };
    PlaceDetailPage.prototype.openUrl = function () {
        var _this = this;
        this.browserTab.isAvailable().then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl(_this.place.website);
            }
            else {
                _this.inAppBrowser.create(_this.place.website, '_system');
            }
        });
    };
    PlaceDetailPage.prototype.goToMap = function () {
        this.launchNavigator.navigate([this.place.location.latitude, this.place.location.longitude], {
            start: [this.location.latitude, this.location.longitude]
        });
    };
    PlaceDetailPage.prototype.goToReviews = function () {
        this.navigateTo('ReviewsPage', this.place);
    };
    return PlaceDetailPage;
}(__WEBPACK_IMPORTED_MODULE_11__base_page_base_page__["a" /* BasePage */]));
PlaceDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-place-detail-page',template:/*ion-inline-start:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\place-detail-page\place-detail-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ place.title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #container>\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let image of images">\n      <img src="assets/img/avatar.png" offset="100"\n        [lazyLoad]="image.url()"\n        [scrollTarget]="container.getScrollElement()" />\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card class="card-secondary" text-center>\n    <ion-card-header>\n      <span ion-text color="primary">{{ place.title }}</span>\n    </ion-card-header>\n    <ion-card-content>\n      <span ion-text color="light">{{ place.description }}</span>\n    </ion-card-content>\n    <ion-grid>\n      <ion-row no-padding>\n        <ion-col col-4>\n          <button ion-button icon-left small round block\n            color="primary" (click)="onLike()">\n            <ion-icon name="heart"></ion-icon>\n            {{ "LIKE" | translate }}\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button icon-left small round block\n            color="primary" (click)="onRate()">\n            <ion-icon name="star"></ion-icon>\n            {{ "RATE" | translate }}\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button icon-left small round block\n            color="primary" (click)="onShare()">\n            <ion-icon name="share"></ion-icon>\n            {{ "SHARE" | translate }}\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n\n    <img src="assets/img/avatar.png" offset="100"\n      lazyLoad="https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7C{{place.location.latitude}},{{place.location.longitude}}&zoom=18&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi.park%7Celement:geometry%7Ccolor:0x263c3f&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x6b9a76&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212a37&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:road.highway%7Celement:geometry%7Ccolor:0x746855&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x1f2835&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xf3d19c&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3948&style=feature:transit.station%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:water%7Celement:geometry%7Ccolor:0x17263c&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0x17263c&size=600x250"\n      [scrollTarget]="container.getScrollElement()">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item color="secondary" *ngIf="place.address">\n      <h2 ion-text color="primary">{{ "ADDRESS" | translate }}</h2>\n      <p>{{ place.address }}</p>\n    </ion-item>\n\n    <ion-item color="secondary">\n      <span class="bold" item-left ion-text color="primary" *ngIf="location">\n        <small>({{ place.distance(location, unit) }})</small>\n      </span>\n      <button ion-button item-right color="primary" (click)="goToMap()">\n        <ion-icon name="navigate"></ion-icon>\n        {{ "START" | translate }}\n      </button>\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card class="card-secondary">\n    <ion-card-header>\n      <span ion-text color="primary">{{ "EXPLORE_MORE" | translate }}</span>\n    </ion-card-header>\n\n    <ion-list no-lines>\n      <button ion-item (click)="goToMap()">\n        <ion-icon name="map" item-left color="primary"></ion-icon>\n        {{ "GET_DIRECTIONS" | translate }}\n      </button>\n\n      <button ion-item (click)="onCall()" *ngIf="place.phone">\n        <ion-icon name="call" item-left color="primary"></ion-icon>\n        {{ "PHONE" | translate }}\n      </button>\n\n      <button ion-item (click)="openUrl()" *ngIf="place.website && place.website !== \'http://\'">\n        <ion-icon name="globe" item-left color="primary"></ion-icon>\n        {{ "WEBSITE" | translate }}\n      </button>\n\n      <button ion-item (click)="goToReviews()">\n        <ion-icon name="star" item-left color="primary"></ion-icon>\n        {{ "REVIEWS" | translate }}\n      </button>\n\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\place-detail-page\place-detail-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_local_storage__["a" /* LocalStorage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_preference__["a" /* Preference */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_browser_tab__["a" /* BrowserTab */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Events */]])
], PlaceDetailPage);

//# sourceMappingURL=place-detail-page.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map