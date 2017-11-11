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
import { Review } from '../../providers/review-service';
import { BasePage } from '../base-page/base-page';
var ReviewsPage = (function (_super) {
    __extends(ReviewsPage, _super);
    function ReviewsPage(injector) {
        var _this = _super.call(this, injector) || this;
        _this.params = {};
        _this.params.place = _this.navParams.data;
        return _this;
    }
    ReviewsPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    ReviewsPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView();
        this.onReload();
    };
    ReviewsPage.prototype.loadData = function () {
        var _this = this;
        Review.load(this.params).then(function (reviews) {
            for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
                var review = reviews_1[_i];
                _this.reviews.push(review);
            }
            _this.onRefreshComplete(reviews);
            if (_this.reviews.length) {
                _this.showContentView();
            }
            else {
                _this.showEmptyView();
            }
        }, function (error) {
            _this.showErrorView();
            _this.onRefreshComplete();
        });
    };
    ReviewsPage.prototype.onLoadMore = function (infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        this.params.page++;
        this.loadData();
    };
    ReviewsPage.prototype.onReload = function (refresher) {
        if (refresher === void 0) { refresher = null; }
        this.refresher = refresher;
        this.reviews = [];
        this.params.page = 0;
        this.loadData();
    };
    return ReviewsPage;
}(BasePage));
ReviewsPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-reviews-page',
        templateUrl: 'reviews-page.html'
    }),
    __metadata("design:paramtypes", [Injector])
], ReviewsPage);
export { ReviewsPage };
//# sourceMappingURL=reviews-page.js.map