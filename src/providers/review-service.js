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
import { Injectable } from '@angular/core';
import Parse from 'parse';
var Review = Review_1 = (function (_super) {
    __extends(Review, _super);
    function Review() {
        return _super.call(this, 'Review') || this;
    }
    Review.create = function (data) {
        return new Promise(function (resolve, reject) {
            var review = new Review_1();
            review.save(data).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Review.load = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new Parse.Query(_this);
            query.include('userData');
            query.equalTo('place', params.place);
            query.equalTo('isInappropriate', false);
            query.descending('createdAt');
            var limit = params.limit || 40;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Review.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "userData", {
        get: function () {
            return this.get('userData');
        },
        enumerable: true,
        configurable: true
    });
    return Review;
}(Parse.Object));
Review = Review_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Review);
export { Review };
Parse.Object.registerSubclass('Review', Review);
var Review_1;
//# sourceMappingURL=review-service.js.map