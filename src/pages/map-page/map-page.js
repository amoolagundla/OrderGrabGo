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
import { Platform, Events } from 'ionic-angular';
import { Place } from '../../providers/place-service';
import { MapStyle } from '../../providers/map-style';
import { BasePage } from '../base-page/base-page';
import { LocalStorage } from '../../providers/local-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapsEvent, LatLng, LatLngBounds, Geocoder } from '@ionic-native/google-maps';
var MapPage = (function (_super) {
    __extends(MapPage, _super);
    function MapPage(injector, events, storage, geolocation, platform) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.events = events;
        _this.storage = storage;
        _this.geolocation = geolocation;
        _this.platform = platform;
        _this.params = {};
        _this.events.subscribe('onMenuOpened', function (e) {
            if (_this.map) {
                _this.map.setClickable(false);
            }
        });
        _this.events.subscribe('onMenuClosed', function (e) {
            if (_this.map) {
                _this.map.setClickable(true);
            }
        });
        return _this;
    }
    MapPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    MapPage.prototype.ionViewWillUnload = function () {
        this.isViewLoaded = false;
        if (this.map) {
            this.map.clear();
            this.map.setZoom(1);
            this.map.setCenter(new LatLng(0, 0));
        }
    };
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isViewLoaded = true;
        if (this.platform.is('cordova')) {
            this.showLoadingView();
            this.map = new GoogleMap('map', {
                styles: MapStyle.dark(),
                backgroundColor: '#333333'
            });
            this.map.one(GoogleMapsEvent.MAP_READY).then(function () {
                _this.storage.unit.then(function (unit) {
                    _this.params.unit = unit;
                    var options = {
                        enableHighAccuracy: true,
                        timeout: 7000
                    };
                    _this.geolocation.getCurrentPosition(options).then(function (pos) {
                        _this.params.location = pos.coords;
                        _this.loadData();
                    }, function (error) {
                        _this.translate.get('ERROR_LOCATION_UNAVAILABLE').subscribe(function (str) { return _this.showToast(str); });
                        _this.showErrorView();
                    });
                });
            });
            this.storage.mapStyle.then(function (mapStyle) {
                _this.map.setMapTypeId(mapStyle);
            });
            this.map.on(GoogleMapsEvent.MY_LOCATION_BUTTON_CLICK).subscribe(function (map) {
                if (_this.isViewLoaded) {
                    _this.map.getCameraPosition().then(function (camera) {
                        var target = camera.target;
                        _this.params.location = {
                            latitude: target.lat,
                            longitude: target.lng
                        };
                        _this.showLoadingView();
                        _this.onReload();
                    });
                }
            });
            this.map.setMyLocationEnabled(true);
        }
        else {
            console.warn('Native: tried calling Google Maps.isAvailable, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    };
    MapPage.prototype.goToPlace = function (place) {
        this.navigateTo('PlaceDetailPage', place);
    };
    MapPage.prototype.onSearchAddress = function (event) {
        var _this = this;
        if (this.platform.is('cordova')) {
            var query = event.target.value;
            var request = {
                address: query
            };
            var geocoder = new Geocoder;
            geocoder.geocode(request).then(function (results) {
                var target = new LatLng(results[0].position.lat, results[0].position.lng);
                var position = {
                    target: target,
                    zoom: 10
                };
                _this.map.moveCamera(position);
                _this.params.location = {
                    latitude: target.lat,
                    longitude: target.lng
                };
                _this.showLoadingView();
                _this.onReload();
            });
        }
        else {
            console.warn('Native: tried calling Google Maps.isAvailable, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    };
    MapPage.prototype.loadData = function () {
        var _this = this;
        Place.load(this.params).then(function (places) {
            _this.onPlacesLoaded(places);
            _this.showContentView();
            if (!places.length) {
                _this.translate.get('EMPTY_PLACES').subscribe(function (str) { return _this.showToast(str); });
            }
        }, function (error) {
            _this.translate.get('ERROR_PLACES').subscribe(function (str) { return _this.showToast(str); });
            _this.showErrorView();
        });
    };
    MapPage.prototype.onPlacesLoaded = function (places) {
        var _this = this;
        var points = [];
        for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
            var place = places_1[_i];
            var target = new LatLng(place.location.latitude, place.location.longitude);
            var icon = (place.category && place.category.get('icon')) ? {
                url: place.category.get('icon').url(),
                size: {
                    width: 32,
                    height: 32
                }
            } : 'yellow';
            var markerOptions = {
                position: target,
                title: place.title,
                snippet: place.description,
                icon: icon,
                place: place,
                styles: {
                    maxWidth: '80%'
                },
            };
            this.map.addMarker(markerOptions).then(function (marker) {
                marker.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe(function (e) {
                    _this.goToPlace(e.get('place'));
                });
            });
            points.push(target);
        }
        if (points.length) {
            this.map.moveCamera({
                target: new LatLngBounds(points),
                zoom: 10
            });
        }
    };
    MapPage.prototype.onReload = function () {
        this.map.clear();
        this.places = [];
        this.loadData();
    };
    MapPage.prototype.onSearchButtonTapped = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.map.getCameraPosition().then(function (camera) {
                var position = camera.target;
                _this.params.location = {
                    latitude: position.lat,
                    longitude: position.lng
                };
                _this.showLoadingView();
                _this.onReload();
            });
        }
        else {
            console.warn('Native: tried calling GoogleMaps.getCameraPosition, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    };
    return MapPage;
}(BasePage));
MapPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-map-page',
        templateUrl: 'map-page.html'
    }),
    __metadata("design:paramtypes", [Injector,
        Events,
        LocalStorage,
        Geolocation,
        Platform])
], MapPage);
export { MapPage };
//# sourceMappingURL=map-page.js.map