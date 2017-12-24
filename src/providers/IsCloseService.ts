import { Injectable,Injector } from '@angular/core';
import { App } from '../Models/models';
import {SharedDataService } from './SharedDataService'; 
@Injectable()

export class IsClose {
    public timetable:any[];
    constructor(private shared: SharedDataService) {
        this.shared.timeTable.subscribe(
            data => {
             
              this.timetable=data;
             
            }, err => {
              console.log(err);
            });
    }
    public IsRestauratnOpen (time: Array<any>):boolean
    {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var tdate = new Date();
         let today = days[tdate.getDay()];

        var returValue=true;
        if (this.timetable == null || this.timetable.length == 0) {
            returValue = false;
        }
        else {
            for (let item of this.timetable) {
                
                if (item.Day.toLowerCase() == today.toLowerCase()) {
                    if (item.isClosed) {
                        returValue = false;
                    }
                    else {
                        var currhours = new Date().getHours();
                        var currMinutes = new Date().getMinutes();
                                             
                        var endTime = Number(item.endTime.split(":")[0]);
                      var startTime =Number(item.startTime.split(":")[0]);
                        if (currhours < startTime) {
                            returValue = false;
                        }
                        else if (currhours == startTime && currMinutes < item.startTimeMins) {
                            returValue = false;
                        }
                        else if (currhours > endTime) {
                            returValue = false;
                        }
                        else if (currhours == endTime && currMinutes > item.endTimeMins) {
                            returValue = false;
                        }
                       
                        
                        
                       
                    }
                }
            }
        }
         return returValue;
    }
}