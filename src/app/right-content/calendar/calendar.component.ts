import { Component, OnInit } from '@angular/core';

import { CalendarView, CalendarEvent  } from 'angular-calendar';
import { endOfDay, startOfDay } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      title: 'An event with no end date',
    }
  ]

  constructor() { }

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
    //this.openAppointmentList(date)
  }

}
