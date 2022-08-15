import { Component, EventEmitter, OnInit } from '@angular/core';
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

  onClickLogin(){
    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.auth.Signup_pannel = false;
    this.auth.isAuth = true;

    this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);
    this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);

    console.log("Login: " + this.auth.Login_pannel);
    console.log("Status isAuth: " + this.auth.isAuth);

    return this.auth.Login_pannel;
  }

  onClickSignup(){
   this.auth.Signup_pannel = !this.auth.Signup_pannel;
   this.auth.Login_pannel = false;

   this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);
   this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);

   console.log("Sign-up: " + this.auth.Signup_pannel);
   console.log("Status isAuth: " + this.auth.isAuth);

   return this.auth.Signup_pannel;
  }

}
