webpackJsonp([3],{

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_page__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(811);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    return SignInPageModule;
}());
SignInPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sign_in_page__["a" /* SignInPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in_page__["a" /* SignInPage */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sign_in_page__["a" /* SignInPage */]
        ]
    })
], SignInPageModule);

//# sourceMappingURL=sign-in-page.module.js.map

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

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ValuesService__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
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






var SignInPage = (function (_super) {
    __extends(SignInPage, _super);
    function SignInPage(injector, formBuilder, events, viewCtrl, valuesService) {
        var _this = _super.call(this, injector) || this;
        _this.formBuilder = formBuilder;
        _this.events = events;
        _this.viewCtrl = viewCtrl;
        _this.valuesService = valuesService;
        _this.email = '';
        _this.password = '';
        _this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
        var trans = ['LOGGED_IN_AS', 'INVALID_CREDENTIALS', 'ERROR_UNKNOWN'];
        _this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
        });
        _this.events.subscribe('user:login', function (userEventData) {
            _this.onCancel();
        });
        return _this;
    }
    SignInPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    SignInPage.prototype.ionViewDidLoad = function () {
    };
    SignInPage.prototype.onCancel = function () {
        this.viewCtrl.dismiss();
    };
    SignInPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoadingView();
        this.valuesService.login(this.email, this.password).subscribe(function (data) {
            _this.showContentView();
            console.log(data._body);
            _this.setName('token', data._body);
            _this.setRoot('DashPage');
        }, function (error) {
            if (error.status === 401) {
                _this.showToast(_this.trans.INVALID_CREDENTIALS);
            }
            else {
                _this.showToast(_this.trans.ERROR_UNKNOWN);
            }
            _this.showErrorView();
        });
    };
    SignInPage.prototype.goToSignUp = function () {
        this.navigateTo('SignUpPage');
    };
    return SignInPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));
SignInPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-sign-in-page',template:/*ion-inline-start:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\sign-in-page\sign-in-page.html"*/'\n\n\n\n<ion-content padding text-center>\n\n\n\n    <div class="container" style="margin-top: 11%;">\n\n\n\n        <div class="omb_login">\n\n            <h3 class="omb_authTitle">Login or <a (click)="goToSignUp()">Sign up</a></h3>\n\n            <div class="row omb_row-sm-offset-1 omb_socialButtons">\n\n                <div class="col-xs-6 col-sm-2">\n\n                    <a  class="btn btn-lg btn-block omb_btn-facebook">\n\n                        <i class="fa fa-facebook visible-xs"></i>\n\n                        <span class="hidden-xs">Facebook</span>\n\n                    </a>\n\n                </div>\n\n                <div class="col-xs-6 col-sm-2">\n\n                    <a  class="btn btn-lg btn-block omb_btn-google">\n\n                        <i class="fa fa-google-plus visible-xs"></i>\n\n                        <span class="hidden-xs">Google+</span>\n\n                    </a>\n\n                </div>\n\n            </div>\n\n            <div class="row omb_row-sm-offset-3 omb_loginOr">\n\n                <div class="col-xs-12 col-sm-6">\n\n                    <hr class="omb_hrOr">\n\n                    <span class="omb_spanOr">or</span>\n\n                </div>\n\n            </div>\n\n            <div class="row omb_row-sm-offset-3">\n\n                <div class="col-xs-12 col-sm-6">\n\n                    <form class="omb_loginForm" [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n\n                        \n\n                            <div class="input-group">\n\n                                <span class="input-group-addon" color="primary"><i class="fa fa-user"></i></span>\n\n                                <input  type="email" class="form-control" formControlName="email" [(ngModel)]="email" placeholder="email address">\n\n                            </div>\n\n                            <span class="help-block"></span>\n\n\n\n                            <div class="input-group">\n\n                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>\n\n                                <input type="password" class="form-control" formControlName="password" [(ngModel)]="password" placeholder="Password">\n\n                            </div>\n\n                            <br/>\n\n                            <button class="btn btn-lg btn-primary btn-block" type="submit" [disabled]="!form.valid">Login</button>\n\n                        </form>\n\n</div>\n\n            </div>\n\n            <div class="row omb_row-sm-offset-3">\n\n                <div class="col-xs-12 col-sm-3">\n\n                    <label class="checkbox">\n\n                       <br/>\n\n                    </label>\n\n                </div>\n\n                <div class="col-xs-12 col-sm-3">\n\n                    <p class="omb_forgotPwd">\n\n                        <a >Forgot password?</a>\n\n                    </p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n\n\n    <!-- <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\n\n\n\n\n\n         <ion-item>\n\n             <ion-label stacked color="primary">{{ "EMAIL" | translate }}</ion-label>\n\n             <ion-input type="email" formControlName="email" [(ngModel)]="email"></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n             <ion-label stacked color="primary">{{ "PASSWORD" | translate }}</ion-label>\n\n             <ion-input type="password" formControlName="password" [(ngModel)]="password"></ion-input>\n\n         </ion-item>\n\n\n\n         <div padding>\n\n             <button type="submit" color="primary" ion-button block\n\n                     [disabled]="!form.valid">\n\n                 {{ "LOGIN" | translate }}\n\n             </button>\n\n             <!--<button ion-button block icon-right (click)="facebookLogin()">\n\n                 LOGIN with\n\n                 <ion-icon name="logo-facebook"></ion-icon>\n\n             </button>\n\n             <button ion-button block (click)="googleLogin()">Login With Google</button>-->\n\n    <!--</div>\n\n\n\n        <div padding>\n\n            <button type="button" ion-button clear (click)="goToSignUp()">\n\n                {{ "NO_ACCOUNT_YET_CREATE_ONE" | translate }}\n\n            </button>\n\n        </div>\n\n\n\n    </form>-->\n\n</ion-content>'/*ion-inline-end:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\sign-in-page\sign-in-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_ValuesService__["a" /* ValuesService */]])
], SignInPage);

//# sourceMappingURL=sign-in-page.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map