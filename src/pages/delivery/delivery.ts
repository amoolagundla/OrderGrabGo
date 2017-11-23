import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
/**
 * Generated class for the DeliveryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage extends BasePage{

    public firstName: string = 'OrderGrabGo';
    public name: string;
    public data: any;
    constructor(injector: Injector, private valuesService: ValuesService, private actionSheetCtrl: ActionSheetController) {
        super(injector);
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        this.showLoadingView();
        this.name = this.navParams.get('name');
        console.log('ionViewDidLoad TakeoutPage');
        this.valuesService.FindCuisineMenu(this.navParams.get('id')).subscribe((data: App.ProductMenu) => {

            this.data = data.ProductMaster;
            this.showContentView();
            this.onRefreshComplete();
        });


    }
deliverydetails(){
	this.navigateTo('DeliverydetailsPage');
}
}
