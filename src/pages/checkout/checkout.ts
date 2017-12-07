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
      
      this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((data) => {
      var orders = new App.Orders;
      orders.OrderId = 0;
      orders.CustomerId = 0;
      orders.ResturantId = this.navParams.get('restuarant').data.id;
      orders.OrderTotal = CART.total;
      if (this.navParams.get('pagename') != undefined && this.navParams.get('pagename') == 'Delivery') {
          orders.LookupOrderTypeId = 10;
      } else {
          orders.LookupOrderTypeId = 8;
      }
      orders.CustomerMaster = new App.CustomerMaster();
      orders.CustomerMaster.Address = model.Address;
      orders.CustomerMaster.FirstName = model.FirstName;
      orders.CustomerMaster.LastName = model.FirstName;
      orders.CustomerMaster.MobileNumber = model.PhoneNumber;
      orders.CustomerMaster.GeoLocation = data.coords.latitude + "," + data.coords.longitude;
      orders.CustomerMaster.City = "Des Moines";
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
              location: this.navParams.get('location').address +","+ this.navParams.get('location').city +","+this.navParams.get('location').zipcode
          }
          this.showContentView();
          this.navigateTo('OrderconfirmationPage', dat);
         
      });
      });
      
  }
  home() {
      this.setRoot("DashPage");
  }
}
