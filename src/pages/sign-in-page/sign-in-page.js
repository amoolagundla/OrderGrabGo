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
        //this.getUserDetailGoogle('ji');
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
    SignInPage.prototype.facebookLogIn = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.getUserDetail(res.authResponse.accessToken);
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    SignInPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.showLoadingView();
        this.valuesService.FacebookLogin(userid).subscribe(function (data) {
            _this.showContentView();
            _this.sharedData.USerInfoChanged(data);
            _this.setName('token', data.token);
            _this.setRoot('DashPage');
        }, function (error) {
            _this.showContentView();
            if (error.status === 401) {
                _this.showToast(_this.trans.INVALID_CREDENTIALS);
            }
            else {
                _this.showToast(_this.trans.ERROR_UNKNOWN);
            }
        });
    };
    SignInPage.prototype.googleSignIn = function () {
        var glog = this;
        this.googlePlus.login({
            'webClientId': '587791248488-u60e99ojmqsj4d855jumi75hlomd8k1q.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (user) {
            glog.getUserDetailGoogle(user.idToken);
        }, function (error) {
            var er = error;
            alert(er);
        });
    };
    SignInPage.prototype.getUserDetailGoogle = function (userid) {
        var _this = this;
        this.showLoadingView();
        this.valuesService.googlelogin(userid).subscribe(function (data) {
            _this.showContentView();
            _this.sharedData.USerInfoChanged(data);
            _this.setName('token', data.token);
            _this.setRoot('DashPage');
        }, function (error) {
            _this.showContentView();
            if (error.status === 401) {
                _this.showToast(_this.trans.INVALID_CREDENTIALS);
            }
            else {
                _this.showToast(_this.trans.ERROR_UNKNOWN);
            }
        });
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