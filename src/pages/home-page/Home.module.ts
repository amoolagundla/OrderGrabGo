import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './Home';
import { SharedModule } from '../../shared.module';
 
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SharedModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
