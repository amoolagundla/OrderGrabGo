
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from './HttpClient';
import {SharedDataService} from './SharedDataService';

import 'rxjs/add/operator/mergeMap';
@Injectable()
export class ValuesService {
    public UserInfo: any;
    public Categories: any;
    constructor(private http: HttpClient, private shared: SharedDataService
    ) { }

    login(userName: string, Password: string) {
			
			return this.http.login(userName,Password).map((response:any)=> response);
    }
     CheckLocation(start:any,end:any)
    {
        
        return this.http
              .get('api/ads/GetPlaces/'+start+'/'+end).map((response: Response) => response.json());
   
    }

     GetUserInfo() {

          this.http
             .get('api/user/').map((response: Response) => response.json()).subscribe((data: any) => {

                 this.shared.USerInfoChanged(data);
             }, error => {
             });    ;

     }
     googlelogin(user: any) {
         var token={
             AccessToken:user
         };
        return this.http.post('api/FacebookApi/GoogleLogin/',token ).map((response: Response) => response.json());
    }
    FacebookLogin(token: any) {
       
       return this.http.get('api/FacebookApi/Login/'+token ).map((response: Response) => response.json());
   }

		Register(user: any) {
        return this.http.post('api/Account/Registers', user).map((response: Response) => response.json());
    }
}