
import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';

import {  MenuController } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';

import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {
    private skipIntroPage;
   
    constructor(injector: Injector, 
        public storage: LocalStorage,
        public menu: MenuController
   ) {
      super(injector);
      this.storage.skipIntroPage.then(skipIntroPage => this.skipIntroPage = skipIntroPage);
       }

  enableMenuSwipe() {
    return false;
  }
login()
{ 
    this.skipIntroPage = true;
    this.storage.skipIntroPage = this.skipIntroPage;
    this.navigatePage();
	
}

}
