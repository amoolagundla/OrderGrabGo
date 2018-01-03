import { Component, Injector } from "@angular/core";
import {
    IonicPage,
    NavController,
    NavParams,
    AlertController
} from "ionic-angular";
import { CART } from "../cart/cartitems";
import { BasePage } from "../base-page/base-page";
import { App } from "../../models.bundles";
import { ValuesService } from "../../providers/ValuesService";
import { Geolocation } from "@ionic-native/geolocation";
import swal from 'sweetalert2';
import { Stripe } from '@ionic-native/stripe';
import { Card } from "ionic-angular/components/card/card";
import { error } from "util";
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: "page-checkout",
    templateUrl: "checkout.html"
})
export class CheckoutPage extends BasePage {
    public total: any;
    public user: any;
    public model: any;
    public cart: any;
    pageName: string = "";
    paid: boolean = false;
    public IsBank: boolean = false;
    public cardinfo: any = {
        number: '',
        expMonth: '',
        expYear: '',
        cvc: '',
        name: '',
        zipcode:''
    };
    public bankAccount = {
        routing_number: '',
        account_number: '',
        bank_name:'',
        account_holder_name: '', // optional
        account_holder_type: '', // optional
        currency: 'USD',
        country: 'USA'
    };
    timeTable: any; today: any; min: string = ''; max: string = ''; shours: number; smins: number; ehours: number; emins: number;

