import { IonicPage } from "ionic-angular";
import { Component, Injector, ViewChild } from "@angular/core";
import { Events, AlertController, ModalController } from "ionic-angular";
import { LocationAccuracy } from "@ionic-native/location-accuracy";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Category } from "../../providers/categories";
import { BasePage } from "../base-page/base-page";
import { Geolocation } from "@ionic-native/geolocation";
import { App } from "../../models/models";
import { LocationsearchPage } from "../locationsearch/locationsearch";
import { LocalStorage } from "../../providers/local-storage";
import swal from "sweetalert";
import { ValuesService } from "../../providers/ValuesService";
import {Platform} from "ionic-angular";
@IonicPage()
@Component({
    selector: "page-categories",
    templateUrl: "restaurent.html"
})
export class RestaurentPage extends BasePage {
    @ViewChild("near") near;
    @ViewChild("sounds") sounds;
    @ViewChild("dine") dine;
    @ViewChild("deliver") deliver;
    @ViewChild("take") take;
    @ViewChild("party") party;

    public searchTerm: any = "";
    private categories: Array<Category>;
    public places: any;
    public realPlaces: any;
    public cuisines: any;
    public lat: any = null;
    public long: any = null;
    address: string = "";
    searchlocation: string = "";
    //public cuisine: Array;
    public user: App.UserInfoViewModel;
    public firstName: string = "OrderGrabGo";
    constructor(
        injector: Injector,
        public platform: Platform,
        public atrCtrl: AlertController,
        private events: Events,
        private locationAccuracy: LocationAccuracy,
        private storage: LocalStorage,
        private diagnostic: Diagnostic,
        private valuesService: ValuesService,
        public geolocation: Geolocation,
        private modlCtrl: ModalController
    ) {
        super(injector);
        this.sharedData.UserInfo.subscribe(data => {
            if (data.FirstName != undefined) {
                this.user = data;
                this.userInfo = this.user;
                this.firstName = "Hello " + this.user.FirstName;
            }
        });
        this.sharedData.Restuarents.subscribe((data: any) => {
            if (data != undefined && data.length > 0) {
                this.places = data;
                this.realPlaces = data;

            }
        });
        this.loadData();


        this.storage.getAddress().then(data => {
            this.address = data;
        });

        this.locationAccuracy
            .canRequest()
            .then((canRequest: boolean) => {
                if (canRequest) {
                    let priority = this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY;

                    this.locationAccuracy
                        .request(priority)
                        .then((data: any) => console.log(data))
                        .catch(error => {
                            if (
                                error &&
                                error.code !== this.locationAccuracy.ERROR_USER_DISAGREED
                            ) {
                                this.translate
                                    .get("ERROR_LOCATION_MODE")
                                    .subscribe((res: string) => {
                                        this.showConfirm(res).then(() =>
                                            this.diagnostic.switchToLocationSettings()
                                        );
                                    });
                            }
                        });
                }
            })
            .catch(err => console.log(err));
    }

    enableMenuSwipe() {
        return true;
    }

    ionViewDidLoad() {


    }

