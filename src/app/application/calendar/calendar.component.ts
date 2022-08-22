import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from '@angular/core';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  startOfHour,
  endOfHour,
} from 'date-fns';

import { AuthentificationService } from '../../authentification/authentification.service';
import { UserEvent } from 'src/app/json-server-service/user-event';
import { JsonServerService } from '../../json-server-service/json-server.service';
import { User } from '../../json-server-service/user';
import { CalendarService } from './calendar.service';


import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EventColor } from 'calendar-utils';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edit', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.json.deleteEvent(event).subscribe(() => this.events = this.events.filter((e) => e.title!== event.title));
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  activeDayIsOpen: boolean = true;

  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: { ...colors['red'] },
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: { ...colors['yellow'] },
  //     actions: this.actions,
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: { ...colors['blue'] },
  //     allDay: true,
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: addHours(new Date(), 2),
  //     title: 'A draggable and resizable event',
  //     color: { ...colors['yellow'] },
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },
  // ];

  users: User[] = [];

  event: CalendarEvent = {
    "id": 0,
    "title": "New Event",
    "start": new Date(),
    "end": new Date(),
    "color": { ...colors['blue'] },
    "draggable": true,
    "resizable": {
      "beforeStart": true,
      "afterEnd": true
    },
    "actions": [
      this.actions[0],
      this.actions[1],
    ]
  };
  events: CalendarEvent[] = [];

  user_events: UserEvent[] = [];

  user: User = {
   "id": 0,
   "username": "",
   "email": "",
   "password": "",
   "events": this.user_events,
 }


  constructor(private modal: NgbModal, private json: JsonServerService, private auth: AuthentificationService) {
    console.log("Constructor");
    this.json.getUsers().subscribe((users_123: User[]) => this.users = users_123);
    console.log("Users Array");
    console.log(this.users)
    this.json.getEvents().subscribe((user_events_123: UserEvent[]) => this.user_events = user_events_123);
    console.log("Events Array");
    console.log(this.user_events)
    this.events=this.user_events
  }

  ngOnInit(): void {

    console.log("ngOnInit");
    this.json.getUsers().subscribe((users_123: User[]) => this.users = users_123);
    console.log("Users Array");
    console.log(this.users)
    this.json.getEvents().subscribe((user_events_123: UserEvent[]) => this.user_events = user_events_123);
    console.log("Events Array");
    console.log(this.user_events)

    this.events=this.user_events

    for(let i=0;i<this.user_events.length;i++){

      this.events[i].id = this.user_events[i].id;
      this.events[i].title = this.user_events[i].title;
      this.events[i].start = startOfHour(new Date(this.user_events[i].start));
      this.events[i].end! = endOfHour(new Date(this.user_events[i].end!));
      this.events[i]!.color!.primary = this.user_events[i].color!.primary;
      this.events[i]!.color!.secondary = this.user_events[i].color!.secondary;
      this.events[i].draggable = this.user_events[i].draggable;
      this.events[i].resizable!.beforeStart = this.user_events[i].resizable!.beforeStart;
      this.events[i].resizable!.afterEnd = this.user_events[i].resizable!.afterEnd;
      this.events[i].actions = this.actions;

      this.events.push(this.events[i]);
      this.events.filter((e) => e.id == this.events[i].id);
    }
    console.log("Events")
    console.log(this.events)
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({event, newStart, newEnd,}: CalendarEventTimesChangedEvent): void {

    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.json.updateEvent(event).subscribe(() => this.events = this.events.filter((e) => e.title!== event.title));
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.json.getEvents().subscribe((user_events: UserEvent[]) => this.user_events = user_events);
    const newEvent: CalendarEvent =
    {
      "id": this.user_events.length+1,
      "title": "New Event",
      "start":new Date(),
      "end": new Date(),
      "color": { ...colors['blue'] },
      "draggable": true,
      "resizable": {
        "beforeStart": true,
        "afterEnd": true
      },
      "actions": [
        this.actions[0],
        this.actions[1],
      ]
    };

    this.json.createEvent(newEvent).subscribe(() => {
      this.events.push(newEvent);
      this.events.filter((e) => e.id == newEvent.id);
    });

    this.events.filter((e) => e.id == newEvent.id);
    this.json.getEvents().subscribe((user_events: UserEvent[]) => this.user_events = user_events);


    console.log("Add Event")
    console.log(this.events)
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.json.deleteEvent(eventToDelete).subscribe(() => this.events = this.events.filter((e) => e.id!== eventToDelete.id));
    console.log("Delete Event")
    console.log(this.events)
  }
  updateEvent(eventToUpdate: CalendarEvent){
    this.json.updateEvent(eventToUpdate).subscribe(() => this.events = this.events.filter((e) => e.id!== eventToUpdate.id));
    this.events.filter((e) => e.id!== eventToUpdate.id)
    console.log("Update Event")
    console.log(this.events)
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
