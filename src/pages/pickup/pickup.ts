import { Component, Injector } from '@angular/core';
import { IonicPage,   AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { LocalStorage } from '../../providers/local-storage';
import { CART } from '../cart/cartitems';
import swal from 'sweetalert';
/**
 * Generated class for the PickupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html',
})
export class PickupPage extends BasePage {
    public location: string = '';
    public user: any;
    public minPickupDate:any;
    pickdate: Date = new Date(); special: string = '';
    pickupTime: any = this.pickdate.getHours();
    timeTable: any; today: any; min: string = ''; max: string = ''; shours: number; smins: number; ehours: number; emins: number;
    mindate: string = ''; maxdate: string = '';
    constructor(injector: Injector, private altcntrl: AlertController,
        private storage: LocalStorage) 
        {
        super(injector);
        this.mindate = new Date().getFullYear().toString() + "-" + new Date().getMonth().toString() + "-" + new Date().getDate().toString();
        this.maxdate = (new Date().getFullYear() + 5).toString() + "-" + new Date().getMonth().toString() + "-" + new Date().getDate().toString();
        this.pickdate=new Date(this.pickdate.getTime() + parseInt(this.navParams.get('restuarant').data.takeout_estimate_time == null ? 0  
    :this.navParams.get('restuarant').data.takeout_estimate_time)*60000);
        this.pickupTime= this.pickdate.getTime();
        console.log(this.pickupTime);
        this.sharedData.UserInfo.subscribe((data) => {
            if (data != undefined && data.FirstName != undefined) {
                this.user = data;
                if (this.user.PhoneNumber != null && this.user.PhoneNumber != "") {
                    this.user.PhoneNumber = this.formatPhoneNumber(this.user.PhoneNumber);
                }
                //this.user.FirstName = this.user.FirstName + " " + this.user.LastName;
            } else {
                this.user.FirstName = "";
                this.user.LastName = "";
            }
        });
        this.storage.getAddress().then((data) => {
            this.location = data;
        })
        this.minPickupDate=new Date().toJSON().split('T')[0];;
        this.timeTable = this.navParams.get("restuarant").data.time_table;
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var tdate = new Date();
        this.today = days[tdate.getDay()];
        if (this.navParams.get("restuarant").data.time_table != undefined && this.navParams.get("restuarant").data.time_table != null) {
            for (let item of this.navParams.get("restuarant").data.time_table) {
                if (item.Day.toLowerCase() == this.today.toLowerCase()) {
                    this.shours = Number(item.startTime.split(':')[0]);
                    this.smins = Number(item.startTime.split(':')[1]);
                    this.ehours = Number(item.endTime.split(':')[0]);
                    this.emins = Number(item.endTime.split(':')[1]);
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
  }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        
    console.log('ionViewDidLoad PickupPage');
  }
checkout(){
	this.navigateTo('CheckoutPage');
}
    save(model: any, isValid: boolean, event: Event) {
        if (isValid) {
            var selectedTimeHour = model.PickupTime.split(':')[0];
            var selectedTimeMin = model.PickupTime.split(':')[1];
            //if(Number(selectedTimeHour) >12)
            //{
            //    selectedTimeHour= Number(selectedTimeHour)-12;
            //}
            var isopened = true;
            var selecteddaTe = new Date(model.PickupDate);
            selecteddaTe.setMinutes(selecteddaTe.getMinutes() + selecteddaTe.getTimezoneOffset());
            var sdate = selecteddaTe.getDate();
            var ispast = false;
            if (selecteddaTe.getDate() == new Date().getDate() && selecteddaTe.getMonth() == new Date().getMonth()) {
                if (Number(selectedTimeHour) < new Date().getHours()) {
                    isopened = false;
                    ispast = true;
                }
                else if (Number(selectedTimeHour) == new Date().getHours() && Number(selectedTimeMin) < new Date().getMinutes()) {
                    isopened = false;
                    ispast = true;
                }
            }
            else if (selecteddaTe.getMonth() < new Date().getMonth() || selecteddaTe.getFullYear() < new Date().getFullYear()) {
                isopened = false;
                ispast = true;
            }
            if (isopened) {
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
            }
            if (isopened) {
                var res = {
                    IsBank:this.navParams.get("IsBank"),
                    page: 'Pick',
                    model: model,
                    restuarant: this.navParams.get('restuarant'),
                    params: this.navParams,
                    location: this.navParams.get('restuarant').data.location
                }
                this.navigateTo('CheckoutPage', res);
            }
            else {
                if (ispast) {
                    swal('Oops', 'You have selected the past time. Kindly select the valid present time', 'error');
                }
                else {
                    swal('Closed', 'Restaurant is closed on the selected date and time! Kindly set pickup time in open hours', 'error');
                }
            }
        }
        else {
            swal('Required', 'All fields are required!', 'error');
        }
    }
    home() {
        if (CART.total > 0) {
            let alert = this.altcntrl.create({
                title: 'Clear Cart',
                subTitle: 'Are you sure you would like to go back to home? The cart will be cleared.',
            });
            alert.addButton({
                text: 'Cancel'
            });
            alert.addButton({
                text: 'Yes',
                handler: data => {
                    this.setRoot("DashPage");
                }
            });
            alert.present();
        }
        else {
            this.setRoot("DashPage");
        }
    }
    formatPhoneNumber(s) {
        var s2 = ("" + s).replace(/\D/g, '');
        var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? "" : "(" + m[1] + ") " + m[2] + "-" + m[3];
    }
}
