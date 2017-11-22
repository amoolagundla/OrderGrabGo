import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkingPage } from './parking';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    ParkingPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkingPage),
  ],
  exports: [
    ParkingPage
  ],
  providers: [
    GoogleMaps
  ]
})
export class ParkingPageModule {}
