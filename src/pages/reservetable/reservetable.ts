import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
import { Geolocation } from '@ionic-native/geolocation';
import { SharedDataService } from "../../providers/SharedDataService";
import swal from 'sweetalert';
/**
 * Generated class for the ReservetablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-reservetable',
    templateUrl: 'reservetable.html',
})
export class ReservetablePage extends BasePage{
    //form: any;
    public user: any;
    special: string = '';
    guests: string = '';
    public name: string; public firstName: string; location: string = ''; featuredImage: string = ''; minGuest: number = 0;
    Cancellationfee: string = '';
    restaurantImages: any;
    reservationdate: Date = new Date();
    reservationtime: any; timeTable: any; today: any; min: string = ''; max: string = ''; shours: number; smins: number; ehours: number; emins: number;
    constructor(injector: Injector, public atrCtrl: AlertController, private service: ValuesService, public geolocation: Geolocation, private _shared: SharedDataService,) {
        super(injector);
        var timeHours = new Date().getHours();
        var timeMin = new Date().getMinutes()
        this._shared.UserInfo.subscribe(data => {

            if (data != undefined && data.FirstName != undefined) {
                this.user = data;
            } else {
                this.firstName = "";
            }
        });
        if (this.navParams.get('delivery_estimate_time') != null) {
            timeMin = timeMin + Number(this.navParams.get('delivery_estimate_time'));
            if (timeMin >= 60) {
                timeMin = timeMin - 60;
                timeHours = timeHours + 1;
            }
        }
        this.reservationtime = timeHours.toString() + ":" + timeMin.toString();
        if (this.navParams.get('ReservationCancellationFee') != undefined && this.navParams.get('ReservationCancellationFee') != null)
            this.Cancellationfee = this.navParams.get('ReservationCancellationFee');
        this.featuredImage = this.navParams.get('featured_image');
        this.timeTable = this.navParams.get('time_table');
        this.restaurantImages = this.navParams.get('RestaurantImages');
        if (this.navParams.get('MinReservation') != undefined && this.navParams.get('MinReservation') != null) {
            this.minGuest = Number(this.navParams.get('MinReservation'));
        }
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var tdate = new Date();
        this.today = days[tdate.getDay()];
        for (let item of this.navParams.get('time_table')) {
            if (item.Day.toLowerCase() == this.today.toLowerCase()) {
                this.shours = item.startTimeHours;
                this.smins = item.startTimeMins;
                this.ehours = item.endTimeHours;
                this.emins = item.endTimeMins;
                var starthour = item.startTimeHours.toString();
                var startmin = item.startTimeMins.toString();
                if (item.startTimeHours < 10) {
                    starthour = "0" + item.startTimeHours.toString();
                }
                if (item.startTimeMins < 10) {
                    startmin = "0" + item.startTimeMins;
                }
                this.min = starthour + ":" + startmin;
                var endhour = item.endTimeHours.toString();
                var endmin = item.endTimeMins.toString();
                if (item.endTimeHours < 10) {
                    endhour = "0" + item.endTimeHours.toString();
                }
                if (item.endTimeMins < 10) {
                    endmin = "0" + item.endTimeMins;
                }
                this.max = endhour + ":" + endmin;
            }
        }
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        this.name = this.navParams.get('name');
        this.firstName = "OrderGrabGo";
		this.location = this.navParams.get('location').address +","+ this.navParams.get('location').city +","+this.navParams.get('location').zipcode;

    }
   

    save(model: any, isValid: boolean, event: Event) {
        if (isValid) {
            if (Number(model.Guests) >= this.minGuest) {
                var selectedTimeHour = model.ReservationTime.split(':')[0];
                var selectedTimeMin = model.ReservationTime.split(':')[1];
                var isopened = true;
                if (Number(selectedTimeHour) >= this.shours && Number(selectedTimeHour) <= this.ehours) {
                    if (Number(selectedTimeHour) == this.shours && Number(selectedTimeMin) < this.smins) {
                        isopened = false;
                    }
                    if (Number(selectedTimeHour) == this.ehours && Number(selectedTimeMin) > this.emins) {
                        isopened = false;
                    }
                }
                else {
                    isopened = false;
                }
                if (isopened) {
                    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((data) => {
                        var orders = new App.Orders;
                        orders.OrderId = 0;
                        orders.CustomerId = 0;
                        orders.ResturantId = this.navParams.get('id');
                        orders.OrderTotal = 23;
                        orders.LookupOrderTypeId = 69;
                        orders.LookupStatusId = 47;
                        orders.Instructions = model.Special;
                        orders.OrderAddress = new App.OrderAddress();
                        orders.OrderAddress.address1 = model.Location;
                        orders.OrderAddress.phoneNo = model.PhoneNumber;
                        orders.ReservationPeopleCount = model.Guests;
                        orders.ReservationTime = new Date(model.ReservationDate + " " + model.ReservationTime);
                        orders.Time = model.ReservationTime;
                        orders.OrderAddress.city = "Des Moines";
                        orders.OrderDetail = [];
                        this.showLoadingView();
                        this.service.SaveOrders(orders).subscribe((data: any) => {
                            console.log(data);
                            let orderId = data.OrderId;
                            var res = {
                                model: model,
                                orderId: data.OrderId,
                                restuarants: this.navParams.data,
                                location: this.location
                            }
                            this.showContentView();
                            this.navigateTo('ReservetableConfirmationPage', res);
                        }, error => { this.showContentView(); });
                    });
                }
                else {
                    swal('Closed', 'Restaurant is closed on the selected date and time! Kindly reserve in open hours', 'error');
                }
            }
            else {
                swal('Minimum', 'Minimum number of guest should be '+this.minGuest, 'error');
            }
        }
        else {
            swal('Required', 'All fields are required!', 'error');
        }
        
    }
    


}
