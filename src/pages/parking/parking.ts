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
    public geolocation: Geolocation
  ) {
    super(injector);
    
    
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
    
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
          this.showLoadingView();
        this.valuesService
          .GetAddress(resp.coords.latitude, resp.coords.longitude)
          .subscribe(
            (data: any) => {
                this.showContentView();
              this.address = data.results[0].formatted_address;
              this.storage.storeParkingAddress(
                data.results[0].formatted_address
              );
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
      .catch(err => {});
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
