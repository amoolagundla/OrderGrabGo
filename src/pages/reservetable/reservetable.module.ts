import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservetablePage } from './reservetable';
import { Ionic2MaskDirective } from "ionic2-mask-directive";

@NgModule({
  declarations: [
      ReservetablePage, Ionic2MaskDirective
  ],
  imports: [
    IonicPageModule.forChild(ReservetablePage),
  ],
  exports: [
    ReservetablePage
  ]
})
export class ReservetablePageModule {}
