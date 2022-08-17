import { EventEmitter, Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthentificationService {

  isAuthStatusUpdated = new EventEmitter<boolean>();

  isAuth: boolean = false;

  username="";
  password="";

  // temporar
  temp_username: string = "Doru Aleatoru";
  temp_password: string = "12345";

  constructor(){}

  ngOnInit(): void {

    this.isAuthStatusUpdated.subscribe((isAuth: boolean) => this.isAuth = isAuth);


    console.log(" \n AuthentificationService");
    console.log("Status isAuth: " + this.isAuth);
  }

}
