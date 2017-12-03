import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderconfirmationPage } from './orderconfirmation';

@NgModule({
  declarations: [
    OrderconfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderconfirmationPage),
  ],
  exports: [
    OrderconfirmationPage
  ]
})
export class OrderconfirmationPageModule {}
