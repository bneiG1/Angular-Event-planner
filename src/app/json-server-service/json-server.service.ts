import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { endOfDay, endOfHour, startOfDay, startOfHour } from 'date-fns';

import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification/authentification.service';
import { User } from './user';
import { UserEvent } from './user-event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class JsonServerService {
  // GET- citeste din json
  // POST- adauga in json
  // PATCH- face update la un element dupa id din json
  // PUT si PATCH fac cam aceleasi lucruri
  // DELETE- sterge elementul dupa id din json

  apiUrl_users = 'http://localhost:5000/users';
  apiUrl_users_events = 'http://localhost:5000/events';

  constructor(
    private http: HttpClient,
    private auth: AuthentificationService,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl_users);
  }

  getEvents(): Observable<UserEvent[]> {
    return this.http.get<UserEvent[]>(this.apiUrl_users_events);
  }

  getUser(User_Id: number): Observable<User> {
    const user_url = `${this.apiUrl_users}/${User_Id}`;
    return this.http.get<User>(user_url);
  }

  createEvent(event: CalendarEvent): Observable<CalendarEvent> {
    return this.http.post<UserEvent>(
      this.apiUrl_users_events,
      event,
      httpOptions
    );
  }

  deleteEvent(event: CalendarEvent): Observable<CalendarEvent> {
    const events_url = `${this.apiUrl_users_events}/${event.id}`;
    return this.http.delete<UserEvent>(events_url);
  }

  updateEvent(event: CalendarEvent): Observable<CalendarEvent> {
    const events_url = `${this.apiUrl_users_events}/${event.id}`;
    return this.http.patch<UserEvent>(events_url, event, httpOptions);
  }
}
