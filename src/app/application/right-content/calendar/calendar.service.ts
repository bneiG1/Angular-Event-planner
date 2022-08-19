import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { endOfDay, startOfDay } from 'date-fns';
import { UserEvent } from '../../../json-server-service/user-event';
import { JsonServerService } from '../../../json-server-service/json-server.service';


@Injectable()
export class CalendarService {

  users_events: UserEvent[] = [];

  events: CalendarEvent[] =[];

  constructor(private json: JsonServerService){}

  ngOnInit(): void {
  }

  getEvents(){
    for(let i = 0; i < this.users_events.length; i++){

      this.events[i].start = startOfDay(new Date( this.users_events[i].from_date + " " + this.users_events[i].from_time));
      console.log(this.events[i].start);
      this.events[i].end = endOfDay(new Date( this.users_events[i].to_date + " " + this.users_events[i].to_time));
      console.log(this.events[i].end);
      this.events[i].title = this.users_events[i].name;
      console.log(this.events[i].title);

      this.events.push(this.events[i]);
    }
    return this.events;
  }

}
