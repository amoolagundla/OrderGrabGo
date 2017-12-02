import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderTrackingPage } from './order-tracking';

@NgModule({
  declarations: [
    OrderTrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderTrackingPage),
  ],
  exports: [
    OrderTrackingPage
  ]
})
export class OrderTrackingPageModule {}
