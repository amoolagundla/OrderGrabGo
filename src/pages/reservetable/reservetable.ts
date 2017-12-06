import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
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
    public name: string; public firstName: string; location: string = '';
    reservationdate: Date = new Date();
    
    constructor(injector: Injector, public atrCtrl: AlertController, private service: ValuesService) {
        super(injector);
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        this.name = this.navParams.get('name');
        this.firstName = "OrderGrabGo";
		this.location = this.navParams.get('location').locality_verbose;
        console.log('ionViewDidLoad ReservetablePage');
    }
   

    save(model: any, isValid: boolean, event: Event) {
        if (isValid) {
            var orders = new App.Orders;
            orders.OrderId = 0;
            orders.CustomerId = 0;
            orders.ResturantId = this.navParams.get('id');
            orders.OrderTotal = 23;
            orders.LookupOrderTypeId = 69;
            orders.LookupStatusId = 47;
            orders.Instructions = model.Special;
            orders.OrderDetail = [];
            this.service.SaveOrders(orders).subscribe((data: any) => {
                console.log(data);
                let orderId = data.OrderId;
                var res = {
                    model: model,
                    orderId : data.OrderId
                }
                this.navigateTo('ReservetableConfirmationPage', res);
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
