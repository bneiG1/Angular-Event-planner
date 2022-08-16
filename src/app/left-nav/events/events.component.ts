import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonServerService } from '../../json-server-service/json-server.service';
import { UserEvent } from 'src/app/json-server-service/user-event';
import { User } from 'src/app/json-server-service/user';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers:[]
})
export class EventsComponent implements OnInit {

  events: UserEvent[] = [];
  users: User[] = [];

  constructor(private json: JsonServerService) { }

  ngOnInit(): void {
    this.json.getUsers().subscribe((user: User[]) => this.users = user);
  }

}
