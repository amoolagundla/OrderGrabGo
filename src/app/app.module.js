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
import { Category } from '../providers/categories';
import { Place } from '../providers/place-service';
import { Review } from '../providers/review-service';
import { ParseFile } from '../providers/parse-file-service';
import { User } from '../providers/user-service';
import { LocalStorage } from '../providers/local-storage';
import { Preference } from '../providers/preference';
import { MapStyle } from '../providers/map-style';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { File } from '@ionic-native/file';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AppVersion } from '@ionic-native/app-version';
import { HeaderColor } from '@ionic-native/header-color';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AdMobFree } from '@ionic-native/admob-free';
import { BrowserTab } from '@ionic-native/browser-tab';
import { IonicStorageModule } from '@ionic/storage';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Ionic2RatingModule } from 'ionic2-rating';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
            HttpModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [Http]
                }
            })
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp
        ],
        providers: [Category, Place, ParseFile, Review, LocalStorage, User, HttpClient, ValuesService,
            StatusBar,
            SplashScreen,
            Diagnostic,
            LocationAccuracy,
            Geolocation,
            LaunchNavigator,
            CallNumber,
            InAppBrowser,
            SocialSharing,
            GoogleMaps,
            Camera,
            GoogleAnalytics,
            AdMobFree,
            AppVersion,
            HeaderColor,
            BrowserTab,
            File,
            Preference, MapStyle, { provide: ErrorHandler, useClass: IonicErrorHandler }]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map