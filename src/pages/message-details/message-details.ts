import { Component,Injector } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {  ValuesService} from '../../providers/ValuesService';
import { BasePage } from '../base-page/base-page';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MessageDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-message-details',
  templateUrl: 'message-details.html',
})
export class MessageDetailsPage extends BasePage {
    public orderStatus: any;
    public orderdetails: any;
    public orders: any; public total: string = '';
    public OrderID: string = '';
    isReservation: boolean = false; name: string = ''; address: string = ''; isTakout: boolean = false; estimatedTime: string = '';
    constructor(injector: Injector, private valuesService: ValuesService, private launchNavigator: LaunchNavigator,public storage: Storage) {
        super(injector);
       
  }
  enableMenuSwipe() {
    return false;
}
  ionViewDidLoad() {
      this.showLoadingView();
      this.valuesService.GetOrderStatusHistory(this.navParams.get('id')).subscribe((data: any) => {
            this.orderStatus = data;
           
    }, error => this.showContentView());
    this.valuesService.GetOrderDetail(this.navParams.get('id')).subscribe((data: any) => {
        if (data.order.LookupOrderTypeId == 69) {
            this.isReservation = true;
            this.name = data.order.Resturant.RestaurantName;
        }
        if (data.order.LookupOrderTypeId == 8) {
            this.isTakout = true;
        }
        
        this.address = data.order.Resturant.Address1;
        this.estimatedTime = data.order.Resturant.EstDeliveryTime + " Minutes";
        this.orderdetails = data.orderDetail;
        this.total = data.order.OrderTotal;
        this.OrderID = data.order.OrderId;
        this.showContentView();
        this.onRefreshComplete();
    }, error => this.showContentView());                          
  }

  directions() {
    this.storage.get('MobileAddress').then((data)=> {
        let options: LaunchNavigatorOptions = {
            start: data
          };
      
          this.launchNavigator.navigate(this.address, options)
              .then(
                  success => {},
                  error => {}
          );
    });

    
  }
  home() {
      
      this.setRoot("DashPage");
  }
}
