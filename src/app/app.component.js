var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ValuesService } from '../providers/ValuesService';
import { LocalStorage } from '../providers/local-storage';
var MyApp = (function () {
    function MyApp(platform, events, storage, statusBar, splashScreen, shared) {
        this.platform = platform;
        this.events = events;
        this.storage = storage;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.shared = shared;
        this.initializeApp();
    }
    MyApp.prototype.onMenuOpened = function () {
        this.events.publish('onMenuOpened');
    };
    MyApp.prototype.onMenuClosed = function () {
        this.events.publish('onMenuClosed');
    };
    MyApp.prototype.buildMenu = function () {
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.events.subscribe('lang:change', function (e) {
            _this.buildMenu();
        });
        this.storage.lang.then(function (val) {
            _this.storage.skipIntroPage.then(function (skipIntroPage) {
                if (skipIntroPage) {
                    _this.storage.token.then(function (token) {
                        if (token != null && token != "") {
                            _this.shared.GetUserInfo();
                            _this.rootPage = 'DashPage';
                        }
                        else {
                            _this.rootPage = 'SignInPage';
                        }
                    }, function (error) { _this.rootPage = 'SignInPage'; });
                }
            }).catch(function (e) { return console.log(e); });
            _this.storage.skipIntroPage.then(function (skipIntroPage) {
                _this.rootPage = skipIntroPage ? 'SignInPage' : 'HomePage';
            }).catch(function (e) { return console.log(e); });
            _this.buildMenu();
        }).catch(function (e) { return console.log(e); });
        this.storage.unit.then(function (val) {
        }).catch(function (e) { return console.log(e); });
        this.storage.mapStyle.then(function (val) {
        }).catch(function (e) { return console.log(e); });
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage')) {
            this.nav.push('SignInPage');
        }
        else if (page.component === null) {
            this.buildMenu();
            this.nav.setRoot(page.component);
        }
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform,
        Events,
        LocalStorage,
        StatusBar,
        SplashScreen,
        ValuesService])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map