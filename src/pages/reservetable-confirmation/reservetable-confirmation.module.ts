import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservetableConfirmationPage } from './reservetable-confirmation';

@NgModule({
  declarations: [
    ReservetableConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservetableConfirmationPage),
  ],
  exports: [
    ReservetableConfirmationPage
  ]
})
export class ReservetableConfirmationPageModule {}
