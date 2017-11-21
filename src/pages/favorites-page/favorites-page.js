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
import { Place } from '../../providers/place-service';
import { BasePage } from '../base-page/base-page';
var FavoritesPage = (function (_super) {
    __extends(FavoritesPage, _super);
    function FavoritesPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.params = {};
        _this.places = [];
        _this.showLoadingView();
        _this.onReload();
        return _this;
    }
    FavoritesPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    FavoritesPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', place);
    };
    FavoritesPage.prototype.loadData = function () {
        var _this = this;
        Place.loadFavorites(this.params).then(function (data) {
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
    FavoritesPage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.params.page++;
        this.loadData();
    };
    FavoritesPage.prototype.onReload = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        this.refresher = refresher;
        this.places = [];
        this.params.page = 0;
        this.loadData();
    };
    return FavoritesPage;
}(BasePage));
FavoritesPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-favorites-page',
        templateUrl: 'favorites-page.html'
    }),
    __metadata("design:paramtypes", [Injector])
], FavoritesPage);
export { FavoritesPage };
//# sourceMappingURL=favorites-page.js.map