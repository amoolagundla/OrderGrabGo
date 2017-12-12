import { Component, Injector } from '@angular/core';
import { IonicPage,   AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { LocalStorage } from '../../providers/local-storage';
import { CART } from '../cart/cartitems';
/**
 * Generated class for the PickupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html',
})
export class PickupPage extends BasePage {
    public location: string = '';
    public user: any;
    pickdate: Date = new Date(); special: string = '';
    pickupTime: any= this.pickdate.getHours();
    constructor(injector: Injector, private altcntrl: AlertController,
        private storage: LocalStorage) 
        {
        super(injector);
        this.pickdate=new Date(this.pickdate.getTime() + parseInt(this.navParams.get('restuarant').data.takeout_estimate_time == null ? 0  
    :this.navParams.get('restuarant').data.takeout_estimate_time)*60000);
        this.pickupTime= this.pickdate.getTime();
        console.log(this.pickupTime);
        this.sharedData.UserInfo.subscribe((data) => {
            this.user = data;
            this.user.FirstName = this.user.FirstName + " " + this.user.LastName;
        });
        this.storage.getAddress().then((data) => {
            this.location = data;
        })
       
  }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        
    console.log('ionViewDidLoad PickupPage');
  }
checkout(){
	this.navigateTo('CheckoutPage');
}
    save(model: any, isValid: boolean, event: Event) {
        if (isValid ) {
            var res = {
                page : 'Pick',
                model: model,
                restuarant: this.navParams.get('restuarant'),
                params : this.navParams,
                location:this.navParams.get('restuarant').data.location
            }
            this.navigateTo('CheckoutPage',res);
        }
        else {
            let alert = this.altcntrl.create({
                title: 'Required',
                subTitle: 'All fields are required!',
            });
            alert.addButton({
                text: 'Ok'
            });
            alert.present();
        }
    }
    home() {
        if (CART.total > 0) {
            let alert = this.altcntrl.create({
                title: 'Clear Cart',
                subTitle: 'Are you sure you would like to go back to home? The cart will be cleared.',
            });
            alert.addButton({
                text: 'Cancel'
            });
            alert.addButton({
                text: 'Yes',
                handler: data => {
                    this.setRoot("DashPage");
                }
            });
            alert.present();
        }
        else {
            this.setRoot("DashPage");
        }
    }
}
