import { Component, Injector } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonicPage, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { CART } from '../cart/cartitems';
// ES6 Modules or TypeScript
import swal from 'sweetalert2';
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
    public relationship:string;
    public cart: any; taxAmt: any = 0.00;
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
      CART.total = parseFloat("" + Number(this.decimalPipe.transform(CART.total, '1.2-2')).toFixed(2));
  }

  // minus quantity
  minusQty(item,no) {
      if (item.quantity > 1) {
          item.quantity--;
          CART.total = CART.total - item.price;
          CART.total = parseFloat("" + Number(this.decimalPipe.transform(CART.total, '1.2-2')).toFixed(2));
      }
      else {
          let alert = this.altController.create({
              title: 'Remove Item',
              subTitle: 'Are you sure you want to remove this item?',
          });
          alert.addButton({
              text: 'Yes',
              handler: data => {
                  CART.total = CART.total - item.price;
                  CART.total = parseFloat("" + Number(this.decimalPipe.transform(CART.total, '1.2-2')).toFixed(2));
                  CART.items.splice(no,1);
              }
          });
          alert.addButton({
              text: 'No'
          });
          alert.present();
      }
  }

  // remove item from cart
  remove(index) {
      this.cart.items.splice(index, 1);
  }

  // click buy button
  buy() {
      if ((CART.total > CART.Minimum || CART.total == CART.Minimum)){
        if(this.relationship!=undefined){
          this.showLoadingView();
          if (this.navParams.get('pagename') == "Delivery") {
              var carparams = {
                  restuarant: this.navParams.get('restuarant'),
                  pagename : 'Delivery'
              }
              this.showContentView();
          this.navigateTo('DeliverydetailsPage', carparams);
      }
          else {
              var carparam = {
                  restuarant: this.navParams.get('restuarant'),
                  pagename: 'TakeOut'
              }
              this.showContentView();
          this.navigateTo('PickupPage', carparam);
      }
      }else{
        swal('Please Select Payment Type','info');   
      }
    }
      else {

        swal('Minimum Order Amount','Minimum order amount is $' + CART.Minimum,'info');   
         
      }
  }
  GoToProducts()
  {
      if (this.navParams.get('pagename') == "Delivery") {
          this.navigateTo('DeliveryPage', this.navParams.get('restuarant'));
      }
      else {
          this.navigateTo('TakeoutPage', this.navParams.get('restuarant'));
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
