import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { LoginService } from '../login/login.service';
import { SignupService } from './sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sign_up_status = this.auth.Signup_pannel;

  constructor(private auth: AuthentificationService, private sign_up: SignupService, private login: LoginService) { }

  ngOnInit(): void {
    this.auth.signupStatusUpdated.subscribe((sign_up: boolean) => this.sign_up_status = sign_up);
  }


  onClickSignup_signup(form: NgForm){
    const value = form.value;

    const username = value.username;
    const email = value.email;
    const password = value.password;
    const re_password = value.re_password;

    console.log("username: " + username);
    console.log("email: " + email);
    console.log("password " + password);
    console.log("re_password: " + re_password);

    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.auth.Signup_pannel = false;

    this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);
    this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);

    console.log(" \n onClickSignup_signup()");
    console.log("Status isAuth: " + this.auth.isAuth);
    console.log("Login: " + this.auth.Login_pannel);
    console.log("Sign-up: " + this.auth.Signup_pannel);
  }

  onClickLogin_signup(){


    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.auth.Signup_pannel = false;

    this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);
    this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);

    console.log(" \n onClickLogin_signup()");
    console.log("Status isAuth: " + this.auth.isAuth);
    console.log("Login: " + this.auth.Login_pannel);
    console.log("Sign-up: " + this.auth.Signup_pannel);
  }
}
