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
    const from_date = value.from_date;
    const from_time = value.from_time;
    const to_date = value.to_date;
    const to_time = value.to_time;
    const reccurence = value.reccurence;
    const description = value.description;

    console.log(name, from_date, from_time, to_date, to_time, reccurence, description );

  }

}
