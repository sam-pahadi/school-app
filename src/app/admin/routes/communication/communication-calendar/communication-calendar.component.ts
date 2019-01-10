import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication-calendar',
  templateUrl: './communication-calendar.component.html',
  styleUrls: ['communication-calendar.component.scss']
})
export class CommunicationCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fileEvent(value) {
    console.log(value);
  }


}
