import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ValuesService} from '../../providers/ValuesService';
import { BasePage } from '../base-page/base-page';


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
public orderStatus:any;
  constructor(injector:Injector,public navParams: NavParams,private valuesService: ValuesService) {
        super(injector);
       
  }
  enableMenuSwipe() {
    return false;
}
  ionViewDidLoad() {
      this.showLoadingView();
    this.valuesService.GetOrderStatusHistory(this.navParams.get('id')).subscribe((data:any) => {
            this.orderStatus = data;
            this.showContentView();
            this.onRefreshComplete();
              });
  }

}
