import { Injectable, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { endOfDay, endOfHour, startOfDay, startOfHour } from 'date-fns';
import { UserEvent } from '../../json-server-service/user-event';
import { JsonServerService } from '../../json-server-service/json-server.service';
import { AuthentificationService } from '../../authentification/authentification.service';
import { User } from '../../json-server-service/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CalendarService {

  constructor(
    private json: JsonServerService,
    private auth: AuthentificationService,
    private modal: NgbModal
  ) {}

  ngOnInit(): void {
  }
}
