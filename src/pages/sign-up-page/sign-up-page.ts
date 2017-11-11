import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';

import {
    ValuesService
} from '../../providers/ValuesService';
@IonicPage()
@Component({
  selector: 'page-sign-up-page',
  templateUrl: 'sign-up-page.html'
})
export class SignUpPage extends BasePage {
   public user: any={
      email: '',
      password: '',
      confirmPassword: '',
			phonenumber:'',
			FirstName:'',
			LastName:''
    };
		 public errorMessage:any; 
 //public user:App.RegisterViewModel= new App.RegisterViewModel();
	public email:string='';
	public password:string='';
	public phonenumber:string='';
	public dob:string='';
  form: FormGroup;
  trans: any;

  constructor(injector: Injector,
    private formBuilder: FormBuilder,
    private events: Events,
    private viewCtrl: ViewController,private valuesService: ValuesService) {

    super(injector);

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    let trans = ['LOGGED_IN_AS', 'EMAIL_TAKEN', 'ERROR_UNKNOWN'];

    this.translate.get(trans).subscribe(values => {
      this.trans = values;
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
  save(model: any, isValid: boolean,event:Event) {
    // call API to save customer
     event.preventDefault();
									
		if(isValid)
		{
			this.showLoadingView();
			this.valuesService.Register(model)
            .subscribe(
               (data:any) => {
                          this.showContentView();
												  if(data.isSuccess ==true)	
													{                            
                       				this.setName('token',data.token);															
                         this.setRoot('DashPage');
													}
													else
													{
														
														console.log(data);
														this.showToast(data.error);
													}
                },
								  err => { 
									console.log(err);
								  this.showContentView();
									
});
										 
		}
  }
  onSubmit() {

    this.showLoadingView();
   this.user.Email=this.email;
	 this.user.Password=this.password;
	 this.user.ConfirmPassword=this.password;
	 this.user.PhoneNumber=this.phonenumber;

			this.valuesService.Register(this.user).subscribe((data:any)=>
      {
				if(data!=undefined && data !='')
				{
					this.showContentView();
					this.setRoot('DashPage');
				
				}
				else
				{
					this.showToast('Sorry there was a problem Try Again');
				}
        
     
    },error => {
			if (error.status === 401) {
        this.showToast(this.trans.INVALID_CREDENTIALS);
      } else {
        this.showToast(this.trans.ERROR_UNKNOWN);
      }
      this.showErrorView();
    }); 
		

   
  }

}
