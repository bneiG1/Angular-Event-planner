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

  constructor(private auth: AuthentificationService) {
    this.auth.loginStatusUpdated.subscribe((login:boolean) => login = this.auth.Login_pannel);
    this.auth.signupStatusUpdated.subscribe((signup:boolean) => signup = this.auth.Signup_pannel);

    console.log("Change: login " + this.login);
    console.log("Change: signup " + this.signup);
  }

  ngOnInit(): void {
    this.auth.loginStatusUpdated.subscribe((login: boolean) => this.login = login);
    this.auth.signupStatusUpdated.subscribe((signup: boolean) => this.signup = signup);

    console.log("Change: login " + this.login);
    console.log("Change: signup " + this.signup);
  }



}
