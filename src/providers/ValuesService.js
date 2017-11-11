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
import 'rxjs/add/operator/map';
import { HttpClient } from './HttpClient';
import 'rxjs/add/operator/mergeMap';
var ValuesService = (function () {
    function ValuesService(http) {
        this.http = http;
    }
    ValuesService.prototype.login = function (userName, Password) {
        return this.http.login(userName, Password).map(function (response) { return response; });
    };
    ValuesService.prototype.CheckLocation = function (start, end) {
        return this.http
            .get('api/ads/GetPlaces/' + start + '/' + end).map(function (response) { return response.json(); });
    };
    ValuesService.prototype.Register = function (user) {
        return this.http.post('api/Account/Registers', user).map(function (response) { return response; });
    };
    return ValuesService;
}());
ValuesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ValuesService);
export { ValuesService };
//# sourceMappingURL=ValuesService.js.map