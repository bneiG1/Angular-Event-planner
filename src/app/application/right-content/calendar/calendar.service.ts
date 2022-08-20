import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { endOfDay, startOfDay } from 'date-fns';
import { UserEvent } from '../../../json-server-service/user-event';
import { JsonServerService } from '../../../json-server-service/json-server.service';
import { AuthentificationService } from '../../../authentification/authentification.service';


@Injectable()
export class CalendarService {

  constructor(){
  }

  ngOnInit(): void {
  }

}
