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
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { User } from '../../providers/user-service';
var ProfilePage = (function () {
    function ProfilePage(navCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.stats = {
            reviews: 0,
            places: 0,
            favorites: 0
        };
        this.user = User.getCurrentUser();
        User.stats().then(function (stats) { return _this.stats = stats; });
    }
    ProfilePage.prototype.ionViewDidLoad = function () { };
    ProfilePage.prototype.onPresentEditModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EditProfilePage', { user: this.user });
        modal.onDidDismiss(function () {
            _this.user = User.getCurrentUser();
        });
        modal.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-profile-page',
        templateUrl: 'profile-page.html'
    }),
    __metadata("design:paramtypes", [NavController, ModalController])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile-page.js.map