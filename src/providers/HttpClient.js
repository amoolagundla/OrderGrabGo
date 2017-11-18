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
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
var HttpClient = (function () {
    function HttpClient(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseurl = 'https://localhost:44395/';
    }
    HttpClient.prototype.enableMenuSwipe = function () {
        return false;
    };
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        this.storage.get('token').then(function (token) {
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Bearer ' + token);
            return headers;
        });
    };
    HttpClient.prototype.getApiToken = function () {
        var headers = new Headers();
        return Observable.fromPromise(this.storage.get('token').then(function (token) {
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Bearer ' + token);
            return headers;
        }, function (error) {
            return headers;
        }));
    };
    HttpClient.prototype.getHeaders = function () {
        return new Headers();
    };
    HttpClient.prototype.get = function (url) {
        var _this = this;
        return this.getApiToken().flatMap(function (head) {
            return _this.http.get(_this.baseurl + url, {
                headers: head
            });
        });
    };
    HttpClient.prototype.delete = function (url) {
        var _this = this;
        return this.getApiToken().flatMap(function (head) {
            return _this.http.delete(_this.baseurl + url, {
                headers: head
            });
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var _this = this;
        return this.getApiToken().flatMap(function (head) {
            return _this.http.post(_this.baseurl + url, data, {
                headers: head
            });
        });
    };
    HttpClient.prototype.put = function (url, data) {
        var _this = this;
        return this.getApiToken().flatMap(function (head) {
            return _this.http.put(_this.baseurl + url, data, {
                headers: head
            });
        });
    };
    HttpClient.prototype.login = function (userName, password) {
        var url = "Token";
        var body = "username=" + userName + "&password=" + password + "&grant_type=password";
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // let options = new RequestOptions({ headers: headers });        
        return this.http.post(this.baseurl + url, body, { headers: headers });
    };
    HttpClient.prototype.RegisterExternalLogin = function (token, email, url) {
        var headers = new Headers();
        var data = {
            Email: email
        };
        headers.append('Authorization', 'Bearer ' + token);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + url, JSON.stringify(data), {
            headers: headers
        });
    };
    return HttpClient;
}());
HttpClient = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Storage])
], HttpClient);
export { HttpClient };
//# sourceMappingURL=HttpClient.js.map