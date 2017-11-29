import { Component,Injector,NgZone,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Searchbar } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
declare var google;
/**
 * Generated class for the LocationsearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-locationsearch',
  templateUrl: 'locationsearch.html',
})
export class LocationsearchPage extends BasePage {
    @ViewChild('sbar') searchBar: Searchbar;
    autocompleteItems;
    autocomplete;

    latitude: number = 0;
    longitude: number = 0;
    geo: any

    service = new google.maps.places.AutocompleteService();

    constructor(injector: Injector, public viewCtrl: ViewController, private zone: NgZone) {
        super(injector);
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidEnter() {
        setTimeout(() => {
           // this.searchBar.setFocus();
        }, 150);
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

    chooseItem(item: any) {
        //this.geo = item;
        //this.geoCode(this.geo);//convert Address to lat and long
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': item }, (results, status) => {
            this.latitude = results[0].geometry.location.lat();
            this.longitude = results[0].geometry.location.lng();
            var res = {
                location: item,
                lat: this.latitude,
                lng: this.longitude
            }
            this.viewCtrl.dismiss(res);
        });
    }

    updateSearch() {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: 'US' } }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    }

    //convert Address string to lat and long
    geoCode(address: any) {
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, (results, status) => {
            debugger;
            this.latitude = results[0].geometry.location.lat();
            this.longitude = results[0].geometry.location.lng();
            //alert("lat: " + this.latitude + ", long: " + this.longitude);
        });
    }
}
