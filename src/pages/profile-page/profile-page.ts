import { IonicPage } from 'ionic-angular';
import { Component,Injector } from '@angular/core';
import {  ModalController } from 'ionic-angular';
import { User } from '../../providers/user-service';
import { BasePage } from '../base-page/base-page';
import {
    ValuesService
} from '../../providers/ValuesService';
@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html'
})
export class ProfilePage extends BasePage {

  user: any;
  stats: any = {
    reviews: 0,
    places: 0,
    favorites: 0
  };

  constructor(injector: Injector, public valuesService :ValuesService,private modalCtrl: ModalController) {
    super(injector); 
		 this.sharedData.UserInfo.subscribe((data) => {
			      console.log(data);
            this.user = data;
        });
		this.valuesService.GetUserInfo();
	 
  }
 enableMenuSwipe() {
    return false;
  }

  ionViewDidLoad() {}

  onPresentEditModal() {
    let modal = this.modalCtrl.create('EditProfilePage', { user: this.user });
    modal.onDidDismiss(() => {
      this.valuesService.GetUserInfo();
    });
    modal.present();
  }

}
