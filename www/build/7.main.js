webpackJsonp([7],{

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__Home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__Home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__Home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=Home.module.js.map

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

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(810);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
    function HomePage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.getName('token').then(function (token) {
            if (token != null) {
                console.log(token);
                _this.setRoot('DashPage');
            }
        }, function (error) {
            _this.setRoot('SignInPage');
        });
        return _this;
    }
    HomePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    HomePage.prototype.login = function () {
        this.setRoot('SignInPage');
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'home',template:/*ion-inline-start:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\pages\home-page\home.html"*/'\n	<ion-content padding text-center>\n\n <section class="parallax-window" data-image-src="https://ordergrabgo.com/img/hero.jpg" data-natural-height="550" data-natural-width="1400" data-parallax="scroll" id="home" style="\n    height: 400px;\n    background-image: url(https://ordergrabgo.com/img/hero.jpg);\n    background-size: cover;\n    background-position: center center;\n    ">\n    <div id="subheader" style="\n    background: transparent;\n">\n        <div class="animated zoomIn" id="sub_content" style="padding-top: 348px;">\n			\n            <h1 style="font-size: 28px!important;margin-top: -68%;text-align: center;color: #78ef98;font-family: inherit;">OrderGrabGo</h1>\n\n           \n           <h4 style="color:white">First in line - EVERYWHERE!</h4>\n			<h6 style="color:white">Tired of waiting in line for lunch?\nOne Profile for restaurants nationwide!</h6>\n			<button type="button" class="btn btn-default" ion-button block (click)="login()"\n         >\n        {{ "Let\'s Explore" | translate }}\n      </button>\n        </div>\n				\n    </div>\n    \n    </section>\n		\n		<div class="container margin_60">\n        \n         <div class="main_title">\n            <h2 class="nomargin_top" style="padding-top:0">How it works</h2>\n            \n        </div>\n				\n		<div class="row">\n		\n            <div class="col-md-5" style="width: -webkit-fill-available;">\n                <div class="box_home" id="one">\n                    <span>1</span>\n                    <h3>Search by address</h3>\n                    <p>\n                        Find all restaurants available in your zone.\n                    </p>\n                </div>\n            </div>\n            <div class="col-md-5" style="width: -webkit-fill-available;">\n                <div class="box_home" id="two">\n                    <span>2</span>\n                    <h3>Choose a restaurant</h3>\n                    <p>\n                        We have more than 1000s of menus online.\n                    </p>\n                </div>\n            </div>\n            <div class="col-md-5" style="width: -webkit-fill-available;">\n                <div class="box_home" id="three">\n                    <span>3</span>\n                    <h3>Pay by card or cash</h3>\n                    <p>\n                        It\'s quick, easy and totally secure.\n                    </p>\n                </div>\n            </div>\n            <div class="col-md-5" style="width: -webkit-fill-available;">\n                <div class="box_home" id="four">\n                    <span>4</span>\n                    <h3>Delivery or takeaway</h3>\n                    <p>\n                        You are lazy? Are you backing home?\n                    </p>\n                </div>\n            </div>\n        </div>\n		</div>\n		\n		<div class="white_bg" style="display:none">\n    <div class="container margin_60">\n        \n        <div class="main_title">\n            <h2 class="nomargin_top">Choose from Most Popular</h2>\n            <p>\n                Cum doctus civibus efficiantur in imperdiet deterruisset.\n            </p>\n        </div>\n        \n        <div class="row">\n            <div class="col-md-6" style="width: -webkit-fill-available;">\n                <a href="detail_page.html" class="strip_list">\n                <div class="ribbon_1">Popular</div>\n                    <div class="desc">\n                        <div class="thumb_strip">\n                            <img src="http://www.ansonika.com/quickfood/img/thumb_restaurant.jpg" alt="">\n                        </div>\n                        <div class="rating">\n                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>\n                        </div>\n                        <h3>Taco Mexican</h3>\n                        <div class="type">\n                            Mexican / American\n                        </div>\n                        <div class="location">\n                            135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>\n                        </div>\n                        <ul>\n                            <li>Take away<i class="icon_check_alt2 ok"></i></li>\n                            <li>Delivery<i class="icon_check_alt2 ok"></i></li>\n                        </ul>\n                    </div><!-- End desc-->\n                </a><!-- End strip_list-->\n               <a href="detail_page.html" class="strip_list">\n               <div class="ribbon_1">Popular</div>\n                    <div class="desc">\n                        <div class="thumb_strip">\n                            <img src="http://www.ansonika.com/quickfood/img/thumb_restaurant_2.jpg" alt="">\n                        </div>\n                        <div class="rating">\n                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>\n                        </div>\n                        <h3>Naples Pizza</h3>\n                        <div class="type">\n                            Italian / Pizza\n                        </div>\n                        <div class="location">\n                            135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>\n                        </div>\n                        <ul>\n                            <li>Take away<i class="icon_check_alt2 ok"></i></li>\n                            <li>Delivery<i class="icon_check_alt2 ok"></i></li>\n                        </ul>\n                    </div><!-- End desc-->\n                </a><!-- End strip_list-->\n                <a href="detail_page.html" class="strip_list">\n                <div class="ribbon_1">Popular</div>\n                    <div class="desc">\n                        <div class="thumb_strip">\n                            <img src="http://www.ansonika.com/quickfood/img/thumb_restaurant_3.jpg" alt="">\n                        </div>\n                        <div class="rating">\n                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>\n                        </div>\n                        <h3>Japan Food</h3>\n                        <div class="type">\n                            Sushi / Japanese\n                        </div>\n                        <div class="location">\n                            135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>\n                        </div>\n                        <ul>\n                            <li>Take away<i class="icon_check_alt2 ok"></i></li>\n                            <li>Delivery<i class="icon_check_alt2 ok"></i></li>\n                        </ul>\n                    </div><!-- End desc-->\n                </a><!-- End strip_list-->\n            </div><!-- End col-md-6-->\n            <div class="col-md-6" style="width: -webkit-fill-available;">\n                <a href="detail_page.html" class="strip_list">\n                <div class="ribbon_1">Popular</div>\n                    <div class="desc">\n                        <div class="thumb_strip">\n                            <img src="http://www.ansonika.com/quickfood/img/thumb_restaurant_4.jpg" alt="">\n                        </div>\n                        <div class="rating">\n                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>\n                        </div>\n                        <h3>Sushi Gold</h3>\n                        <div class="type">\n                            Sushi / Japanese\n                        </div>\n                        <div class="location">\n                            135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>\n                        </div>\n                        <ul>\n                            <li>Take away<i class="icon_check_alt2 ok"></i></li>\n                            <li>Delivery<i class="icon_close_alt2 no"></i></li>\n                        </ul>\n                    </div><!-- End desc-->\n                </a><!-- End strip_list-->\n                <a href="detail_page.html" class="strip_list">\n                <div class="ribbon_1">Popular</div>\n                    <div class="desc">\n                        <div class="thumb_strip">\n                            <img src="http://www.ansonika.com/quickfood/img/thumb_restaurant_5.jpg" alt="">\n                        </div>\n                        <div class="rating">\n                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>\n                        </div>\n                        <h3>Dragon Tower</h3>\n                        <div class="type">\n                            Chinese / Thai\n                        </div>\n                        <div class="location">\n                            135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>\n                        </div>\n                        <ul>\n                            <li>Take away<i class="icon_check_alt2 ok"></i></li>\n                            <li>Delivery<i class="icon_check_alt2 ok"></i></li>\n                        </ul>\n                    </div><!-- End desc-->\n                </a><!-- End strip_list-->\n                <a href="detail_page.html" class="strip_list">\n                <div class="ribbon_1">Popular</div>\n                    <div class="desc">\n                        <div class="thumb_strip">\n                            <img src="http://www.ansonika.com/quickfood/img/thumb_restaurant_6.jpg" alt="">\n                        </div>\n                        <div class="rating">\n                            <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>\n                        </div>\n                        <h3>China Food</h3>\n                        <div class="type">\n                            Chinese / Vietnam\n                        </div>\n                        <div class="location">\n                            135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>\n                        </div>\n                        <ul>\n                            <li>Take away<i class="icon_check_alt2 ok"></i></li>\n                            <li>Delivery<i class="icon_check_alt2 ok"></i></li>\n                        </ul>\n                    </div><!-- End desc-->\n                </a><!-- End strip_list-->\n            </div>\n        </div><!-- End row -->   \n        \n        </div><!-- End container -->\n        </div>\n				\n		<div class="high_light">\n      	<div class="container">\n      		<h3>Choose from over 2,000 Restaurants</h3>\n            <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>\n            <a href="">View all Restaurants</a>\n        </div><!-- End container -->\n      </div>\n		<div class="row">\n            <div class="col-md-4 ">\n            	<a class="box_work" href="">\n                <img src="http://www.ansonika.com/quickfood/img/submit_restaurant.jpg" width="848" height="480" alt="" class="img-responsive">\n                <h3>Submit your Restaurant<span>Start to earn customers</span></h3>\n                <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>\n                <div class="btn_1">Read more</div>\n                </a>\n            </div>\n          \n      </div>\n			\n			\n			\n			<footer>\n    <div class="container">\n        <div class="row">\n            <div class="col-md-4 col-sm-3">\n                <h3>Secure payments with</h3>\n                <p>\n                    <img src="http://www.ansonika.com/quickfood/img/cards.png" alt="" class="img-responsive">\n                </p>\n            </div>\n            \n            <div class="col-md-3 col-sm-3" id="newsletter">\n                <h3>Newsletter</h3>\n                <p>\n                    Join our newsletter to keep be informed about offers and news.\n                </p>\n                <div id="message-newsletter_2">\n                </div>\n                <form method="post" action="" name="newsletter_2" id="newsletter_2">\n                    <div class="form-group">\n                        <input name="email_newsletter_2" id="email_newsletter_2" type="email" value="" placeholder="Your mail" class="form-control">\n                    </div>\n                    <input type="submit" value="Subscribe" class="btn_1" id="submit-newsletter_2">\n                </form>\n            </div>\n           \n        </div><!-- End row -->\n       \n    </div><!-- End container -->\n    </footer>\n		\n		\n		</ion-content>		'/*ion-inline-end:"C:\nearme\ORdergRabGo\OrderGrabGo.git\src\pages\home-page\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
], HomePage);

//# sourceMappingURL=Home.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map