import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
import { App } from '../../models.bundles';
import { ValuesService } from '../../providers/ValuesService';
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
    public data: any;
    constructor(injector: Injector, private valuesService: ValuesService,private actionSheetCtrl: ActionSheetController) {
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

    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'md-arrow-dropdown';
        } else {
            data.showDetails = true;
            data.icon = 'md-arrow-dropup';
        }
    }
	
	openActionSheet(){
	 console.log('opening');
	 let actionsheet = this.actionSheetCtrl.create({
	 title:"Choose Quantiy",
	 buttons:[{ 
		 text: '',
		 icon: 'add',  
	 },
	 { 
		 text: '',
		 icon: 'remove',  
	 }
	 ]
	 });
	 actionsheet.present();
	}
	
	pickup(){
		this.navigateTo('PickupPage');
	}

}
