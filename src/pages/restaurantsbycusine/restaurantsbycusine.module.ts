import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantsbycusinePage } from './restaurantsbycusine';

@NgModule({
  declarations: [
    RestaurantsbycusinePage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantsbycusinePage),
  ],
  exports: [
    RestaurantsbycusinePage
  ]
})
export class RestaurantsbycusinePageModule {}
