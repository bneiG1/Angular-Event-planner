import { Component, OnInit} from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  isAuth = this.auth.isAuth;

  constructor(private auth: AuthentificationService) {}

  ngOnInit(): void {

    this.auth.isAuthStatusUpdated.subscribe((isAuth: boolean) => this.isAuth = isAuth);

    console.log(" \n AuthentificationComponent");
    console.log("Status isAuth: " + this.auth.isAuth);

  }
}
