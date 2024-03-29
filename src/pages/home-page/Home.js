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
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(injector) {
        return _super.call(this, injector) || this;
    }
    HomePage.prototype.enableMenuSwipe = function () {
        return true;
    };
    return HomePage;
}(BasePage));
HomePage = __decorate([
    IonicPage(),
    Component({
        selector: 'home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [Injector])
], HomePage);
export { HomePage };
//# sourceMappingURL=Home.js.map