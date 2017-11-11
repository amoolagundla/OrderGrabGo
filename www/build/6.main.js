webpackJsonp([6],{

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_page__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MapPageModule = (function () {
    function MapPageModule() {
    }
    return MapPageModule;
}());
MapPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__map_page__["a" /* MapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map_page__["a" /* MapPage */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__map_page__["a" /* MapPage */]
        ]
    })
], MapPageModule);

//# sourceMappingURL=map-page.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_view__ = __webpack_require__(808);
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

/***/ 808:
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
        selector: 'empty-view',template:/*ion-inline-start:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\components\empty-view\empty-view.html"*/'<div class="container">\n  <ion-icon [name]="icon"></ion-icon>\n  <p ion-item no-lines>{{ text }}</p>\n</div>\n'/*ion-inline-end:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\components\empty-view\empty-view.html"*/
    }),
    __metadata("design:paramtypes", [])
], EmptyView);

//# sourceMappingURL=empty-view.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_img_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__ = __webpack_require__(383);
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

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });



var BasePage = (function () {
    function BasePage(injector) {
        this.loadingCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]);
        this.toastCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]);
        this.navCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]);
        this.alertCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* AlertController */]);
        this.navParams = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]);
        this.translate = injector.get(__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]);
        this.localStorage = injector.get(__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]);
        var menu = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]);
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
        this.localStorage.set(name, value);
    };
    ;
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

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_service__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_map_style__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_page_base_page__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_local_storage__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(393);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
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









var MapPage = (function (_super) {
    __extends(MapPage, _super);
    function MapPage(injector, events, storage, geolocation, platform) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.events = events;
        _this.storage = storage;
        _this.geolocation = geolocation;
        _this.platform = platform;
        _this.params = {};
        _this.events.subscribe('onMenuOpened', function (e) {
            if (_this.map) {
                _this.map.setClickable(false);
            }
        });
        _this.events.subscribe('onMenuClosed', function (e) {
            if (_this.map) {
                _this.map.setClickable(true);
            }
        });
        return _this;
    }
    MapPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    MapPage.prototype.ionViewWillUnload = function () {
        this.isViewLoaded = false;
        if (this.map) {
            this.map.clear();
            this.map.setZoom(1);
            this.map.setCenter(new __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["b" /* LatLng */](0, 0));
        }
    };
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isViewLoaded = true;
        if (this.platform.is('cordova')) {
            this.showLoadingView();
            this.map = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["c" /* GoogleMap */]('map', {
                styles: __WEBPACK_IMPORTED_MODULE_3__providers_map_style__["a" /* MapStyle */].dark(),
                backgroundColor: '#333333'
            });
            this.map.one(__WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_READY).then(function () {
                _this.storage.unit.then(function (unit) {
                    _this.params.unit = unit;
                    var options = {
                        enableHighAccuracy: true,
                        timeout: 7000
                    };
                    _this.geolocation.getCurrentPosition(options).then(function (pos) {
                        _this.params.location = pos.coords;
                        _this.loadData();
                    }, function (error) {
                        _this.translate.get('ERROR_LOCATION_UNAVAILABLE').subscribe(function (str) { return _this.showToast(str); });
                        _this.showErrorView();
                    });
                });
            });
            this.storage.mapStyle.then(function (mapStyle) {
                _this.map.setMapTypeId(mapStyle);
            });
            this.map.on(__WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MY_LOCATION_BUTTON_CLICK).subscribe(function (map) {
                if (_this.isViewLoaded) {
                    _this.map.getCameraPosition().then(function (camera) {
                        var target = camera.target;
                        _this.params.location = {
                            latitude: target.lat,
                            longitude: target.lng
                        };
                        _this.showLoadingView();
                        _this.onReload();
                    });
                }
            });
            this.map.setMyLocationEnabled(true);
        }
        else {
            console.warn('Native: tried calling Google Maps.isAvailable, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    };
    MapPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', place);
    };
    MapPage.prototype.onSearchAddress = function (event) {
        var _this = this;
        if (this.platform.is('cordova')) {
            var query = event.target.value;
            var request = {
                address: query
            };
            var geocoder = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["e" /* Geocoder */];
            geocoder.geocode(request).then(function (results) {
                var target = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["b" /* LatLng */](results[0].position.lat, results[0].position.lng);
                var position = {
                    target: target,
                    zoom: 10
                };
                _this.map.moveCamera(position);
                _this.params.location = {
                    latitude: target.lat,
                    longitude: target.lng
                };
                _this.showLoadingView();
                _this.onReload();
            });
        }
        else {
            console.warn('Native: tried calling Google Maps.isAvailable, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    };
    MapPage.prototype.loadData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__providers_place_service__["a" /* Place */].load(this.params).then(function (places) {
            _this.onPlacesLoaded(places);
            _this.showContentView();
            if (!places.length) {
                _this.translate.get('EMPTY_PLACES').subscribe(function (str) { return _this.showToast(str); });
            }
        }, function (error) {
            _this.translate.get('ERROR_PLACES').subscribe(function (str) { return _this.showToast(str); });
            _this.showErrorView();
        });
    };
    MapPage.prototype.onPlacesLoaded = function (places) {
        var _this = this;
        var points = [];
        for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
            var place = places_1[_i];
            var target = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["b" /* LatLng */](place.location.latitude, place.location.longitude);
            var icon = (place.category && place.category.get('icon')) ? {
                url: place.category.get('icon').url(),
                size: {
                    width: 32,
                    height: 32
                }
            } : 'yellow';
            var markerOptions = {
                position: target,
                title: place.title,
                snippet: place.description,
                icon: icon,
                place: place,
                styles: {
                    maxWidth: '80%'
                },
            };
            this.map.addMarker(markerOptions).then(function (marker) {
                marker.addEventListener(__WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["d" /* GoogleMapsEvent */].INFO_CLICK).subscribe(function (e) {
                    _this.goToPlace(e.get('place'));
                });
            });
            points.push(target);
        }
        if (points.length) {
            this.map.moveCamera({
                target: new __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["f" /* LatLngBounds */](points),
                zoom: 10
            });
        }
    };
    MapPage.prototype.onReload = function () {
        this.map.clear();
        this.places = [];
        this.loadData();
    };
    MapPage.prototype.onSearchButtonTapped = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.map.getCameraPosition().then(function (camera) {
                var position = camera.target;
                _this.params.location = {
                    latitude: position.lat,
                    longitude: position.lng
                };
                _this.showLoadingView();
                _this.onReload();
            });
        }
        else {
            console.warn('Native: tried calling GoogleMaps.getCameraPosition, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    };
    return MapPage;
}(__WEBPACK_IMPORTED_MODULE_4__base_page_base_page__["a" /* BasePage */]));
MapPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-map-page',template:/*ion-inline-start:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\pages\map-page\map-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ "MAP" | translate }}</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="primary">\n    <ion-searchbar color="dark" debounce="2000"\n      placeholder="{{ \'ENTER_ADDRESS\' | translate }}"\n      (ionInput)="onSearchAddress($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id="map" class="map" #map showWhen="android,ios"></div>\n  <empty-view [text]="\'ERROR_CORDOVA_MAPS\' | translate" icon="map" showWhen="core">\n  </empty-view>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="secondary" text-center>\n    <button ion-button outline (click)="onSearchButtonTapped()">\n      {{ "SEARCH" | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\pages\map-page\map-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__providers_local_storage__["a" /* LocalStorage */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */]])
], MapPage);

//# sourceMappingURL=map-page.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map