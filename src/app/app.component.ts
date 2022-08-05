import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification/authentification.service';
import { LoginService } from './authentification/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuth = this.auth.isAuth;
  constructor(private auth: AuthentificationService, private login: LoginService) {
  }

ngOnInit(): void {
  this.login.loginStatus.subscribe((isLogged_in: boolean) => this.isAuth = isLogged_in);
}

}
