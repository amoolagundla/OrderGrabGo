import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
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
    public name: string; public firstName: string;public location:string;
    constructor(injector: Injector, public atrCtrl: AlertController) {
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
    showAlert() {
        let alert = this.atrCtrl.create({
            title: 'Success',
            subTitle: 'You have reserved successfully!',
        });
        alert.addButton({
            text: 'Ok',
            handler: data => {
                this.navigateTo('RestaurentPage');
            }
        });
        alert.present();
    }
}
