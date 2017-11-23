import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakeoutPage } from './takeout';

@NgModule({
  declarations: [
    TakeoutPage,
  ],
  imports: [
    IonicPageModule.forChild(TakeoutPage),
  ],
  exports: [
    TakeoutPage
  ]
})
export class TakeoutPageModule {}
