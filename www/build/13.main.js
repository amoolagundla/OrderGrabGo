webpackJsonp([13],{

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_place_page__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(809);
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

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_place_service__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_map_style__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_parse_file_service__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_categories__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__ = __webpack_require__(393);
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
            this.map.setCenter(new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["b" /* LatLng */](0, 0));
        }
    };
    AddPlacePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isViewLoaded = true;
        __WEBPACK_IMPORTED_MODULE_6__providers_categories__["a" /* Category */].load().then(function (categories) {
            _this.categories = categories;
        });
        if (this.platform.is('cordova')) {
            this.map = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["c" /* GoogleMap */]('map_add', {
                styles: __WEBPACK_IMPORTED_MODULE_4__providers_map_style__["a" /* MapStyle */].dark(),
                backgroundColor: '#333333'
            });
            var markerOptions = {
                position: new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["b" /* LatLng */](0, 0),
                icon: 'yellow'
            };
            this.map.addMarker(markerOptions).then(function (marker) {
                _this.marker = marker;
            });
            this.map.one(__WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MAP_READY);
            this.map.setMyLocationEnabled(true);
            this.map.on(__WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["d" /* GoogleMapsEvent */].MY_LOCATION_BUTTON_CLICK).subscribe(function (map) {
                if (_this.isViewLoaded) {
                    _this.map.getCameraPosition().then(function (camera) {
                        var target = camera.target;
                        _this.marker.setPosition(target);
                    });
                }
            });
            this.map.on(__WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["d" /* GoogleMapsEvent */].CAMERA_CHANGE).subscribe(function (camera) {
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
        var geocoder = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["e" /* Geocoder */];
        geocoder.geocode(request).then(function (results) {
            // create LatLng object
            var target = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["b" /* LatLng */](results[0].position.lat, results[0].position.lng);
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
        selector: 'page-add-place-page',template:/*ion-inline-start:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\pages\add-place-page\add-place-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ "ADD_PLACE" | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content color="dark">\n\n  <div showWhen="android,ios">\n    <ion-searchbar color="dark" placeholder="{{ \'ENTER_ADDRESS\' | translate }}"\n      (ionInput)="onSearchAddress($event)"></ion-searchbar>\n    <div id="map_add" class="map"></div>\n  </div>\n\n  <empty-view [text]="\'ERROR_CORDOVA_MAPS\' | translate" showWhen="core"></empty-view>\n\n  <ion-list>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n\n      <ion-item>\n        <ion-icon name="at" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "NAME" | translate }}</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pricetag" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "CATEGORY" | translate }}</ion-label>\n        <ion-select formControlName="category">\n          <ion-option *ngFor="let category of categories" [value]="category">\n            {{ category.title }}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="create" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "DESCRIPTION" | translate }}</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="globe" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "WEBSITE" | translate }}</ion-label>\n        <ion-input type="url" formControlName="website"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "ADDRESS" | translate }}</ion-label>\n        <ion-input type="text" formControlName="address">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="call" item-left color="primary"></ion-icon>\n        <ion-label color="primary">{{ "PHONE" | translate }}</ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">\n          {{ "UPLOAD_PICTURE" | translate }}\n        </ion-label>\n        <button type="button" ion-button clear item-right icon-only (click)="onUpload()">\n          <ion-icon name="camera" item-left color="primary"></ion-icon>\n        </button>\n      </ion-item>\n\n      <div padding>\n        <button type="submit" ion-button block [disabled]="!form.valid">\n          {{ "SUBMIT" | translate }}\n        </button>\n      </div>\n\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\pages\add-place-page\add-place-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_place_service__["a" /* Place */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ActionSheetController */]])
], AddPlacePage);

//# sourceMappingURL=add-place-page.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map