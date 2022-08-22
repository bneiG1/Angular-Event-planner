import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthentificationService } from '../authentification.service';
import { JsonServerService } from '../../json-server-service/json-server.service';
import { User } from 'src/app/json-server-service/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor(private auth: AuthentificationService,
    private json: JsonServerService,
    private router: Router,
    private login: LoginService) { }


  ngOnInit(): void {
    this.json.getUsers().subscribe((user: User[]) => this.users = user);
  }
    authUser(form: NgForm){

    const username_input = document.getElementById('username');
    const password_input = document.getElementById('password');

    const value = form.value;

    const username = value.username;
    const password = value.password;
    const remember = value.remember;

    for(let i = 0; i < this.users.length; i++){

      if(username == this.users[i].username && password == this.users[i].password){

        this.auth.User_ID = this.users[i].id;
        this.login.redundant_USER_ID = this.users[i].id;

        username_input!.classList.add('is-valid');

        this.router.navigate(['main']);
        console.log("Id: " + this.auth.User_ID);

      }
      if(username != this.users[i].username){
        username_input!.classList.add('is-invalid');
      }
      if(password != this.users[i].password){
        password_input!.classList.add('is-invalid');
        username_input!.classList.add('is-invalid');
      }
    }
   }

}
