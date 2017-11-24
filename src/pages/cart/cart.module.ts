import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
  ],
  exports: [
    CartPage
  ],
  providers: [
      DecimalPipe
  ]
})
export class CartPageModule {}
