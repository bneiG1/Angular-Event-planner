import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {

  isAuthStatusUpdated = new EventEmitter<boolean>();

  loginStatusUpdated = new EventEmitter<boolean>();
  signupStatusUpdated = new EventEmitter<boolean>();


  isAuth: boolean = true;

  Login_pannel: boolean = true;
  Signup_pannel: boolean = false;

  username="";
  password="";

  // temporar
  temp_username: string = "Doru Aleatoru";
  temp_password: string = "12345";

  constructor(){}

  ngOnInit(): void {

    this.isAuthStatusUpdated.subscribe((isAuth: boolean) => this.isAuth = isAuth);
    this.loginStatusUpdated.subscribe((login: boolean) => this.Login_pannel = login);
    this.signupStatusUpdated.subscribe((signup: boolean) => this.Signup_pannel = signup);

    console.log(" \n AuthentificationService");
    console.log("Status isAuth: " + this.isAuth);
    console.log("Login: " + this.Login_pannel);
    console.log("Sign-up: " + this.Signup_pannel);
  }


  // authUser(username: string, password: string){
  //  for (let i = 0; i < this.users.length; i++) {
  //    if(username == this.users[i].username && password == this.users[i].password){

  //      this.isAuth = true;
  //    }
  //  }
  // }

  logOut(){
    this.username="";
    this.password="";
  }

}
