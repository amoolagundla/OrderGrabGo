import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ValuesService } from '../providers/ValuesService';
import { LocalStorage } from '../providers/local-storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  
  trans: any;

  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(public platform: Platform,
    private events: Events,
    private storage: LocalStorage,
   
    private splashScreen: SplashScreen,
    
   
    private shared: ValuesService  ) {

    this.initializeApp();
  }

  onMenuOpened() {
    this.events.publish('onMenuOpened');
  }

  onMenuClosed() {
    this.events.publish('onMenuClosed');
  }

  buildMenu() {

   


  }
 
  initializeApp() {

    
    this.events.subscribe('lang:change', (e) => {
      this.buildMenu();
    });


    this.storage.lang.then(val => {

      

      
    

      this.storage.skipIntroPage.then((skipIntroPage) => {
          if (skipIntroPage) {
              this.storage.token.then((token: string) => {
                  if (token != null && token != "") {
                      this.shared.GetUserInfo();
                      this.rootPage = 'DashPage';
                  }
                  else {
                      this.rootPage='SignInPage';
                  }
              }, error => {  this.rootPage = 'SignInPage'; });
          }
      }).catch((e) => console.log(e));

      this.storage.skipIntroPage.then((skipIntroPage) => {
          this.rootPage = skipIntroPage ? 'SignInPage' : 'HomePage';
      }).catch((e) => console.log(e));

      this.buildMenu();
    }).catch((e) => console.log(e));

    this.storage.unit.then(val => {
     
  
      
    }).catch((e) => console.log(e));

    this.storage.mapStyle.then(val => {

      
    }).catch((e) => console.log(e));
    this.platform.ready().then(() => {
     
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage')) {

      this.nav.push('SignInPage');

    } else if (page.component === null) {     

        
        this.buildMenu();
				 this.nav.setRoot(page.component);
      }

    }
  
}
