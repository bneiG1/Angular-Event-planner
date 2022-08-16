import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const value = form.value;

    const name = value.name;
    const from = value.from;
    const to = value.to;
    const reccurence = value.reccurence;
    const description = value.description;

    console.log(name,from, to,reccurence, description );


  }

}
