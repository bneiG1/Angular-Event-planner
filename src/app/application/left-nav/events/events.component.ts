import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JsonServerService } from '../../../json-server-service/json-server.service';
import { UserEvent } from '../../../json-server-service/user-event';
import { User } from '../../../json-server-service/user';
import { AuthentificationService } from '../../../authentification/authentification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers:[]
})
export class EventsComponent implements OnInit {

  event_editor: boolean = false;

  events: UserEvent[] = [];
  users: User[] = [];
  user_events: UserEvent[] = this.json.getUserEvents();


   newUserEvent: UserEvent = {
    id: 0,
    user_id: 0,
    from_date: "",
    from_time: "",
    to_date: "",
    to_time: "",
    name: "",
    reccurence: false,
    description: ""
   }

   user_id: number = 0;

  constructor(private json: JsonServerService, private auth: AuthentificationService) {

  }

  ngOnInit(): void {
    this.json.getUsers().subscribe((user: User[]) => this.users = user);
    this.json.getEvents().subscribe((events: UserEvent[]) => this.events = events);
    //  this.json.getEvents().subscribe((events: UserEvent[]) => this.user_events = events);

     for(let i = 0; i < this.events.length; i++){
      if(this.events[i].user_id == this.auth.User_ID){
        // console.log(this.events[i]);
        this.user_events.push(this.events[i]);
        this.user_events.filter((e) => e.id == this.user_events[i].id);

      }

    }
  }

  showForm(){
    this.event_editor = !this.event_editor
      console.log(this.user_events);
  }

  DeleteEvent(event: UserEvent){
    this.json.deleteEvent(event).subscribe(() => this.events = this.events.filter((e) => e.id !== event.id));
  }

  onSubmit(form: NgForm){

    const value = form.value;

    this.newUserEvent.user_id = this.auth.User_ID;
    this.newUserEvent.name =  value.name;
    this.newUserEvent.from_date =  value.from_date;
    this.newUserEvent.from_time =  value.from_time;
    this.newUserEvent.to_date =  value.to_date;
    this.newUserEvent.to_time =  value.to_time;
    this.newUserEvent.reccurence =  value.reccurence;
    this.newUserEvent.description =  value.description;

    console.log(this.newUserEvent.id,
      this.newUserEvent.user_id,
      this.newUserEvent.name,
      this.newUserEvent.from_date,
      this.newUserEvent.from_time,
      this.newUserEvent.to_date,
      this.newUserEvent.to_time,
      this.newUserEvent.reccurence,
      this.newUserEvent.description);

      this.json.createEvent(this.newUserEvent).subscribe((newEvent: UserEvent) => this.events.push(newEvent));
      this.events.filter((e) => e.id == this.newUserEvent.id);


  }


}
