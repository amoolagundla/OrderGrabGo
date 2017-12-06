import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { NativeGeocoder,NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the PickupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html',
})
export class PickupPage extends BasePage {
    public location: string = '';
    public user: any;
    pickdate: Date = new Date();
    constructor(injector: Injector, private altcntrl: AlertController,
        private nativeGeocoder: NativeGeocoder,
        public geolocation: Geolocation) 
        {
        super(injector);
        this.sharedData.UserInfo.subscribe((data) => {
            this.user = data;
            this.user.FirstName = this.user.FirstName + " " + this.user.LastName;
          //  this.location = this.navParams.get('location').locality;
        });

        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((data) => {
            let $this=this;
            this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude)
                .then((result: NativeGeocoderReverseResult) => {
                    this.location =  result.locality;
                    console.log(this.location);
                })
                .catch((error: any) => { console.log(error) });
        })
  }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        
    console.log('ionViewDidLoad PickupPage');
  }
checkout(){
	this.navigateTo('CheckoutPage');
}
    save(model: any, isValid: boolean, event: Event) {
        if (isValid) {
            var res = {
                page : 'Pick',
                model: model,
                restuarant: this.navParams.get('restuarant'),
                params : this.navParams
            }
            this.navigateTo('CheckoutPage',res);
        }
        else {
            let alert = this.altcntrl.create({
                title: 'Required',
                subTitle: 'All fields are required!',
            });
            alert.addButton({
                text: 'Ok'
            });
            alert.present();
        }
}
}
