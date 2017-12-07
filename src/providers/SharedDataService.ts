import { Injectable } from '@angular/core';
import {App} from '../models/models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {
    Storage
} from '@ionic/storage';

@Injectable()
export class SharedDataService {
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


    public UserInfo = new BehaviorSubject<any>(new App.UserInfoViewModel());
    public Restuarents = new BehaviorSubject<any[]>(Array<App.GooglePlaces>());
    public USerInfoChanged(newData: App.UserInfoViewModel) {
        this.UserInfo.next(newData);
        
    } 
    
    public RestuarentsChanged(newData: any) {
                this.Restuarents.next(newData);    
                this.storage.set('restaurents',JSON.stringify(newData));
    }   
}