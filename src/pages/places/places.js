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
import { BasePage } from '../base-page/base-page';
import { Place } from '../../providers/place-service';
import { Preference } from '../../providers/preference';
import { Geolocation } from '@ionic-native/geolocation';
var PlacesPage = (function (_super) {
    __extends(PlacesPage, _super);
    function PlacesPage(injector, geolocation, preference) {
        var _this = _super.call(this, injector) || this;
        _this.geolocation = geolocation;
        _this.preference = preference;
        _this.params = {};
        _this.params.category = _this.navParams.data;
        _this.params.filter = 'nearby';
        _this.params.unit = _this.preference.unit;
        _this.showLoadingView();
        _this.onReload();
        _this.prepareAd();
        return _this;
    }
    PlacesPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    PlacesPage.prototype.prepareAd = function () {
    };
    PlacesPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', place);
    };
    PlacesPage.prototype.loadData = function () {
        var _this = this;
        Place.load(this.params).then(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var place = data_1[_i];
                _this.places.push(place);
            }
            _this.onRefreshComplete(data);
            if (_this.places.length) {
                _this.showContentView();
            }
            else {
                _this.showEmptyView();
            }
        }, function (error) {
            _this.onRefreshComplete();
            _this.showErrorView();
        });
    };
    PlacesPage.prototype.onFilter = function (filter) {
        this.params.filter = filter;
        this.showLoadingView();
        this.onReload();
    };
    PlacesPage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.params.page++;
        this.loadData();
    };
    PlacesPage.prototype.onReload = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = null; }
        this.refresher = refresher;
        this.places = [];
        this.params.page = 0;
        if (this.params.filter === 'nearby') {
            var options = {
                enableHighAccuracy: true,
                timeout: 10000
            };
            this.geolocation.getCurrentPosition(options).then(function (pos) {
                _this.params.location = pos.coords;
                _this.loadData();
            }, function (error) {
                _this.showErrorView();
                _this.translate.get('ERROR_LOCATION_UNAVAILABLE').subscribe(function (res) { return _this.showToast(res); });
            });
        }
        else {
            this.params.location = null;
            this.loadData();
        }
    };
    return PlacesPage;
}(BasePage));
PlacesPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-places',
        templateUrl: 'places.html'
    }),
    __metadata("design:paramtypes", [Injector,
        Geolocation,
        Preference])
], PlacesPage);
export { PlacesPage };
//# sourceMappingURL=places.js.map