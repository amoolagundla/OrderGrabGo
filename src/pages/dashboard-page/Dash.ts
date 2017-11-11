
import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';



import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'Dash',
  templateUrl: 'Dash.html'
})
export class DashPage extends BasePage {

  constructor(injector: Injector,
   ) {
    super(injector);

  }

  enableMenuSwipe() {
    return true;
  }
	
	onFilter(filter) {
    
  }
	
	
login()
{ this.navigateTo('CategoriesPage');
	
}

}
