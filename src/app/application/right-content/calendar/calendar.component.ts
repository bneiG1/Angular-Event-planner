import { Component, OnInit } from '@angular/core';

import { CalendarView, CalendarEvent  } from 'angular-calendar';
import { endOfDay, startOfDay, startOfHour } from 'date-fns';
import { UserEvent } from 'src/app/json-server-service/user-event';
import { JsonServerService } from '../../../json-server-service/json-server.service';
import { User } from '../../../json-server-service/user';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  users: User[] = [];
  users_events: UserEvent[] = [];

  events: CalendarEvent[] = this.calender.getEvents();

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  // events: CalendarEvent[] = [
  //   {
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     title: 'An event with no end date',
  //     resizable: {beforeStart: false, afterEnd: true},
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     title: 'An event asdasdwith no end date',
  //   },
  //   {
  //     start: startOfHour(new Date("2022 08 25 10:00")),
  //     end: startOfHour(new Date("2022 08 25 11:00")),
  //     title: 'An event witasdasdasdasdh no end date',
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     title: 'An asdasdasdasdasd with no end date',
  //   }
  // ]

  constructor(private json: JsonServerService, private calender: CalendarService) {
    this.json.getUsers().subscribe((user: User[]) => this.users = user);
    this.json.getEvents().subscribe((users_events: UserEvent[]) => this.users_events = users_events);
   }

  ngOnInit(): void {
  }


  setView(view: CalendarView) {
    this.view = view;
  }
  nameMonth(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = this.viewDate;
    let name = months[date.getMonth()];
    return name;

  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    console.log(events);
  }

}
