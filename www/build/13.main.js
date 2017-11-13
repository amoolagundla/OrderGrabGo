webpackJsonp([13],{

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_review_page__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(811);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddReviewPageModule = (function () {
    function AddReviewPageModule() {
    }
    return AddReviewPageModule;
}());
AddReviewPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_review_page__["a" /* AddReviewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_review_page__["a" /* AddReviewPage */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_review_page__["a" /* AddReviewPage */]
        ]
    })
], AddReviewPageModule);

//# sourceMappingURL=add-review-page.module.js.map

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

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_review_service__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_page_base_page__ = __webpack_require__(812);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
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





var AddReviewPage = (function (_super) {
    __extends(AddReviewPage, _super);
    function AddReviewPage(injector, viewCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.viewCtrl = viewCtrl;
        _this.review = {
            rating: 3,
            comment: ''
        };
        _this.review.place = _this.navParams.get('place');
        return _this;
    }
    AddReviewPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    AddReviewPage.prototype.ionViewDidLoad = function () {
    };
    AddReviewPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoadingView();
        __WEBPACK_IMPORTED_MODULE_2__providers_review_service__["a" /* Review */].create(this.review).then(function (review) {
            _this.showContentView();
            _this.onDismiss();
            _this.translate.get('REVIEW_ADDED').subscribe(function (str) { return _this.showToast(str); });
        }, function (error) {
            _this.showErrorView();
            _this.translate.get('ERROR_REVIEW_ADD').subscribe(function (str) { return _this.showToast(str); });
        });
    };
    AddReviewPage.prototype.onDismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddReviewPage;
}(__WEBPACK_IMPORTED_MODULE_3__base_page_base_page__["a" /* BasePage */]));
AddReviewPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-add-review-page',template:/*ion-inline-start:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\add-review-page\add-review-page.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-buttons start>\n      <button ion-button clear (click)="onDismiss()">\n        <span showWhen="ios,core">{{ \'CLOSE\' | translate }}</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{ \'ADD_REVIEW\' | translate }}\n    </ion-title>\n </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list text-center>\n    <rating [(ngModel)]="review.rating"></rating>\n    <ion-item>\n      <ion-label color="primary" stacked>{{ \'COMMENT\' | translate }}</ion-label>\n      <ion-textarea [(ngModel)]="review.comment" rows="6"></ion-textarea>\n    </ion-item>\n    <div padding>\n      <button ion-button block color="primary" (click)="onSubmit()">\n        {{ \'SUBMIT\' | translate }}\n      </button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\nearme\OrderGrabGo.git\OrderGrabGo\src\pages\add-review-page\add-review-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ViewController */]])
], AddReviewPage);

//# sourceMappingURL=add-review-page.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map