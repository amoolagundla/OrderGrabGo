import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models/models';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ReservetableConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reservetable-confirmation',
  templateUrl: 'reservetable-confirmation.html',
})
export class ReservetableConfirmationPage extends BasePage{
    public user: App.UserInfoViewModel; public firstName: string = 'OrderGrabGo';
    public guest: string; date: string = ''; time: string = ''; location: string = '';
    orderId: string = '';restLocation:string='';estimatedTime:any;
    constructor(injector: Injector,private launchNavigator: LaunchNavigator,public storage: Storage) {
        super(injector);
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello ' + this.user.FirstName;
            }
        });
        
        this.guest = this.navParams.get('model').Guests;
        this.date = this.navParams.get('model').ReservationDate;
        this.time = this.navParams.get('model').ReservationTime;
        this.location = this.navParams.get('model').Location;
        this.restLocation = this.navParams.get('location');
        this.estimatedTime=this.navParams.get('reservedTime');
        this.orderId = this.navParams.get('orderId');
    }
    enableMenuSwipe() {
        return true;
    }

    ionViewDidLoad() { }
    back() {
        this.navigateTo('RestaurentPage');
    }

    opentrack() {
        this.setRootWithParams('MessageDetailsPage', {
            id: this.navParams.get('orderId')
        });
       // this.setRootWithParams('ReservationTrackingPage', this.navParams.get('orderId'));
    }
    home() {
        this.setRoot("DashPage");
    }
    directions() {
        this.storage.get('MobileAddress').then((data)=> {
            let options: LaunchNavigatorOptions = {
                start: data
              };
          
              this.launchNavigator.navigate(this.restLocation, options)
                  .then(
                      success => alert('Launched navigator'),
                      error => alert('Error launching navigator: ' + error)
              );
        });
    }
}
