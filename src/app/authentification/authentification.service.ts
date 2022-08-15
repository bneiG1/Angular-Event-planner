import { EventEmitter, Injectable } from '@angular/core';
import { DatabaseService } from '../quote-DataBase-quote/qDATABASEq.service';

@Injectable()
export class AuthentificationService {

  isAuth: boolean = false;

  loginStatusUpdated = new EventEmitter<boolean>();
  signupStatusUpdated = new EventEmitter<boolean>();

  Login_pannel: boolean = true;
  Signup_pannel: boolean = false;

  username="";
  password="";

  users = this.database.getUsers();

  // temporar
  temp_username: string = "Doru Aleatoru";
  temp_password: string = "12345";

  constructor(private database: DatabaseService){}


  authUser(username: string, password: string){
   for (let i = 0; i < this.users.length; i++) {
     if(username == this.users[i].username && password == this.users[i].password){

       this.isAuth = true;
     }
   }
  }

  logOut(){
    this.username="";
    this.password="";
  }

}
