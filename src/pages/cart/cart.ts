import { Component, Injector } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { CART } from '../cart/cartitems';
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage extends BasePage {
    public cart: any;
    constructor(injector: Injector,private decimalPipe: DecimalPipe) {
        super(injector);
        debugger;
        this.cart = CART;
  }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        
    console.log('ionViewDidLoad CartPage');
  }

  // plus quantity
  plusQty(item) {
      item.quantity++;
      CART.total = CART.total + item.price;
      CART.total = Number(this.decimalPipe.transform(CART.total, '1.2-2'));
  }

  // minus quantity
  minusQty(item) {
      if (item.quantity > 1) {
          item.quantity--;
          CART.total = CART.total - item.price;
          CART.total = Number(this.decimalPipe.transform(CART.total, '1.2-2'));
      }
  }

  // remove item from cart
  remove(index) {
      this.cart.items.splice(index, 1);
  }

  // click buy button
  buy() {
      if (this.navParams.get('pagename') == "Delivery") {
          this.navigateTo('DeliverydetailsPage');
      }
      else {
          this.navigateTo('PickupPage');
      }
  }
  back() {
      if (this.navParams.get('pagename') == "Delivery") {
          this.navigateTo('DeliveryPage', this.navParams.get('restuarant'));
      }
      else {
          this.navigateTo('TakeoutPage', this.navParams.get('restuarant'));
      }
  }

}
