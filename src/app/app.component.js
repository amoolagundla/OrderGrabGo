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
import { Nav, Platform, ModalController, ToastController, Events } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
import Parse from 'parse';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './app.config';
import { ValuesService } from '../providers/ValuesService';
import { User } from '../providers/user-service';
import { LocalStorage } from '../providers/local-storage';
import { Preference } from '../providers/preference';
import { SharedDataService } from '../providers/SharedDataService';
var MyApp = (function () {
    function MyApp(platform, events, storage, translate, toastCtrl, preference, statusBar, splashScreen, googleAnalytics, headerColor, modalCtrl, shared, _shared) {
        this.platform = platform;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.preference = preference;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.googleAnalytics = googleAnalytics;
        this.headerColor = headerColor;
        this.modalCtrl = modalCtrl;
        this.shared = shared;
        this._shared = _shared;
        this.initializeApp();
        this.shared.GetUserInfo();
    }
    MyApp.prototype.onMenuOpened = function () {
        this.events.publish('onMenuOpened');
    };
    MyApp.prototype.onMenuClosed = function () {
        this.events.publish('onMenuClosed');
    };
    MyApp.prototype.buildMenu = function () {
        var _this = this;
        var trans = ['CATEGORIES', 'MAP', 'ADD_PLACE', 'MY_FAVORITES',
            'SETTINGS', 'LOGOUT', 'LOGGED_OUT', 'PROFILE'];
        this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
            _this.pages = [
                { title: values.CATEGORIES, icon: 'pricetag', component: 'DashPage' },
                { title: values.SETTINGS, icon: 'settings', component: 'SettingsPage' }
            ];
            _this.pages.push({ title: values.PROFILE, icon: 'contact', component: 'ProfilePage' });
            _this.pages.push({ title: values.LOGOUT, icon: 'exit', component: 'SignInPage' });
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this._shared.UserInfo.subscribe(function (data) {
            if (data.FirstName != undefined) {
                _this.user = data;
            }
        });
        this.events.subscribe('user:login', function (userEventData) {
            _this.user = userEventData[0];
            _this.buildMenu();
        });
        this.events.subscribe('user:logout', function () {
            _this.user = null;
            _this.buildMenu();
        });
        this.events.subscribe('lang:change', function (e) {
            _this.buildMenu();
        });
        this.translate.setDefaultLang(AppConfig.DEFAULT_LANG);
        this.storage.lang.then(function (val) {
            var lang = val || AppConfig.DEFAULT_LANG;
            _this.translate.use(lang);
            _this.storage.lang = lang;
            _this.preference.lang = lang;
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
            var unit = val || AppConfig.DEFAULT_UNIT;
            _this.storage.unit = unit;
            _this.preference.unit = unit;
        }).catch(function (e) { return console.log(e); });
        this.storage.mapStyle.then(function (val) {
            var mapStyle = val || AppConfig.DEFAULT_MAP_STYLE;
            _this.storage.mapStyle = mapStyle;
            _this.preference.mapStyle = mapStyle;
        }).catch(function (e) { return console.log(e); });
        Parse.serverURL = AppConfig.SERVER_URL;
        Parse.initialize(AppConfig.APP_ID);
        User.getInstance();
        this.user = User.getCurrentUser();
        if (this.user) {
            this.user.fetch();
        }
        this.platform.ready().then(function () {
            if (AppConfig.TRACKING_ID) {
                _this.googleAnalytics.startTrackerWithId(AppConfig.TRACKING_ID);
                _this.googleAnalytics.trackEvent('', 'App opened');
                _this.googleAnalytics.debugMode();
                _this.googleAnalytics.enableUncaughtExceptionReporting(true);
            }
            if (AppConfig.HEADER_COLOR && _this.platform.is('android')) {
                _this.headerColor.tint(AppConfig.HEADER_COLOR);
            }
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage') && !User.getCurrentUser()) {
            this.nav.push('SignInPage');
        }
        else if (page.component === null && User.getCurrentUser()) {
            User.logout().then(function (success) {
                var toast = _this.toastCtrl.create({
                    message: _this.trans.LOGGED_OUT,
                    duration: 3000
                });
                toast.present();
                _this.user = null;
                _this.buildMenu();
            }, function (error) { return console.log(error); });
        }
        else {
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
        TranslateService,
        ToastController,
        Preference,
        StatusBar,
        SplashScreen,
        GoogleAnalytics,
        HeaderColor,
        ModalController,
        ValuesService,
        SharedDataService])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map