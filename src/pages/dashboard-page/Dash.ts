/// <reference path="../../providers/shareddataservice.ts" />

import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {App} from '../../models/models';
@IonicPage()
@Component({
    selector: 'Dash',
    templateUrl: 'Dash.html'
})
export class DashPage extends BasePage {
    public user: App.UserInfoViewModel = this.userInfo;
    public firstName: string = 'OrderGrabGo';
    public scannedObject: string = '';
    constructor(injector: Injector, private qrScanner: QRScanner
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

    }


    login() {
        this.navigateTo('CategoriesPage');

    }

    scan() {
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted


                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);
                        this.scannedObject = text;
                        this.qrScanner.hide(); // hide camera preview
                        scanSub.unsubscribe(); // stop scanning
                    });

                    // show camera preview
                    this.qrScanner.show();

                    // wait for user to scan something, then the observable callback will be called

                } else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
    }

}
