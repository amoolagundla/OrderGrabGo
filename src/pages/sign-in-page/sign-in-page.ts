import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { LocalStorage } from '../../providers/local-storage';
import { ValuesService} from '../../providers/ValuesService';
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
    //this.storage.RemoveToken();
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
       //this.getUserDetailGoogle('ji');
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
	
        this.setName('token',data._body);
		this.setRoot('DashPage'); 
       //this.savePushToken();
			
		
     
    },error => {
		if (error.status === 401) {
        this.showToast(this.trans.INVALID_CREDENTIALS);
      } else {
        this.showToast(this.trans.ERROR_UNKNOWN);
      }
      this.showErrorView();
    });
  }

  savePushToken()
  { this.setRoot('DashPage'); 
    // this.storage.oneSingalPushToken.then(data=>{
    //   this.valuesService.SaveToken(data).subscribe((res:any)=>{
       
    //   });
    // }).catch(e=>this.setRoot('DashPage')) ;
  }

  facebookLogIn() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
        .then(res => {
          if(res.status === "connected") {
          
            this.getUserDetail(res.authResponse.accessToken);
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetail(userid) {
    this.showLoadingView();
    this.valuesService.FacebookLogin(userid).subscribe((data:any)=>
  {
    this.showContentView();
    this.sharedData.USerInfoChanged(data);

    this.setName('token',data.token);
    this.setName('LoggedIn',true);
     this.savePushToken();
  },error => {
    this.showContentView();
		if (error.status === 401) {
        this.showToast(this.trans.INVALID_CREDENTIALS);
      } else {
        this.showToast(this.trans.ERROR_UNKNOWN);
      }
     
    });
  }

  googleSignIn() {
    let glog = this;
    this.googlePlus.login({
      
                  'webClientId': '587791248488-u60e99ojmqsj4d855jumi75hlomd8k1q.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
                  'offline': true
              })
                  .then(function (user) {
                    
                    glog.getUserDetailGoogle(user.idToken);
      
                     
      
                  }, function (error) {
                      let er = error;
                     alert(er);
                      
                  });
  }

  getUserDetailGoogle(userid) {
    this.showLoadingView();
    this.valuesService.googlelogin(userid).subscribe((data:any)=>
  {
    this.showContentView();
    this.sharedData.USerInfoChanged(data);
    this.setName('token',data.token);
    this.savePushToken();
  },error => {
    this.showContentView();
		if (error.status === 401) {
        this.showToast(this.trans.INVALID_CREDENTIALS);
      } else {
        this.showToast(this.trans.ERROR_UNKNOWN);
      }
     
    });
  }


  goToSignUp() {
    this.navigateTo('SignUpPage');
  }
  forgotpwd() {
      this.navigateTo('ForgotpasswordPage');
  }
}
