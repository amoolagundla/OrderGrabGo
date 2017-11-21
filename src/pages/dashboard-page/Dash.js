/// <reference path="../../providers/shareddataservice.ts" />
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
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
var DashPage = (function (_super) {
    __extends(DashPage, _super);
    function DashPage(injector, _barcodeScanner) {
        var _this = _super.call(this, injector) || this;
        _this._barcodeScanner = _barcodeScanner;
        _this.qrData = null;
        _this.createdCode = null;
        _this.scannedCode = null;
        _this.user = _this.userInfo;
        _this.firstName = 'OrderGrabGo';
        _this.scannedObject = '';
        _this.scanData = false;
        _this.sharedData.UserInfo.subscribe(function (data) {
            if (data.FirstName != undefined) {
                _this.user = data;
                _this.userInfo = _this.user;
                _this.firstName = 'Hello ' + _this.userInfo.FirstName;
            }
        });
        return _this;
    }
    DashPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    DashPage.prototype.onFilter = function (filter) {
    };
    DashPage.prototype.qrCodeScan = function () {
        var _this = this;
        this._barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedObject = barcodeData.text;
        }, function (err) {
            console.log(err);
        });
    };
	
    DashPage.prototype.login = function () {
		debugger;
        this.navigateTo('RestaurentPage');
    };
    return DashPage;
}(BasePage));
DashPage = __decorate([
    IonicPage(),
    Component({
        selector: 'Dash',
        templateUrl: 'Dash.html'
    }),
    __metadata("design:paramtypes", [Injector, BarcodeScanner])
], DashPage);
export { DashPage };
//# sourceMappingURL=Dash.js.map