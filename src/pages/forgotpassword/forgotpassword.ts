import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage extends BasePage  {

    constructor(injector: Injector) {
        super(injector);
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }
  onSubmit() {

  }
}