import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { CART } from '../cart/cartitems';
/**
 * Generated class for the ItemdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-itemdetail',
  templateUrl: 'itemdetail.html',
})
export class ItemdetailPage extends BasePage{
    public ProductName: any; public Price: any; public ShoppingCart = [];public PID:any;
    constructor(injector: Injector) {
        super(injector);
  }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        this.PID=this.ProductName = this.navParams.get('product').ProductId
        this.ProductName = this.navParams.get('product').ProductName;
        this.Price = this.navParams.get('product').Price;
        console.log('ionViewDidLoad ItemdetailPage');
  }
  deliverydetails() {
      this.navigateTo('DeliverydetailsPage');
  }
  pickup() {
      this.navigateTo('PickupPage');
  }
  addCart() {
      var item = CART.items.filter((items) => {
          if (items.name.toLowerCase().indexOf(this.navParams.get('product').ProductName.toLowerCase()) > -1) {
              items.quantity++;
              CART.total = CART.total + this.navParams.get('product').Price;
          }
          return items.name.toLowerCase().indexOf(this.navParams.get('product').ProductName.toLowerCase()) > -1;
      })
      if (item.length == 0) {
          CART.items.push({
              id: this.navParams.get('product').ProductId,
              name: this.navParams.get('product').ProductName,
              price: this.navParams.get('product').Price,
              thumb: "assets/img/foodpic.jpg",
              quantity: 1
          });
          CART.total = CART.total + this.navParams.get('product').Price;
      }
      else if (item.length > 0) {
        
      }
      this.navigateTo('CartPage',this.navParams);
  }
}
