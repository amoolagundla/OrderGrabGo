import { Component, Injector, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { ValuesService } from '../../providers/ValuesService';
import swal from 'sweetalert';
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
    @ViewChild("f") form;
    email: string = '';
    emailverified: boolean = false;
    constructor(injector: Injector, private valuesService: ValuesService,) {
        super(injector);
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }
  onSubmit(model: any, isValid: boolean, event: Event) {
      if (isValid) {
          this.showLoadingView();
          this.valuesService.forgotpassword(model.Email).subscribe((data: any) => {
              this.emailverified = true;
              this.showContentView();
              this.onRefreshComplete();
          });
      }
      else {
          swal('Required', 'Email is required!', 'error');
      }
  }
  login() {
      this.setRoot('SignInPage');
  }
}
