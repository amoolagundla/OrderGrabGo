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
import { ModalController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { ValuesService } from '../../providers/ValuesService';
var ProfilePage = (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(injector, valuesService, modalCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.valuesService = valuesService;
        _this.modalCtrl = modalCtrl;
        _this.stats = {
            reviews: 0,
            places: 0,
            favorites: 0
        };
        _this.sharedData.UserInfo.subscribe(function (data) {
            console.log(data);
            _this.user = data;
        });
        _this.valuesService.GetUserInfo();
        return _this;
    }
    ProfilePage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ProfilePage.prototype.ionViewDidLoad = function () { };
    ProfilePage.prototype.onPresentEditModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EditProfilePage', { user: this.user });
        modal.onDidDismiss(function () {
            _this.valuesService.GetUserInfo();
        });
        modal.present();
    };
    return ProfilePage;
}(BasePage));
ProfilePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-profile-page',
        templateUrl: 'profile-page.html'
    }),
    __metadata("design:paramtypes", [Injector, ValuesService, ModalController])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile-page.js.map