import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliverydetailsPage } from './deliverydetails';

@NgModule({
  declarations: [
    DeliverydetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliverydetailsPage),
  ],
  exports: [
    DeliverydetailsPage
  ]
})
export class DeliverydetailsPageModule {}
