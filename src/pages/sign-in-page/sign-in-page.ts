import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {
    ValuesService
} from '../../providers/ValuesService';
@IonicPage()
@Component({
  selector: 'page-sign-in-page',
  templateUrl: 'sign-in-page.html'
})
export class SignInPage extends BasePage {
  public email:string='';
	public password:string='';
  form: FormGroup;
  trans: any;

  constructor(injector: Injector,
    private formBuilder: FormBuilder,
    private events: Events,
    private viewCtrl: ViewController,private valuesService: ValuesService) {

    super(injector);

    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    let trans = ['LOGGED_IN_AS', 'INVALID_CREDENTIALS', 'ERROR_UNKNOWN'];

    this.translate.get(trans).subscribe(values => {
      this.trans = values;
    });

    this.events.subscribe('user:login', (userEventData) => {
      this.onCancel();
    });
  }

  enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {

    this.showLoadingView();

		
		this.valuesService.login(this.email,this.password).subscribe((data:any)=>
      {
				this.showContentView();
                console.log(data._body);
               
                this.setName('token', data._body);

				this.setRoot('DashPage');
     
    },error => {
			if (error.status === 401) {
        this.showToast(this.trans.INVALID_CREDENTIALS);
      } else {
        this.showToast(this.trans.ERROR_UNKNOWN);
      }
      this.showErrorView();
    }); 
		
		
		
    
  }

  goToSignUp() {
    this.navigateTo('SignUpPage');
  }

}
