import { Component, Injector, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  ActionSheetController,
  Platform,
  Events
} from "ionic-angular";
import { LocationAccuracy } from "@ionic-native/location-accuracy";
import { BasePage } from "../base-page/base-page";
import { Geolocation } from "@ionic-native/geolocation";
import {
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  Geocoder,
  Marker,
  MarkerOptions,
  CameraPosition
} from "@ionic-native/google-maps";
import { Place } from "../../providers/place-service";
import { MapStyle } from "../../providers/map-style";
import { ValuesService } from "../../providers/ValuesService";
import { LocalStorage } from "../../providers/local-storage";
import {
  LaunchNavigator,
  LaunchNavigatorOptions
} from "@ionic-native/launch-navigator";
import swal from "sweetalert2";
//import { ReverseGeocoder } from '../../providers/ReverseGeocoder';
/**
 * Generated class for the ParkingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: "page-parking",
  templateUrl: "parking.html"
})
export class ParkingPage extends BasePage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;
  private marker: Marker;
  isViewLoaded: boolean;
  public address: any;
  public Message:any;public firstName:any;
  public ShowMarkCar:boolean=false;
  public latLong:any='https://maps.googleapis.com/maps/api/staticmap?center=47.5952,-122.3316&zoom=20&scale=2&size=600x300&maptype=roadmap&key=AIzaSyDpSuWDPh-32TBJQ2p_fdulykweF7x9iPo&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C41.557247,-93.798555';
  constructor(
    injector: Injector,
    private platform: Platform,
    private locationAccuracy: LocationAccuracy,
    private valuesService: ValuesService,
    private launchNavigator: LaunchNavigator,
    private place: Place,
    //private googleMaps: GoogleMaps,
    private events: Events,
    private storage: LocalStorage,
    public geolocation: Geolocation,
    //public reverse:ReverseGeocoder
  ) {
    super(injector);
    
    this.sharedData.latLong.subscribe((resp:any)=>    {  
      if(resp!=null)
      {
           this.latLong=  "https://maps.googleapis.com/maps/api/staticmap?center="+resp.coords.latitude +","+ resp.coords.longitude+"&zoom=17&scale=2&size=600x300&maptype=roadmap&key=AIzaSyDpSuWDPh-32TBJQ2p_fdulykweF7x9iPo&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C"+resp.coords.latitude +","+ resp.coords.longitude ; 
         }
             });
    this.sharedData.UserInfo.subscribe(
        data => {
         
          
          if (data.FirstName != undefined) {
          
            this.firstName = "Hello " + data.FirstName;
          }
        }, err => {
          console.log(err);
        });
  }
  enableMenuSwipe() {
    return true;
  }

  ionViewWillUnload() {
    this.isViewLoaded = false;
    
         
  }
  getgeolocation() {
    return this.geolocation.getCurrentPosition({
      maximumAge: 3000,
      timeout: 5000,
      enableHighAccuracy: true
    });
  }

  ionViewCanEnter() {
   
  }
  ionViewDidLoad() {
    this.loadMap();
    this.storage.getParkingAddress().then(data => {
        if(data!=null){
        this.address=data;
          this.Message='Your Parking Location is Saved';
          this.ShowMarkCar=!this.ShowMarkCar;
        }
    },err=>{ 
        this.ShowMarkCar=!this.ShowMarkCar;
    });
  }

  clearParking()
  {
     
      this.ShowMarkCar=true;
      this.address='';
      this.storage.storeParkingAddress(null);
  }
  GetLocation() {
    this.showLoadingView();
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        
        this.sharedData.latLongChanged(resp);
        //  this.reverse.ReverseGeoCode(resp.coords.latitude,resp.coords.longitude).then((data:any)=>
        //{
          
        //});
        this.valuesService.GetAddress(resp.coords.latitude, resp.coords.longitude).subscribe((data: any) => {
          
          this.showContentView();
              this.address = data.results[0].formatted_address;
              this.storage.storeParkingAddress(data.results[0].formatted_address);
              this.ShowMarkCar=!this.ShowMarkCar;
              swal(
                "Success",
                "Your Parking Location is Saved",
                "success"
            );
            this.Message='Your Parking Location is Saved';
            
            },
            error => {
                this.ShowMarkCar=!this.ShowMarkCar;
                this.showContentView();
                swal(
                    "error",
                    "Oops! Please Try Again",
                    "error"
                );
            }
          );
      })
      .catch(err => {this.showContentView();});
  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, "click", () => {
      infoWindow.open(this.map, marker);
    });
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(
      position => {
        let latLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

        let mapOptions = {
          center: latLng,
          zoom: 19,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        this.addMarker();
      },
      err => {
        console.log(err);
      }
    );
  }

  directions() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.valuesService
          .GetAddress(resp.coords.latitude, resp.coords.longitude)
          .subscribe(
            (data: any) => {
              this.Navigator(data.results[0].formatted_address);
            },
            error => console.log(error)
          );
      })
      .catch(err => {});
  }

  Navigator(startData: any) {
    this.storage.getParkingAddress().then(data => {
      let options: LaunchNavigatorOptions = {
        start: startData
      };
      this.storage.getParkingAddress().then(data => {
        this.launchNavigator
          .navigate(this.address, options)
          .then(success => {}, error => {});
      });
    });
  }
}
