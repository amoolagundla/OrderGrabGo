import { Component, Injector, NgZone, ViewChild } from "@angular/core";
import {
  IonicPage,
  AlertController,
  ViewController,
  ModalController
} from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { SharedDataService } from "../../providers/SharedDataService";

import { AddressdetailPage } from "../addressdetail/addressdetail";
import { LocalStorage } from "../../providers/local-storage";
import { CART } from '../cart/cartitems';
import swal from 'sweetalert';
declare var google;
/**
 * Generated class for the DeliverydetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-deliverydetails",
  templateUrl: "deliverydetails.html"
})
export class DeliverydetailsPage extends BasePage {
  @ViewChild("f") form;
  public user: any;
  public address: string = "";
  public firstName: string = "";
  autocompleteItems;
  autocomplete;

  latitude: number = 0;
  longitude: number = 0;
  geo: any;
  deliverydate: Date = new Date();
  deliveryTime: any = this.deliverydate.getHours();
  service = new google.maps.places.AutocompleteService();
  timeTable: any; today: any; min: string = ''; max: string = ''; shours: number; smins: number; ehours: number; emins: number;
  constructor(
    injector: Injector,
    private _shared: SharedDataService,
    private altcntrl: AlertController,
    private storage: LocalStorage,
    private modlCtrl: ModalController
  ) {
    super(injector);
    this.deliveryTime = new Date(
      this.deliverydate.getTime() +
        parseInt(this.navParams.get("restuarant").data.delivery_estimate_time == null ? 0:this.navParams.get("restuarant").data.delivery_estimate_time) *
          60000
    );
    console.log(this.deliveryTime);
    this._shared.UserInfo.subscribe(data => {
        
      if (data != undefined && data.FirstName != undefined) {
        this.user = data;
        this.firstName = data.FirstName;
        this.user.FirstName = this.user.FirstName + " " + this.user.LastName;
      } else {
        this.firstName = "";
      }
    });

    this.storage.getAddress().then(data => {
      this.address = data;
    });
    console.log(this.address);
    this.autocompleteItems = [];
    this.timeTable = this.navParams.get("restuarant").data.time_table;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var tdate = new Date();
    this.today = days[tdate.getDay()];
    if (this.navParams.get("restuarant").data.time_table != undefined && this.navParams.get("restuarant").data.time_table != null) {
        for (let item of this.navParams.get("restuarant").data.time_table) {
            if (item.Day.toLowerCase() == this.today.toLowerCase()) {
                this.shours = item.startTimeHours;
                this.smins = item.startTimeMins;
                this.ehours = item.endTimeHours;
                this.emins = item.endTimeMins;
                var starthour = item.startTimeHours.toString();
                var startmin = item.startTimeMins.toString();
                if (item.startTimeHours < 10) {
                    starthour = "0" + item.startTimeHours.toString();
                }
                if (item.startTimeMins < 10) {
                    startmin = "0" + item.startTimeMins;
                }
                this.min = starthour + ":" + startmin;
                var endhour = item.endTimeHours.toString();
                var endmin = item.endTimeMins.toString();
                if (item.endTimeHours < 10) {
                    endhour = "0" + item.endTimeHours.toString();
                }
                if (item.endTimeMins < 10) {
                    endmin = "0" + item.endTimeMins;
                }
                this.max = endhour + ":" + endmin;
            }
        }
    }
  }
  enableMenuSwipe() {
    return true;
  }
  ionViewDidLoad() {}

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
    this.navigateTo("CheckoutPage");
  }

  save(model: any, isValid: boolean, event: Event) {
      if (isValid) {
          var selectedTimeHour = model.DeliveryTime.split(':')[0];
          var selectedTimeMin = model.DeliveryTime.split(':')[1];
          var isopened = true;
          if (Number(selectedTimeHour) >= this.shours && Number(selectedTimeHour) <= this.ehours) {
              if (Number(selectedTimeHour) == this.shours && Number(selectedTimeMin) < this.smins) {
                  isopened = false;
              }
              if (Number(selectedTimeHour) == this.ehours && Number(selectedTimeMin) > this.emins) {
                  isopened = false;
              }
          }
          else {
              isopened = false;
          }
          if (isopened) {
              var res = {
                  page: "Deliver",
                  model: model,
                  restuarant: this.navParams.get("restuarant"),
                  params: this.navParams,
                  location: this.navParams.get("restuarant").data.location
              };
              this.navigateTo("CheckoutPage", res);
          }
          else {
              swal('Closed', 'Restaurant is closed on the selected date and time! Kindly delivery time in open hours', 'error');
          }
      } else {
          swal('Required', 'All fields are required!', 'error');
      }
  }
  home() {
      if (CART.total > 0) {
          let alert = this.altcntrl.create({
              title: 'Clear Cart',
              subTitle: 'Are you sure you would like to go back? The cart will be cleared.',
          });
          alert.addButton({
              text: 'Cancel'
          });
          alert.addButton({
              text: 'Yes',
              handler: data => {
                  this.setRoot("DashPage");
              }
          });
          alert.present();
      }
      else {
          this.setRoot("DashPage");
      }
  }
}
