import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from './HttpClient';
import 'rxjs/add/operator/mergeMap';
@Injectable()
export class ValuesService {
    public UserInfo: any;
    public Categories: any;
    constructor(private http: HttpClient
    ) { }

    login(userName: string, Password: string) {
			
			return this.http.login(userName,Password).map((response:any)=> response);
    }
     CheckLocation(start:any,end:any)
    {
        
        return this.http
              .get('api/ads/GetPlaces/'+start+'/'+end).map((response: Response) => response.json());
   
    }
		
		Register(user: any) {
        return this.http.post('api/Account/Registers', user).map((response: Response) => response.json());
    }
}