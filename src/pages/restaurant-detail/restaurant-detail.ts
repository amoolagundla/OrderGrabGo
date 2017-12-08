import { Component, Injector } from '@angular/core';
import { IonicPage,   AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models/models';
import { CART } from '../cart/cartitems';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';
import swal from 'sweetalert';
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
    featuredImage: string = '';restlocation:string='';
    public hastakeout: number = 0; public hasdelivery: number = 0; public min_amt: number = 0;
    constructor(injector: Injector, private altcntrl: AlertController,private launchNavigator: LaunchNavigator,public storage: Storage) {
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
        this.featuredImage = this.navParams.get('featured_image');
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
        this.restlocation= this.navParams.get('location').address +","+ this.navParams.get('location').city +","+this.navParams.get('location').zipcode

    }
    reservetable() {
        this.navigateTo('ReservetablePage', this.navParams);
    }
    directions() {
        this.storage.get('MobileAddress').then((data)=> {
            let options: LaunchNavigatorOptions = {
                start: data
              };
          
              this.launchNavigator.navigate(this.restlocation, options)
                  .then(
                      success => {},
                      error => alert('Error launching navigator: ' + error)
              );
            
        });
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
        swal('Not Available', 'Sorry! The selected choice was not available in this resturant', 'error');       
    }
}
