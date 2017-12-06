import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
/**
 * Generated class for the OrderTrackingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-tracking',
  templateUrl: 'order-tracking.html',
})
export class OrderTrackingPage extends BasePage {

    constructor(injector: Injector) {
        super(injector);   
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
   
  }
  home() {
      this.setRoot("DashPage");
  }
}
