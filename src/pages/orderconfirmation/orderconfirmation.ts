import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { CART } from '../cart/cartitems';
/**
 * Generated class for the OrderconfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-orderconfirmation',
  templateUrl: 'orderconfirmation.html',
})
export class OrderconfirmationPage extends BasePage{
    public cart: any;
    constructor(injector: Injector) {
    super(injector);       
        this.cart = CART;
  }
        enableMenuSwipe() {
            return true;
        }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderconfirmationPage');
  }
  opentrack() {
      debugger;
      this.setRootWithParams('MessageDetailsPage', {
          id: this.navParams.data
      });
  }
}
