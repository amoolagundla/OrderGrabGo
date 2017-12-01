import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
import { CART } from '../cart/cartitems';
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
    public pageDetails: any;
    constructor(injector: Injector, private valuesService: ValuesService,
        private actionSheetCtrl: ActionSheetController, private altController: AlertController) {
        super(injector);
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidLoad() {
        this.showLoadingView();
        this.name = this.navParams.get('name');
        console.log('ionViewDidLoad TakeoutPage');
        var prodMaster = [{
            ProductName: 'Pizza',
            ProductDescription: 'Tasty and Yummy',
            Price : 5.25
        },
            {
                ProductName: 'Burger',
                ProductDescription: 'Delicious burger',
                Price: 3.25
            },
            {
                ProductName: 'Cheese Bread',
                ProductDescription: 'Cheesy Cheesy',
                Price: 1.5
            },
            {
                ProductName: 'Hot Tacos',
                ProductDescription: 'Really Hot',
                Price:8
            },
            {
                ProductName: 'Chicken Snacker',
                ProductDescription: 'With some extra puff',
                Price: 2
            }];
        
       // this.valuesService.FindCuisineMenu(this.navParams.get('id')).subscribe((data: App.ProductMenu) => {

            this.data = prodMaster;
            this.showContentView();
            this.onRefreshComplete();
       // });


    }
    itemdetails(product: any) {
        this.pageDetails = {
            product: product,
            restuarant: this.navParams,
            pagename: 'Delivery'
        };
        this.navigateTo('ItemdetailPage', this.pageDetails);
    }
    deliverydetails() {
        this.pageDetails = {
            restuarant: this.navParams,
            pagename: 'Delivery'
        };
        if (CART.total > 0) {
            this.navigateTo('CartPage', this.pageDetails);
        }
        else {
            let alert = this.altController.create({
                title: 'Cart is empty',
                subTitle: 'Kindly add some item to cart before continue!',
            });
            alert.addButton({
                text: 'Ok'
            });
            alert.present();
        }
    }
    back() {
        if (CART.total > 0) {
            let alert = this.altController.create({
                title: 'Clear Cart',
                subTitle: 'Are you sure you would like to go back? The cart will be cleared.',
            });
            alert.addButton({
                text: 'Cancel'
            });
            alert.addButton({
                text: 'Yes',
                handler: data => {
                    this.navigateTo('RestaurantDetailPage', this.navParams);
                }
            });
            alert.present();
        }
        else {
            this.navigateTo('RestaurantDetailPage', this.navParams);
        }
    }
}
