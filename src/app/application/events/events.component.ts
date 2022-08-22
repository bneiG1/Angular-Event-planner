// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { JsonServerService } from '../../json-server-service/json-server.service';
// import { UserEvent } from '../../json-server-service/user-event';
// import { User } from '../../json-server-service/user';
// import { AuthentificationService } from '../../authentification/authentification.service';
// import { NgForm } from '@angular/forms';
// import { CalendarService } from '../calendar/calendar.service';
// import { CalendarEvent, CalendarEventAction } from 'angular-calendar';

// @Component({
//   selector: 'app-events',
//   templateUrl: './events.component.html',
//   styleUrls: ['./events.component.css'],
//   providers:[]
// })
// export class EventsComponent implements OnInit {
//   handleEvent(arg0: string, event: CalendarEvent<any>) {
//     throw new Error('Method not implemented.');
//   }

//   event_editor: boolean = false;

//   events: CalendarEvent[] = [];
//   users: User[] = [];
//   user: User = {
//     "id": 0,
//     "username": "",
//     "email": "",
//     "password": "",
//     "events": this.events,
//   };

//   actions: CalendarEventAction[] = [
//     {
//       label: '<i class="fas fa-fw fa-pencil-alt"></i>',
//       a11yLabel: 'Edit',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.handleEvent('Edit', event);
//       },
//     },
//     {
//       label: '<i class="fas fa-fw fa-trash-alt"></i>',
//       a11yLabel: 'Delete',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.events = this.events.filter((iEvent) => iEvent !== event);
//         this.handleEvent('Deleted', event);
//       },
//     },
//   ];
//    newUserEvent: CalendarEvent =
//     {
//       "title": "New event",
//       "start": new Date(),
//       "end": new Date(),
//       "color": {
//         "primary": "#1e90ff",
//         "secondary": "#D1E8FF"
//       },
//       "draggable": true,
//       "resizable": {
//         "beforeStart": true,
//         "afterEnd": true
//       },
//       "actions": [
//         {
//           label: '<i class="fas fa-fw fa-pencil-alt"></i>',
//           a11yLabel: 'Edit',
//           onClick: ({ event }: { event: CalendarEvent }): void => {
//             this.handleEvent('Edit', event);
//           },
//         },
//         {
//           label: '<i class="fas fa-fw fa-trash-alt"></i>',
//           a11yLabel: 'Delete',
//           onClick: ({ event }: { event: CalendarEvent }): void => {
//             this.events = this.events.filter((iEvent) => iEvent !== event);
//             this.handleEvent('Deleted', event);
//           },
//         }
//       ]
//     }


//    user_id: number = 0;

//   constructor(private json: JsonServerService, private auth: AuthentificationService, private calendar: CalendarService) {

//   }

//   ngOnInit(): void {
//     this.json.getUsers().subscribe((user: User[]) => this.users = user);
//     this.json.getEvents().subscribe((events: CalendarEvent[]) => this.events = events);
//     this.json.getUser().subscribe((user: User) => this.user = user);
//   }

//   showForm(){
//     this.event_editor = !this.event_editor
//   }

//   DeleteEvent(event: CalendarEvent){
//     this.json.deleteEvent(event).subscribe(() => this.user_events = this.user_events.filter((e) => e.id !== event.id));
//   }

//   onSubmit(form: NgForm){

//   //   const value = form.value;

//   //   this.newUserEvent.user_id = this.auth.User_ID;
//   //   this.newUserEvent.title =  value.name;
//   //   this.newUserEvent.start =  value.from_date;
//   //   this.newUserEvent.end =  value.from_time;
//   //   this.newUserEvent.reccurence =  value.reccurence;
//   //   this.newUserEvent.description =  value.description;

//   //   console.log(this.newUserEvent.id,
//   //     this.newUserEvent.user_id,
//   //     this.newUserEvent.name,
//   //     this.newUserEvent.from_date,
//   //     this.newUserEvent.from_time,
//   //     this.newUserEvent.to_date,
//   //     this.newUserEvent.to_time,
//   //     this.newUserEvent.reccurence,
//   //     this.newUserEvent.description);

//   //     this.json.createEvent(this.newUserEvent).subscribe((newEvent: CalendarEvent) => this.user_events.push(newEvent));
//   //     this.user_events.filter((e) => e.id == this.newUserEvent.id);

//   }
// }
