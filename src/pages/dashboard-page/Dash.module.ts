import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashPage } from './Dash';
import { SharedModule } from '../../shared.module';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
 
@NgModule({
  declarations: [
    DashPage,
  ],
  imports: [
    IonicPageModule.forChild(DashPage),
    SharedModule
  ],
  exports: [
    DashPage
  ],
  providers: [
      NativeGeocoder
  ]
})
export class DashPageModule {}
