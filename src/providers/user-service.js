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
var User = User_1 = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this, '_User') || this;
    }
    User.getInstance = function () {
        return this;
    };
    User.getCurrentUser = function () {
        return Parse.User.current();
    };
    User.create = function (data) {
        return new Promise(function (resolve, reject) {
            var user = new User_1();
            data.username = data.email;
            user.save(data).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.signIn = function (data) {
        return new Promise(function (resolve, reject) {
            Parse.User.logIn(data.email, data.password).then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.logout = function () {
        return new Promise(function (resolve, reject) {
            Parse.User.logOut().then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.recoverPassword = function (email) {
        return new Promise(function (resolve, reject) {
            Parse.User.requestPasswordReset(email).then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.save = function (data) {
        return new Promise(function (resolve, reject) {
            var user = User_1.getCurrentUser();
            user.save(data).then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.stats = function () {
        return new Promise(function (resolve, reject) {
            Parse.Cloud.run('getUserStats').then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.get('name');
        },
        set: function (val) {
            this.set('name', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this.get('email');
        },
        set: function (val) {
            this.set('email', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this.get('username');
        },
        set: function (val) {
            this.set('username', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.get('password');
        },
        set: function (val) {
            this.set('password', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "photo", {
        get: function () {
            return this.get('photo');
        },
        set: function (val) {
            this.set('photo', val);
        },
        enumerable: true,
        configurable: true
    });
    return User;
}(Parse.User));
User = User_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], User);
export { User };
Parse.Object.registerSubclass('User', User);
var User_1;
//# sourceMappingURL=user-service.js.map