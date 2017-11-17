import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {HttpClient} from '../providers/HttpClient';
import {ValuesService} from '../providers/ValuesService';

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
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';



@NgModule({
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
  providers: [ LocalStorage, HttpClient,ValuesService,SharedDataService, 
     SocialSharing,
    SplashScreen,
   
    LocationAccuracy,
    Geolocation,
    
      { provide: ErrorHandler, useClass: IonicErrorHandler },
	Facebook,
    BarcodeScanner,
    Toast]
})
export class AppModule {}
