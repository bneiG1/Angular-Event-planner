import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { endOfDay, startOfDay } from 'date-fns';
import { UserEvent } from '../../json-server-service/user-event';
import { JsonServerService } from '../../json-server-service/json-server.service';
import { AuthentificationService } from '../../authentification/authentification.service';
import { User } from '../../json-server-service/user';


@Injectable()
export class CalendarService {

  users: User[] = []
  events: CalendarEvent[] = []

  constructor(private json: JsonServerService){
  }

  ngOnInit(): void {
    this.json.getUsers().subscribe((users: User[]) => this.users = users);
    this.json.getEvents().subscribe((events: CalendarEvent[]) => this.events = events);
  }

}
