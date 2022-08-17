import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  event_editor: boolean = false;

  showForm(){
    this.event_editor = !this.event_editor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
