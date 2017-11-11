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
import { ViewController } from 'ionic-angular';
import { Review } from '../../providers/review-service';
import { BasePage } from '../base-page/base-page';
var AddReviewPage = (function (_super) {
    __extends(AddReviewPage, _super);
    function AddReviewPage(injector, viewCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.viewCtrl = viewCtrl;
        _this.review = {
            rating: 3,
            comment: ''
        };
        _this.review.place = _this.navParams.get('place');
        return _this;
    }
    AddReviewPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    AddReviewPage.prototype.ionViewDidLoad = function () {
    };
    AddReviewPage.prototype.onSubmit = function () {
        var _this = this;
        this.showLoadingView();
        Review.create(this.review).then(function (review) {
            _this.showContentView();
            _this.onDismiss();
            _this.translate.get('REVIEW_ADDED').subscribe(function (str) { return _this.showToast(str); });
        }, function (error) {
            _this.showErrorView();
            _this.translate.get('ERROR_REVIEW_ADD').subscribe(function (str) { return _this.showToast(str); });
        });
    };
    AddReviewPage.prototype.onDismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AddReviewPage;
}(BasePage));
AddReviewPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-add-review-page',
        templateUrl: 'add-review-page.html'
    }),
    __metadata("design:paramtypes", [Injector, ViewController])
], AddReviewPage);
export { AddReviewPage };
//# sourceMappingURL=add-review-page.js.map