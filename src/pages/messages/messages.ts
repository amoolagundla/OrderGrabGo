import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ValuesService} from '../../providers/ValuesService';
import { BasePage } from '../base-page/base-page';
/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage extends BasePage {
public orders:any;
  constructor(injector: Injector, public navParams: NavParams,private valuesService: ValuesService) {
    super(injector);
    this.showLoadingView();
    this.valuesService.GetOrders().subscribe((res:any)=>
    {
          this.orders=res;
          this.showContentView();
          this.onRefreshComplete();
    },error=> this.showContentView());
  }
  enableMenuSwipe() {
    return true;
}
  ionViewDidLoad() {
  
  }
  itemdetails(id:any)
  {
    this.navigateTo('MessageDetailsPage', {id: id});
  }
  home() {
      this.setRoot("DashPage");
  }
}
