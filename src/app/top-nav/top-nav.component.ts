import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
  }

  onClickLogout(){
    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.auth.Signup_pannel = false;
    this.auth.isAuth = false;

    this.auth.isAuthStatusUpdated.emit(this.auth.isAuth);
    this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);
    this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);

    console.log(" \n onClickLogout()");
    console.log("Status isAuth: " + this.auth.isAuth);
    console.log("Login: " + this.auth.Login_pannel);
    console.log("Sign-up: " + this.auth.Signup_pannel);
  }


}
