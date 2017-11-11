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
import { ModalController, Events } from 'ionic-angular';
import { Place } from '../../providers/place-service';
import { Preference } from '../../providers/preference';
import { LocalStorage } from '../../providers/local-storage';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserTab } from '@ionic-native/browser-tab';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BasePage } from '../base-page/base-page';
import { User } from '../../providers/user-service';
var PlaceDetailPage = (function (_super) {
    __extends(PlaceDetailPage, _super);
    function PlaceDetailPage(injector, modalCtrl, storage, preference, callNumber, geolocation, inAppBrowser, browserTab, launchNavigator, socialSharing, events) {
        var _this = _super.call(this, injector) || this;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.preference = preference;
        _this.callNumber = callNumber;
        _this.geolocation = geolocation;
        _this.inAppBrowser = inAppBrowser;
        _this.browserTab = browserTab;
        _this.launchNavigator = launchNavigator;
        _this.socialSharing = socialSharing;
        _this.events = events;
        var options = {
            enableHighAccuracy: true,
            timeout: 10000
        };
        _this.geolocation.getCurrentPosition(options).then(function (pos) {
            _this.location = pos.coords;
        });
        _this.place = _this.navParams.data;
        _this.unit = preference.unit;
        _this.images = [];
        if (_this.place.image) {
            _this.images.push(_this.place.image);
        }
        if (_this.place.imageTwo) {
            _this.images.push(_this.place.imageTwo);
        }
        if (_this.place.imageThree) {
            _this.images.push(_this.place.imageThree);
        }
        if (_this.place.imageFour) {
            _this.images.push(_this.place.imageFour);
        }
        return _this;
    }
    PlaceDetailPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlaceDetailPage.prototype.ionViewDidLoad = function () { };
    PlaceDetailPage.prototype.openSignUpModal = function () {
        this.navigateTo('SignInPage');
    };
    PlaceDetailPage.prototype.openAddReviewModal = function () {
        var modal = this.modalCtrl.create('AddReviewPage', { place: this.place });
        modal.present();
    };
    PlaceDetailPage.prototype.onLike = function () {
        if (User.getCurrentUser()) {
            Place.like(this.place);
            this.showToast('Liked');
        }
        else {
            this.openSignUpModal();
        }
    };
    PlaceDetailPage.prototype.onRate = function () {
        if (User.getCurrentUser()) {
            this.openAddReviewModal();
        }
        else {
            this.openSignUpModal();
        }
    };
    PlaceDetailPage.prototype.onShare = function () {
        this.socialSharing.share(this.place.title, null, null, this.place.website);
    };
    PlaceDetailPage.prototype.onCall = function () {
        this.callNumber.callNumber(this.place.phone, true);
    };
    PlaceDetailPage.prototype.openUrl = function () {
        var _this = this;
        this.browserTab.isAvailable().then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl(_this.place.website);
            }
            else {
                _this.inAppBrowser.create(_this.place.website, '_system');
            }
        });
    };
    PlaceDetailPage.prototype.goToMap = function () {
        this.launchNavigator.navigate([this.place.location.latitude, this.place.location.longitude], {
            start: [this.location.latitude, this.location.longitude]
        });
    };
    PlaceDetailPage.prototype.goToReviews = function () {
        this.navigateTo('ReviewsPage', this.place);
    };
    return PlaceDetailPage;
}(BasePage));
PlaceDetailPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-place-detail-page',
        templateUrl: 'place-detail-page.html'
    }),
    __metadata("design:paramtypes", [Injector,
        ModalController,
        LocalStorage,
        Preference,
        CallNumber,
        Geolocation,
        InAppBrowser,
        BrowserTab,
        LaunchNavigator,
        SocialSharing,
        Events])
], PlaceDetailPage);
export { PlaceDetailPage };
//# sourceMappingURL=place-detail-page.js.map