import { Component,Injector,NgZone,ViewChild } from '@angular/core';
import { IonicPage,  AlertController,ViewController,ModalController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { SharedDataService } from '../../providers/SharedDataService';

import { AddressdetailPage } from '../addressdetail/addressdetail';
import { LocalStorage } from '../../providers/local-storage';
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

    @ViewChild('f') form;
public user:any;
public address: string = ''; public firstName: string = '';
    autocompleteItems;
    autocomplete;

    latitude: number = 0;
    longitude: number = 0;
    geo: any
    deliverydate: Date = new Date();    
    deliveryTime: any= this.deliverydate.getMinutes();
    service = new google.maps.places.AutocompleteService();

    constructor(injector: Injector, private _shared: SharedDataService, private altcntrl: AlertController, 
        private storage: LocalStorage,
        private modlCtrl: ModalController) {
    super(injector);
//this.form.deliveryTime= this.deliverydate.getTime() +this.navParams.get('restuarant').data.delivery_estimate_time;

    this._shared.UserInfo.subscribe((data) => {
        if (data != undefined && data.FirstName != undefined) {
            this.user = data;
            this.firstName = data.FirstName;
            this.user.FirstName = this.user.FirstName + " " + this.user.LastName;
        }
        else {
            this.firstName = '';
        }

    });

    this.storage.getAddress().then((data) => {
        this.address = data;
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
      let modal = this.modlCtrl.create(AddressdetailPage);
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
          var res = {
              page: 'Deliver',
              model: model,
              restuarant: this.navParams.get('restuarant'),
              params: this.navParams ,
              location:this.navParams.get('restuarant').data.location
          }
          this.navigateTo('CheckoutPage', res);
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
