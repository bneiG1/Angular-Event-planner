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

  onClickLogin(){
    this.auth.Login_pannel = !this.auth.Login_pannel;
    this.auth.Signup_pannel = false;

    this.auth.loginStatusUpdated.emit(this.auth.Login_pannel);

    console.log(this.auth.Login_pannel);

    return  this.auth.Login_pannel;
  }

  onClickSignup(){
   this.auth.Signup_pannel = !this.auth.Signup_pannel;
   this.auth.Login_pannel = false;

   this.auth.signupStatusUpdated.emit(this.auth.Signup_pannel);

   console.log(this.auth.Signup_pannel);

   return  this.auth.Signup_pannel;
  }

}
