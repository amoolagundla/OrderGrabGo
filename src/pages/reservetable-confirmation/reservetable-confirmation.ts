import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models/models';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
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
    orderId: string = '';restLocation:string='';
    constructor(injector: Injector,private launchNavigator: LaunchNavigator) {
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
        this.launchNavigator.navigate(this.restLocation,null)
            .then(
              success => console.log('Launched navigator'),
              error => console.log('Error launching navigator', error)
            );
    }
}
