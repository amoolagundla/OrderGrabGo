import { Component,Injector,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ViewController,ModalController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { SharedDataService } from '../../providers/SharedDataService';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { AddressdetailPage } from '../addressdetail/addressdetail';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
/**
 * Generated class for the DeliverydetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deliverydetails',
  templateUrl: 'deliverydetails.html',
})
export class DeliverydetailsPage extends BasePage {
public user:any;
    public address: string = '';
    autocompleteItems;
    autocomplete;

    latitude: number = 0;
    longitude: number = 0;
    geo: any

    service = new google.maps.places.AutocompleteService();

    constructor(injector: Injector, private _shared: SharedDataService, private altcntrl: AlertController, private nativeGeocoder: NativeGeocoder,
        private modalCtrl: ModalController, public geolocation: Geolocation) {
    super(injector);

    this._shared.UserInfo.subscribe((data) => {
        if (data.FirstName != undefined) {
            this.user = data;
        }

    });
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((data)=>{
    this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude)
        .then((result: NativeGeocoderReverseResult) => {
            console.log(JSON.stringify(result));
            this.address =  result.thoroughfare + " " + result.subLocality + " " + result.locality + " " + result.subAdministrativeArea + " " + result.administrativeArea + " " + result.countryCode + " " + result.postalCode;
        })
        .catch((error: any) => { console.log(error) });
    })
        console.log(this.address);
        this.autocompleteItems = [];
        
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    
  }
  showAddressModal() {
      let modal = this.modalCtrl.create(AddressdetailPage);
      let me = this;
      modal.onDidDismiss(data => {
          if (data != undefined) {
              this.address = data;
          }
      });
      modal.present();
  }
  onSubmit() {
    this.navigateTo('CheckoutPage');
  }

  save(model: any, isValid: boolean, event: Event) {
      if (isValid) {
          this.navigateTo('CheckoutPage', this.navParams);
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
