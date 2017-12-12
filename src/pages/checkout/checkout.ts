import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { CART } from '../cart/cartitems';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
import { Geolocation } from '@ionic-native/geolocation';
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
    public user: any;
    public model: any;
    pageName: string = '';
    constructor(injector: Injector, private altcntrl: AlertController, private service: ValuesService, public geolocation: Geolocation,) {
        super(injector);
        this.total = CART.total;
        this.sharedData.UserInfo.subscribe((data) => {
            if (data != undefined && data.FirstName != undefined) {
                this.user = data;
            }
        });
        this.model = this.navParams.get('model');
        this.pageName = this.navParams.get('page');
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }
  pay() {
    
      var resparams = this.navParams.get('restuarant').location;
      var model = this.navParams.get('model');
      let time:any;
      this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((data) => {
      var orders = new App.Orders;
      orders.OrderId = 0;
      orders.CustomerId = 0;
      orders.ResturantId = this.navParams.get('restuarant').data.id;
      orders.OrderTotal = CART.total;
      orders.OrderAddress = new App.OrderAddress();
      orders.OrderAddress.address1 = " ";
      if (this.navParams.get('page') != undefined && this.navParams.get('page') == 'Deliver') {
          orders.LookupOrderTypeId = 10;
          orders.OrderAddress.address1 = model.Address;
          time = 'Your Delivery time ' + model.DeliveryTime;
      } else {
          orders.LookupOrderTypeId = 8;
          orders.OrderAddress.address1 = model.Location;
          time = 'Your Pickup time ' + model.PickupTime;
      }
      orders.Instructions = model.Special;
      orders.OrderAddress.firstName = model.FirstName;
      orders.OrderAddress.lastName = model.FirstName;
      orders.OrderAddress.phoneNo = model.PhoneNumber;
      orders.OrderAddress.city = "Des Moines";
      orders.OrderDetail = new Array<App.OrderDetail>();
      for (var i = 0; i < CART.items.length; i++) {
          var orderdetail = new App.OrderDetail;
          orderdetail.ProductId = CART.items[i].id;
          orderdetail.Price = CART.items[i].price;
          orderdetail.Quantity = CART.items[i].quantity;
          orderdetail.IsActive = false;
          orderdetail.IsDeleted = false;
          orderdetail.OrderId = 0;
          orderdetail.CreatedDate = new Date();
          orderdetail.ModifiedDate = new Date();
          orderdetail.CreatedUserId = null;
          orderdetail.ModifiedUserId = null;
          orderdetail.Product = null;
          orderdetail.Order = null;
          orderdetail.OrderDetailId = 0;
          orders.LookupStatusId =47;
          orders.OrderDetail.push(orderdetail);
      }
      this.showLoadingView();
      this.service.SaveOrders(orders).subscribe((data: any)=>{
          console.log(data);
          let orderId = data.OrderId;
          var dat = {
              model: this.navParams.get('model'),
              pageName: this.navParams.get('page'),
              orderId : orderId,
              reservedTime:time,
              location: this.navParams.get('location').address +","+ this.navParams.get('location').city +","+this.navParams.get('location').zipcode
          }
          this.showContentView();
          this.navigateTo('OrderconfirmationPage', dat);
         
      },error=>{
        this.showContentView();
      });
      });
      
  }
  home() {
      if (CART.total > 0) {
          let alert = this.altcntrl.create({
              title: 'Clear Cart',
              subTitle: 'Are you sure you would like to go back? The cart will be cleared.',
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
