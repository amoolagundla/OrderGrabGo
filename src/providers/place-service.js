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
var Place = (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super.call(this, 'Place') || this;
    }
    Place.prototype.distance = function (location, unit) {
        if (!location) {
            return null;
        }
        var geoPoint = new Parse.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    Place.like = function (place) {
        return new Promise(function (resolve, reject) {
            Parse.Cloud.run('likePlace', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.load = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 50;
            var distance = params.distance || 100;
            var query = new Parse.Query(_this);
            var subQuery = new Parse.Query(_this);
            var subQueryTwo = new Parse.Query(_this);
            subQuery.greaterThan('expiresAt', new Date());
            subQueryTwo.doesNotExist('expiresAt');
            query = Parse.Query.or(subQuery, subQueryTwo);
            query.include('category');
            query.equalTo('isApproved', true);
            if (params.category) {
                query.equalTo('category', params.category);
            }
            if (params.search && params.search !== '') {
                query.contains('canonical', params.search);
            }
            if (params.location) {
                var point = new Parse.GeoPoint({
                    latitude: 40.7384271,
                    longitude: -73.98841849999997
                });
                if (params.unit && params.unit === 'km') {
                    query.withinKilometers('location', point, distance);
                }
                else {
                    query.withinMiles('location', point, distance);
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Place.loadFavorites = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 50;
            var query = new Parse.Query(_this);
            query.equalTo('isApproved', true);
            query.equalTo('likes', Parse.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Place.create = function (data) {
        return new Promise(function (resolve, reject) {
            var place = new Parse.Object('Place');
            place.save(data).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Object.defineProperty(Place.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "category", {
        get: function () {
            return this.get('category');
        },
        set: function (val) {
            this.set('category', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new Parse.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal) {
                return null;
            }
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    return Place;
}(Parse.Object));
Place = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Place);
export { Place };
Parse.Object.registerSubclass('Place', Place);
//# sourceMappingURL=place-service.js.map