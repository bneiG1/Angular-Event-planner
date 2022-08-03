import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseService } from 'src/app/quote-DataBase-quote/qDATABASEq.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers:[DatabaseService]
})
export class EventsComponent implements OnInit {

  users = this.database.getUsers();
  events = this.users[4].events;

  // email = this.database.getUsersEmail();
  // events = this.database.getUsersEvents();
  // event_name = this.database.getUsersEventName();
  // event_from = this.database.getUsersEventFrom();
  // event_to = this.database.getUsersEventTo();
  // event_reccurence = this.database.getUsersEventReccurence();
  // event_day = this.database.getUsersEventDay();
  // event_id = this.database.getUsersEventId();
  // event_description = this.database.getUsersEventDescription();

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
  }

}
