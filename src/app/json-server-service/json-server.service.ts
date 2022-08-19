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

  constructor(private http: HttpClient, private auth: AuthentificationService){}

  ngOnInit(): void {
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl_users);
  }

  getEvents(): Observable<UserEvent[]>{
    return this.http.get<UserEvent[]>(this.apiUrl_users_events);
  }

  createEvent(event: UserEvent):  Observable<UserEvent>{
   return this.http.post<UserEvent>(this.apiUrl_users_events, event, httpOptions);
  }

  deleteEvent(event: UserEvent):  Observable<UserEvent>{
    const events_url = `${this.apiUrl_users_events}/${event.id}`;
    return this.http.delete<UserEvent>(events_url);
  }

}
