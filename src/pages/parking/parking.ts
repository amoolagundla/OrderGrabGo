import { Component, Injector, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ActionSheetController, Platform, Events } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { BasePage } from '../base-page/base-page';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapsEvent, LatLng, Geocoder, Marker, MarkerOptions, CameraPosition } from '@ionic-native/google-maps';
import { Place } from '../../providers/place-service';
import { MapStyle } from '../../providers/map-style';
import { Diagnostic } from '@ionic-native/diagnostic';

/**
 * Generated class for the ParkingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
    selector: 'page-parking',
    templateUrl: 'parking.html',
})
export class ParkingPage extends BasePage {
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    private marker: Marker;
    isViewLoaded: boolean;
    
    constructor(injector: Injector, private platform: Platform, private locationAccuracy: LocationAccuracy,
        private diagnostic: Diagnostic,
        private place: Place,
        //private googleMaps: GoogleMaps,
        private events: Events,
        public geolocation: Geolocation) {
        super(injector);
        this.events.subscribe('onMenuOpened', (e) => {
            if (this.map) {
                this.map.setClickable(false);
            }
        });

        this.events.subscribe('onMenuClosed', (e) => {
            if (this.map) {
                this.map.setClickable(true);
            }
        });
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

    ionViewWillUnload() {

        this.isViewLoaded = false;

        
    }
    getlocation() {
        return this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    }
    ionViewDidLoad() {
        this.isViewLoaded = true;
        this.loadMap();
        
    }
    addMarker(){
        
         let marker = new google.maps.Marker({
           map: this.map,
           animation: google.maps.Animation.DROP,
           position: this.map.getCenter()
         });
        
         let content = "<h4>Information!</h4>";         
        
         this.addInfoWindow(marker, content);
        
       }
       addInfoWindow(marker, content){
        
         let infoWindow = new google.maps.InfoWindow({
           content: content
         });
        
         google.maps.event.addListener(marker, 'click', () => {
           infoWindow.open(this.map, marker);
         });
        
       }
    
    loadMap() {
        this.geolocation.getCurrentPosition().then((position) => {
            
                 let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
                 let mapOptions = {
                   center: latLng,
                   zoom: 15,
                   mapTypeId: google.maps.MapTypeId.ROADMAP
                 }
            
                 this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
              this.addMarker();
               }, (err) => {
                 console.log(err);
               });

    }

}
