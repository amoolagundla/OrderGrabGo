
import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { Events } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { BasePage } from '../base-page/base-page';
import { Geolocation } from '@ionic-native/geolocation';
import {App} from '../../models/models';
import {
    ValuesService
} from '../../providers/ValuesService';
@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage extends BasePage {

public places:App.GooglePlaces;
  constructor(injector: Injector,
  
    private locationAccuracy: LocationAccuracy,
   
		 private valuesService: ValuesService,public geolocation: Geolocation) {
    super(injector);


    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if (canRequest) {

        let priority = this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY;

        this.locationAccuracy.request(priority)
          .then(() => console.log('Request successful'))
          .catch((error) => {

            if (error && error.code !== this.locationAccuracy.ERROR_USER_DISAGREED) {
              
            }

          });
      }
    }).catch((err) => console.log(err));
  }

  enableMenuSwipe() {
    return true;
  }

  ionViewDidLoad() {
    this.showLoadingView();
    this.loadData();
  }

  goToPlaces() {
    
  }
getlocation() {
    return this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
  }
  loadData() {
		
		   this.getlocation().then((resp) => {
		
      this.valuesService.CheckLocation(resp.coords.latitude , resp.coords.longitude).subscribe((data:App.GooglePlaces)=>
      {
				
				this.places=data;
				this.showContentView();
				

      this.onRefreshComplete();
        
      });
    }).catch((error) => {
			this.showEmptyView();
    }); 
		
    
  }

  onReload(refresher) {
    this.refresher = refresher;
    this.loadData();
  }

}
