import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

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

}
