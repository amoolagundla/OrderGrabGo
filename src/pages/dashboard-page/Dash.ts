/// <reference path="../../providers/shareddataservice.ts" />

import { IonicPage } from "ionic-angular";
import { Component, Injector } from "@angular/core";
import { BasePage } from "../base-page/base-page";
import { Platform } from "ionic-angular";
import { ValuesService } from "../../providers/ValuesService";
import { OneSignal } from '@ionic-native/onesignal';
import { LocalStorage } from "../../providers/local-storage";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { App } from "../../models/models";
import { Geolocation } from "@ionic-native/geolocation";
@IonicPage()
@Component({
  selector: "Dash",
  templateUrl: "Dash.html"
})
export class DashPage extends BasePage {
  error:any;
  address: any;
  qrData = null;
  createdCode = null;
  scannedCode = null;
  zip:any;
  public latLong:any;
  public user: App.UserInfoViewModel = this.userInfo;
  public firstName: string = "OrderGrabGo";
  public scannedObject: string = "";
  public scanData: boolean = false;
  public restaurants: any;
  public currentOrderHistory:any;
  constructor(
    injector: Injector,private oneSignal: OneSignal,
    private _barcodeScanner: BarcodeScanner,
    private storage: LocalStorage,
    public platform: Platform,
    private valuesService: ValuesService,
    public geolocation: Geolocation
  ) {
    super(injector);
   
    this.sharedData.latLong.subscribe(data=>    {      this.latLong=data;      });
    this.sharedData.Zip.subscribe(      data => {       this.zip=data;}, err => {console.log(err);});
    this.sharedData.Address.subscribe(      data => {       this.address=data;}, err => {console.log(err);});
    this.sharedData.UserInfo.subscribe(data => {
      if (data.FirstName != undefined) {
          this.user = data;
          this.userInfo = this.user;          
          this.firstName = "Hello " + this.userInfo.FirstName;
        }
      }, err => {
        console.log(err);
      });

    // this.oneSignal.getIds().then(data => {
    //   let mapStyle :any = data.userId || {};
    //     this.storage.oneSingalPushToken=mapStyle;     
    //      this.storage.pushToken(mapStyle);
    //       this.valuesService.SaveToken(mapStyle).subscribe(()=>
    //       {}); }) ;
  }

  enableMenuSwipe() {
    return true;
  }
  ionViewCanEnter() {

    this.valuesService.GetCurrentOrderHistory().subscribe((data:any[])=>
  {
   if(data!=null && data.length>0)
   {
     this.currentOrderHistory = 'Your Current Order Staus :'+ data[data.length-1].Status;
   }
  })
    
  }
  ionViewDidLoad() {
   
      /* Ensure the platform is ready */
    this.platform.ready().then(() => {
      this.geolocation
        .getCurrentPosition()
        .then(resp => {
            this.sharedData.latLongChanged(resp);
          this.GetLocation(resp);
        })
        .catch(err => {
        });
   
    
  });
    
  }

  GetLocation(resp) {
    if(this.address==null ||this.address==undefined)
    {
    this.valuesService
      .GetAddress(resp.coords.latitude, resp.coords.longitude)
      .subscribe(
        (data: any) => {
            
        this.sharedData.AddressChanged(data.results[0].formatted_address);
          this.sharedData.ZipChanged(data.results[0].formatted_address.split(",")[2].split(" ")[2]);         
          this.storage.storeAddress(data.results[0].formatted_address);
        }, (err) => {
         
      });
    }
  }
  onFilter(filter) {}
  qrCodeScan() {
    this._barcodeScanner.scan().then(
      barcodeData => {
        this.scannedObject = barcodeData.text;
        this.showLoadingView();
        this.valuesService.findRest(this.scannedObject).subscribe(
          (data: any) => {
            this.sharedData.timeTableChanged(data.time_table);
            this.showContentView();
            this.navigateTo("RestaurantDetailPage", data);
          },
          error => {
            this.showContentView();
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }

  parkings() {
    this.navigateTo("ParkingPage");
  }

  login() {
    if(this.latLong!=null ||this.latLong!=undefined)
    {
      this.showLoadingView();
           this.GOTODASH(this.latLong);
    }
    else
    {
      this.showLoadingView();
      this.geolocation
        .getCurrentPosition()
        .then(resp => {
          this.GOTODASH(resp);          
        })
        .catch(error => {
          this.showEmptyView();
        });
    }
  }
  messages() {
    // this.navigateTo('MessagesPage');
  }


  GOTODASH(resp:any)
  {
    this.GetLocation(resp);
    //41.553269, -93.759758, 50266
            this.valuesService
                .GetPlacesWithZomato(resp.coords.latitude, resp.coords.longitude, this.zip)
              .subscribe(
                (data: any) => {
                  this.showEmptyView();
                  if (
                    data.restaurants != undefined &&
                    data.restaurants.length > 0
                  ) {
                    this.sharedData.RestuarentsChanged(data.restaurants);
                    this.restaurants = data.restaurants;
                    this.navigateTo("RestaurantsbycusinePage",this.restaurants);
                  }
                },
                err =>{
                  this.error=err;
                   this.showEmptyView()
                }
              );
  }
}
