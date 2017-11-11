
import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';



import { BasePage } from '../base-page/base-page';

@IonicPage()
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {

  constructor(injector: Injector,
   ) {
    super(injector);
this.getName('token').then((token:string)=>
	{
		if(token!=null)
		{
		console.log(token);
		this.setRoot('DashPage');
		}
		
	},error=>
	{
		this.setRoot('SignInPage');
	});
  }

  enableMenuSwipe() {
    return true;
  }
login()
{ 
this.setRoot('SignInPage');
	
}

}
