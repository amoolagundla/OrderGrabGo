import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliverydetailsPage } from './deliverydetails';
import { Ionic2MaskDirective } from "ionic2-mask-directive";

@NgModule({
  declarations: [
      DeliverydetailsPage,
      Ionic2MaskDirective
  ],
  imports: [
    IonicPageModule.forChild(DeliverydetailsPage),
  ],
  exports: [
    DeliverydetailsPage
  ],
})
export class DeliverydetailsPageModule {}
