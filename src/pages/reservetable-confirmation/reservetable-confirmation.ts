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
    public guest: string; date: string = ''; time: string = '';
    constructor(injector: Injector) {
        super(injector);
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello ' + this.user.FirstName;
            }
        });
        this.guest = this.navParams.get('Guests');
        this.date = this.navParams.get('ReservationDate');
        this.time = this.navParams.get('ReservationTime');
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
}
