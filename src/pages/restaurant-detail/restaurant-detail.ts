import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models/models';
import { CART } from '../cart/cartitems';
/**
 * Generated class for the RestaurantDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-restaurant-detail',
    templateUrl: 'restaurant-detail.html',
})
export class RestaurantDetailPage extends BasePage {
    public user: App.UserInfoViewModel;
    public firstName: string = 'OrderGrabGo';
    public name: string; public location: string; public address: string; public phonenum: string;
    constructor(injector: Injector) {
        super(injector);
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello ' + this.user.FirstName;
            }
        });
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        this.name = this.navParams.get('name');
        this.location = this.navParams.get('location').locality + " " + this.navParams.get('location').city;
        this.address = this.navParams.get('location').address;

        console.log('ionViewDidLoad RestaurantDetailPage');

    }
    reservetable() {
        this.navigateTo('ReservetablePage', this.navParams);
    }
    directions() {
        this.navigateTo('MapdirectionPage', this.navParams);
    }
    takout() {
        CART.total = 0;
        CART.shipping = 0;
        CART.items = [];
        this.navigateTo('TakeoutPage', this.navParams);
    }
    delivery() {
        CART.total = 0;
        CART.shipping = 0;
        CART.items = [];
        this.navigateTo('DeliveryPage', this.navParams);
    }
}
