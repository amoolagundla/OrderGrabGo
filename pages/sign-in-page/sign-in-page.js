var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { LocalStorage } from '../../providers/local-storage';
import { ValuesService } from '../../providers/ValuesService';
var SignInPage = (function (_super) {
    __extends(SignInPage, _super);
    function SignInPage(injector, formBuilder, events, viewCtrl, valuesService, fb, googlePlus, storage) {
        var _this = _super.call(this, injector) || this;
        _this.formBuilder = formBuilder;
        _this.events = events;
        _this.viewCtrl = viewCtrl;
        _this.valuesService = valuesService;
        _this.fb = fb;
        _this.googlePlus = googlePlus;
        _this.storage = storage;
        _this.email = '';
        _this.password = '';
        _this.storage.RemoveToken();
        _this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
        var trans = ['LOGGED_IN_AS', 'INVALID_CREDENTIALS', 'ERROR_UNKNOWN'];
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
    SignInPage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.getUserDetail(res.authResponse.userID);
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    SignInPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,gender,picture", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.email = res.email;
            _this.password = "sadAsasd12335#@$@";
            _this.onSubmit();
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    SignInPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.email = res.email;
            _this.password = "sadAsasd12335#@$@";
            _this.onSubmit();
        })
            .catch(function (err) { return console.error(err); });
    };
    SignInPage.prototype.goToSignUp = function () {
        this.navigateTo('SignUpPage');
    };
    return SignInPage;
}(BasePage));
SignInPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-sign-in-page',
        templateUrl: 'sign-in-page.html',
        providers: [GooglePlus]
    }),
    __metadata("design:paramtypes", [Injector,
        FormBuilder,
        Events,
        ViewController, ValuesService, Facebook, GooglePlus, LocalStorage])
], SignInPage);
export { SignInPage };
//# sourceMappingURL=sign-in-page.js.map