import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { CART } from '../cart/cartitems';
import { BasePage } from '../base-page/base-page';
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage extends BasePage{
    public total: any;
    constructor(injector: Injector,private altcntrl : AlertController) {
        super(injector);
        this.total = CART.total;
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }
  pay() {
      let alert = this.altcntrl.create({
          title: 'Success',
          subTitle: 'You order has been placed successfully!',
      });
      alert.addButton({
          text: 'Ok',
          handler: data => {
              this.navigateTo('RestaurentPage');
          }
      });
      alert.present();
  }
}
