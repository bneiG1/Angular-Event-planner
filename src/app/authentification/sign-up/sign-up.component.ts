import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { UserEvent } from 'src/app/json-server-service/user-event';

import { JsonServerService } from '../../json-server-service/json-server.service';
import { User } from '../../json-server-service/user';
import { AuthentificationService } from '../authentification.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  users: User[] = [];

  newUserEvents: UserEvent[] = []
  newUser: User = {

    id: 0,
    username: "",
    email: "",
    password: "",
    events: this.newUserEvents,
  }

  constructor(private auth: AuthentificationService, private json: JsonServerService, private router: Router, private http: HttpClient) {
    this.json.getUsers().subscribe((user: User[]) => this.users = user);
  }

  ngOnInit(): void {
  }


  onClickSignup_signup(form: NgForm){

    const username_input = document.getElementById('username');
    const email_input = document.getElementById('email');
    const password_input = document.getElementById('password');
    const re_password_input = document.getElementById('re_password');

    const value = form.value;

    const pattern = "^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}";

    for(let i = 1; i <= this.users.length + 1; i++){
      this.newUser.id = i;
    }

    for(let i = 0; i < this.users.length; i++){

      if(value.username == this.users[i].username && username_input != null){
        username_input.classList.add('is-invalid');
      }else if(value.username != this.users[i].username && username_input != null) {
        username_input.classList.add('is-valid');
        this.newUser.username = value.username;
      }
      if(value.email == this.users[i].email && email_input != null || !value.email.match(pattern) && email_input != null ){
        email_input.classList.add('is-invalid');
      }else if(value.email != this.users[i].email && email_input != null || value.email.match(pattern) && email_input != null ) {
        email_input.classList.add('is-valid');
        this.newUser.email = value.email;
      }

    }

    if(value.password != value.re_password && password_input != null && re_password_input != null){
      password_input.classList.add('is-invalid');
      re_password_input.classList.add('is-invalid');
    }else if(value.password == value.re_password && password_input != null && re_password_input != null) {
      password_input.classList.add('is-valid');
      re_password_input.classList.add('is-valid');
      this.newUser.password = value.password;
    }

    this.http.post<User>(this.json.apiUrl_users, this.newUser, httpOptions).subscribe((newUser: User) => {this.newUser = newUser; console.log(this.newUser)});;


    this.router.navigate(['login']);

  }

}
