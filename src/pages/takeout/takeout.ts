import { Component, Injector } from '@angular/core';
import { IonicPage,    AlertController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
import { CART } from '../cart/cartitems';
/**
 * Generated class for the TakeoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-takeout',
    templateUrl: 'takeout.html',
})
export class TakeoutPage extends BasePage {
    public firstName: string = 'OrderGrabGo';
    public name: string;
    public data: any; public pageDetails: any; featuredImage: string = '';
    constructor(injector: Injector, private valuesService: ValuesService,
        private altController: AlertController) {
        super(injector);
        this.featuredImage = this.navParams.get('featured_image');
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

    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'md-arrow-dropdown';
        } else {
            data.showDetails = true;
            data.icon = 'md-arrow-dropup';
        }
    }
    itemdetails(product: any) {
        this.pageDetails = {
            product: product,
            restuarant: this.navParams,
            pagename: 'Takeout'
        };
        this.navigateTo('ItemdetailPage', this.pageDetails);
    }
	
	
	pickup(){
        //this.navigateTo('PickupPage');
        this.pageDetails = {
            restuarant: this.navParams,
            pagename: 'Takeout'
        };
        if (CART.total > 0) {
            if (CART.total > CART.Minimum || CART.total == CART.Minimum) {
                this.navigateTo('CartPage', this.pageDetails);
            }
            else {
                let alert = this.altController.create({
                    title: 'Minimum Order Amount',
                    subTitle: 'Minimum order amount is $' + CART.Minimum,
                });
                alert.addButton({
                    text: 'Ok'
                });
                alert.present();
            }
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
                    this.setRootWithParams('RestaurentPage', this.navParams);
                }
            });
            alert.present();
        }
        else {
            this.navigateTo('RestaurantDetailPage', this.navParams);
        }
    }
}
