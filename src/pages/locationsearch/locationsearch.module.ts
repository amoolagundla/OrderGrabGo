import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationsearchPage } from './locationsearch';

@NgModule({
  declarations: [
    LocationsearchPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationsearchPage),
  ],
  exports: [
    LocationsearchPage
  ]
})
export class LocationsearchPageModule {}
