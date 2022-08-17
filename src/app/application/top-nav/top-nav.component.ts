import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../authentification/authentification.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
  }

}
