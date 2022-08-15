import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuth = this.auth.isAuth;
  constructor(private auth: AuthentificationService) {

    this.auth.loginStatusUpdated.subscribe((login:boolean) => login = this.auth.Login_pannel);
    this.auth.signupStatusUpdated.subscribe((signup:boolean) => signup = this.auth.Signup_pannel);
  }


ngOnInit(): void {
  this.auth.loginStatusUpdated.subscribe((login:boolean) => login = this.auth.Login_pannel);
  this.auth.signupStatusUpdated.subscribe((signup:boolean) => signup = this.auth.Signup_pannel);
}

}
