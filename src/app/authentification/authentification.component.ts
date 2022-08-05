import { Component, OnInit } from '@angular/core';
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
    console.log(this.auth.Login_pannel);
    this.auth.statusUpdated.subscribe((login:boolean) => login = this.auth.Login_pannel);
    console.log(this.login) }

  ngOnInit(): void {
    this.auth.statusUpdated.subscribe((login: boolean) => this.login = login);
  }

}
