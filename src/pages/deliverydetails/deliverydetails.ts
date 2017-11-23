import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
/**
 * Generated class for the DeliverydetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deliverydetails',
  templateUrl: 'deliverydetails.html',
})
export class DeliverydetailsPage extends BasePage {

    constructor(injector: Injector) {
        super(injector);
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliverydetailsPage');
  }
checkout(){
	this.navigateTo('CheckoutPage');
}
}
