import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { LocalStorage } from '../../providers/local-storage';

import {
    ValuesService
} from '../../providers/ValuesService';
@IonicPage()
@Component({
  selector: 'page-sign-in-page',
  templateUrl: 'sign-in-page.html',
  providers: [GooglePlus]
})
export class SignInPage extends BasePage {
  public email:string='';
	public password:string='';
  form: FormGroup;
  trans: any;

  constructor(injector: Injector,
    private formBuilder: FormBuilder,
    private events: Events,
    private viewCtrl: ViewController,private valuesService: ValuesService, private fb: Facebook, private googlePlus: GooglePlus, private storage: LocalStorage) {

    super(injector);
    this.storage.RemoveToken();
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
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
        this.setName('token',data._body);
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

  facebookLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
        .then(res => {
          if(res.status === "connected") {
            this.getUserDetail(res.authResponse.userID);
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,gender,picture",["public_profile"])
        .then(res => {
          console.log(res);
          this.email = res.email;
          this.password = "sadAsasd12335#@$@";
          this.onSubmit();
        })
        .catch(e => {
          console.log(e);
        });
  }

  googleLogin() {
    this.googlePlus.login({})
        .then(res => {
          console.log(res);
          this.email = res.email;
          this.password = "sadAsasd12335#@$@";
          this.onSubmit();
        })
        .catch(err => console.error(err));
  }

  goToSignUp() {
    this.navigateTo('SignUpPage');
  }

}
