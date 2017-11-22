import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservetablePage } from './reservetable';

@NgModule({
  declarations: [
    ReservetablePage,
  ],
  imports: [
    IonicPageModule.forChild(ReservetablePage),
  ],
  exports: [
    ReservetablePage
  ]
})
export class ReservetablePageModule {}
