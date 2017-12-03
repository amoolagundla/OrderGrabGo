import { Component, Injector } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    constructor(injector: Injector, private decimalPipe: DecimalPipe, private altController: AlertController) {
        super(injector);       
        this.cart = CART;
  }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        
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
      if (CART.total > CART.Minimum || CART.total == CART.Minimum) {
          if (this.navParams.get('pagename') == "Delivery") {
              var carparams = {
                  restuarant: this.navParams.get('restuarant'),
                  pagename : 'Delivery'
              }
          this.navigateTo('DeliverydetailsPage', carparams);
      }
          else {
              var carparams = {
                  restuarant: this.navParams.get('restuarant'),
                  pagename: 'TakeOut'
              }
          this.navigateTo('PickupPage', carparams);
      }
      }
      else {
          let alert = this.altController.create({
              title: 'Minimum Order Amount',
              subTitle: 'Minimum order amount is $' + CART.Minimum,
          });
          alert.addButton({
              text: 'Ok'
          });
          alert.present();
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
