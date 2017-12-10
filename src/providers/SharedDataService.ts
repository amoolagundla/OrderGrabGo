import { Injectable } from '@angular/core';
import {App} from '../models/models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {    Storage} from '@ionic/storage';
import { ValuesService } from './ValuesService';

@Injectable()
export class SharedDataService {
    private _valuesService: ValuesService;
    constructor(public storage: Storage) {
        this.getUserInfo();
       
    }

    public getUserInfo() {
        this.storage.get('restaurents').then((data) => { 
            if(data!='null') 
            {    
                
            this.RestuarentsChanged(JSON.parse(data));
            }
        }, error => {
        });

    }
  
    public pushtoken= new BehaviorSubject<string>(null); 

    public UserInfo = new BehaviorSubject<any>(new App.UserInfoViewModel());
    public Restuarents = new BehaviorSubject<any[]>(Array<App.GooglePlaces>());
    public USerInfoChanged(newData: App.UserInfoViewModel) {
        this.UserInfo.next(newData);
        
    } 
    
    public pushtokenChanged(newData: any) {
        this.pushtoken.next(newData);    
     
} 

    public RestuarentsChanged(newData: any) {
                this.Restuarents.next(newData);    
                this.storage.set('restaurents',JSON.stringify(newData));
    }   
}