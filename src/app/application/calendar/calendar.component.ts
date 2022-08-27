import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  ElementRef,
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
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent:
    | TemplateRef<any>
    | undefined;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData:
    | {
        action: string;
        event: CalendarEvent;
      }
    | undefined;

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
        this.json
          .deleteEvent(event)
          .subscribe(
            () =>
              (this.events = this.events.filter((e) => e.title !== event.title))
          );
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  activeDayIsOpen: boolean = false;

  event: CalendarEvent = {
    id: 0,
    title: 'New Event',
    start: new Date(),
    end: new Date(),
    color: { ...colors['blue'] },
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
    actions: [this.actions[0], this.actions[1]],
  };

  isAuth = this.auth.User_ID;
  events: CalendarEvent[] = [];

  users_events: UserEvent[] = [];

  user_event!: UserEvent;
  user_events: UserEvent[] = [];

  constructor(
    private modal: NgbModal,
    private json: JsonServerService,
    private auth: AuthentificationService,
    private calendar: CalendarService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.json.getEvents().subscribe((users_events: UserEvent[]) => {
      this.users_events = users_events;
      console.log(users_events)
      for (let i = 0; i < this.users_events.length; i++) {
        if (this.users_events[i].user_id === this.auth.User_ID) {
          this.user_event = this.users_events[i];

          this.user_event.id = this.users_events[i].id;
          this.user_event.title = this.users_events[i].title;
          this.user_event.start = startOfHour(
            new Date(this.users_events[i].start)
          );
          this.user_event.end! = endOfHour(new Date(this.users_events[i].end!));
          this.user_event!.color!.primary = this.users_events[i].color!.primary;
          this.user_event!.color!.secondary =
            this.users_events[i].color!.secondary;
          this.user_event.draggable = this.users_events[i].draggable;
          this.user_event.resizable!.beforeStart =
            this.users_events[i].resizable!.beforeStart;
          this.user_event.resizable!.afterEnd =
            this.users_events[i].resizable!.afterEnd;
          this.user_event.actions = this.actions;

          this.user_events.push(this.user_event);
        }
      }
      this.events = this.user_events;
    });
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

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
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
    this.json.updateEvent(event).subscribe();
    this.handleEvent('Dropped or resized', event);

  }

  handleEvent(action: string, event: CalendarEvent): void {

    this.json.updateEvent(event).subscribe(() => this.event = event);
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });

  }

  addEvent(): void {

    if(this.isAuth == 0){
      const button =  document.getElementById('addEvent');
      button!.setAttribute('disabled','');
    }
    let id = Number(this.users_events[this.users_events.length - 1].id) + 1;

    const newEvent: UserEvent = {
      id: id,
      user_id: this.auth.User_ID,
      title: 'New Event',
      start: new Date(),
      end: new Date(),
      color: { ...colors['blue'] },
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      actions: [this.actions[0], this.actions[1]],
    };

    this.json.createEvent(newEvent).subscribe(() => {
      this.events.push(newEvent);
      this.users_events.push(newEvent);
      this.events.filter((e) => e.id === newEvent.id);
    });
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.json.deleteEvent(eventToDelete).subscribe(() => {
      this.events.filter((e) => e.id === eventToDelete.id);
      console.log('Delete Event');
      console.log(this.events);
    });
  }

  updateEvent(eventToUpdate: CalendarEvent) {
    this.json.updateEvent(eventToUpdate).subscribe(() =>{
    console.log('Update Event');
    console.log(this.events);
    this.events.filter((e) => e.id === eventToUpdate.id);
    });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
