import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../quote-DataBase-quote/qDATABASEq.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
  providers:[DatabaseService]
})
export class AuthentificationComponent implements OnInit {

  isAuth: boolean = false;
  users = this.database.getUsers();

  // temporar
  temp_username: string = "Doru Aleatoru";
  temp_password: string = "12345";

  constructor(private database: DatabaseService ) { console.log(this.users[0].username);}

  ngOnInit(): void {
  }

  authUser(username: string, password: string){

    for (let i = 0; i < this.users.length; i++) {
      if(username == this.users[i].username && password == this.users[i].password){

        this.isAuth = true;

      }

    }

  }
}