    goToPlaces() {
        this.navigateTo("PlacesPage", this.categories[0]);
    }
    getlocation() {
        return this.geolocation.getCurrentPosition({
            maximumAge: 3000,
            timeout: 5000,
            enableHighAccuracy: true
        });
    }
    loadData() {
        //this.showLoadingView();
        this.platform.ready().then(() => {
        this.getlocation()
            .then(resp => {
                this.valuesService
                    .GetPlacesWithZomato(resp.coords.latitude, resp.coords.longitude)
                    .subscribe((data: any) => {
                        if (data.restaurants != undefined && data.restaurants.length > 0) {
                            this.sharedData.RestuarentsChanged(data.restaurants);
                        }
                        this.onRefreshComplete();
                    });
            })
            .catch(error => {
                this.showEmptyView();
            });
          });

    }
    onSearchAddress() {
        let modal = this.modlCtrl.create(LocationsearchPage);
        let me = this;
        modal.onDidDismiss(data => {
            if (data != undefined) {
                this.searchlocation = data.location;
                this.valuesService
                    .GetPlacesWithZomato(data.lat, data.lng)
                    .subscribe((data: any) => {
                        this.places = data.restaurants;
                        this.realPlaces = data.restaurants;
                        this.showContentView();
                        this.onRefreshComplete();
                    });
            }
        });
        modal.present();
    }
    onReload(refresher) {
        this.refresher = refresher;
        this.showLoadingView();
        this.getlocation()
            .then(resp => {
                this.valuesService
                    .GetPlacesWithZomato(resp.coords.latitude, resp.coords.longitude)
                    .subscribe((data: any) => {

                        if (data.restaurants != undefined && data.restaurants.length > 0) {
                            this.sharedData.RestuarentsChanged(data.restaurants);
                        }
                        this.showContentView();
                        this.onRefreshComplete();

                    });
            })
            .catch(error => {
                this.showEmptyView();
            });
    }
    gotocat(event) {
        this.showLoadingView();
        event.target.classList.add("activeli");
        this.sounds.nativeElement.classList.remove("activeli");
        this.dine.nativeElement.classList.remove("activeli");
        this.take.nativeElement.classList.remove("activeli");
        this.deliver.nativeElement.classList.remove("activeli");
        this.party.nativeElement.classList.remove("activeli");
        this.getlocation()
            .then(resp => {
                this.valuesService
                    .GetPlacesWithZomato(resp.coords.latitude, resp.coords.longitude)
                    .subscribe((data: any) => {
                        if (data.restaurants != undefined && data.restaurants.length > 0) {
                            this.sharedData.RestuarentsChanged(data.restaurants);
                        }
                        this.showContentView();
                        this.onRefreshComplete();
                    });
            })
            .catch(error => {
                this.showEmptyView();
            });

    }
    soundsgood(event) {
        this.showLoadingView();
        event.target.classList.add("activeli");
        this.near.nativeElement.classList.remove("activeli");
        this.dine.nativeElement.classList.remove("activeli");
        this.take.nativeElement.classList.remove("activeli");
        this.deliver.nativeElement.classList.remove("activeli");
        this.party.nativeElement.classList.remove("activeli");
        //this.getlocation()
        //  .then(resp => {
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
                                debugger;
                                this.places = data.restaurants;
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
        //})
        //.catch(error => {
        //  this.showEmptyView();
        //});
    }
    filter() {
        this.showLoadingView();
        var data = this.realPlaces.filter(
            item =>
                item.restaurant.name
                    .toLowerCase()
                    .indexOf(this.searchTerm.toLowerCase()) > -1
        );
        this.places = data;
        this.showContentView();
        this.onRefreshComplete();
    }
    indRest(restuarants: any) {
        this.navigateTo("RestaurantDetailPage", restuarants);
    }
    back() {
        this.setRoot("DashPage");
        //this.navigateTo('DashPage');
    }
    dinein(event) {
        this.showLoadingView();
        event.target.classList.add("activeli");
        this.near.nativeElement.classList.remove("activeli");
        this.sounds.nativeElement.classList.remove("activeli");
        this.take.nativeElement.classList.remove("activeli");
        this.deliver.nativeElement.classList.remove("activeli");
        this.party.nativeElement.classList.remove("activeli");
        var data = this.realPlaces.filter(
            item => item.restaurant.has_table_booking === 1
        );
        this.places = data;

        this.showContentView();
        this.onRefreshComplete();
    }
    takeout(event) {
        this.showLoadingView();
        event.target.classList.add("activeli");
        this.near.nativeElement.classList.remove("activeli");
        this.dine.nativeElement.classList.remove("activeli");
        this.sounds.nativeElement.classList.remove("activeli");
        this.deliver.nativeElement.classList.remove("activeli");
        this.party.nativeElement.classList.remove("activeli");
        var data = this.realPlaces.filter(
            item => item.restaurant.is_delivering_now === 1
        );
        this.places = data;
        this.showContentView();
        this.onRefreshComplete();
    }
    delivery(event) {
        this.showLoadingView();
        event.target.classList.add("activeli");
        this.near.nativeElement.classList.remove("activeli");
        this.dine.nativeElement.classList.remove("activeli");
        this.take.nativeElement.classList.remove("activeli");
        this.sounds.nativeElement.classList.remove("activeli");
        this.party.nativeElement.classList.remove("activeli");
        var data = this.realPlaces.filter(
            item => item.restaurant.has_online_delivery === 1
        );
        this.places = data;
        this.showContentView();
        this.onRefreshComplete();
    }
    parties(event) {
        this.showLoadingView();
        this.near.nativeElement.classList.remove("activeli");
        event.target.classList.add("activeli");
        this.near.nativeElement.classList.remove("activeli");
        this.dine.nativeElement.classList.remove("activeli");
        this.take.nativeElement.classList.remove("activeli");
        this.deliver.nativeElement.classList.remove("activeli");
        this.sounds.nativeElement.classList.remove("activeli");
        this.getlocation()
            .then(resp => {
                this.valuesService
                    .GetPlacesWithZomato(resp.coords.latitude, resp.coords.longitude)
                    .subscribe((data: any) => {
                        if (data.restaurants != undefined && data.restaurants.length > 0) {
                            this.sharedData.RestuarentsChanged(data.restaurants);
                        }
                        this.showContentView();
                        this.onRefreshComplete();
                    });
            })
            .catch(error => {
                this.showEmptyView();
            });
    }
}
