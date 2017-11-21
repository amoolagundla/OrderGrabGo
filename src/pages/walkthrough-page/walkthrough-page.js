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
import { NavController, MenuController } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';
var WalkthroughPage = (function () {
    function WalkthroughPage(navCtrl, storage, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.menu = menu;
        this.menu.swipeEnable(false);
        this.storage.skipIntroPage.then(function (skipIntroPage) { return _this.skipIntroPage = skipIntroPage; });
    }
    WalkthroughPage.prototype.ionViewDidLoad = function () {
    };
    WalkthroughPage.prototype.goToHome = function () {
        this.skipIntroPage = true;
        this.storage.skipIntroPage = this.skipIntroPage;
        this.navCtrl.setRoot('CategoriesPage');
    };
    return WalkthroughPage;
}());
WalkthroughPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-walkthrough-page',
        templateUrl: 'walkthrough-page.html'
    }),
    __metadata("design:paramtypes", [NavController,
        LocalStorage,
        MenuController])
], WalkthroughPage);
export { WalkthroughPage };
//# sourceMappingURL=walkthrough-page.js.map