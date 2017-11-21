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
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { BasePage } from '../base-page/base-page';
import { Geolocation } from '@ionic-native/geolocation';
import { ValuesService } from '../../providers/ValuesService';
var RestaurentPage = (function (_super) {
    __extends(RestaurentPage, _super);
    function RestaurentPage(injector, events, locationAccuracy, diagnostic, valuesService, geolocation) {
        var _this = _super.call(this, injector) || this;
        _this.events = events;
        _this.locationAccuracy = locationAccuracy;
        _this.diagnostic = diagnostic;
        _this.valuesService = valuesService;
        _this.geolocation = geolocation;
        _this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                var priority = _this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY;
                _this.locationAccuracy.request(priority)
                    .then(function (data) { return console.log(data); })
                    .catch(function (error) {
                    if (error && error.code !== _this.locationAccuracy.ERROR_USER_DISAGREED) {
                        _this.translate.get('ERROR_LOCATION_MODE').subscribe(function (res) {
                            _this.showConfirm(res).then(function () { return _this.diagnostic.switchToLocationSettings(); });
                        });
                    }
                });
            }
        }).catch(function (err) { return console.log(err); });
        return _this;
    }
    RestaurentPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    RestaurentPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView();
        this.loadData();
    };
    RestaurentPage.prototype.goToPlaces = function () {
        this.navigateTo('PlacesPage', this.categories[0]);
    };
    RestaurentPage.prototype.getlocation = function () {
        return this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    };
    RestaurentPage.prototype.loadData = function () {
        var _this = this;
        this.valuesService.CheckLocation('41.5572470', '-93.7985550').subscribe(function (data) {
            _this.places = data;
            _this.showContentView();
            _this.onRefreshComplete();
        });
    };
    RestaurentPage.prototype.onReload = function (refresher) {
        this.refresher = refresher;
        this.loadData();
    };
    return RestaurentPage;
}(BasePage));
RestaurentPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-categories',
        templateUrl: 'categories.html'
    }),
    __metadata("design:paramtypes", [Injector,
        Events,
        LocationAccuracy,
        Diagnostic,
        ValuesService, Geolocation])
], RestaurentPage);
export { RestaurentPage };
//# sourceMappingURL=restaurent.js.map