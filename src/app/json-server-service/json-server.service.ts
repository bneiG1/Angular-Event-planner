import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
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
  handleEvent(arg0: string, event: CalendarEvent<any>) {
    throw new Error('Method not implemented.');
  }

  // GET- citeste din json
  // POST- adauga in json
  // PATCH- face update la un element dupa id din json
  // PUT si PATCH- fac cam aceleasi lucruri
  // DELETE- sterge elementul dupa id din json


   apiUrl_users = 'http://localhost:5000/users';
   apiUrl_users_events = 'http://localhost:5000/events';

   users: User[] = []
   USER_ID = this.auth.User_ID;
   events: CalendarEvent[] = [];
   user: User = {
    "id": 0,
    "username": "",
    "email": "",
    "password": "",
    "events": this.events,
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edit', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];
  emptyCalendarEvent: CalendarEvent[]=[{
    "title": "New event",
    "start": new Date(),
    "end": new Date(),
    "color": {
      "primary": "#1e90ff",
      "secondary": "#D1E8FF"
    },
    "draggable": true,
    "resizable": {
      "beforeStart": true,
      "afterEnd": true
    },
    "actions": [
      {
        label: '<i class="fas fa-fw fa-pencil-alt"></i>',
        a11yLabel: 'Edit',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.handleEvent('Edit', event);
        },
      },
      {
        label: '<i class="fas fa-fw fa-trash-alt"></i>',
        a11yLabel: 'Delete',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          this.handleEvent('Deleted', event);
        },
      }
    ]
  }]

   user_calendar_events: CalendarEvent[] = [];

   observableEvent: Observable<CalendarEvent[]> = new Observable<CalendarEvent[]>;

  constructor(private http: HttpClient, private auth: AuthentificationService){}

  ngOnInit(): void {
    this.getUsers().subscribe((users: User[]) => this.users = users);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl_users);
  }
  getEvents(): Observable<CalendarEvent[]>{
    return this.http.get<CalendarEvent[]>(this.apiUrl_users_events);
  }

  getUser(User_Id: number): Observable<User>{
    const user_url = `${this.apiUrl_users}/${User_Id}`;
    return this.http.get<User>(user_url);
  }

  createEvent(event: CalendarEvent):  Observable<CalendarEvent>{
   return this.http.post<CalendarEvent>(this.apiUrl_users_events, event, httpOptions);
  }

  deleteEvent(event: CalendarEvent):  Observable<CalendarEvent>{
    const events_url = `${this.apiUrl_users_events}/${event.id}`;
    return this.http.delete<CalendarEvent>(events_url);
  }

}
