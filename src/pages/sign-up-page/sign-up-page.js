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
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { ValuesService } from '../../providers/ValuesService';
var SignUpPage = (function (_super) {
    __extends(SignUpPage, _super);
    function SignUpPage(injector, formBuilder, events, viewCtrl, valuesService, fb, googlePlus) {
        var _this = _super.call(this, injector) || this;
        _this.formBuilder = formBuilder;
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
        _this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
        var trans = ['LOGGED_IN_AS', 'EMAIL_TAKEN', 'ERROR_UNKNOWN'];
        _this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
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
                    _this.showToast(data.Error);
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
    return SignUpPage;
}(BasePage));
SignUpPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-sign-up-page',
        templateUrl: 'sign-up-page.html',
        providers: [GooglePlus]
    }),
    __metadata("design:paramtypes", [Injector,
        FormBuilder,
        Events,
        ViewController, ValuesService, Facebook, GooglePlus])
], SignUpPage);
export { SignUpPage };
//# sourceMappingURL=sign-up-page.js.map