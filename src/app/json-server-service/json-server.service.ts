import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { endOfDay, endOfHour, startOfDay, startOfHour } from 'date-fns';

import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification/authentification.service';
import { User } from './user';
import { UserEvent } from "./user-event";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class JsonServerService {

  // GET- citeste din json
  // POST- adauga in json
  //  PATCH- face update la un element dupa id din json
  // PUT si PATCH- fac cam aceleasi lucruri
  // DELETE- sterge elementul dupa id din json


   apiUrl_users = 'http://localhost:5000/users';
   apiUrl_users_events = 'http://localhost:5000/events';

   events: CalendarEvent[] = [];
   user_events: CalendarEvent[] = [];


  //  user_calendar_event: CalendarEvent ={
  //   start: new Date(),
  //   end: new Date(),
  //   title: ""
  //  };

   user_calendar_events: CalendarEvent[] = [];

   observableEvent: Observable<CalendarEvent[]> = new Observable<CalendarEvent[]>;

  constructor(private http: HttpClient, private auth: AuthentificationService){}

  ngOnInit(): void {
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl_users);
  }

  getEvents(): Observable<CalendarEvent[]>{
    return this.http.get<CalendarEvent[]>(this.apiUrl_users_events);
  }

  getUserEvents(): CalendarEvent[]{

    this.http.get<CalendarEvent[]>(this.apiUrl_users_events).subscribe((events: CalendarEvent[]) => this.events = events);

    for(let i = 0; i < this.events.length; i++){
      if(this.events[i].user_id == this.auth.User_ID){
        // console.log(this.events[i]);
        this.user_events.push(this.events[i]);
      }
   }
   return this.user_events;

  }

  // getUserCalendarEvent(): Observable<CalendarEvent[]>{

  //   for(let i = 0; i < this.user_events.length; i++){
  //     if(this.user_events[i].user_id == this.auth.User_ID){

  //       this.user_calendar_event.start = startOfHour(new Date( this.user_events[i].from_date + " " + this.user_events[i].from_time));
  //       // console.log(this.user_calendar_event.start);

  //       this.user_calendar_event.end = endOfHour(new Date( this.user_events[i].to_date + " " + this.user_events[i].to_time));
  //       // console.log(this.user_calendar_event.end);

  //       this.user_calendar_event.title = this.user_events[i].name;
  //       // console.log(this.user_calendar_event.title);
  //       // console.log("Event to be added:");
  //       // console.log(this.user_calendar_event);
  //       this.user_calendar_events.push(this.user_calendar_event);

  //       this.observableEvent = new Observable(event => {event.next(this.user_calendar_events)})

  //       console.log("user_calendar_events:" + i);
  //       console.log(this.user_calendar_events[i]);

  //       // console.log(this.observableEvent);

  //     }
  //  }
  //   return this.observableEvent;

  // }

  createEvent(event: CalendarEvent):  Observable<CalendarEvent>{
   return this.http.post<CalendarEvent>(this.apiUrl_users_events, event, httpOptions);
  }

  deleteEvent(event: CalendarEvent):  Observable<CalendarEvent>{
    const events_url = `${this.apiUrl_users_events}/${event.id}`;
    return this.http.delete<CalendarEvent>(events_url);
  }

}
