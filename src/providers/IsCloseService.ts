import { Injectable,Injector } from '@angular/core';
import { App } from '../Models/models';
@Injectable()

export class IsClose {

    public IsRestauratnOpen (timeTable: Array<any>):boolean
    {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var tdate = new Date();
         let today = days[tdate.getDay()];

        var returValue=true;
        if (timeTable == null || timeTable.length == 0) {
            returValue = false;
        }
        else {
            for (let item of timeTable) {
                
                if (item.Day.toLowerCase() == today.toLowerCase()) {
                    if (item.isClosed) {
                        returValue = false;
                    }
                    else {
                        var currhours = new Date().getHours();
                        var currMinutes = new Date().getMinutes();
                        if(currhours>12)
                        {
                            currhours= currhours-12;
                         }
                         if(item.startTimeHours>12)
                         {
                            item.startTimeHours= item.startTimeHours-12;
                         }
                         if(item.endTimeHours>12)
                         {
                            item.endTimeHours= item.endTimeHours-12;
                         }

                        if (currhours < item.startTimeHours) {
                            returValue = false;
                        }
                        else if (currhours == item.startTimeHours && currMinutes < item.startTimeMins) {
                            returValue = false;
                        }
                        else if (currhours > item.endTimeHours) {
                            returValue = false;
                        }
                        else if (currhours == item.endTimeHours && currMinutes > item.endTimeMins) {
                            returValue = false;
                        }
                        if(currhours>12)
                        {
                           currhours=currhours-12;
                        }
                        if(item.startTimeHours>12)
                        {
                            item.startTimeHours =item.startTimeHours-12;
                        }
                        if(item.endTimeHours>12) 
                        {
                            item.endTimeHours =item.endTimeHours-12;
                        }
                        
                        
                       
                    }
                }
            }
        }
         return returValue;
    }
}