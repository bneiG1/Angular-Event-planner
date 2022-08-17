import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthentificationService } from '../authentification.service';
import { LoginService } from '../login/login.service';
import { SignupService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private auth: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
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

    console.log(" \n onClickSignup_signup()");
    console.log("Status isAuth: " + this.auth.isAuth);
    this.router.navigate(['login']);

  }

}
