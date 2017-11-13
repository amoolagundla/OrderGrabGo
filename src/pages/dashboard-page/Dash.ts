/// <reference path="../../providers/shareddataservice.ts" />

import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

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
    constructor(injector: Injector, private _barcodeScanner: BarcodeScanner
    ) {
        super(injector);
        
        
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello '+this.userInfo.FirstName;
            } this.init();
        });
    }

    enableMenuSwipe() {
        return true;
    }

    onFilter(filter) {

    }
  
    init() {
        this.navigatePage();
        // Optionally request the permission early
        //this.qrScanner.prepare()
        //    .then((status: QRScannerStatus) => {
        //        if (status.authorized) {
        //            // camera permission was granted
        //            // wait for user to scan something, then the observable callback will be called
        //            this.scanData = true;
        //        } else if (status.denied) {
        //            // camera permission was permanently denied
        //            // you must use QRScanner.openSettings() method to guide the user to the settings page
        //            // then they can grant the permission from there
        //        } else {
        //            // permission was denied, but not permanently. You can ask for permission again at a later time.
        //        }
        //    })
        //    .catch((e: any) => console.log('Error is', e));

    }


    login() {
        this.navigateTo('CategoriesPage');

    }

    scan() {
        this._barcodeScanner.scan().then((barcodeData) => {
            if (barcodeData.cancelled) {
                console.log("User cancelled the action!");
                
                return false;
            }
            console.log("Scanned successfully!");
            console.log(barcodeData);
            this.scannedObject = barcodeData.text;
        }, (err) => {
            console.log(err);
        });
        //this.barcodeScanner.scan().then((barcodeData) => {
        //    this.scannedCode = barcodeData;
        //}, (err) => {
            
        //});

        
    }
}
