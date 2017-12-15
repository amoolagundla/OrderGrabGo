import { Component, Injector } from '@angular/core';
import { IonicPage,   AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models/models';
import { CART } from '../cart/cartitems';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';
import swal from 'sweetalert';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
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
    today: string = ''; restaurantImages: any;
    featuredImage: string = ''; restlocation: string = ''; timeTable: any;
    timing: string = ''; isOpen: boolean= true;
    mySlideOptions = {
        pager: true
    };
    public hastakeout: number = 0; public hasdelivery: number = 0; public min_amt: number = 0;
    //public youtube: YoutubeVideoPlayer
    constructor(
        injector: Injector,
         private altcntrl: AlertController,
         private launchNavigator: LaunchNavigator,
         public youtube: YoutubeVideoPlayer,
        public storage: Storage,
        ) {
        super(injector);
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello ' + this.user.FirstName;
            }
        });
        this.hasTablebooking = this.navParams.get('has_table_booking');
        this.hastakeout = this.navParams.get('has_online_delivery');
        this.hasdelivery = this.navParams.get('is_delivering_now');
        this.featuredImage = this.navParams.get('featured_image');
        this.restaurantImages = this.navParams.get('RestaurantImages');
        if (this.navParams.get('delivery_minimum_order') != undefined || this.navParams.get('delivery_minimum_order') != null) {
            this.min_amt = this.navParams.get('delivery_minimum_order');
        }
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var tdate = new Date();
        this.today = days[tdate.getDay()];
        this.timeTable = this.navParams.get('time_table');
        if (this.timeTable == null || this.timeTable.length == 0) {
            this.isOpen = false;
        }
        else {
            for (let item of this.navParams.get('time_table')) {
                
                if (item.Day.toLowerCase() == this.today.toLowerCase()) {
                    if (item.isClosed) {
                        this.isOpen = false;
                    }
                    else {
                        var currhours = new Date().getHours();
                        var currMinutes = new Date().getMinutes();
                        if (currhours < item.startTimeHours) {
                            this.isOpen = false;
                        }
                        else if (currhours == item.startTimeHours && currMinutes < item.startTimeMins) {
                            this.isOpen = false;
                        }
                        else if (currhours > item.endTimeHours) {
                            this.isOpen = false;
                        }
                        else if (currhours == item.endTimeHours && currMinutes > item.endTimeMins) {
                            this.isOpen = false;
                        }
                    }
                }
            }
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
        if (this.isOpen) {
            this.navigateTo('ReservetablePage', this.navParams);
        }
        else {
            swal('Closed', 'Sorry! This restaurant is closed now', 'error');
        }
    }
    directions() {
        this.storage.get('MobileAddress').then((data)=> {
            let options: LaunchNavigatorOptions = {
                start: data
              };
              this.launchNavigator.navigate(this.restlocation, options)
                  .then(
                      success => {},
                      error => {}
              );
        });
    }    
    takout() {
        if (this.isOpen) {
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
        else {
            swal('Closed', 'Sorry! This restaurant is closed now', 'error');       
        }
    }
    delivery() {
        if (this.isOpen) {
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
        else {
            swal('Closed', 'Sorry! This restaurant is closed now', 'error');
        }
    }
    back() {
        this.navigateTo('RestaurentPage');
    }
    home() {
        this.setRoot("DashPage");
    }
    notavailable() {
        swal('Not Available', 'Sorry! The selected choice was not available in this resturant', 'error');       
    }
    openvideo() {

        var url = this.navParams.get('Video_Link');
        console.log(url);
        if (url == null ) {
            swal('Not Available', 'Video was not available for this resturant', 'error');       
        }
        else {
            this.youtube.openVideo(url);
        }
    }
    
}
