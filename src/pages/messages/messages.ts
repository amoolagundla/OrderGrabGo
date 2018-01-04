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
    public orders: any; data: Array<{ title: string, details: string, icon: string, showDetails: boolean }> = [];
  constructor(injector: Injector, public navParams: NavParams,private valuesService: ValuesService) {
    super(injector);
    this.showLoadingView();
    this.valuesService.GetOrders().subscribe((res:any)=>
    {
          this.orders=res;
          this.showContentView();
          this.onRefreshComplete();
    }, error => this.showContentView());

    this.data.push({
        title: 'Current Orders',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-remove-circle-outline',
        showDetails: true
    });
    this.data.push({
        title: 'Completed Orders',
        details: 'sds asdsa Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        icon: 'ios-add-circle-outline',
        showDetails: false
    });
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
  toggleDetails(data) {
      if (data.showDetails) {
          data.showDetails = false;
          data.icon = 'ios-add-circle-outline';
      } else {
          data.showDetails = true;
          data.icon = 'ios-remove-circle-outline';
      }
  }
}
