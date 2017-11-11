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
import { ActionSheetController, Platform, Events } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { Place } from '../../providers/place-service';
import { MapStyle } from '../../providers/map-style';
import { ParseFile } from '../../providers/parse-file-service';
import { Category } from '../../providers/categories';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng, Geocoder } from '@ionic-native/google-maps';
var AddPlacePage = (function (_super) {
    __extends(AddPlacePage, _super);
    function AddPlacePage(injector, formBuilder, platform, place, googleMaps, camera, events, actionSheetCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.formBuilder = formBuilder;
        _this.platform = platform;
        _this.place = place;
        _this.googleMaps = googleMaps;
        _this.camera = camera;
        _this.events = events;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            category: new FormControl('', Validators.required),
            description: new FormControl(''),
            address: new FormControl(''),
            phone: new FormControl(''),
            website: new FormControl('http://')
        });
        var trans = ['PROFILE_UPDATED', 'PROFILE_UPDATE_ERROR', 'CAMERA', 'CANCEL',
            'CHOOSE_AN_OPTION', 'PHOTO_LIBRARY', 'FILE_UPLOADED', 'ERROR_FILE_UPLOAD'];
        _this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
        });
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
    AddPlacePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    AddPlacePage.prototype.ionViewWillUnload = function () {
        this.isViewLoaded = false;
        if (this.map) {
            this.map.clear();
            this.map.setZoom(1);
            this.map.setCenter(new LatLng(0, 0));
        }
    };
    AddPlacePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isViewLoaded = true;
        Category.load().then(function (categories) {
            _this.categories = categories;
        });
        if (this.platform.is('cordova')) {
            this.map = new GoogleMap('map_add', {
                styles: MapStyle.dark(),
                backgroundColor: '#333333'
            });
            var markerOptions = {
                position: new LatLng(0, 0),
                icon: 'yellow'
            };
            this.map.addMarker(markerOptions).then(function (marker) {
                _this.marker = marker;
            });
            this.map.one(GoogleMapsEvent.MAP_READY);
            this.map.setMyLocationEnabled(true);
            this.map.on(GoogleMapsEvent.MY_LOCATION_BUTTON_CLICK).subscribe(function (map) {
                if (_this.isViewLoaded) {
                    _this.map.getCameraPosition().then(function (camera) {
                        var target = camera.target;
                        _this.marker.setPosition(target);
                    });
                }
            });
            this.map.on(GoogleMapsEvent.CAMERA_CHANGE).subscribe(function (camera) {
                _this.marker.setPosition(camera.target);
            });
        }
    };
    AddPlacePage.prototype.onSearchAddress = function (event) {
        var _this = this;
        var query = event.target.value;
        var request = {
            address: query
        };
        var geocoder = new Geocoder;
        geocoder.geocode(request).then(function (results) {
            // create LatLng object
            var target = new LatLng(results[0].position.lat, results[0].position.lng);
            // create CameraPosition
            var position = {
                target: target,
                zoom: 10
            };
            // move the map camera to position
            _this.map.moveCamera(position);
            // update marker position
            _this.marker.setPosition(target);
        });
    };
    AddPlacePage.prototype.chooseImage = function (sourceType) {
        var _this = this;
        var options = {
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 80,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.showLoadingView();
            ParseFile.upload(imageData).then(function (file) {
                _this.place.image = file;
                _this.showContentView();
                _this.showToast(_this.trans.FILE_UPLOADED);
            }, function (error) {
                _this.showContentView();
                _this.showToast(_this.trans.ERROR_FILE_UPLOAD);
            });
        });
    };
    AddPlacePage.prototype.onUpload = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.trans.CHOOSE_AN_OPTION,
            buttons: [{
                    text: this.trans.PHOTO_LIBRARY,
                    handler: function () {
                        _this.chooseImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: this.trans.CAMERA,
                    handler: function () {
                        _this.chooseImage(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: this.trans.CANCEL,
                    role: 'cancel'
                }]
        });
        actionSheet.present();
    };
    AddPlacePage.prototype.onSubmit = function () {
        var _this = this;
        this.place.title = this.form.value.name;
        this.place.category = this.form.value.category;
        this.place.description = this.form.value.description;
        this.place.address = this.form.value.address;
        this.place.website = this.form.value.website;
        this.place.phone = this.form.value.phone;
        this.showLoadingView();
        this.marker.getPosition().then(function (position) {
            _this.place.location = position;
            _this.place.save().then(function (place) {
                _this.showContentView();
                _this.translate.get('PLACE_ADDED').subscribe(function (str) { return _this.showToast(str); });
            }, function (error) {
                _this.showContentView();
                _this.translate.get('ERROR_PLACE_ADD').subscribe(function (str) { return _this.showToast(str); });
            });
        });
    };
    return AddPlacePage;
}(BasePage));
AddPlacePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-add-place-page',
        templateUrl: 'add-place-page.html'
    }),
    __metadata("design:paramtypes", [Injector,
        FormBuilder,
        Platform,
        Place,
        GoogleMaps,
        Camera,
        Events,
        ActionSheetController])
], AddPlacePage);
export { AddPlacePage };
//# sourceMappingURL=add-place-page.js.map