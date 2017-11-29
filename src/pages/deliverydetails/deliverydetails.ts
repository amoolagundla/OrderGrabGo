import { Component,Injector,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ViewController,ModalController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { SharedDataService } from '../../providers/SharedDataService';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { LocationsearchPage } from '../locationsearch/locationsearch';
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
        private modalCtrl: ModalController) {
    super(injector);

    this._shared.UserInfo.subscribe((data) => {
        if (data.FirstName != undefined) {
            this.user = data;
        }

    });
    this.nativeGeocoder.reverseGeocode(41.5572470, -93.7985550)
        .then((result: NativeGeocoderReverseResult) => {
            console.log(JSON.stringify(result));
            this.address = result.locality;
        })
        .catch((error: any) => {  console.log(error) });
        console.log(this.address);
        this.autocompleteItems = [];
        //this.autocomplete = {
        //    query: ''
        //};
  }
    enableMenuSwipe() {
        return true;
    }
  ionViewDidLoad() {
    
  }
  showAddressModal() {
      let modal = this.modalCtrl.create(LocationsearchPage);
      let me = this;
      modal.onDidDismiss(data => {
          this.address = data;
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
