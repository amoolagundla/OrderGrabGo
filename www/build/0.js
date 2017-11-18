webpackJsonp([0],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_page__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up_page__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up_page__["a" /* SignUpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up_page__["a" /* SignUpPage */]
            ]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up-page.module.js.map

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

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(37);
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
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from '@ionic-native/google-plus';
 *
 * constructor(private googlePlus: GooglePlus) { }
 *
 * ...
 *
 * this.googlePlus.login({})
 *   .then(res => console.log(res))
 *   .catch(err => console.error(err));
 *
 * ```
 */
var GooglePlus = (function (_super) {
    __extends(GooglePlus, _super);
    function GooglePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.login = function (options) { return; };
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.trySilentLogin = function (options) { return; };
    /**
     * This will clear the OAuth2 token.
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.logout = function () { return; };
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.disconnect = function () { return; };
    GooglePlus.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    GooglePlus.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "login", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "trySilentLogin", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "logout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GooglePlus.prototype, "disconnect", null);
    GooglePlus = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
            pluginName: 'GooglePlus',
            plugin: 'cordova-plugin-googleplus',
            pluginRef: 'window.plugins.googleplus',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-googleplus',
            install: 'ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid',
            installVariables: ['REVERSED_CLIENT_ID'],
            platforms: ['Android', 'iOS']
        })
    ], GooglePlus);
    return GooglePlus;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_page_base_page__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ValuesService__ = __webpack_require__(151);
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







var SignUpPage = (function (_super) {
    __extends(SignUpPage, _super);
    function SignUpPage(injector, events, viewCtrl, valuesService, fb, googlePlus) {
        var _this = _super.call(this, injector) || this;
        _this.events = events;
        _this.viewCtrl = viewCtrl;
        _this.valuesService = valuesService;
        _this.fb = fb;
        _this.googlePlus = googlePlus;
        _this.user = {
            email: '',
            password: '',
            confirmPassword: '',
            phonenumber: '',
            FirstName: '',
            LastName: ''
        };
        //public user:App.RegisterViewModel= new App.RegisterViewModel();
        _this.email = '';
        _this.password = '';
        _this.phonenumber = '';
        _this.FirstName = '';
        _this.LastName = '';
        _this.dob = '';
        _this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6)])
        });
        return _this;
    }
    SignUpPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
    };
    SignUpPage.prototype.onCancel = function () {
        this.viewCtrl.dismiss();
    };
    SignUpPage.prototype.save = function (model, isValid, event) {
        var _this = this;
        // call API to save customer
        event.preventDefault();
        if (isValid) {
            this.showLoadingView();
            this.valuesService.Register(model)
                .subscribe(function (data) {
                _this.showContentView();
                if (data.isSuccess == true) {
                    _this.setName('token', data.token);
                    _this.setRoot('DashPage');
                }
                else {
                    console.log(data);
                    _this.showToast(data.error);
                }
            }, function (err) {
                console.log(err);
                _this.showContentView();
            });
        }
    };
    SignUpPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoadingView();
        this.user.Email = this.email;
        this.user.Password = this.password;
        this.user.ConfirmPassword = this.password;
        this.user.PhoneNumber = this.phonenumber;
        this.valuesService.Register(this.user).subscribe(function (data) {
            if (data != undefined && data != '') {
                _this.showContentView();
                _this.setRoot('DashPage');
            }
            else {
                _this.showToast('Sorry there was a problem Try Again');
            }
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
    SignUpPage.prototype.googleSignUp = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.email = res.email;
            _this.FirstName = res.familyName;
            _this.LastName = res.givenName;
            _this.onSubmit();
        })
            .catch(function (err) { return alert(err); });
    };
    SignUpPage.prototype.facebookSignUp = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.getUserDetail(res.authResponse.userID);
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    SignUpPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,gender,picture", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.email = res.email;
            _this.phonenumber = res.mobile_phone;
            _this.password = "sadAsasd12335#@$@";
            _this.FirstName = res.first_name;
            _this.LastName = res.last_name;
            _this.onSubmit();
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up-page',template:/*ion-inline-start:"C:\nearme\New folder\OrderGrabGo\src\pages\sign-up-page\sign-up-page.html"*/'<ion-header>\n\n  \n\n  <ion-toolbar color="primary">\n\n	<ion-title>{{ \'Create an Account\' | translate }}</ion-title>\n\n    <ion-buttons start>\n\n		\n\n      <button ion-button (click)="onCancel()">\n\n        <span showWhen="ios,core">{{ "CLOSE" | translate }}</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n<br/> \n\n  <div class="container">\n\n      <form #f="ngForm" novalidate (ngSubmit)="save(f.value, f.valid,$event)" >\n\n          <div class="form-group">\n\n              <div class="cols-sm-10">\n\n                  <div class="input-group">\n\n                      <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>\n\n                      <input type="email" class="form-control" name="email" placeholder="Enter Email Address" [ngModel]="user.email"\n\n                             required #email="ngModel" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$">\n\n                  </div>\n\n                  <small [hidden]="email.valid || (email.pristine && !f.submitted)" class="text-danger">\n\n                      Email is required and format should be <i>john@doe.com</i>.\n\n                  </small>\n\n              </div>\n\n          </div>\n\n          <div class="form-group">\n\n              <div class="cols-sm-10">\n\n                  <div class="input-group">\n\n                      <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>\n\n                      <input type="password" class="form-control" name="password" [ngModel]="user.password" placeholder="Password"\n\n                             required validateEqual="confirmPassword" reverse="true" #password="ngModel">                    \n\n                    </div>\n\n                  <small [hidden]="password.valid || (password.pristine && !f.submitted)" class="text-danger">\n\n                      Password is required\n\n                  </small>\n\n                  <small class="text-danger">Password should have one Number,Upper Case Letter, special letter</small>\n\n              </div>\n\n          </div>\n\n          <div class="form-group">\n\n              <div class="cols-sm-10">\n\n                  <div class="input-group">\n\n                      <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>\n\n                      <input type="password" class="form-control" name="confirmPassword" [ngModel]="user.confirmPassword" placeholder="Confirm Password"\n\n                             required validateEqual="password" reverse="false" #confirmPassword="ngModel">                      \n\n                  </div>\n\n                  <small [hidden]="confirmPassword.valid || (confirmPassword.pristine && !f.submitted)" class="text-danger">\n\n                      Password mismatch\n\n                  </small>\n\n              </div>\n\n          </div>\n\n          <div class="form-group">\n\n              <div class="cols-sm-10">\n\n                  <div class="input-group">\n\n                      <span class="input-group-addon"><i class="fa fa-mobile fa-lg" aria-hidden="true"></i></span>\n\n                      <input type="tel" class="form-control" name="phonenumber" [ngModel]="user.phonenumber" placeholder="Phone Number"\n\n                             required #phonenumber="ngModel">                     \n\n                  </div>\n\n                  <small [hidden]="phonenumber.valid || (phonenumber.pristine && !f.submitted)" class="text-danger">\n\n                      phonenumber is required .\n\n                  </small>\n\n              </div>\n\n          </div>\n\n          <div class="form-group">\n\n\n\n              <div class="cols-sm-10">\n\n                  <div class="input-group">\n\n                      <span class="input-group-addon"><i class="fa fa-user fa-lg" aria-hidden="true"></i></span>\n\n                      <input type="text" class="form-control" name="FirstName" [ngModel]="user.FirstName" placeholder="First Name"\n\n                             required #FirstName="ngModel">                     \n\n                  </div>\n\n                  <small [hidden]="FirstName.valid || (FirstName.pristine && !f.submitted)" class="text-danger">\n\n                      FirstName is required .\n\n                  </small>\n\n              </div>\n\n          </div>\n\n          <div class="form-group">\n\n              <div class="cols-sm-10">\n\n                  <div class="input-group">\n\n                      <span class="input-group-addon"><i class="fa fa-user fa-lg" aria-hidden="true"></i></span>\n\n                      <input type="text" class="form-control" name="LastName" [ngModel]="user.LastName" placeholder="Last Name"\n\n                             required #LastName="ngModel">                     \n\n                  </div>\n\n                  <small [hidden]="LastName.valid || (LastName.pristine && !f.submitted)" class="text-danger">\n\n                      Last Name is required .\n\n                  </small>\n\n              </div>\n\n          </div>\n\n          <button type="submit" class="btn btn-primary btn-lg btn-block login-button"  >SignUp</button>\n\n      </form>\n\n      <br>\n\n      <div class="row omb_row-sm-offset-1 omb_socialButtons">\n\n          <div class="col-xs-6 col-sm-2">\n\n              <a  (click)="facebookSignUp()" class="btn btn-lg btn-block omb_btn-facebook">\n\n                  <i class="fa fa-facebook visible-xs"></i>\n\n                  <span class="hidden-xs">Facebook</span>\n\n              </a>\n\n          </div>\n\n          <div class="col-xs-6 col-sm-2">\n\n              <a  (click)="googleSignUp()" class="btn btn-lg btn-block omb_btn-google">\n\n                  <i class="fa fa-google-plus visible-xs"></i>\n\n                  <span class="hidden-xs">Google+</span>\n\n              </a>\n\n          </div>\n\n      </div>\n\n    </div>\n\n   \n\n</ion-content> '/*ion-inline-end:"C:\nearme\New folder\OrderGrabGo\src\pages\sign-up-page\sign-up-page.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__providers_ValuesService__["a" /* ValuesService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], SignUpPage);
    return SignUpPage;
}(__WEBPACK_IMPORTED_MODULE_3__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=sign-up-page.js.map

/***/ })

});
//# sourceMappingURL=0.js.map