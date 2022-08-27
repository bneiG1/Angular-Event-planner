import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  isAuth: number = this.auth.User_ID;

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {


  }

}
