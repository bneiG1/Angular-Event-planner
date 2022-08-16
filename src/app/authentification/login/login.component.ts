import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { SignupService } from '../sign-up/sign-up.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged_in= this.auth.isAuth;
  login_status = this.auth.Login_pannel;

  constructor(private auth: AuthentificationService, private login: LoginService, private sign_up: SignupService) { }

  ngOnInit(): void {
    this.auth.loginStatusUpdated.subscribe((login: boolean) => this.login_status = login);
  }

  onClickLogin_login(form: NgForm){
    const value = form.value;

    const username = value.username;
    const password = value.password;
    const remember = value.remember;

    console.log("username: " + username);
    console.log("password " + password);
    console.log("remember: " + remember);

    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.auth.Signup_pannel = false;
    this.auth.isAuth = true;

    this.auth.isAuthStatusUpdated.emit(this.auth.isAuth);
    this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);
    this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);

    console.log(" \n onClickLogin_login()");
    console.log("Status isAuth: " + this.auth.isAuth);
    console.log("Login: " + this.auth.Login_pannel);
    console.log("Sign-up: " + this.auth.Signup_pannel);
  }

  onClickSignup_login(){
   this.auth.Signup_pannel = !this.auth.Signup_pannel;
   this.auth.Login_pannel = false;

   this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);
   this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);

   console.log(" \n onClickSignup_login()");
   console.log("Status isAuth: " + this.auth.isAuth);
   console.log("Login: " + this.auth.Login_pannel);
   console.log("Sign-up: " + this.auth.Signup_pannel);
  }

}
