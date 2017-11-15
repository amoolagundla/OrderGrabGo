import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import {
    ValuesService
} from '../../providers/ValuesService';
@IonicPage()
@Component({
    selector: 'page-sign-up-page',
    templateUrl: 'sign-up-page.html',
    providers: [GooglePlus]
})
export class SignUpPage extends BasePage {
    public user: any = {
        email: '',
        password: '',
        confirmPassword: '',
        phonenumber: '',
        FirstName: '',
        LastName: ''
    };
    public errorMessage: any;
    //public user:App.RegisterViewModel= new App.RegisterViewModel();
    public email: string = '';
    public password: string = '';
    public phonenumber: string = '';
    public FirstName:string='';
    public LastName:string='';
    public dob: string = '';
    form: FormGroup;
    trans: any;

    constructor(injector: Injector,
        private formBuilder: FormBuilder,
        private events: Events,
        private viewCtrl: ViewController, private valuesService: ValuesService, private fb: Facebook, private googlePlus: GooglePlus) {

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
    save(model: any, isValid: boolean, event: Event) {
        // call API to save customer
        event.preventDefault();

        if (isValid) {
            this.showLoadingView();
            this.valuesService.Register(model)
                .subscribe(
                (data: any) => {
                    this.showContentView();
                    if (data.isSuccess == true) {
                        this.setName('token', data.token);
                        this.setRoot('DashPage');
                    }
                    else {

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
        this.user.Email = this.email;
        this.user.Password = this.password;
        this.user.ConfirmPassword = this.password;
        this.user.PhoneNumber = this.phonenumber;

        this.valuesService.Register(this.user).subscribe((data: any) => {
            if (data != undefined && data != '') {
                this.showContentView();
                this.setRoot('DashPage');

            }
            else {
                this.showToast('Sorry there was a problem Try Again');
            }


        }, error => {
            if (error.status === 401) {
                this.showToast(this.trans.INVALID_CREDENTIALS);
            } else {
                this.showToast(this.trans.ERROR_UNKNOWN);
            }
            this.showErrorView();
        });
    }

    googleSignUp() {
        this.googlePlus.login({})
            .then(res => {
                console.log(res);
                this.email = res.email;
                this.FirstName = res.familyName;
                this.LastName = res.givenName;
                this.onSubmit();
            })
            .catch(
                err => alert(err));
    }

    facebookSignUp() {
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
                this.phonenumber = res.mobile_phone;
                this.password = "sadAsasd12335#@$@";
                this.FirstName = res.first_name;
                this.LastName = res.last_name;
                this.onSubmit();
            })
            .catch(e => {
                console.log(e);
            });
    }

}
