import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  isAuth= this.auth.isAuth;

  login = this.auth.Login_pannel
  signup = this.auth.Signup_pannel;

  constructor(private auth: AuthentificationService) {}

  ngOnInit(): void {

    this.auth.isAuthStatusUpdated.subscribe((isAuth: boolean) => this.isAuth = isAuth);
    this.auth.loginStatusUpdated.subscribe((login: boolean) => this.login = login);
    this.auth.signupStatusUpdated.subscribe((signup: boolean) => this.signup = signup);

    console.log(" \n AuthentificationComponent");
    console.log("Status isAuth: " + this.auth.isAuth);
    console.log("Login: " + this.auth.Login_pannel);
    console.log("Sign-up: " + this.auth.Signup_pannel);



  }
}
