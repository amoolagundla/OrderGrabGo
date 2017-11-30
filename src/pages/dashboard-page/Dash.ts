/// <reference path="../../providers/shareddataservice.ts" />

import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

import { ValuesService} from '../../providers/ValuesService';

import { LocalStorage } from '../../providers/local-storage';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import {App} from '../../models/models';
@IonicPage()
@Component({
    selector: 'Dash',
    templateUrl: 'Dash.html'
})
export class DashPage extends BasePage {

    qrData = null;
    createdCode = null;
    scannedCode = null;
    public user: App.UserInfoViewModel = this.userInfo;
    public firstName: string = 'OrderGrabGo';
    public scannedObject: string = '';
    public scanData: boolean = false;
    constructor(injector: Injector, private _barcodeScanner: BarcodeScanner,private storage: LocalStorage,
		private valuesService: ValuesService
    ) {
        super(injector);
         this.storage.oneSingalPushToken.then(data=>{
            
           this.valuesService.SaveToken(data).subscribe((res:any)=>{
       
         });
         }).catch(e=>this.setRoot('DashPage')) ;
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello '+this.userInfo.FirstName;
            }
        });
    }

  enableMenuSwipe() {
    return true;
  }

  onFilter(filter) {
    
  }
  qrCodeScan() {
    this._barcodeScanner.scan().then((barcodeData) => {
        this.scannedObject = barcodeData.text;
    }, (err) => {
        console.log(err);
    });
  }
  
	parkings(){this.navigateTo('ParkingPage');}
	

  login() { this.navigateTo('RestaurentPage');
  
}
messages(){ this.navigateTo('MessagesPage');}
}
