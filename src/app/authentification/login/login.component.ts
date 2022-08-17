import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthentificationService } from '../authentification.service';
import { JsonServerService } from '../../json-server-service/json-server.service';
import { User } from 'src/app/json-server-service/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuth= this.auth.isAuth;

  user_Id: number = 0;
  users: User[] = [];

  constructor(private auth: AuthentificationService,
    private json: JsonServerService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.auth.isAuthStatusUpdated.subscribe((isAuth: boolean) => this.isAuth = isAuth);

    this.json.getUsers().subscribe((user: User[]) => this.users = user);


  }

  authUser(form: NgForm){

    const value = form.value;

    const username = value.username;
    const password = value.password;
    const remember = value.remember;

    console.log("username: " + username);
    console.log("password " + password);
    console.log("remember: " + remember);

    for(let i = 0; i < this.users.length; i++){
      console.log(i, this.users[i].username);

      if(username == this.users[i].username && password == this.users[i].password){
        this.auth.isAuth = true;
        console.log( this.auth.isAuth);

        const user_Id: number = this.users[i].id;
        this.user_Id = user_Id;
        this.router.navigate(['main']);
        console.log("Id: " + this.user_Id);
      }
    }
    this.auth.isAuthStatusUpdated.emit(this.auth.isAuth);
   }

}
