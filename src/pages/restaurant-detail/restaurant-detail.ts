import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    public name: string; public location: string; public address: string; public phonenum: string; public hasTablebooking: number = 0;
    public hastakeout: number = 0; public hasdelivery: number = 0; public min_amt: number = 0;
    constructor(injector: Injector, private altcntrl: AlertController) {
        super(injector);
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello ' + this.user.FirstName;
            }
        });
        this.hasTablebooking = this.navParams.get('has_table_booking');
        this.hastakeout = this.navParams.get('is_delivering_now');
        this.hasdelivery = this.navParams.get('has_online_delivery');
        
        if (this.navParams.get('delivery_minimum_order') != undefined || this.navParams.get('delivery_minimum_order') != null) {
            this.min_amt = this.navParams.get('delivery_minimum_order');
        }
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
        if (this.navParams.get('delivery_minimum_order') != undefined || this.navParams.get('delivery_minimum_order') != null) {
            CART.Minimum = this.navParams.get('delivery_minimum_order');
        }
        if (this.navParams.get('delivery_fee') != undefined || this.navParams.get('delivery_fee') != null) {
            CART.shipping = this.navParams.get('delivery_fee');
        }
        this.navigateTo('TakeoutPage', this.navParams);
    }
    delivery() {
        CART.total = 0;
        CART.shipping = 0;
        if (this.navParams.get('delivery_minimum_order') != undefined || this.navParams.get('delivery_minimum_order') != null) {
            CART.Minimum = this.navParams.get('delivery_minimum_order');
        }
        if (this.navParams.get('delivery_fee') != undefined || this.navParams.get('delivery_fee') != null) {
            CART.shipping = this.navParams.get('delivery_fee');
        }
        CART.items = [];
        this.navigateTo('DeliveryPage', this.navParams);
    }
    back() {
        this.navigateTo('RestaurentPage');
    }
    notavailable() {
        let alert = this.altcntrl.create({
            title: 'Not Available',
            subTitle: 'Sorry! The selected choice was not available in this resturant',
        });
        alert.addButton({
            text: 'Ok',
        });
        alert.present();
    }
}
