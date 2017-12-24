import { Component, Injector,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, AlertController, ModalController } from 'ionic-angular';
import { BasePage } from "../base-page/base-page";
import { Geolocation } from "@ionic-native/geolocation";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Storage } from '@ionic/storage';
import swal from 'sweetalert';
import { ValuesService } from "../../providers/ValuesService";
import { LocationsearchPage } from "../locationsearch/locationsearch";
import { DomSanitizer } from '@angular/platform-browser';
import {
    GoogleMap,
    GoogleMapsEvent,
    LatLng,
    Geocoder,
    Marker,
    MarkerOptions,
    CameraPosition
} from "@ionic-native/google-maps";
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
declare var google;
/**
 * Generated class for the RestaurantsbycusinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-restaurantsbycusine',
  templateUrl: 'restaurantsbycusine.html',
})
export class RestaurantsbycusinePage extends BasePage{
    public places: any;
    @ViewChild("map") mapElement: ElementRef;
    map: any;
    private marker: Marker;
    public latLong:any;
    realPlaces: any;zip:any;
    public searchlocation: any = "";
    public cuisines: any; ShowVideo: any = false; video: any = '';
    constructor(injector: Injector, public geolocation: Geolocation, public sanitizer: DomSanitizer, private modlCtrl: ModalController, public atrCtrl: AlertController, private valuesService: ValuesService, public youtube: YoutubeVideoPlayer, public storage: Storage, private launchNavigator: LaunchNavigator) {
        super(injector);
        this.places = this.navParams.data;
        this.realPlaces = this.navParams.data;

        this.sharedData.latLong.subscribe(data=>    {      this.latLong=data;      });

        this.sharedData.Zip.subscribe( data => {this.zip=data;}, err => {console.log(err); });


  }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        this.loadMap();
     }
    home() {
        this.setRoot("DashPage");
    }
  loadMap() {

    if(this.latLong!=null || this.latLong!=undefined)
    {
        this.Map(this.latLong);
    }
    else
    {
      this.geolocation.getCurrentPosition().then(
          position => {
              this.Map(position);
          },
          err => {
              console.log(err);
          }
      );
    }
  }

  Map(position:any)
  {
    let latLng = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
       // 41.632254, -93.84352899999999
    );

    let mapOptions = {
        center: latLng,
        disableDefaultUI: true,
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        mapOptions
    );
    this.addMarker();
  }
  addMarker() {
      for (let place of this.places) {
          if (place.restaurant.Geolocation != null) {
              var lat = Number(place.restaurant.Geolocation.split(',')[0]);
              var lng = Number(place.restaurant.Geolocation.split(',')[1]);
              var position = new google.maps.LatLng(lat, lng);
              var dogwalkMarker = new google.maps.Marker({ map: this.map, animation: google.maps.Animation.DROP, position: position, title: place.restaurant.name });
              dogwalkMarker.setMap(this.map);
          }
      }
  }
  menu(res: any) {
      this.sharedData.timeTableChanged(res.time_table);
      this.navigateTo('RestaurantDetailPage', res);
  }
  reservetable(res: any) {
    this.sharedData.timeTableChanged(res.time_table);
      this.navigateTo('ReservetablePage', res);
  }

  notavailable() {
      swal('Not Available', 'Sorry! The selected choice was not available in this resturant', 'error');
  }
  openvideo(res:any) {

      var url = res.Video_Link;
      console.log(url);
      if (url == null || url  == "") {
          swal('Not Available', 'Video was not available for this resturant', 'error');
      }
      else {
          this.video = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + url);
          this.ShowVideo = true;
      }
  }

  directions(res:any) {
      var restlocation = res.location.address + "," + res.location.city + "," + res.location.zipcode
      this.storage.get('MobileAddress').then((data) => {
          let options: LaunchNavigatorOptions = {
              start: data
          };
          this.launchNavigator.navigate(restlocation, options)
              .then(
              success => { },
              error => { }
              );
      });
  } 

  watsoundsgood() {
      this.showLoadingView();
      this.valuesService
          .GetCusines()
          .subscribe(
          (data: any) => {
              this.cuisines = data;
              let alert = this.atrCtrl.create();
              alert.setTitle("What sounds good?");
              for (var i = 0; i < this.cuisines.length; i++) {
                  alert.addInput({
                      type: "checkbox",
                      label: this.cuisines[i].LookupCodeName,
                      name: "input-italian",
                      id: "input-italian",
                      value: this.cuisines[i].LookupCodeId
                  });
              }
              this.showContentView();
              this.onRefreshComplete();
              alert.addButton("Cancel");
              alert.addButton({
                  text: "Apply",
                  handler: data => {
                      this.showLoadingView();
                      this.valuesService
                          .GetCusinesRestaurant(
                          data
                          )
                          .subscribe((data: any) => {
                              this.places = data.restaurants;
                              this.realPlaces = data.restaurants;
                              this.loadMap();
                              this.ShowVideo = false;
                              this.showContentView();
                              this.onRefreshComplete();
                          });
                  }
              });

              alert.present();

              this.onRefreshComplete();
          },
          error => {
              this.showContentView();
              swal(
                  "Not Available",
                  "Sorry! The selected choice was not available in this resturant",
                  "error"
              );
          }
          );
  }

  filter() {
      let modal = this.modlCtrl.create(LocationsearchPage);
      let me = this;
      modal.onDidDismiss(data => {
          if (data != undefined) {
              this.showLoadingView();
              this.searchlocation = data.location;
              this.valuesService
                  .GetPlacesWithZomato(data.lat, data.lng,this.zip)
                  .subscribe((data: any) => {
                      this.places = data.restaurants;
                      this.realPlaces = data.restaurants;
                      this.loadMap();
                      this.showContentView();
                      this.onRefreshComplete();
                  });
          }
      });
      modal.present();
  }
  back() {
       this.popPage();
  }
}
