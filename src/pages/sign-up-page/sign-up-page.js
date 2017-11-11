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
import { App } from '../../models/models';
import { ValuesService } from '../../providers/ValuesService';
var SignUpPage = (function (_super) {
    __extends(SignUpPage, _super);
    function SignUpPage(injector, formBuilder, events, viewCtrl, valuesService) {
        var _this = _super.call(this, injector) || this;
        _this.formBuilder = formBuilder;
        _this.events = events;
        _this.viewCtrl = viewCtrl;
        _this.valuesService = valuesService;
        _this.user = new App.RegisterViewModel();
        _this.email = '';
        _this.password = '';
        _this.phonenumber = '';
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
    SignUpPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoadingView();
        this.user.Email = this.email;
        this.user.Password = this.password;
        this.user.ConfirmPassword = this.password;
        this.user.PhoneNumber = this.phonenumber;
        this.valuesService.Register(this.user).subscribe(function (data) {
            if (data != undefined && data != '') {
                _this.setRoot('CategoriesPage');
            }
            else {
                _this.showToast('UserName or PassWord Do No Match');
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
    return SignUpPage;
}(BasePage));
SignUpPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-sign-up-page',
        templateUrl: 'sign-up-page.html'
    }),
    __metadata("design:paramtypes", [Injector,
        FormBuilder,
        Events,
        ViewController, ValuesService])
], SignUpPage);
export { SignUpPage };
//# sourceMappingURL=sign-up-page.js.map