import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurentPage } from './restaurent';
import { SharedModule } from '../../shared.module';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
 
@NgModule({
  declarations: [
      RestaurentPage
  ],
  imports: [
    IonicPageModule.forChild(RestaurentPage),
    SharedModule
  ],
  exports: [
    RestaurentPage
  ],
  providers: [
    NativeGeocoder
  ]
})
export class RestaurentPageModule {}
