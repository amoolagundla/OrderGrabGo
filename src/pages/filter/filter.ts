import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page/base-page';
/**
 * Generated class for the FilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-filter',
    templateUrl: 'filter.html',
})
export class FilterPage extends BasePage {

    constructor(injector: Injector, public navParams: NavParams) {
        super(injector);
    }
    enableMenuSwipe() {
        return true;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FilterPage');
    }

}
