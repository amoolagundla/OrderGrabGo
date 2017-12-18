import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { CART } from '../cart/cartitems';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';
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
    public model: any;
    OrderID: string = '';
    pageName: string = '';restLocation:string='';
    time:any;
    estimateTime: any;
    picktime: string = '';
    deliverytime: string = '';
    constructor(injector: Injector,private launchNavigator: LaunchNavigator,public storage: Storage) {
    super(injector);       
        this.cart = CART;
        console.log(this.cart);
        this.model = this.navParams.get('model');
        this.pageName = this.navParams.get('pageName');
        this.OrderID = this.navParams.get('orderId');
        this.restLocation = this.navParams.get('location');
        this.time=this.navParams.get('reservedTime');
        if (this.pageName == 'Pick') {
            var ptimeHour = Number(this.model.PickupTime.split(':')[0]);
            var ptimeMin = Number(this.model.PickupTime.split(':')[1]);
            var pmin = ptimeMin.toString();
            if (ptimeMin < 10) {
                pmin = "0" + ptimeMin.toString();
            }
            if (ptimeHour > 12) {
                ptimeHour = ptimeHour - 12;
                this.picktime += ptimeHour.toString() + ":" +pmin.toString() +" PM";
            }
        }
        if (this.pageName == 'Deliver') {
            var dtimeHour = Number(this.model.DeliveryTime.split(':')[0]);
            var dtimeMin = Number(this.model.DeliveryTime.split(':')[1]);
            var dmin = dtimeMin.toString();
            if (ptimeMin < 10) {
                dmin = "0" + dtimeMin.toString();
            }
            if (dtimeHour > 12) {
                dtimeHour = dtimeHour - 12;
                this.deliverytime += dtimeHour.toString() + ":" + dmin.toString() + " PM";
            }
        }
  }
        enableMenuSwipe() {
            return true;
        }
  ionViewDidLoad() {
    
  }
  opentrack() {
      
      this.setRootWithParams('MessageDetailsPage', {
          id: this.navParams.get('orderId')
      });
  }
  home() {
      this.setRoot("DashPage");
  }
  directions() {

    this.storage.get('MobileAddress').then((data)=> {
        let options: LaunchNavigatorOptions = {
            start: data
          };
      
          this.launchNavigator.navigate(this.restLocation, options)
              .then(
                  success => {},
                  error => {}
          );
    });


  
}
}
