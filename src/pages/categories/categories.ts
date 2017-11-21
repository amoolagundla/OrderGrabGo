
import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { Events } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Category } from '../../providers/categories';
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

  private categories: Array<Category>;
public places:App.GooglePlaces;
  constructor(injector: Injector,
    private events: Events,
    private locationAccuracy: LocationAccuracy,
    private diagnostic: Diagnostic,
		 private valuesService: ValuesService,public geolocation: Geolocation) {
    super(injector);


    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if (canRequest) {

        let priority = this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY;

        this.locationAccuracy.request(priority)
          .then((data:any) => console.log(data))
          .catch((error) => {

            if (error && error.code !== this.locationAccuracy.ERROR_USER_DISAGREED) {
              this.translate.get('ERROR_LOCATION_MODE').subscribe((res: string) => {
                this.showConfirm(res).then(() => this.diagnostic.switchToLocationSettings());
              });
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
    this.navigateTo('PlacesPage', this.categories[0]);
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
