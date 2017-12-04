
import { IonicPage } from 'ionic-angular';
import { Component, Injector,ViewChild } from '@angular/core';
import { Events, AlertController, ModalController } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Category } from '../../providers/categories';
import { BasePage } from '../base-page/base-page';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { App } from '../../models/models';
import { LocationsearchPage } from '../locationsearch/locationsearch';
import {
    ValuesService
} from '../../providers/ValuesService';
@IonicPage()
@Component({
    selector: 'page-categories',
    templateUrl: 'restaurent.html'
    })

export class RestaurentPage extends BasePage {
    @ViewChild('sounds') sounds;
    @ViewChild('dine') dine;
    @ViewChild('deliver') deliver;
    @ViewChild('take') take;
    @ViewChild('party') party;
    @ViewChild('near') near;
    public searchTerm: any = '';
    private categories: Array<Category>;
    public places: any;
    public cuisines: any;
    public lat:any=null;
    public long:any=null;
    address: string = '';
    searchlocation: string = '';
    //public cuisine: Array;
    public user: App.UserInfoViewModel; public firstName: string = 'OrderGrabGo';
    constructor(injector: Injector, public atrCtrl: AlertController,
        private events: Events,
        private locationAccuracy: LocationAccuracy,
        private diagnostic: Diagnostic,
        private valuesService: ValuesService, public geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private modlCtrl:ModalController) {
        super(injector);
        this.sharedData.UserInfo.subscribe((data) => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = 'Hello ' + this.user.FirstName;
            }
        });
        if(this.lat== null && this.long== null)
        {
        this.getlocation().then((resp) => {
            this.lat=resp.coords.latitude;
            this.long=resp.coords.longitude;
            this.nativeGeocoder.reverseGeocode(resp.coords.latitude,resp.coords.longitude)
                .then((result: NativeGeocoderReverseResult) => {
                    console.log(JSON.stringify(result));
                   
                    this.address = result.thoroughfare+ " "+result.subLocality +" "+ result.locality + " " +result.subAdministrativeArea + " " + result.administrativeArea + " " + result.countryCode + " " + result.postalCode;
                })
                .catch((error: any) => { console.log(error) });
            console.log(this.address);
        });
    }

        this.locationAccuracy.canRequest().then((canRequest: boolean) => {

            if (canRequest) {

                let priority = this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY;

                this.locationAccuracy.request(priority)
                    .then((data: any) => console.log(data))
                    .catch((error) => {

                        if (error && error.code !== this.locationAccuracy.ERROR_USER_DISAGREED) {
                            this.translate.get('ERROR_LOCATION_MODE').subscribe((res: string) => {
                                this.showConfirm(res).then(() => this.diagnostic.switchToLocationSettings());
                            });
                        }

                    });
            }
        }).catch((err) => console.log(err));
    }

    enableMenuSwipe() {
        return true;
    }

    ionViewDidLoad() {
        this.showLoadingView();
        this.gotocat();
    }

    goToPlaces() {
        this.navigateTo('PlacesPage', this.categories[0]);
    }
    getlocation() {
        return this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
        
    }
    loadData() {
    
        
        //this.showLoadingView();
        if(this.lat==null && this.long==null)
        {
         this.getlocation().then((resp) => {

            this.valuesService.GetPlacesWithZomato(resp.coords.latitude, resp.coords.longitude).subscribe((data: App.GooglePlaces) => {
                this.places = data;
                this.showContentView();
                this.onRefreshComplete();

            });
         }).catch((error) => {
             this.showEmptyView();
         });
        }
        else
        {
            this.valuesService.GetPlacesWithZomato(this.lat,this.long).subscribe((data: App.GooglePlaces) => {                
                this.places = data;
                this.showContentView();
                this.onRefreshComplete();

            });
        }
    }
    onSearchAddress() {
     let modal = this.modlCtrl.create(LocationsearchPage);
      let me = this;
      modal.onDidDismiss(data => {
          if (data != undefined) {
              this.searchlocation = data.location;
              this.valuesService.GetPlacesWithZomato(data.lat, data.lng).subscribe((data: App.GooglePlaces) => {
                  this.places = data;
                  this.showContentView();
                  this.onRefreshComplete();

              });
          }
      });
      modal.present();
    }
    onReload(refresher) {
        this.refresher = refresher;
        this.loadData();
    }
    gotocat() {
      
      this.loadData();
    }
    soundsgood(event) {
        event.target.classList.add('activeli');
        this.near.nativeElement.classList.remove("activeli");
        this.dine.nativeElement.classList.remove("activeli");
        this.take.nativeElement.classList.remove("activeli");
        this.deliver.nativeElement.classList.remove("activeli");
        this.party.nativeElement.classList.remove("activeli");
        this.getlocation().then((resp) => {
			
            this.valuesService.FindCuisineWithZomato(resp.coords.latitude, resp.coords.longitude).subscribe((data: App.GooglePlaces) => {

                var jdata = JSON.stringify(data);
                var pdata = JSON.parse(jdata);
                this.cuisines = pdata;               
                let alert = this.atrCtrl.create();
                alert.setTitle('What sounds good?');
				 for (var i = 0; i < this.cuisines.cuisines.length; i++) {
                    alert.addInput({
                        type: 'checkbox',
                        label: this.cuisines.cuisines[i].cuisine.cuisine_name,
                        name: 'input-italian',
                        id: 'input-italian',
                        value: this.cuisines.cuisines[i].cuisine.cuisine_id
                    });
                }
               
                alert.addButton('Cancel');
                alert.addButton({
                    text: 'Apply',
                    handler: data => {
						this.showLoadingView();
                        this.getlocation().then((resp) => {

                            this.valuesService.FindplcaesWithCuinesSelected(resp.coords.latitude, resp.coords.longitude,data).subscribe((data: App.GooglePlaces) => {
                               
                                this.places = data;
                                this.showContentView();
                                this.onRefreshComplete();

                            });
                        }).catch((error) => {
                            this.showContentView();
                           
                        });
						
						
                    }
                });

                alert.present();

                this.onRefreshComplete();

            });
        }).catch((error) => {
            this.showEmptyView();
        });
    }
    filter() {
        this.places = this.places.filter(res => res.restaurent.name == this.searchTerm);
    }
	 indRest(restuarants: any) {
		this.navigateTo('RestaurantDetailPage',restuarants);
     }
     back() {
         this.setRoot('DashPage');
         //this.navigateTo('DashPage');
     }
     dinein(event) {
         event.target.classList.add('activeli');
         this.near.nativeElement.classList.remove("activeli");
         this.sounds.nativeElement.classList.remove("activeli");
         this.take.nativeElement.classList.remove("activeli");
         this.deliver.nativeElement.classList.remove("activeli");
         this.party.nativeElement.classList.remove("activeli");
     }
     takeout(event) {
         event.target.classList.add('activeli');
         this.near.nativeElement.classList.remove("activeli");
         this.dine.nativeElement.classList.remove("activeli");
         this.sounds.nativeElement.classList.remove("activeli");
         this.deliver.nativeElement.classList.remove("activeli");
         this.party.nativeElement.classList.remove("activeli");
     }
     delivery(event) {
         event.target.classList.add('activeli');
         this.near.nativeElement.classList.remove("activeli");
         this.dine.nativeElement.classList.remove("activeli");
         this.take.nativeElement.classList.remove("activeli");
         this.sounds.nativeElement.classList.remove("activeli");
         this.party.nativeElement.classList.remove("activeli");
     }
     parties(event) {
         event.target.classList.add('activeli');
         event.target.classList.add('activeli');
         this.near.nativeElement.classList.remove("activeli");
         this.dine.nativeElement.classList.remove("activeli");
         this.take.nativeElement.classList.remove("activeli");
         this.deliver.nativeElement.classList.remove("activeli");
         this.sounds.nativeElement.classList.remove("activeli");
     }
}
