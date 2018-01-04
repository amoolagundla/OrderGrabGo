import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpPage } from './sign-up-page';
import { SharedModule } from '../../shared.module';
import { Ionic2MaskDirective } from "ionic2-mask-directive";

@NgModule({
  declarations: [
      SignUpPage, Ionic2MaskDirective
  ],
  imports: [
    IonicPageModule.forChild(SignUpPage),
    SharedModule
  ],
  exports: [
    SignUpPage
  ]
})
export class SignUpPageModule {}
