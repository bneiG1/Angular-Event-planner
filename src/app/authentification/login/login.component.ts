import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logged_in= this.auth.isAuth;
  login_status = this.auth.Login_pannel;

  loginStatus = new EventEmitter<boolean>();

  constructor(private auth: AuthentificationService, private login: LoginService) { }

  ngOnInit(): void {
     this.auth.statusUpdated.subscribe((login: boolean) => this.login_status = login);
  }

  loginButton(){

    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.login.loginStatus.emit(this.auth.Login_pannel);
    console.log("LOGGED IN!");

  }

}
