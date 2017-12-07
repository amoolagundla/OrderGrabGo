import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from './HttpClient';
import {SharedDataService} from './SharedDataService';
import { App } from '../models.bundles';
import 'rxjs/add/operator/mergeMap';
import { Storage } from '@ionic/storage';
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

    GetPlacesWithZomato(start:any,end:any)
    {
        
        return this.http
              .get('api/ads/GetPlaceswithzomato/'+start+'/'+end).map((response: Response) => response.json());
   
    }
  FindCuisineWithZomato(start: any, end: any) {

        return this.http
            .get('api/ads/FindCuisineWithZomato/' + start + '/' + end).map((response: Response) => response.json());

    }
	 FindplcaesWithCuinesSelected(start: any, end: any,dat:any) {
	 
        var jdata = {
            "lat": start,
            "log": end,
            "cuisineIdList": dat
        };
        var resdata= this.http.post('api/ads/FindplcaesWithCuinesSelected/', jdata).map((response: Response) => response.json());
return resdata;
    }
	FindCuisineMenu(id: any) {

        return this.http
            .get('api/ProductsApi/GetMenu/' + id).map((response: Response) => response.json());

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

    GetAddress(lat: any, long: any) {
       return this.http.get('api/ads/GetAddress/'+lat+'/'+long).map((response:Response)=>response.json());
   }

		Register(user: any) {
        return this.http.post('api/Account/Registers', user).map((response: Response) => response.json());
    }
    SaveToken(token:any)
    {
        let tokens ={
            UserId:null,
            Pushtoken:token,
            isActive:true
        }
        return this.http.post('api/PushTokenApi/SaveToken', JSON.stringify(tokens)).map((response: Response) => response.json());
        }

    SaveOrders(Orders: App.Orders) {
        var ds = JSON.stringify(Orders);
        
        return this.http.post('api/ProductsApi/PostOrderMaster', JSON.stringify(Orders)).map((response: Response) => response.json());
    }

    GetOrders() {
        return this.http.get('api/ProductsApi/GetOrderHistory/4').map((response: Response) => response.json());
    }
    GetOrderStatusHistory(id:any) {
        return this.http.get('api/ProductsApi/GetOrderStatusHistory/'+id).map((response: Response) => response.json());
    }
    GetOrderDetail(id : any) {
        return this.http.get('api/ProductsApi/GetOrderDetail/'+id).map((response: Response) => response.json());
    }
}