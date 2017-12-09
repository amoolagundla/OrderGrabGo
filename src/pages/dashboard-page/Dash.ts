/// <reference path="../../providers/shareddataservice.ts" />

import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import {Platform} from "ionic-angular";
import { ValuesService} from '../../providers/ValuesService';

import { LocalStorage } from '../../providers/local-storage';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { App } from '../../models/models';
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
  selector: "Dash",
  templateUrl: "Dash.html"
})
export class DashPage extends BasePage {
  address: any;
  qrData = null;
  createdCode = null;
  scannedCode = null;
  public user: App.UserInfoViewModel = this.userInfo;
  public firstName: string = "OrderGrabGo";
  public scannedObject: string = "";
  public scanData: boolean = false;
  constructor(
    injector: Injector,
    private _barcodeScanner: BarcodeScanner,
    private storage: LocalStorage,
    public platform: Platform,
    private valuesService: ValuesService,
    public geolocation: Geolocation
  ) {
    super(injector);
    this.sharedData.UserInfo.subscribe(
      data => {
        if (data.FirstName != undefined) {
          this.user = data;
          this.userInfo = this.user;
          this.firstName = "Hello " + this.userInfo.FirstName;
        }
      },
      err => {
        console.log(err);
      }
    );

    /* Ensure the platform is ready */
    this.platform.ready().then(() => {
        this.geolocation.getCurrentPosition().then(resp => {
            this.GetLocation(resp);
          }).catch(err => {
           alert("Error getting location"+ JSON.stringify(err));
          });
      });
  }

  enableMenuSwipe() {
    return true;
  }
  ionViewDidLoad() {
    
  }

  GetLocation(resp)
  {
    this.valuesService
    .GetAddress(resp.coords.latitude, resp.coords.longitude)
    .subscribe(
      (data: any) => {
        this.address = data.results[1].formatted_address;
        this.storage.storeAddress(data.results[0].formatted_address);
       
      },
      error => console.log(error)
    );
  }
  onFilter(filter) {}
  qrCodeScan() {
    this._barcodeScanner.scan().then(
      barcodeData => {
        this.scannedObject = barcodeData.text;
        this.showLoadingView();
        this.valuesService.findRest(this.scannedObject).subscribe(
          (data: any) => {
            this.showContentView();
            this.navigateTo("RestaurantDetailPage", data);
          },
          error => {
            this.showContentView();
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  parkings() {
    this.navigateTo("ParkingPage");
  }

  login() {
    this.navigateTo("RestaurentPage");
  }
  messages() {
    // this.navigateTo('MessagesPage');
  }
}
