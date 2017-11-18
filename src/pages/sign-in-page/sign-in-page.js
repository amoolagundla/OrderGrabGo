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
import { ValuesService } from '../../providers/ValuesService';
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
        _this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
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
            console.log(data._body);
            _this.setName('token', data._body);
            _this.setRoot('CategoriesPage');
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
}(BasePage));
SignInPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-sign-in-page',
        templateUrl: 'sign-in-page.html'
    }),
    __metadata("design:paramtypes", [Injector,
        FormBuilder,
        Events,
        ViewController, ValuesService])
], SignInPage);
export { SignInPage };
//# sourceMappingURL=sign-in-page.js.map