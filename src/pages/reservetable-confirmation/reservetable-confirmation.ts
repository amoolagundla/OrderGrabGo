import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models/models';
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
    orderId: string = '';
    constructor(injector: Injector) {
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
        this.orderId = this.navParams.get('orderId');
    }
    enableMenuSwipe() {
        return true;
    }

    ionViewDidLoad() {

    console.log('ionViewDidLoad ReservetableConfirmationPage');
  }
    back() {
        this.navigateTo('RestaurentPage');
    }

    opentrack() {
        this.setRootWithParams('ReservationTrackingPage', this.navParams.get('orderId'));
    }
    home() {
        this.setRoot("DashPage");
    }
    directions() {
        this.navigateTo('MapdirectionPage', this.navParams.get('restuarants'));
    }
}
