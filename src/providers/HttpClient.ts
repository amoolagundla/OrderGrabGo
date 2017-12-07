import { Injectable,Injector } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs';

@Injectable()
export class HttpClient {
  // public baseurl: any ='http://localhost:58048/';
 public baseurl:any ='https://ordergrabgoepathusa.azurewebsites.net/';
  constructor(private http: Http, public storage: Storage) {   }
enableMenuSwipe() {
    return false;
  }
  createAuthorizationHeader(headers: Headers) {
		
			this.storage.get('token').then((token:string)=>
			{
				headers.append('Access-Control-Allow-Origin','*');
		 headers.append('Content-Type', 'application/json');
		 headers.append('Authorization', 'Bearer ' +token);
      return headers;
			});
  

  }
getApiToken(): Observable<Headers> {
     let headers: Headers = new Headers();
    return Observable.fromPromise(this.storage.get('token').then((token:string) => {
				headers.append('Access-Control-Allow-Origin','*');
		 headers.append('Content-Type', 'application/json');
		 headers.append('Authorization', 'Bearer ' +token);
      return headers;
			},error=>
					{
					 return headers;	
    }));
  
}

getHeaders(): Headers { 
    return new Headers();
}


get(url: string): Observable<any> {   
    return this.getApiToken().flatMap(head => {         
       return this.http.get(this.baseurl+url , {
      headers: head
    });
    });
}

  delete(url:any) {

   return this.getApiToken().flatMap(head => {   
    return this.http.delete(this.baseurl+url, {
      headers: head
    });
   });
  }
  post(url:any, data:any) {
    return this.getApiToken().flatMap(head => {   
    return this.http.post(this.baseurl+url, data, {
      headers: head
    });
    });
  }

  put(url:any, data:any) {
    return this.getApiToken().flatMap(head => {  
    return this.http.put(this.baseurl+url, data, {
      headers: head
    });
    });
  }

  login(userName:any,password:any)
	{
		    let url = "Token";
        let body = "username=" + userName + "&password=" + password + "&grant_type=password";
        let headers = new Headers();
				headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );

				
       // let options = new RequestOptions({ headers: headers });        
         
       return this.http.post(this.baseurl+url, body, { headers: headers });
	}
	
	
  RegisterExternalLogin(token:any,email:any,url:any)
  {
     let headers: Headers = new Headers();
     let data={
       Email:email
     }
         headers.append('Authorization', 'Bearer ' +token);
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.baseurl+url, JSON.stringify(data), {
      headers: headers
    });
  }
}