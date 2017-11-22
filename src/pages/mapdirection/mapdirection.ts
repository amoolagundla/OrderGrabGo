import { Component,ViewChild, ElementRef, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { Geolocation, GeolocationOptions} from '@ionic-native/geolocation';
import { GoogleMap, GoogleMapsEvent, LatLng, Geocoder, Marker, MarkerOptions, CameraPosition, GoogleMaps } from '@ionic-native/google-maps';
declare var google;
/**
 * Generated class for the MapdirectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mapdirection',
  templateUrl: 'mapdirection.html',
})
export class MapdirectionPage extends BasePage{

  @ViewChild('map') mapElement: ElementRef;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
	public firstName : string; public name :string;
    constructor(injector:Injector, private googleMaps: GoogleMaps,private geolocation:Geolocation) {
        super(injector);
    }
 
    ionViewDidLoad(){
		this.firstName = "OrderGrabGo";
		this.name = this.navParams.get('location').locality_verbose;
        this.loadMap();
        this.startNavigating();
 
    }
    enableMenuSwipe() {
        return true;
    }
    loadMap(){
 
         this.geolocation.getCurrentPosition().then((position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        });
 
    }
 
    startNavigating(){
        this.geolocation.getCurrentPosition().then((position) => {
			let directionsService = new  google.maps.DirectionsService;
			let directionsDisplay = new google.maps.DirectionsRenderer;
	 
			directionsDisplay.setMap(this.map);
			directionsDisplay.setPanel(this.directionsPanel.nativeElement);
	 
			directionsService.route({
				origin: {lat : position.coords.latitude , lng : position.coords.longitude},
				destination: {lat : Number(this.navParams.get('location').latitude) , lng : Number(this.navParams.get('location').longitude)},
				travelMode: google.maps.TravelMode['DRIVING']
			}, (res, status) => {
	 
				if(status == google.maps.DirectionsStatus.OK){
					directionsDisplay.setDirections(res);
				} else {
					console.warn(status);
				}
	 
			});
		});
 
    }

}
