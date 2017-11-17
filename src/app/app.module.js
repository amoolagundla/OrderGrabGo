var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClient } from '../providers/HttpClient';
import { ValuesService } from '../providers/ValuesService';
import { LocalStorage } from '../providers/local-storage';
import { SharedDataService } from '../providers/SharedDataService';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Ionic2RatingModule } from 'ionic2-rating';
import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp),
            IonicStorageModule.forRoot(),
            Ng2ImgFallbackModule,
            LazyLoadImageModule,
            Ionic2RatingModule,
            HttpModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp
        ],
        providers: [LocalStorage, HttpClient, ValuesService, SharedDataService,
            SocialSharing,
            SplashScreen,
            LocationAccuracy,
            Geolocation,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            Facebook,
            //BarcodeScanner,
            Toast]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map