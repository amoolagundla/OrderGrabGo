import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationTrackingPage } from './reservation-tracking';

@NgModule({
  declarations: [
    ReservationTrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationTrackingPage),
  ],
  exports: [
    ReservationTrackingPage
  ]
})
export class ReservationTrackingPageModule {}
