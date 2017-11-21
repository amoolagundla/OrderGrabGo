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
    @ViewChild('map_add') mapElement: ElementRef;
    private map: GoogleMap;
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

        if (this.map) {
            this.map.clear();
            this.map.setZoom(1);
            this.map.setCenter(new LatLng(0, 0));
        }
    }
    getlocation() {
        return this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    }
    ionViewDidLoad() {
        this.isViewLoaded = true;
        console.log('ionViewDidLoad ParkingPage');
        this.loadMap();
        //if (this.platform.is('cordova')) {

        //    this.map = new GoogleMap('map_add', {
        //        styles: MapStyle.dark(),
        //        backgroundColor: '#333333'
        //    });

        //    let markerOptions: MarkerOptions = {
        //        position: new LatLng(0, 0),
        //        icon: 'yellow'
        //    };
        //    this.getlocation().then((resp) => {
        //        markerOptions.position.lat = resp.coords.latitude,
        //            markerOptions.position.lng = resp.coords.longitude
        //    });


        //    this.map.addMarker(markerOptions).then((marker: Marker) => {
        //        this.marker = marker;
        //    });

        //    this.map.one(GoogleMapsEvent.MAP_READY);
        //    this.map.setMyLocationEnabled(true);
        //    this.map.on(GoogleMapsEvent.MY_LOCATION_BUTTON_CLICK).subscribe((map: GoogleMap) => {

        //        if (this.isViewLoaded) {

        //            this.map.getCameraPosition().then((camera: CameraPosition) => {

        //                let target: LatLng = <LatLng>camera.target;
        //                this.marker.setPosition(target);
        //            });
        //        }

        //    });
        //}
    }

    loadMap() {

        let location = new LatLng(-34.9290, 138.6010);

        this.map = new GoogleMap('map_add', {
            'backgroundColor': 'white',
            'controls': {
                'compass': true,
                'myLocationButton': true,
                'indoorPicker': true,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            },
            'camera': {
                'latLng': location,
                'tilt': 30,
                'zoom': 15,
                'bearing': 50
            }
        });

        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });


    }

}
