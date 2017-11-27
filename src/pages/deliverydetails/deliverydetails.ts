import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { SharedDataService} from '../../providers/SharedDataService';
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
public user:any;
public address:string='';
    constructor(injector: Injector, private _shared:SharedDataService) {
        super(injector);

        this._shared.UserInfo.subscribe((data) => {
          if (data.FirstName != undefined) {
              this.user = data;
             
          }
    
        });
        console.log(this.address);

  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    
  }

  onSubmit() {
    this.navigateTo('CheckoutPage');
  }

  save(model: any, isValid: boolean, event: Event) {
    this.navigateTo('CheckoutPage');
}
}
