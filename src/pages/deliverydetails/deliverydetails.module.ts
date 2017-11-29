import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliverydetailsPage } from './deliverydetails';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
@NgModule({
  declarations: [
      DeliverydetailsPage
  ],
  imports: [
    IonicPageModule.forChild(DeliverydetailsPage),
  ],
  exports: [
    DeliverydetailsPage
  ],
  providers: [
      NativeGeocoder
  ]
})
export class DeliverydetailsPageModule {}
