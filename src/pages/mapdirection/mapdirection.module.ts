import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapdirectionPage } from './mapdirection';
import {GoogleMaps } from '@ionic-native/google-maps';
@NgModule({
  declarations: [
    MapdirectionPage,
  ],
  imports: [
    IonicPageModule.forChild(MapdirectionPage),
  ],
  exports: [
    MapdirectionPage
  ],
  providers:[
	GoogleMaps
  ]
})
export class MapdirectionPageModule {}
