import { Injectable } from '@angular/core';
import {App} from '../models/models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SharedDataService {

    public UserInfo = new BehaviorSubject<any>(new App.UserInfoViewModel());
    public USerInfoChanged(newData: App.UserInfoViewModel) {
        console.log(newData);
        this.UserInfo.next(newData);

    }   
}