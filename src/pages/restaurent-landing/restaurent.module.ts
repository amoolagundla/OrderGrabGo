import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurentPage } from './restaurent';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    RestaurentPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurentPage),
    SharedModule
  ],
  exports: [
    RestaurentPage
  ]
})
export class RestaurentPageModule {}
