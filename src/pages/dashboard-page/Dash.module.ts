import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashPage } from './Dash';
import { SharedModule } from '../../shared.module';
 
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
  ]
})
export class DashPageModule {}
