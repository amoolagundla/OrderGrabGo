webpackJsonp([1],{

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_place_page__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(811);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlacePageModule", function() { return AddPlacePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddPlacePageModule = (function () {
    function AddPlacePageModule() {
    }
    return AddPlacePageModule;
}());
AddPlacePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_place_page__["a" /* AddPlacePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_place_page__["a" /* AddPlacePage */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_place_page__["a" /* AddPlacePage */]
        ]
    })
], AddPlacePageModule);

//# sourceMappingURL=add-place-page.module.js.map

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

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GoogleMapsEvent; });
/* unused harmony export GoogleMapsAnimation */
/* unused harmony export GoogleMapsMapTypeId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GoogleMaps; });
/* unused harmony export Marker */
/* unused harmony export Circle */
/* unused harmony export Polyline */
/* unused harmony export Polygon */
/* unused harmony export TileOverlay */
/* unused harmony export GroundOverlay */
/* unused harmony export KmlOverlay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LatLngBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Geocoder; });
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




/**
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_CLICK: 'click',
    MAP_LONG_CLICK: 'long_click',
    MY_LOCATION_CHANGE: 'my_location_change',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_CHANGE: 'camera_change',
    CAMERA_IDLE: 'camera_idle',
    MAP_READY: 'map_ready',
    MAP_LOADED: 'map_loaded',
    MAP_WILL_MOVE: 'will_move',
    MAP_CLOSE: 'map_close',
    MARKER_CLICK: 'click',
    OVERLAY_CLICK: 'overlay_click',
    INFO_CLICK: 'info_click',
    MARKER_DRAG: 'drag',
    MARKER_DRAG_START: 'drag_start',
    MARKER_DRAG_END: 'drag_end'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    HYBRID: 'MAP_TYPE_HYBRID',
    NONE: 'MAP_TYPE_NONE',
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_ROADMAP',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    TERAIN: 'MAP_TYPE_TERRAIN'
};
/**
 * @hidden
 */
var GoogleMap = (function () {
    function GoogleMap(element, options) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* checkAvailability */])('plugin.google.maps.Map', null, 'GoogleMaps') === true) {
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this._objectInstance = plugin.google.maps.Map.getMap(element, options);
        }
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    GoogleMap.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    GoogleMap.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    GoogleMap.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    GoogleMap.prototype.on = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.one = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    GoogleMap.prototype.empty = function () { };
    GoogleMap.prototype.setDebuggable = function (isDebuggable) { };
    GoogleMap.prototype.setClickable = function (isClickable) { };
    /**
     * Get the position of the camera.
     *
     * @returns {Promise<CameraPosition>}
     */
    GoogleMap.prototype.getCameraPosition = function () { return; };
    /**
     * Get the location of the user.
     *
     * @returns {Promise<MyLocation>}
     */
    GoogleMap.prototype.getMyLocation = function (options) { return; };
    /**
     * Get the visible region.
     *
     * @returns {Promise<VisibleRegion>}
     */
    GoogleMap.prototype.getVisibleRegion = function () { return; };
    GoogleMap.prototype.showDialog = function () { };
    GoogleMap.prototype.closeDialog = function () { };
    GoogleMap.prototype.getLicenseInfo = function () { return; };
    GoogleMap.prototype.setCenter = function (latLng) { };
    GoogleMap.prototype.setZoom = function (zoomLevel) { };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { };
    GoogleMap.prototype.setTilt = function (tiltLevel) { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.animateCamera = function (animateCameraOptions) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return; };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { };
    /**
     * @returns {Promise<Marker | any>}
     */
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    resolve(new Marker(marker));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Circle | any>}
     */
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    resolve(new Circle(circle));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Polygon | any>}
     */
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    resolve(new Polygon(polygon));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Polyline | any>}
     */
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    resolve(new Polyline(polyline));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<TileOverlay | any>}
     */
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    resolve(new TileOverlay(tileOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GroundOverlay | any>}
     */
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    resolve(new GroundOverlay(groundOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<KmlOverlay | any>}
     */
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                    resolve(new KmlOverlay(kmlOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.setDiv = function (domNode) { };
    GoogleMap.prototype.setVisible = function (visible) { };
    GoogleMap.prototype.setOptions = function (options) { };
    GoogleMap.prototype.setBackgroundColor = function (backgroundColor) { };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { };
    GoogleMap.prototype.clear = function () { };
    GoogleMap.prototype.refreshLayout = function () { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.fromLatLngToPoint = function (latLng, point) { return; };
    /**
     * @returns {Promise<LatLng>}
     */
    GoogleMap.prototype.fromPointToLatLng = function (point) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.toDataURL = function () { return; };
    GoogleMap.prototype.remove = function () { };
    GoogleMap.prototype.panBy = function (x, y) { };
    return GoogleMap;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], GoogleMap.prototype, "addEventListener", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addListenerOnce", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], GoogleMap.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])({ observable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], GoogleMap.prototype, "on", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "one", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setDebuggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setClickable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getCameraPosition", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getMyLocation", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getVisibleRegion", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "showDialog", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "closeDialog", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getLicenseInfo", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCenter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setZoom", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMapTypeId", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setTilt", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "animateCamera", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "moveCamera", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMyLocationEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setIndoorEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setTrafficEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCompassEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setAllGesturesEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addMarker", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addCircle", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolygon", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolyline", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addTileOverlay", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addGroundOverlay", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addKmlOverlay", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setDiv", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setOptions", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setBackgroundColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setPadding", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "clear", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "refreshLayout", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng, Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromLatLngToPoint", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromPointToLatLng", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "toDataURL", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "panBy", null);
GoogleMap = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'GoogleMaps',
        plugin: 'cordova-plugin-googlemaps'
    }),
    __metadata("design:paramtypes", [Object, Object])
], GoogleMap);

