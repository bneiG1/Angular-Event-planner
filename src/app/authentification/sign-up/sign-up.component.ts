import { Component, EventEmitter, OnInit } from '@angular/core';
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
    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.auth.Signup_pannel = false;
    this.auth.isAuth = true;

    this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);
    this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);

    console.log("Login: " + this.auth.Login_pannel);
    console.log("Status isAuth: " + this.auth.isAuth);

    return this.auth.Login_pannel;
  }
}
