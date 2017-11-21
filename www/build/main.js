webpackJsonp([15],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_models__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedDataService = (function () {
    function SharedDataService() {
        this.UserInfo = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_1__models_models__["a" /* App */].UserInfoViewModel());
    }
    SharedDataService.prototype.USerInfoChanged = function (newData) {
        console.log(newData);
        this.UserInfo.next(newData);
    };
    return SharedDataService;
}());
SharedDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SharedDataService);

//# sourceMappingURL=SharedDataService.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorage = (function () {
    function LocalStorage(storage) {
        this.storage = storage;
    }
    Object.defineProperty(LocalStorage.prototype, "skipIntroPage", {
        get: function () {
            return this.storage.get('skipIntroPage');
        },
        set: function (val) {
            this.storage.set('skipIntroPage', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "unit", {
        get: function () {
            return this.storage.get('unit');
        },
        set: function (val) {
            this.storage.set('unit', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "mapStyle", {
        get: function () {
            return this.storage.get('mapStyle');
        },
        set: function (val) {
            this.storage.set('mapStyle', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "distance", {
        get: function () {
            return this.storage.get('distance');
        },
        set: function (val) {
            this.storage.set('distance', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "lang", {
        get: function () {
            return this.storage.get('lang');
        },
        set: function (val) {
            this.storage.set('lang', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "token", {
        get: function () {
            return this.storage.get('token');
        },
        set: function (val) {
            this.storage.set('token', val);
        },
        enumerable: true,
        configurable: true
    });
    LocalStorage.prototype.RemoveToken = function () {
        return this.storage.remove('token');
    };
    return LocalStorage;
}());
LocalStorage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], LocalStorage);

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpClient__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SharedDataService__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ValuesService = (function () {
    function ValuesService(http, shared) {
        this.http = http;
        this.shared = shared;
    }
    ValuesService.prototype.login = function (userName, Password) {
        return this.http.login(userName, Password).map(function (response) { return response; });
    };
    ValuesService.prototype.CheckLocation = function (start, end) {
        return this.http
            .get('api/ads/GetPlaces/' + start + '/' + end).map(function (response) { return response.json(); });
    };
    ValuesService.prototype.GetPlacesWithZomato = function (start, end) {
        return this.http
            .get('api/ads/GetPlaceswithzomato/' + start + '/' + end).map(function (response) { return response.json(); });
    };
    ValuesService.prototype.FindCuisineWithZomato = function (start, end) {
        return this.http
            .get('api/ads/FindCuisineWithZomato/' + start + '/' + end).map(function (response) { return response.json(); });
    };
    ValuesService.prototype.FindplcaesWithCuinesSelected = function (start, end, dat) {
        var jdata = {
            "lat": start,
            "log": end,
            "cuisineIdList": dat
        };
        var resdata = this.http.post('api/ads/FindplcaesWithCuinesSelected/', jdata).map(function (response) { return response.json(); });
        return resdata;
    };
    ValuesService.prototype.GetUserInfo = function () {
        var _this = this;
        this.http
            .get('api/user/').map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.shared.USerInfoChanged(data);
        }, function (error) {
        });
        ;
    };
    ValuesService.prototype.googlelogin = function (user) {
        var token = {
            AccessToken: user
        };
        return this.http.post('api/FacebookApi/GoogleLogin/', token).map(function (response) { return response.json(); });
    };
    ValuesService.prototype.FacebookLogin = function (token) {
        return this.http.get('api/FacebookApi/Login/' + token).map(function (response) { return response.json(); });
    };
    ValuesService.prototype.Register = function (user) {
        return this.http.post('api/Account/Registers', user).map(function (response) { return response.json(); });
    };
    return ValuesService;
}());
ValuesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__HttpClient__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__HttpClient__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__SharedDataService__["a" /* SharedDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__SharedDataService__["a" /* SharedDataService */]) === "function" && _b || Object])
], ValuesService);

var _a, _b;
//# sourceMappingURL=ValuesService.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Preference = (function () {
    function Preference() {
    }
    Object.defineProperty(Preference.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        set: function (val) {
            this._unit = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "mapStyle", {
        get: function () {
            return this._mapStyle;
        },
        set: function (val) {
            this._mapStyle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (val) {
            this._distance = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (val) {
            this._lang = val;
        },
        enumerable: true,
        configurable: true
    });
    return Preference;
}());
Preference = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Preference);

//# sourceMappingURL=preference.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var User = User_1 = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this, '_User') || this;
    }
    User.getInstance = function () {
        return this;
    };
    User.getCurrentUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current();
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
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.logIn(data.email, data.password).then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.logout = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.logOut().then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.recoverPassword = function (email) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.requestPasswordReset(email).then(function (success) {
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
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('getUserStats').then(function (data) { return resolve(data); }, function (error) { return reject(error); });
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
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User));
User = User_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], User);

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('User', User);
var User_1;
//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categories/categories.module": [
		793,
		11
	],
	"../pages/dashboard-page/Dash.module": [
		794,
		10
	],
	"../pages/favorites-page/favorites-page.module": [
		795,
		9
	],
	"../pages/filter/filter.module": [
		796,
		14
	],
	"../pages/home-page/Home.module": [
		797,
		8
	],
	"../pages/map-page/map-page.module": [
		798,
		2
	],
	"../pages/parking/parking.module": [
		799,
		13
	],
	"../pages/place-detail-page/place-detail-page.module": [
		800,
		7
	],
	"../pages/places/places.module": [
		801,
		6
	],
	"../pages/profile-page/profile-page.module": [
		802,
		5
	],
	"../pages/restaurent-landing/restaurent.module": [
		803,
		4
	],
	"../pages/reviews-page/reviews-page.module": [
		804,
		3
	],
	"../pages/sign-in-page/sign-in-page.module": [
		805,
		1
	],
	"../pages/sign-up-page/sign-up-page.module": [
		806,
		0
	],
	"../pages/walkthrough-page/walkthrough-page.module": [
		807,
		12
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 272;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpClient = (function () {
    function HttpClient(http, storage) {
        this.http = http;
        this.storage = storage;
        //public baseurl:any ='https://localhost:44395/';
        this.baseurl = 'http://ordergrabngo.azurewebsites.net/';
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(this.storage.get('token').then(function (token) {
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', 'Bearer ' + token);
            return headers;
        }, function (error) {
            return headers;
        }));
    };
    HttpClient.prototype.getHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // let options = new RequestOptions({ headers: headers });        
        return this.http.post(this.baseurl + url, body, { headers: headers });
    };
    HttpClient.prototype.RegisterExternalLogin = function (token, email, url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], HttpClient);

//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Place = (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super.call(this, 'Place') || this;
    }
    Place.prototype.distance = function (location, unit) {
        if (!location) {
            return null;
        }
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
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
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likePlace', { placeId: place.id }).then(function (data) {
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
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            var subQuery = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            var subQueryTwo = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            subQuery.greaterThan('expiresAt', new Date());
            subQueryTwo.doesNotExist('expiresAt');
            query = __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query.or(subQuery, subQueryTwo);
            query.include('category');
            query.equalTo('isApproved', true);
            if (params.category) {
                query.equalTo('category', params.category);
            }
            if (params.search && params.search !== '') {
                query.contains('canonical', params.search);
            }
            if (params.location) {
                var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
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
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('isApproved', true);
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Place.create = function (data) {
        return new Promise(function (resolve, reject) {
            var place = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object('Place');
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
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
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
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));
Place = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Place);

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Place', Place);
//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapStyle = (function () {
    function MapStyle() {
    }
    // See more styles on https://snazzymaps.com/
    MapStyle.dark = function () {
        return [{ "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#e5c163" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#c4c4c4" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#e5c163" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }, { "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "geometry", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#e5c163" }, { "lightness": "0" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "color": "#e5c163" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#575757" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [{ "color": "#2c2c2c" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#999999" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }];
    };
    MapStyle.light = function () {
        return [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#fcfcfc" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#fcfcfc" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#dddddd" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#dddddd" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#eeeeee" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#dddddd" }] }];
    };
    MapStyle.midnight = function () {
        return [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }, { "weight": "0.20" }, { "lightness": "28" }, { "saturation": "23" }, { "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#494949" }, { "lightness": 13 }, { "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#08304b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "color": "#146474" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#021019" }] }];
    };
    return MapStyle;
}());
MapStyle = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MapStyle);

//# sourceMappingURL=map-style.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
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
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));
Review = Review_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Review);

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Review', Review);
var Review_1;
//# sourceMappingURL=review-service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpClient__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ValuesService__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_categories__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_place_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_review_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_parse_file_service__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_local_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_preference__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_map_style__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_SharedDataService__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_diagnostic__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_location_accuracy__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_version__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_header_color__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_google_analytics__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_browser_tab__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_img_fallback__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_img_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng2_img_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng_lazyload_image__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ionic2_rating__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ngx_translate_http_loader__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_facebook__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_toast__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_35__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard-page/Dash.module#DashPageModule', name: 'DashPage', segment: 'Dash', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites-page/favorites-page.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-page/Home.module#HomePageModule', name: 'HomePage', segment: 'Home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map-page/map-page.module#MapPageModule', name: 'MapPage', segment: 'map-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/parking/parking.module#ParkingPageModule', name: 'ParkingPage', segment: 'parking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/place-detail-page/place-detail-page.module#PlaceDetailPageModule', name: 'PlaceDetailPage', segment: 'place-detail-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile-page/profile-page.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/restaurent-landing/restaurent.module#RestaurentPageModule', name: 'RestaurentPage', segment: 'restaurent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reviews-page/reviews-page.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-in-page/sign-in-page.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up-page/sign-up-page.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/walkthrough-page/walkthrough-page.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough-page', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_31_ng2_img_fallback__["Ng2ImgFallbackModule"],
            __WEBPACK_IMPORTED_MODULE_32_ng_lazyload_image__["LazyLoadImageModule"],
            __WEBPACK_IMPORTED_MODULE_33_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_36__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_36__angular_http__["b" /* Http */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_categories__["a" /* Category */], __WEBPACK_IMPORTED_MODULE_7__providers_place_service__["a" /* Place */], __WEBPACK_IMPORTED_MODULE_9__providers_parse_file_service__["a" /* ParseFile */], __WEBPACK_IMPORTED_MODULE_8__providers_review_service__["a" /* Review */], __WEBPACK_IMPORTED_MODULE_11__providers_local_storage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_10__providers_user_service__["a" /* User */], __WEBPACK_IMPORTED_MODULE_4__providers_HttpClient__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_ValuesService__["a" /* ValuesService */], __WEBPACK_IMPORTED_MODULE_14__providers_SharedDataService__["a" /* SharedDataService */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_header_color__["a" /* HeaderColor */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_browser_tab__["a" /* BrowserTab */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_12__providers_preference__["a" /* Preference */], __WEBPACK_IMPORTED_MODULE_13__providers_map_style__["a" /* MapStyle */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_toast__["a" /* Toast */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
//*************************DO NOT MODIFY**************************
var App;
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Ads
     */
    var Ads = (function () {
        function Ads() {
            //nothing                   
        }
        return Ads;
    }());
    App.Ads = Ads;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.AspNetRoleClaims
     */
    var AspNetRoleClaims = (function () {
        function AspNetRoleClaims() {
            //nothing                   
        }
        return AspNetRoleClaims;
    }());
    App.AspNetRoleClaims = AspNetRoleClaims;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.AspNetRoles
     */
    var AspNetRoles = (function () {
        function AspNetRoles() {
            //nothing                   
        }
        return AspNetRoles;
    }());
    App.AspNetRoles = AspNetRoles;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.AspNetUserClaims
     */
    var AspNetUserClaims = (function () {
        function AspNetUserClaims() {
            //nothing                   
        }
        return AspNetUserClaims;
    }());
    App.AspNetUserClaims = AspNetUserClaims;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.AspNetUserLogins
     */
    var AspNetUserLogins = (function () {
        function AspNetUserLogins() {
            //nothing                   
        }
        return AspNetUserLogins;
    }());
    App.AspNetUserLogins = AspNetUserLogins;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.AspNetUserRoles
     */
    var AspNetUserRoles = (function () {
        function AspNetUserRoles() {
            //nothing                   
        }
        return AspNetUserRoles;
    }());
    App.AspNetUserRoles = AspNetUserRoles;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.AspNetUsers
     */
    var AspNetUsers = (function () {
        function AspNetUsers() {
            //nothing                   
        }
        return AspNetUsers;
    }());
    App.AspNetUsers = AspNetUsers;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.AspNetUserTokens
     */
    var AspNetUserTokens = (function () {
        function AspNetUserTokens() {
            //nothing                   
        }
        return AspNetUserTokens;
    }());
    App.AspNetUserTokens = AspNetUserTokens;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.BusinessType
     */
    var BusinessType = (function () {
        function BusinessType() {
            //nothing                   
        }
        return BusinessType;
    }());
    App.BusinessType = BusinessType;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ManageViewModels.ChangePasswordViewModel
     */
    var ChangePasswordViewModel = (function () {
        function ChangePasswordViewModel() {
            //nothing                   
        }
        return ChangePasswordViewModel;
    }());
    App.ChangePasswordViewModel = ChangePasswordViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.ChartOfAccounts
     */
    var ChartOfAccounts = (function () {
        function ChartOfAccounts() {
            //nothing                   
        }
        return ChartOfAccounts;
    }());
    App.ChartOfAccounts = ChartOfAccounts;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Contactme
     */
    var Contactme = (function () {
        function Contactme() {
            //nothing                   
        }
        return Contactme;
    }());
    App.Contactme = Contactme;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.CreditCardTransactionInfo
     */
    var CreditCardTransactionInfo = (function () {
        function CreditCardTransactionInfo() {
            //nothing                   
        }
        return CreditCardTransactionInfo;
    }());
    App.CreditCardTransactionInfo = CreditCardTransactionInfo;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Creditnewcks
     */
    var Creditnewcks = (function () {
        function Creditnewcks() {
            //nothing                   
        }
        return Creditnewcks;
    }());
    App.Creditnewcks = Creditnewcks;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Credittypes
     */
    var Credittypes = (function () {
        function Credittypes() {
            //nothing                   
        }
        return Credittypes;
    }());
    App.Credittypes = Credittypes;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Departments
     */
    var Departments = (function () {
        function Departments() {
            //nothing                   
        }
        return Departments;
    }());
    App.Departments = Departments;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Emails
     */
    var Emails = (function () {
        function Emails() {
            //nothing                   
        }
        return Emails;
    }());
    App.Emails = Emails;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Emailstosend
     */
    var Emailstosend = (function () {
        function Emailstosend() {
            //nothing                   
        }
        return Emailstosend;
    }());
    App.Emailstosend = Emailstosend;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Employees
     */
    var Employees = (function () {
        function Employees() {
            //nothing                   
        }
        return Employees;
    }());
    App.Employees = Employees;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ManageViewModels.EnableAuthenticatorViewModel
     */
    var EnableAuthenticatorViewModel = (function () {
        function EnableAuthenticatorViewModel() {
            //nothing                   
        }
        return EnableAuthenticatorViewModel;
    }());
    App.EnableAuthenticatorViewModel = EnableAuthenticatorViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ErrorViewModel
     */
    var ErrorList = (function () {
        function ErrorList() {
            //nothing                   
        }
        return ErrorList;
    }());
    App.ErrorList = ErrorList;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ErrorViewModel
     */
    var ErrorViewModel = (function () {
        function ErrorViewModel() {
            //nothing                   
        }
        return ErrorViewModel;
    }());
    App.ErrorViewModel = ErrorViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.AccountViewModels.ExternalLoginViewModel
     */
    var ExternalLoginViewModel = (function () {
        function ExternalLoginViewModel() {
            //nothing                   
        }
        return ExternalLoginViewModel;
    }());
    App.ExternalLoginViewModel = ExternalLoginViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.FacebookAppAccess
     */
    var FacebookAppAccess = (function () {
        function FacebookAppAccess() {
            //nothing                   
        }
        return FacebookAppAccess;
    }());
    App.FacebookAppAccess = FacebookAppAccess;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.FacebookOptions
     */
    var FacebookOptions = (function () {
        function FacebookOptions() {
            //nothing                   
        }
        return FacebookOptions;
    }());
    App.FacebookOptions = FacebookOptions;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Favs
     */
    var Favs = (function () {
        function Favs() {
            //nothing                   
        }
        return Favs;
    }());
    App.Favs = Favs;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.AccountViewModels.ForgotPasswordViewModel
     */
    var ForgotPasswordViewModel = (function () {
        function ForgotPasswordViewModel() {
            //nothing                   
        }
        return ForgotPasswordViewModel;
    }());
    App.ForgotPasswordViewModel = ForgotPasswordViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Forgotsent
     */
    var Forgotsent = (function () {
        function Forgotsent() {
            //nothing                   
        }
        return Forgotsent;
    }());
    App.Forgotsent = Forgotsent;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ManageViewModels.GenerateRecoveryCodesViewModel
     */
    var GenerateRecoveryCodesViewModel = (function () {
        function GenerateRecoveryCodesViewModel() {
            //nothing                   
        }
        return GenerateRecoveryCodesViewModel;
    }());
    App.GenerateRecoveryCodesViewModel = GenerateRecoveryCodesViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.Geometry
     */
    var Geometry = (function () {
        function Geometry() {
            //nothing                   
        }
        return Geometry;
    }());
    App.Geometry = Geometry;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.GoogleApi
     */
    var GoogleApi = (function () {
        function GoogleApi() {
            //nothing                   
        }
        return GoogleApi;
    }());
    App.GoogleApi = GoogleApi;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.GooglePlaces
     */
    var GooglePlaces = (function () {
        function GooglePlaces() {
            //nothing                   
        }
        return GooglePlaces;
    }());
    App.GooglePlaces = GooglePlaces;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ManageViewModels.IndexViewModel
     */
    var IndexViewModel = (function () {
        function IndexViewModel() {
            //nothing                   
        }
        return IndexViewModel;
    }());
    App.IndexViewModel = IndexViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Invites
     */
    var Invites = (function () {
        function Invites() {
            //nothing                   
        }
        return Invites;
    }());
    App.Invites = Invites;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.Location
     */
    var Location = (function () {
        function Location() {
            //nothing                   
        }
        return Location;
    }());
    App.Location = Location;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.LoginInputModel
     */
    var LoginInputModel = (function () {
        function LoginInputModel() {
            //nothing                   
        }
        return LoginInputModel;
    }());
    App.LoginInputModel = LoginInputModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.AccountViewModels.LoginViewModel
     */
    var LoginViewModel = (function () {
        function LoginViewModel() {
            //nothing                   
        }
        return LoginViewModel;
    }());
    App.LoginViewModel = LoginViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.AccountViewModels.LoginWith2faViewModel
     */
    var LoginWith2faViewModel = (function () {
        function LoginWith2faViewModel() {
            //nothing                   
        }
        return LoginWith2faViewModel;
    }());
    App.LoginWith2faViewModel = LoginWith2faViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.AccountViewModels.LoginWithRecoveryCodeViewModel
     */
    var LoginWithRecoveryCodeViewModel = (function () {
        function LoginWithRecoveryCodeViewModel() {
            //nothing                   
        }
        return LoginWithRecoveryCodeViewModel;
    }());
    App.LoginWithRecoveryCodeViewModel = LoginWithRecoveryCodeViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Masterbank
     */
    var Masterbank = (function () {
        function Masterbank() {
            //nothing                   
        }
        return Masterbank;
    }());
    App.Masterbank = Masterbank;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Masterlookup
     */
    var Masterlookup = (function () {
        function Masterlookup() {
            //nothing                   
        }
        return Masterlookup;
    }());
    App.Masterlookup = Masterlookup;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Msgsglobal
     */
    var Msgsglobal = (function () {
        function Msgsglobal() {
            //nothing                   
        }
        return Msgsglobal;
    }());
    App.Msgsglobal = Msgsglobal;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.Northeast
     */
    var Northeast = (function () {
        function Northeast() {
            //nothing                   
        }
        return Northeast;
    }());
    App.Northeast = Northeast;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.OpeningHours
     */
    var OpeningHours = (function () {
        function OpeningHours() {
            //nothing                   
        }
        return OpeningHours;
    }());
    App.OpeningHours = OpeningHours;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.Photo
     */
    var Photo = (function () {
        function Photo() {
            //nothing                   
        }
        return Photo;
    }());
    App.Photo = Photo;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Punchclock
     */
    var Punchclock = (function () {
        function Punchclock() {
            //nothing                   
        }
        return Punchclock;
    }());
    App.Punchclock = Punchclock;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.PushNotifications
     */
    var PushNotifications = (function () {
        function PushNotifications() {
            //nothing                   
        }
        return PushNotifications;
    }());
    App.PushNotifications = PushNotifications;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.AccountViewModels.RegisterViewModel
     */
    var RegisterViewModel = (function () {
        function RegisterViewModel() {
            //nothing                   
        }
        return RegisterViewModel;
    }());
    App.RegisterViewModel = RegisterViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ManageViewModels.RemoveLoginViewModel
     */
    var RemoveLoginViewModel = (function () {
        function RemoveLoginViewModel() {
            //nothing                   
        }
        return RemoveLoginViewModel;
    }());
    App.RemoveLoginViewModel = RemoveLoginViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.AccountViewModels.ResetPasswordViewModel
     */
    var ResetPasswordViewModel = (function () {
        function ResetPasswordViewModel() {
            //nothing                   
        }
        return ResetPasswordViewModel;
    }());
    App.ResetPasswordViewModel = ResetPasswordViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.Result
     */
    var Result = (function () {
        function Result() {
            //nothing                   
        }
        return Result;
    }());
    App.Result = Result;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.RuntimeAds
     */
    var RuntimeAds = (function () {
        function RuntimeAds() {
            //nothing                   
        }
        return RuntimeAds;
    }());
    App.RuntimeAds = RuntimeAds;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ManageViewModels.SetPasswordViewModel
     */
    var SetPasswordViewModel = (function () {
        function SetPasswordViewModel() {
            //nothing                   
        }
        return SetPasswordViewModel;
    }());
    App.SetPasswordViewModel = SetPasswordViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.SmsSettings
     */
    var SmsSettings = (function () {
        function SmsSettings() {
            //nothing                   
        }
        return SmsSettings;
    }());
    App.SmsSettings = SmsSettings;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.Southwest
     */
    var Southwest = (function () {
        function Southwest() {
            //nothing                   
        }
        return Southwest;
    }());
    App.Southwest = Southwest;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Taccounts
     */
    var Taccounts = (function () {
        function Taccounts() {
            //nothing                   
        }
        return Taccounts;
    }());
    App.Taccounts = Taccounts;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Tests
     */
    var Tests = (function () {
        function Tests() {
            //nothing                   
        }
        return Tests;
    }());
    App.Tests = Tests;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Testsqa
     */
    var Testsqa = (function () {
        function Testsqa() {
            //nothing                   
        }
        return Testsqa;
    }());
    App.Testsqa = Testsqa;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Tnews
     */
    var Tnews = (function () {
        function Tnews() {
            //nothing                   
        }
        return Tnews;
    }());
    App.Tnews = Tnews;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Tuuid
     */
    var Tuuid = (function () {
        function Tuuid() {
            //nothing                   
        }
        return Tuuid;
    }());
    App.Tuuid = Tuuid;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Tvideos
     */
    var Tvideos = (function () {
        function Tvideos() {
            //nothing                   
        }
        return Tvideos;
    }());
    App.Tvideos = Tvideos;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.ManageViewModels.TwoFactorAuthenticationViewModel
     */
    var TwoFactorAuthenticationViewModel = (function () {
        function TwoFactorAuthenticationViewModel() {
            //nothing                   
        }
        return TwoFactorAuthenticationViewModel;
    }());
    App.TwoFactorAuthenticationViewModel = TwoFactorAuthenticationViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.UserInfoViewModel
     */
    var UserInfoViewModel = (function () {
        function UserInfoViewModel() {
            //nothing                   
        }
        return UserInfoViewModel;
    }());
    App.UserInfoViewModel = UserInfoViewModel;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Web.Models.Viewport
     */
    var Viewport = (function () {
        function Viewport() {
            //nothing                   
        }
        return Viewport;
    }());
    App.Viewport = Viewport;
})(App || (App = {}));
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
(function (App) {
    /**
     * Base view model for OrderGrabGo.Dll.Models.Ziplist
     */
    var Ziplist = (function () {
        function Ziplist() {
            //nothing                   
        }
        return Ziplist;
    }());
    App.Ziplist = Ziplist;
})(App || (App = {}));
//# sourceMappingURL=models.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_ValuesService__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_local_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_preference__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_SharedDataService__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, events, storage, translate, toastCtrl, preference, statusBar, splashScreen, googleAnalytics, headerColor, modalCtrl, shared, _shared) {
        this.platform = platform;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.preference = preference;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.googleAnalytics = googleAnalytics;
        this.headerColor = headerColor;
        this.modalCtrl = modalCtrl;
        this.shared = shared;
        this._shared = _shared;
        this.initializeApp();
        this.shared.GetUserInfo();
    }
    MyApp.prototype.onMenuOpened = function () {
        this.events.publish('onMenuOpened');
    };
    MyApp.prototype.onMenuClosed = function () {
        this.events.publish('onMenuClosed');
    };
    MyApp.prototype.buildMenu = function () {
        var _this = this;
        var trans = ['CATEGORIES', 'MAP', 'ADD_PLACE', 'MY_FAVORITES',
            'SETTINGS', 'LOGOUT', 'LOGGED_OUT', 'PROFILE'];
        this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
            _this.pages = [
                { title: values.CATEGORIES, icon: 'pricetag', component: 'DashPage' },
                { title: values.SETTINGS, icon: 'settings', component: 'SettingsPage' }
            ];
            _this.pages.push({ title: values.PROFILE, icon: 'contact', component: 'ProfilePage' });
            _this.pages.push({ title: values.LOGOUT, icon: 'exit', component: 'SignInPage' });
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this._shared.UserInfo.subscribe(function (data) {
            if (data.FirstName != undefined) {
                _this.user = data;
            }
        });
        this.events.subscribe('user:login', function (userEventData) {
            _this.user = userEventData[0];
            _this.buildMenu();
        });
        this.events.subscribe('user:logout', function () {
            _this.user = null;
            _this.buildMenu();
        });
        this.events.subscribe('lang:change', function (e) {
            _this.buildMenu();
        });
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_LANG);
        this.storage.lang.then(function (val) {
            var lang = val || __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_LANG;
            _this.translate.use(lang);
            _this.storage.lang = lang;
            _this.preference.lang = lang;
            _this.storage.skipIntroPage.then(function (skipIntroPage) {
                if (skipIntroPage) {
                    _this.storage.token.then(function (token) {
                        if (token != null && token != "") {
                            _this.shared.GetUserInfo();
                            _this.rootPage = 'DashPage';
                        }
                        else {
                            _this.rootPage = 'SignInPage';
                        }
                    }, function (error) { _this.rootPage = 'SignInPage'; });
                }
            }).catch(function (e) { return console.log(e); });
            _this.storage.skipIntroPage.then(function (skipIntroPage) {
                _this.rootPage = skipIntroPage ? 'SignInPage' : 'HomePage';
            }).catch(function (e) { return console.log(e); });
            _this.buildMenu();
        }).catch(function (e) { return console.log(e); });
        this.storage.unit.then(function (val) {
            var unit = val || __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_UNIT;
            _this.storage.unit = unit;
            _this.preference.unit = unit;
        }).catch(function (e) { return console.log(e); });
        this.storage.mapStyle.then(function (val) {
            var mapStyle = val || __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_MAP_STYLE;
            _this.storage.mapStyle = mapStyle;
            _this.preference.mapStyle = mapStyle;
        }).catch(function (e) { return console.log(e); });
        __WEBPACK_IMPORTED_MODULE_6_parse___default.a.serverURL = __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].SERVER_URL;
        __WEBPACK_IMPORTED_MODULE_6_parse___default.a.initialize(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].APP_ID);
        __WEBPACK_IMPORTED_MODULE_10__providers_user_service__["a" /* User */].getInstance();
        this.user = __WEBPACK_IMPORTED_MODULE_10__providers_user_service__["a" /* User */].getCurrentUser();
        if (this.user) {
            this.user.fetch();
        }
        this.platform.ready().then(function () {
            if (__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].TRACKING_ID) {
                _this.googleAnalytics.startTrackerWithId(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].TRACKING_ID);
                _this.googleAnalytics.trackEvent('', 'App opened');
                _this.googleAnalytics.debugMode();
                _this.googleAnalytics.enableUncaughtExceptionReporting(true);
            }
            if (__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR && _this.platform.is('android')) {
                _this.headerColor.tint(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR);
            }
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage') && !__WEBPACK_IMPORTED_MODULE_10__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.nav.push('SignInPage');
        }
        else if (page.component === null && __WEBPACK_IMPORTED_MODULE_10__providers_user_service__["a" /* User */].getCurrentUser()) {
            __WEBPACK_IMPORTED_MODULE_10__providers_user_service__["a" /* User */].logout().then(function (success) {
                var toast = _this.toastCtrl.create({
                    message: _this.trans.LOGGED_OUT,
                    duration: 3000
                });
                toast.present();
                _this.user = null;
                _this.buildMenu();
            }, function (error) { return console.log(error); });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\OrderGRabGo\branches\Refreshed_Branch\src\app\app.html"*/'<ion-menu [content]="content" (ionOpen)="onMenuOpened()" (ionClose)="onMenuClosed()">\n  <ion-header>\n    <ion-toolbar class="menu-toolbar" color="dark">\n      <ion-item no-lines *ngIf="user">\n        <ion-avatar>\n          <img [src]="user.picture" src-fallback="assets/img/avatar.png" />\n        </ion-avatar>\n        <span>{{ user.FirstName }}</span>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="bold" menuClose text-uppercase no-lines ion-item\n        *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left color="primary"></ion-icon>\n        <p ion-text color="primary">\n          {{ p.title }}\n        </p>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\OrderGRabGo\branches\Refreshed_Branch\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_11__providers_local_storage__["a" /* LocalStorage */],
        __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_12__providers_preference__["a" /* Preference */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__["a" /* HeaderColor */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_ValuesService__["a" /* ValuesService */],
        __WEBPACK_IMPORTED_MODULE_13__providers_SharedDataService__["a" /* SharedDataService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    Object.defineProperty(AppConfig, "SERVER_URL", {
        /* Parse Server URL */
        get: function () {
            return 'http://nearme.quanlabs.com/parse/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "APP_ID", {
        /* Parse App ID  */
        get: function () {
            return 'myAppId';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "BANNER_ID", {
        /* AdMob Banner ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "TRACKING_ID", {
        /* Google Analytics Tracking ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "HEADER_COLOR", {
        /* Header color (only Android Multitask view)  */
        get: function () {
            return '#fdd735';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_UNIT", {
        /* Unit: km or mi  */
        get: function () {
            return 'mi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_MAP_STYLE", {
        /* Map style: satellite or roadmap */
        get: function () {
            return 'MAP_TYPE_NORMAL';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_LANG", {
        get: function () {
            return 'en';
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super.call(this, 'Category') || this;
    }
    Category.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
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
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));
Category = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Category);

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Category', Category);
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseFile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParseFile = (function () {
    function ParseFile() {
    }
    ParseFile.upload = function (base64) {
        return new Promise(function (resolve, reject) {
            var parseFile = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.File('image.jpg', { base64: base64 });
            parseFile.save().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    return ParseFile;
}());
ParseFile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ParseFile);

//# sourceMappingURL=parse-file-service.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map