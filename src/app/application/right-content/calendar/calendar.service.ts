import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { endOfDay, startOfDay } from 'date-fns';
import { UserEvent } from '../../../json-server-service/user-event';
import { JsonServerService } from '../../../json-server-service/json-server.service';
import { AuthentificationService } from '../../../authentification/authentification.service';


@Injectable()
export class CalendarService {

  users_events: UserEvent[] = [];
  user_events: UserEvent[] = this.json.getUserEvents();

  events: CalendarEvent[] =[];

  constructor(private json: JsonServerService, private auth: AuthentificationService){}

  ngOnInit(): void {
    this.json.getEvents().subscribe((users_events: UserEvent[]) => this.users_events = users_events);

    for(let i = 0; i < this.events.length; i++){
      if(this.users_events[i].user_id == this.auth.User_ID){
        this.user_events.push(this.users_events[i]);
        this.user_events.filter((e) => e.id == this.user_events[i].id);
      }
    }
  }

  // getEvents(){
  //   for(let i = 0; i < this.user_events.length; i++){

  //     this.events[i].start = startOfDay(new Date( this.user_events[i].from_date + " " + this.user_events[i].from_time));
  //     console.log(this.events[i].start);
  //     this.events[i].end = endOfDay(new Date( this.user_events[i].to_date + " " + this.user_events[i].to_time));
  //     console.log(this.events[i].end);
  //     this.events[i].title = this.user_events[i].name;
  //     console.log(this.events[i].title);

  //     this.events.push(this.events[i]);
  //   }

  //   return this.events;
  // }

}
