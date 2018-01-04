import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupPage } from './pickup';
import { Ionic2MaskDirective } from "ionic2-mask-directive";

@NgModule({
  declarations: [
      PickupPage, Ionic2MaskDirective
  ],
  imports: [
    IonicPageModule.forChild(PickupPage),
  ],
  exports: [
    PickupPage
  ]
})
export class PickupPageModule {}