/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  LatLng,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 *
 * export class MapPage {
 *  constructor(private googleMaps: GoogleMaps) {}
 *
 * // Load map only after view is initialized
 * ngAfterViewInit() {
 *  this.loadMap();
 * }
 *
 * loadMap() {
 *  // make sure to create following structure in your view.html file
 *  // and add a height (for example 100%) to it, else the map won't be visible
 *  // <ion-content>
 *  //  <div #map id="map" style="height:100%;"></div>
 *  // </ion-content>
 *
 *  // create a new map by passing HTMLElement
 *  let element: HTMLElement = document.getElementById('map');
 *
 *  let map: GoogleMap = this.googleMaps.create(element);
 *
 *  // listen to MAP_READY event
 *  // You must wait for this event to fire before adding something to the map or modifying it in anyway
 *  map.one(GoogleMapsEvent.MAP_READY).then(
 *    () => {
 *      console.log('Map is ready!');
 *      // Now you can add elements to the map like the marker
 *    }
 *  );
 *
 *  // create LatLng object
 *  let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
 *
 *  // create CameraPosition
 *  let position: CameraPosition = {
 *    target: ionic,
 *    zoom: 18,
 *    tilt: 30
 *  };
 *
 *  // move the map's camera to position
 *  map.moveCamera(position);
 *
 *  // create new marker
 *  let markerOptions: MarkerOptions = {
 *    position: ionic,
 *    title: 'Ionic'
 *  };
 *
 *  const marker: Marker = map.addMarker(markerOptions)
 *    .then((marker: Marker) => {
 *       marker.showInfoWindow();
 *     });
 *  }
 *
 * }
 * ```
 * @classes
 * GoogleMap
 * Marker
 * LatLng
 * Geocoder
 * @interfaces
 * AnimateCameraOptions
 * MarkerOptions
 * MyLocation
 * MyLocationOptions
 * VisibleRegion
 *
 */
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if a map object has been created and is available.
     *
     * @returns {Promise<boolean>}
     */
    GoogleMaps.prototype.isAvailable = function () { return; };
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {any} Options
     * @returns {GoogleMap}
     */
    GoogleMaps.prototype.create = function (element, options) {
        return new GoogleMap(element, options);
    };
    return GoogleMaps;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));
GoogleMaps.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
GoogleMaps.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMaps.prototype, "isAvailable", null);
GoogleMaps = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.Map',
        plugin: 'cordova-plugin-googlemaps',
        repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
        install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
        installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
        platforms: ['Android', 'iOS']
    })
], GoogleMaps);

/**
 * @hidden
 */
var Marker = (function () {
    function Marker(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Marker.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Marker.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Marker.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Marker.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Marker.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Marker.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Marker.prototype.empty = function () { };
    /**
     * Return true if the marker is visible
     */
    Marker.prototype.isVisible = function () { return; };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    Marker.prototype.setVisible = function (visible) { };
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    Marker.prototype.getHashCode = function () { return; };
    /**
     * Remove the marker completely.
     */
    Marker.prototype.remove = function () { };
    /**
     * Change the marker opacity.
     * @param alpha {number} Opacity
     */
    Marker.prototype.setOpacity = function (alpha) { };
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    Marker.prototype.getOpacity = function () { return; };
    /**
     * iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)
     * @return {number}
     */
    Marker.prototype.setZIndex = function () { return; };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number}
     * @param y {number}
     */
    Marker.prototype.setIconAnchor = function (x, y) { };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number}
     * @param y {number}
     */
    Marker.prototype.setInfoWindowAnchor = function (x, y) { };
    /**
     * 	Set true if you allows all users to drag the marker.
     * @param draggable {boolean}
     */
    Marker.prototype.setDraggable = function (draggable) { };
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    Marker.prototype.isDraggable = function () { return; };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    Marker.prototype.setFlat = function (flat) { return; };
    /**
     * Change icon url and/or size
     * @param icon
     */
    Marker.prototype.setIcon = function (icon) { return; };
    /**
     * Change title of the infoWindow.
     * @param title {string}
     */
    Marker.prototype.setTitle = function (title) { };
    /**
     * Return the title strings.
     * @return {string}
     */
    Marker.prototype.getTitle = function () { return; };
    /**
     * Change snippet of the infoWindow.
     * @param snippet {string}
     */
    Marker.prototype.setSnippet = function (snippet) { };
    /**
     * Return the snippet strings.
     * @return {string}
     */
    Marker.prototype.getSnippet = function () { return; };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    Marker.prototype.setRotation = function (rotation) { };
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    Marker.prototype.getRotation = function () { return; };
    /**
     * Show the infoWindow of the marker.
     * @return {number}
     */
    Marker.prototype.showInfoWindow = function () { return; };
    /**
     * Hide the infoWindow of the marker.
     * @return {number}
     */
    Marker.prototype.hideInfoWindow = function () { return; };
    /**
     * Set the marker position.
     * @param latLng {LatLng}
     */
    Marker.prototype.setPosition = function (latLng) { return; };
    /**
     * Return the marker position.
     * @return {Promise<LatLng>}
     */
    Marker.prototype.getPosition = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () { return; };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    Marker.prototype.setAnimation = function (animation) { };
    return Marker;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Marker.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getHashCode", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIconAnchor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setInfoWindowAnchor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setDraggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isDraggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setFlat", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIcon", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setTitle", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getTitle", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setSnippet", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getSnippet", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setRotation", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getRotation", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "showInfoWindow", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "hideInfoWindow", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setPosition", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Marker.prototype, "getPosition", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Marker.prototype, "getMap", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setAnimation", null);
/**
 * @hidden
 */
var Circle = (function () {
    function Circle(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Circle.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Circle.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Circle.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Circle.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Circle.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Circle.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Circle.prototype.empty = function () { };
    Circle.prototype.getCenter = function () { return; };
    Circle.prototype.getRadius = function () { return; };
    Circle.prototype.getStrokeColor = function () { return; };
    Circle.prototype.getVisible = function () { return; };
    Circle.prototype.getZIndex = function () { return; };
    Circle.prototype.remove = function () { };
    Circle.prototype.setCenter = function (latLng) { };
    Circle.prototype.setFillColor = function (fillColor) { };
    Circle.prototype.setStrokeColor = function (strokeColor) { };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { };
    Circle.prototype.setVisible = function (visible) { };
    Circle.prototype.setZIndex = function (zIndex) { };
    Circle.prototype.setRadius = function (radius) { };
    Circle.prototype.getMap = function () { return; };
    return Circle;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Circle.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Circle.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLng)
], Circle.prototype, "getCenter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getRadius", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Circle.prototype, "getStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Circle.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Circle.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setCenter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setFillColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setRadius", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Circle.prototype, "getMap", null);
/**
 * @hidden
 */
var Polyline = (function () {
    function Polyline(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Polyline.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Polyline.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Polyline.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Polyline.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Polyline.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Polyline.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Polyline.prototype.empty = function () { };
    Polyline.prototype.getPoints = function () { return; };
    Polyline.prototype.getCOlor = function () { return; };
    Polyline.prototype.getWidth = function () { return; };
    Polyline.prototype.getGeodesic = function () { return; };
    Polyline.prototype.getZIndex = function () { return; };
    Polyline.prototype.remove = function () { };
    Polyline.prototype.setPoints = function (points) { };
    Polyline.prototype.setColor = function (color) { };
    Polyline.prototype.setWidth = function (width) { };
    Polyline.prototype.setVisible = function (visible) { };
    Polyline.prototype.setZIndex = function (zIndex) { };
    Polyline.prototype.setGeoDesic = function (geoDesic) { };
    Polyline.prototype.getMap = function () { return; };
    return Polyline;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Polyline.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Polyline.prototype, "getPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polyline.prototype, "getCOlor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polyline.prototype, "getGeodesic", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setGeoDesic", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Polyline.prototype, "getMap", null);
/**
 * @hidden
 */
var Polygon = (function () {
    function Polygon(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Polygon.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Polygon.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Polygon.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Polygon.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Polygon.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Polygon.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Polygon.prototype.empty = function () { };
    Polygon.prototype.getPoints = function () { return; };
    Polygon.prototype.getStrokeColor = function () { return; };
    Polygon.prototype.getFillColor = function () { return; };
    Polygon.prototype.getStrokeWidth = function () { return; };
    Polygon.prototype.getGeodesic = function () { return; };
    Polygon.prototype.getVisible = function () { return; };
    Polygon.prototype.getZIndex = function () { return; };
    Polygon.prototype.remove = function () { };
    Polygon.prototype.setPoints = function (points) { };
    Polygon.prototype.setStrokeColor = function (strokeColor) { };
    Polygon.prototype.setFillColor = function (fillColor) { };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { };
    Polygon.prototype.setVisible = function (visible) { };
    Polygon.prototype.setZIndex = function (zIndex) { };
    Polygon.prototype.setGeodesic = function (geodesic) { };
    return Polygon;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Polygon.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Polygon.prototype, "getPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getFillColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polygon.prototype, "getStrokeWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getGeodesic", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setFillColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setGeodesic", null);
/**
 * @hidden
 */
var TileOverlay = (function () {
    function TileOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    TileOverlay.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    TileOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    TileOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    TileOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    TileOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    TileOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    TileOverlay.prototype.empty = function () { };
    TileOverlay.prototype.getVisible = function () { return; };
    TileOverlay.prototype.setVisible = function (visible) { };
    TileOverlay.prototype.getFadeIn = function () { return; };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { };
    TileOverlay.prototype.getZIndex = function () { return; };
    TileOverlay.prototype.setZIndex = function (zIndex) { };
    TileOverlay.prototype.getOpacity = function () { return; };
    TileOverlay.prototype.setOpacity = function (opacity) { };
    TileOverlay.prototype.clearTileCache = function () { };
    TileOverlay.prototype.remove = function () { };
    return TileOverlay;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TileOverlay.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getFadeIn", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setFadeIn", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "clearTileCache", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "remove", null);
/**
 * @hidden
 */
var GroundOverlay = (function () {
    function GroundOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    GroundOverlay.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    GroundOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    GroundOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    GroundOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    GroundOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    GroundOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    GroundOverlay.prototype.empty = function () { };
    GroundOverlay.prototype.setBearing = function (bearing) { };
    GroundOverlay.prototype.getBearing = function () { return; };
    GroundOverlay.prototype.setOpacity = function (opacity) { };
    GroundOverlay.prototype.getOpacity = function () { return; };
    GroundOverlay.prototype.setVisible = function (visible) { };
    GroundOverlay.prototype.getVisible = function () { return; };
    GroundOverlay.prototype.setImage = function (image) { };
    ;
    GroundOverlay.prototype.remove = function () { };
    return GroundOverlay;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], GroundOverlay.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setBearing", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getBearing", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], GroundOverlay.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setImage", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "remove", null);
/**
 * @hidden
 */
var KmlOverlay = (function () {
    function KmlOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    KmlOverlay.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    KmlOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    KmlOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    KmlOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    KmlOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    KmlOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    KmlOverlay.prototype.empty = function () { };
    KmlOverlay.prototype.remove = function () { };
    KmlOverlay.prototype.getOverlays = function () { return; };
    return KmlOverlay;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], KmlOverlay.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], KmlOverlay.prototype, "getOverlays", null);
/**
 * @hidden
 */
var LatLngBounds = (function () {
    function LatLngBounds(southwestOrArrayOfLatLng, northeast) {
        var args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
        this._objectInstance = new plugin.google.maps.LatLngBounds(args);
    }
    LatLngBounds.prototype.toString = function () { return; };
    LatLngBounds.prototype.toUrlValue = function (precision) { return; };
    LatLngBounds.prototype.extend = function (LatLng) { };
    LatLngBounds.prototype.contains = function (LatLng) { return; };
    LatLngBounds.prototype.getCenter = function () { return; };
    return LatLngBounds;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* InstanceProperty */],
    __metadata("design:type", LatLng)
], LatLngBounds.prototype, "northeast", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* InstanceProperty */],
    __metadata("design:type", LatLng)
], LatLngBounds.prototype, "southwest", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* InstanceProperty */],
    __metadata("design:type", String)
], LatLngBounds.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toString", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toUrlValue", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], LatLngBounds.prototype, "extend", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", Boolean)
], LatLngBounds.prototype, "contains", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLng)
], LatLngBounds.prototype, "getCenter", null);
/**
 * @hidden
 */
var LatLng = (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());

/**
 * @hidden
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @returns {Promise<GeocoderResult[]>}
     */
    Geocoder.prototype.geocode = function (request) {
        return new Promise(function (resolve) {
            plugin.google.maps.Geocoder.geocode(request, resolve);
        });
    };
    return Geocoder;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Geocoder.prototype, "geocode", null);
Geocoder = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'Geocoder',
        pluginRef: 'plugin.google.maps.Geocoder',
        plugin: 'cordova-plugin-googlemaps',
        repo: ''
    })
], Geocoder);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_place_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_map_style__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_parse_file_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_categories__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(813);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
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











var AddPlacePage = (function (_super) {
    __extends(AddPlacePage, _super);
    function AddPlacePage(injector, formBuilder, platform, place, googleMaps, camera, events, actionSheetCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.formBuilder = formBuilder;
        _this.platform = platform;
        _this.place = place;
        _this.googleMaps = googleMaps;
        _this.camera = camera;
        _this.events = events;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.form = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            category: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormControl */](''),
            address: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormControl */](''),
            phone: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormControl */](''),
            website: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormControl */]('http://')
        });
        var trans = ['PROFILE_UPDATED', 'PROFILE_UPDATE_ERROR', 'CAMERA', 'CANCEL',
            'CHOOSE_AN_OPTION', 'PHOTO_LIBRARY', 'FILE_UPLOADED', 'ERROR_FILE_UPLOAD'];
        _this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
        });
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
    AddPlacePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    AddPlacePage.prototype.ionViewWillUnload = function () {
        this.isViewLoaded = false;
        if (this.map) {
            this.map.clear();
            this.map.setZoom(1);
            this.map.setCenter(new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* LatLng */](0, 0));
        }
    };
    AddPlacePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isViewLoaded = true;
        __WEBPACK_IMPORTED_MODULE_6__providers_categories__["a" /* Category */].load().then(function (categories) {
            _this.categories = categories;
        });
        if (this.platform.is('cordova')) {
            this.map = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["b" /* GoogleMap */]('map_add', {
                styles: __WEBPACK_IMPORTED_MODULE_4__providers_map_style__["a" /* MapStyle */].dark(),
                backgroundColor: '#333333'
            });
            var markerOptions = {
                position: new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* LatLng */](0, 0),
                icon: 'yellow'
            };
            this.map.addMarker(markerOptions).then(function (marker) {
                _this.marker = marker;
            });
            this.map.one(__WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY);
            this.map.setMyLocationEnabled(true);
            this.map.on(__WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MY_LOCATION_BUTTON_CLICK).subscribe(function (map) {
                if (_this.isViewLoaded) {
                    _this.map.getCameraPosition().then(function (camera) {
                        var target = camera.target;
                        _this.marker.setPosition(target);
                    });
                }
            });
            this.map.on(__WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["c" /* GoogleMapsEvent */].CAMERA_CHANGE).subscribe(function (camera) {
                _this.marker.setPosition(camera.target);
            });
        }
    };
    AddPlacePage.prototype.onSearchAddress = function (event) {
        var _this = this;
        var query = event.target.value;
        var request = {
            address: query
        };
        var geocoder = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["d" /* Geocoder */];
        geocoder.geocode(request).then(function (results) {
            // create LatLng object
            var target = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* LatLng */](results[0].position.lat, results[0].position.lng);
            // create CameraPosition
            var position = {
                target: target,
                zoom: 10
            };
            // move the map camera to position
            _this.map.moveCamera(position);
            // update marker position
            _this.marker.setPosition(target);
        });
    };
    AddPlacePage.prototype.chooseImage = function (sourceType) {
        var _this = this;
        var options = {
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 80,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.showLoadingView();
            __WEBPACK_IMPORTED_MODULE_5__providers_parse_file_service__["a" /* ParseFile */].upload(imageData).then(function (file) {
                _this.place.image = file;
                _this.showContentView();
                _this.showToast(_this.trans.FILE_UPLOADED);
            }, function (error) {
                _this.showContentView();
                _this.showToast(_this.trans.ERROR_FILE_UPLOAD);
            });
        });
    };
    AddPlacePage.prototype.onUpload = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.trans.CHOOSE_AN_OPTION,
            buttons: [{
                    text: this.trans.PHOTO_LIBRARY,
                    handler: function () {
                        _this.chooseImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: this.trans.CAMERA,
                    handler: function () {
                        _this.chooseImage(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: this.trans.CANCEL,
                    role: 'cancel'
                }]
        });
        actionSheet.present();
    };
    AddPlacePage.prototype.onSubmit = function () {
        var _this = this;
        this.place.title = this.form.value.name;
        this.place.category = this.form.value.category;
        this.place.description = this.form.value.description;
        this.place.address = this.form.value.address;
        this.place.website = this.form.value.website;
        this.place.phone = this.form.value.phone;
        this.showLoadingView();
        this.marker.getPosition().then(function (position) {
            _this.place.location = position;
            _this.place.save().then(function (place) {
                _this.showContentView();
                _this.translate.get('PLACE_ADDED').subscribe(function (str) { return _this.showToast(str); });
            }, function (error) {
                _this.showContentView();
                _this.translate.get('ERROR_PLACE_ADD').subscribe(function (str) { return _this.showToast(str); });
            });
        });
    };
    return AddPlacePage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));
AddPlacePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-add-place-page',template:/*ion-inline-start:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\add-place-page\add-place-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ "ADD_PLACE" | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content color="dark">\n\n  <div showWhen="android,ios">\n    <ion-searchbar color="dark" placeholder="{{ \'ENTER_ADDRESS\' | translate }}"\n      (ionInput)="onSearchAddress($event)"></ion-searchbar>\n    <div id="map_add" class="map"></div>\n  </div>\n\n  <empty-view [text]="\'ERROR_CORDOVA_MAPS\' | translate" showWhen="core"></empty-view>\n\n  <ion-list>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n\n      <ion-item>\n        <ion-icon name="at" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "NAME" | translate }}</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pricetag" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "CATEGORY" | translate }}</ion-label>\n        <ion-select formControlName="category">\n          <ion-option *ngFor="let category of categories" [value]="category">\n            {{ category.title }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="create" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "DESCRIPTION" | translate }}</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="globe" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "WEBSITE" | translate }}</ion-label>\n        <ion-input type="url" formControlName="website"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "ADDRESS" | translate }}</ion-label>\n        <ion-input type="text" formControlName="address">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="call" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "PHONE" | translate }}</ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">\n          {{ "UPLOAD_PICTURE" | translate }}\n        </ion-label>\n        <button type="button" ion-button clear item-right icon-only (click)="onUpload()">\n          <ion-icon name="camera" item-left color="primary"></ion-icon>\n        </button>\n      </ion-item>\n\n      <div padding>\n        <button type="submit" ion-button block [disabled]="!form.valid">\n          {{ "SUBMIT" | translate }}\n        </button>\n      </div>\n\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\add-place-page\add-place-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_place_service__["a" /* Place */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["f" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ActionSheetController */]])
], AddPlacePage);

//# sourceMappingURL=add-place-page.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map