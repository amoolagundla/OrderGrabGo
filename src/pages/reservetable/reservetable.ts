import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
import { Geolocation } from '@ionic-native/geolocation';
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
    special: string = '';
    guests: string = '';
    public name: string; public firstName: string; location: string = ''; featuredImage: string = '';
    reservationdate: Date = new Date();
    
    constructor(injector: Injector, public atrCtrl: AlertController, private service: ValuesService, public geolocation: Geolocation) {
        super(injector);
        this.featuredImage = this.navParams.get('featured_image');
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
                //orders.CustomerMaster.FirstName = model.FirstName;
                //orders.CustomerMaster.LastName = model.FirstName;
                //orders.CustomerMaster.MobileNumber = model.PhoneNumber;
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
                        location:this.location
                    }
                    this.showContentView();
                    this.navigateTo('ReservetableConfirmationPage', res);
                },error=>{  this.showContentView();});
            });
        }
        else {
            let alert = this.atrCtrl.create({
                title: 'Required',
                subTitle: 'All fields are required!',
            });
            alert.addButton({
                text: 'Ok'
            });
            alert.present();
        }
    }
}
