import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
/**
 * Generated class for the AddressdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addressdetail',
  templateUrl: 'addressdetail.html',
})
export class AddressdetailPage extends BasePage {

    constructor(injector: Injector, public viewCtrl: ViewController) {
        super(injector);
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressdetailPage');
  }
  dismiss() {
      this.viewCtrl.dismiss();
  }
  save(model: any, isValid: boolean, event) {
      if (isValid) {
          var res = model.Street + ", " + model.Unit + ", " + model.City + ", " + model.State + ", " + model.PostelCode;
          this.viewCtrl.dismiss(res);
      }
      else {

      }
  }

}
