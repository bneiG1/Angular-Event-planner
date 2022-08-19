import { Component, OnInit} from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private auth: AuthentificationService) {}

  ngOnInit(): void {

  }
}
