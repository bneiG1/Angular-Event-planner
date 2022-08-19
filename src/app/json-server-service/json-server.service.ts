import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

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

   apiUrl_users = 'http://localhost:5000/users';
   apiUrl_users_events = 'http://localhost:5000/events';

   events: UserEvent[] = [];
   user_events: UserEvent[] = [];

  constructor(private http: HttpClient, private auth: AuthentificationService){}

  ngOnInit(): void {
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl_users);
  }

  getEvents(): Observable<UserEvent[]>{
    return this.http.get<UserEvent[]>(this.apiUrl_users_events);
  }

  getUserEvents(): UserEvent[]{

    this.http.get<UserEvent[]>(this.apiUrl_users_events).subscribe((events: UserEvent[]) => this.events = events);

    for(let i = 0; i < this.events.length; i++){
      if(this.events[i].user_id == this.auth.User_ID){
        console.log(this.events[i]);
        this.user_events.push(this.events[i]);
      }
   }
   return this.user_events;

  }

  createEvent(event: UserEvent):  Observable<UserEvent>{
   return this.http.post<UserEvent>(this.apiUrl_users_events, event, httpOptions);
  }

  deleteEvent(event: UserEvent):  Observable<UserEvent>{
    const events_url = `${this.apiUrl_users_events}/${event.id}`;
    return this.http.delete<UserEvent>(events_url);
  }

}
