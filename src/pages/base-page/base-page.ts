
import {App} from '../../models/models';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from '../../providers/local-storage';
import { SharedDataService } from '../../providers/SharedDataService';
import { ValuesService } from '../../providers/ValuesService';
import { NavController, LoadingController, ToastController, NavParams,
  AlertController, MenuController } from 'ionic-angular';
import {
    Storage
} from '@ionic/storage';
export abstract class BasePage {

  public isErrorViewVisible: boolean;
  public isEmptyViewVisible: boolean;
  public isContentViewVisible: boolean;
  public isLoadingViewVisible: boolean;
  
  protected refresher: any;
  protected infiniteScroll: any;
  protected navParams: NavParams;
  protected translate: TranslateService;
  private storageProviderClass: LocalStorage;
  private loader: any;
  private navCtrl: NavController;
  private toastCtrl: ToastController;
  private loadingCtrl: LoadingController;
  private alertCtrl: AlertController;
  private localStorage: Storage;
  protected sharedData: SharedDataService;
  public userInfo: App.UserInfoViewModel;
  private _valuesService: ValuesService;
  constructor(injector: Injector) {
    this.loadingCtrl = injector.get(LoadingController);
    this.toastCtrl = injector.get(ToastController);
    this.navCtrl = injector.get(NavController);
    this.alertCtrl = injector.get(AlertController);
    this.navParams = injector.get(NavParams);
    this.translate = injector.get(TranslateService);
    this.localStorage = injector.get(Storage);
    this.storageProviderClass = injector.get(LocalStorage);
    this.sharedData = injector.get(SharedDataService);
    this._valuesService = injector.get(ValuesService);
    let menu = injector.get(MenuController);
    menu.swipeEnable(this.enableMenuSwipe());

    
  }

  abstract enableMenuSwipe(): boolean;

  showLoadingView() {

    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isContentViewVisible = false;
    this.isLoadingViewVisible = true;

    this.translate.get('LOADING').subscribe((loadingText: string) => {

      this.loader = this.loadingCtrl.create({
        content: `<p class="item">${loadingText}</p>`,
      });
      this.loader.present();
    });
  }

	//This returns a promise but we can get away without handling it in this case.
  setName(name:string,value:any) {
      this.localStorage.set(name, value).then(() => {
          this.storageProviderClass.token.then((token: string) => {
              if (token != null) {
                  //this.GetUserInfo();
              }
              else {

                  this.setRoot('SignInPage');
              }
          }, error => { this.setRoot('SignInPage'); });
      });
  };

  
  navigatePage() {
      this.storageProviderClass.skipIntroPage.then((skipIntroPage) => {
          if (skipIntroPage) {
              this.storageProviderClass.token.then((token: string) => {
                  if (token != null) {
                      
                  }
                  else {
                     
                      this.setRoot('SignInPage');
                  }
              }, error => {  this.setRoot('SignInPage'); });
          }
      }).catch((e) => console.log(e));
  }



  getName(name:string) {
   return this.localStorage.get(name);
  };
  
  removeName(name:string) {
   return this.localStorage.remove(name);
  }
  
  clearKeys() {
    this.localStorage.clear().then(() => {
      console.log('Keys have been cleared');
    });
  }
   
  showContentView() {

    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = true;

    this.loader.dismiss();
  }

  showEmptyView() {

    this.isErrorViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = true;

    this.loader.dismiss();
  }

  showErrorView() {

    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isErrorViewVisible = true;

    this.loader.dismiss();
  }

  onRefreshComplete(data = null) {

    if (this.refresher) {
      this.refresher.complete()
    }

    if (this.infiniteScroll) {
      this.infiniteScroll.complete();

      if (data && data.length === 0) {
        this.infiniteScroll.enable(false);
      } else {
        this.infiniteScroll.enable(true);
      }
    }
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  showConfirm(message: string): Promise<boolean> {

    return new Promise((resolve, reject) => {

      this.translate.get(['OK', 'CANCEL']).subscribe(values => {

        let confirm = this.alertCtrl.create({
          title: '',
          message: message,
          buttons: [{
            text: values.CANCEL,
            handler: () => {
              reject();
            }
          }, {
            text: values.OK,
            handler: () => {
              resolve(true);
            }
          }]
        });

        confirm.present();
      });
    });
  }

  navigateTo(page: any, params: any = {}) {
    this.navCtrl.push(page, params);
  }
setRoot(name:string) {
   this.navCtrl.setRoot(name);
  };
}