    code: any;
    constructor(
        injector: Injector,
        private altcntrl: AlertController,
        private service: ValuesService,
        public geolocation: Geolocation, public stripe: Stripe
    ) {
        super(injector);
        this.cart = CART;
        this.total = CART.total;

        this.sharedData.UserInfo.subscribe(data => {
            if (data != undefined && data.FirstName != undefined) {
                this.user = data;
            }
        });
        this.model = this.navParams.get("model");
        this.pageName = this.navParams.get("page");
        this.IsBank = this.navParams.get("IsBank");
        console.log(this.IsBank);
        this.service.getCode().subscribe((res: any) => {
            this.code = res;
        }, err => { });
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {

    }
    pay() {
        if (true) {
            this.paid = true;
            var resparams = this.navParams.get("restuarant").location;
            var model = this.navParams.get("model");
            let time: any;
            this.geolocation
                .getCurrentPosition({
                    maximumAge: 3000,
                    timeout: 5000,
                    enableHighAccuracy: true
                })
                .then(data => {
                    var orders = new App.Orders();
                    orders.OrderId = 0;
                    orders.CustomerId = 0;
                    orders.ResturantId = this.navParams.get("restuarant").data.id;
                    orders.OrderTotal = CART.total;
                    orders.OrderAddress = new App.OrderAddress();
                    orders.OrderAddress.address1 = " ";
                    if (
                        this.navParams.get("page") != undefined &&
                        this.navParams.get("page") == "Deliver"
                    ) {
                        orders.LookupOrderTypeId = 10;
                        orders.OrderAddress.address1 = model.Address;
                        orders.DeliveryTime = new Date(model.DeliveryDate + " " + model.DeliveryTime)
                        orders.DeliveryTime.setMinutes(orders.DeliveryTime.getMinutes() + orders.DeliveryTime.getTimezoneOffset());
                        orders.Time = model.DeliveryTime;
                        time = "Your Delivery time " + model.DeliveryTime;
                    } else {
                        orders.LookupOrderTypeId = 8;
                        orders.OrderAddress.address1 = model.Location;
                        orders.PickupTime = new Date(model.PickupDate + " " + model.PickupTime)
                        orders.PickupTime.setMinutes(orders.PickupTime.getMinutes() + orders.PickupTime.getTimezoneOffset());
                        orders.Time = model.PickupTime;
                        time = "Your Pickup time " + model.PickupTime;
                    }
                    orders.Instructions = model.Special;
                    orders.OrderAddress.firstName = model.FirstName;
                    orders.OrderAddress.lastName = model.LastName;
                    orders.OrderAddress.phoneNo = model.PhoneNumber;
                    orders.OrderAddress.city = "Des Moines";
                    orders.OrderDetail = new Array<App.OrderDetail>();
                    for (var i = 0; i < CART.items.length; i++) {
                        var orderdetail = new App.OrderDetail();
                        orderdetail.ProductId = CART.items[i].id;
                        orderdetail.Price = CART.items[i].price;
                        orderdetail.Quantity = CART.items[i].quantity;
                        orderdetail.IsActive = false;
                        orderdetail.IsDeleted = false;
                        orderdetail.OrderId = 0;
                        orderdetail.CreatedDate = new Date();
                        orderdetail.ModifiedDate = new Date();
                        orderdetail.CreatedUserId = null;
                        orderdetail.ModifiedUserId = null;
                        orderdetail.Product = null;
                        orderdetail.Order = null;
                        orderdetail.OrderDetailId = 0;
                        orders.LookupStatusId = 47;
                        orders.OrderDetail.push(orderdetail);
                    }
                    this.showLoadingView();
                    this.service.SaveOrders(orders).subscribe(
                        (data: any) => {
                            console.log(data);


                            if (
                                this.navParams.get("page") != undefined &&
                                this.navParams.get("page") == "Deliver"
                            ) {

                                time = "Your Delivery time " + data.Time;
                            } else {
                                time = "Your Pickup time " + data.Time;
                            }


                            let orderId = data.OrderId;
                            var dat = {
                                model: this.navParams.get("model"),
                                pageName: this.navParams.get("page"),
                                orderId: orderId,
                                reservedTime: time,
                                location:
                                this.navParams.get("location").address +
                                "," +
                                this.navParams.get("location").city +
                                "," +
                                this.navParams.get("location").zipcode
                            };
                            this.showContentView();
                            this.navigateTo("OrderconfirmationPage", dat);
                        },
                        error => {
                            this.showContentView();
                        }
                    );
                });
        }
    }
    creditCard() {

        this.stripe.setPublishableKey('pk_test_0fX3T9CWHeThBzxxtp4bdOiI');
        if (this.cardinfo.number != '' && this.cardinfo.expMonth != '' && this.cardinfo.expYear != '' && this.cardinfo.cvc != '' && this.cardinfo.zipcode) {
            if ((Number(this.cardinfo.expMonth) > 0 && Number(this.cardinfo.expMonth) < 13) && (Number(this.cardinfo.expYear) >= new Date().getFullYear())) {
                //this.stripe.validateCardNumber(this.cardinfo.number).then(() => {
                this.showLoadingView();
                var model = this.navParams.get("model");
                var cardMonth = this.cardinfo.expMonth.toString();
                if (Number(this.cardinfo.expMonth) < 10) {
                    cardMonth = "0" + this.cardinfo.expMonth.toString();
                }
                var cardDetails = {
                    cardNumber: this.cardinfo.number,
                    expirationDate: cardMonth + this.cardinfo.expYear.toString().substring(2),
                    cardCode: this.cardinfo.cvc
                }
                var billing = {
                    firstName: model.FirstName,
                    lastName: model.LastName,
                    address: model.address1,
                    city: "Des Moines",
                    zip: "50266"
                };
                var cartItems = [];
                for (var i = 0; i < CART.items.length; i++) {
                    var item = {
                        itemId: CART.items[i].id,
                        name: CART.items[i].name,
                        quantity: CART.items[i].quantity,
                        unitPrice: CART.items[i].price
                    }
                    cartItems.push(item);
                }
                var data = {
                    creditcardDetails: cardDetails,
                    billingAddress: billing,
                    items: cartItems,
                    Amount: CART.total
                };
                //this.stripe.createCardToken(this.cardinfo).then(token => {
                this.service.CreditCardPay(data).subscribe(res => {
                    //alert(token);
                    this.showContentView();
                    if (res != null && res.transactionResponse.responseCode == 1) {
                        this.pay();
                    }
                    else {
                        swal('Oops', "Invalid credentials or no balance in this card. Try again!", 'error');
                    }
                }, error => {
                    this.showContentView();
                    swal('Oops', "Please Enter Correct Card Information", 'error');
                });
            }
            else {
                swal('Oops', "Invalid Month or Year", 'error');
            }
            //}, error => {

            //    swal('Oops', "Please Enter Correct Card Information", 'error');
            //});
        }
        else {
            swal('Oops', "Please Enter All the fields", 'error');
        }
    }
    PayBank() {
        this.stripe.setPublishableKey('pk_test_0fX3T9CWHeThBzxxtp4bdOiI');
        if (this.bankAccount.routing_number != '' && this.bankAccount.account_number != '' && this.bankAccount.account_holder_name != '' && this.bankAccount.bank_name != '' && this.bankAccount.currency != '' && this.bankAccount.country != '') {
            this.showLoadingView();
            var data = {
                routingNumber: this.bankAccount.routing_number.toString(),
                accountNumber: this.bankAccount.account_number.toString(),
                AccoutHolderName: this.bankAccount.account_holder_name,
                Amount: CART.total,
                bankName: this.bankAccount.bank_name
            }
            this.service.CheckingAccount(data).subscribe(res => {
                //alert(token);
                this.showContentView();
                if (res != null && res.transactionResponse.responseCode == 1) {
                    this.pay();
                }
                else {
                    swal('Oops', "Invalid credentials or check your bank balance and try again!", 'error');
                }
            }, error => {
                this.showContentView();
                swal('Oops', "Please Enter Correct Bank details", 'error');
            });
            // this.showLoadingView();
            //   this.stripe.createBankAccountToken(this.bankAccount).then(token => {
            //     //alert(token);         
            //     this.showContentView();
            //     this.pay();
            //   },error=>
            // {
            //   this.showContentView();
            //   swal('Oops',"Please Enter Correct Card Information", 'error');
            // });

        }
        else {
            swal('Oops', "Please Enter All the fields", 'error');
        }
    }
    home() {
        if (CART.total > 0) {
            let alert = this.altcntrl.create({
                title: "Clear Cart",
                subTitle:
                "Are you sure you would like to go back? The cart will be cleared."
            });
            alert.addButton({
                text: "Cancel"
            });
            alert.addButton({
                text: "Yes",
                handler: data => {
                    this.setRoot("DashPage");
                }
            });
            alert.present();
        } else {
            this.setRoot("DashPage");
        }
    }
}
