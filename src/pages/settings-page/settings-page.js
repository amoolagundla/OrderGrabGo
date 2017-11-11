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
import { Events } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';
import { BasePage } from '../base-page/base-page';
var SettingsPage = (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage(injector, localStorage, events) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.settings = {};
        _this.storage = localStorage;
        _this.events = events;
        _this.storage.unit.then(function (unit) { return _this.settings.unit = unit; }).catch(function (e) { return console.log(e); });
        _this.storage.mapStyle.then(function (mapStyle) { return _this.settings.mapStyle = mapStyle; }).catch(function (e) { return console.log(e); });
        _this.storage.distance.then(function (distance) { return _this.settings.distance = distance; }).catch(function (e) { return console.log(e); });
        _this.storage.lang.then(function (lang) { return _this.settings.lang = lang; }).catch(function (e) { return console.log(e); });
        return _this;
    }
    SettingsPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.onChangeUnit = function () {
        this.storage.unit = this.settings.unit;
    };
    SettingsPage.prototype.onChangeMapStyle = function () {
        this.storage.mapStyle = this.settings.mapStyle;
    };
    SettingsPage.prototype.onChangeDistance = function () {
        this.storage.distance = this.settings.distance;
    };
    SettingsPage.prototype.onChangeLang = function () {
        if (this.settings.lang) {
            this.storage.lang = this.settings.lang;
            this.translate.use(this.settings.lang);
            this.events.publish('lang:change');
        }
    };
    SettingsPage.prototype.goToWalkthrough = function () {
        this.navigateTo('WalkthroughPage');
    };
    return SettingsPage;
}(BasePage));
SettingsPage = __decorate([
    IonicPage(), Component({
        selector: 'page-settings-page',
        templateUrl: 'settings-page.html'
    }),
    __metadata("design:paramtypes", [Injector,
        LocalStorage,
        Events])
], SettingsPage);
export { SettingsPage };
//# sourceMappingURL=settings-page.js.map