import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, ToastController, Events, NavController } from 'ionic-angular';

import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
import { OneSignal } from '@ionic-native/onesignal';
import Parse from 'parse';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './app.config';
import { ValuesService } from '../providers/ValuesService';
import { User } from '../providers/user-service';
import { LocalStorage } from '../providers/local-storage';
import { Preference } from '../providers/preference';
import { SharedDataService} from '../providers/SharedDataService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  user: any;
  trans: any;
  
  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(public platform: Platform,
    private events: Events,
    private storage: LocalStorage,
    private translate: TranslateService,
    private toastCtrl: ToastController,
    private preference: Preference,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private googleAnalytics: GoogleAnalytics,
    private headerColor: HeaderColor,
    private modalCtrl: ModalController,
    private shared: ValuesService , 
    private oneSignal: OneSignal,
    private _shared:SharedDataService ) {

      this.storage.LoggedIn.then((loggedIn) => {
          if (loggedIn) {
              //this.splashScreen.hide();
            this.storage.token.then((token: string) => {
                if (token != null && token != "") {
                
                    this.shared.GetUserInfo();
                    this.rootPage = 'DashPage';
                }
                else {
                 
                    this.rootPage='SignInPage';
                }
            }).catch((e)=> {
             
              this.rootPage = 'SignInPage';
            });
        }else
          {
            //this.splashScreen.hide();
          this.rootPage='HomePage';
        }
    }).catch((e) =>
    {
    
     this.rootPage = 'SignInPage';
    });
    
    this.initializeApp();
    this.shared.GetUserInfo();
  }

  onMenuOpened() {
    this.events.publish('onMenuOpened');
  }

  onMenuClosed() {
    this.events.publish('onMenuClosed');
  }

  buildMenu() {

    let trans = ['CATEGORIES', 'MAP', 'ADD_PLACE', 'MY_FAVORITES',
    'SETTINGS', 'LOGOUT', 'LOGGED_OUT', 'PROFILE'];

    this.translate.get(trans).subscribe(values => {

      this.trans = values;

      this.pages = [
        { title: values.CATEGORIES, icon: 'pricetag', component: 'DashPage' }, 
        { title: 'Track Your Orders', icon: 'navigate', component: 'MessagesPage' },
				
        { title: values.SETTINGS, icon: 'settings', component: 'SettingsPage' }
        
      ];

 this.pages.push({ title: values.PROFILE, icon: 'contact', component: 'ProfilePage' })
        this.pages.push({ title: values.LOGOUT, icon: 'exit', component: 'SignInPage' })

    });
  }
 
  initializeApp() {
    this._shared.UserInfo.subscribe((data) => {
      if (data.FirstName != undefined) {
          this.user = data;
         
      }
  });

    

    this.translate.setDefaultLang(AppConfig.DEFAULT_LANG);

    this.storage.lang.then(val => {

      let lang = val || AppConfig.DEFAULT_LANG;

      this.translate.use(lang);
      this.storage.lang = lang;
      this.preference.lang = lang;
      this.buildMenu();
    }).catch((e) => console.log(e));

    Parse.serverURL = AppConfig.SERVER_URL;
    Parse.initialize(AppConfig.APP_ID);
  
   
    this.platform.ready().then(() => {

      if (AppConfig.TRACKING_ID) {
        this.googleAnalytics.startTrackerWithId(AppConfig.TRACKING_ID);
        this.googleAnalytics.trackEvent('', 'App opened');
        this.googleAnalytics.debugMode();
        this.googleAnalytics.enableUncaughtExceptionReporting(true);
      }

      if (AppConfig.HEADER_COLOR && this.platform.is('android')) {
        this.headerColor.tint(AppConfig.HEADER_COLOR);
      }
      if (this.platform.is('cordova') ) {
       
        this.oneSignal.startInit('38d8ddd8-4e73-4efc-97c3-1e65ade1d26e', '58788612269');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.setSubscription(true);
        this.oneSignal.handleNotificationReceived().subscribe((data:any) => {
          let payload = data; // getting id and action in additionalData.
          this.redirectToPage(payload);
        });
        this.oneSignal.handleNotificationOpened().subscribe(() => {
            // do something when the notification is opened.
        });
        this.oneSignal.endInit();
        this.registerPushToken();
      }

      this.statusBar.styleDefault();
     

      
    });
  }
  redirectToPage(data) {
   
   this.nav.setRoot('MessageDetailsPage',{id:data.payload.additionalData.foo});
  }


  registerPushToken() {
    
            this.oneSignal.getIds().then(data => {
              let mapStyle :any = data.userId || {};
                this.storage.oneSingalPushToken=mapStyle;
                
            });
    
        }





  openPage(page) {
    
      if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage') && !User.getCurrentUser()) {

          this.nav.push('SignInPage');

      } else if (page.component === null && User.getCurrentUser()) {

          User.logout().then(success => {

              let toast = this.toastCtrl.create({
                  message: this.trans.LOGGED_OUT,
                  duration: 3000
              });

              toast.present();

              this.user = null;
              this.buildMenu();
          }, error => console.log(error));

      } else if (page.title.toLowerCase() === 'logout') {
          this.storage.RemoveToken();
          this.nav.setRoot(page.component);
      } else
      {
      this.nav.setRoot(page.component);
    }
  }
}
