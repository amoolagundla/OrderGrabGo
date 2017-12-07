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
    constructor(injector: Injector,private launchNavigator: LaunchNavigator,public storage: Storage) {
    super(injector);       
        this.cart = CART;
        console.log(this.cart);
        this.model = this.navParams.get('model');
        this.pageName = this.navParams.get('pageName');
        this.OrderID = this.navParams.get('orderId');
        this.restLocation = this.navParams.get('location');
  }
        enableMenuSwipe() {
            return true;
        }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderconfirmationPage');
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
                  success => alert('Launched navigator'),
                  error => alert('Error launching navigator: ' + error)
          );
        
    });


  
}
}
