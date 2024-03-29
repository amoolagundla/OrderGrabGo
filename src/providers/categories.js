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
var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super.call(this, 'Category') || this;
    }
    Category.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new Parse.Query(_this);
            query.find().then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Object.defineProperty(Category.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    return Category;
}(Parse.Object));
Category = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Category);
export { Category };
Parse.Object.registerSubclass('Category', Category);
//# sourceMappingURL=categories.js.map