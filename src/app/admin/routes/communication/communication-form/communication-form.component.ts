import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-communication-form',
  templateUrl: './communication-form.component.html',
  styleUrls: ['communication-form.component.scss']
})
export class CommunicationFormComponent implements OnInit {

  communicationeForm: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;

  constructor(private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.communicationeFormCreate(this.firstDay, this.lastDay);
  }

  communicationeFormCreate(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.communicationeForm = this.fb.group({
      title: [''],
      webUrl: [''],
      startDateRange: [first],
      endDateRange: [last],
      description: [''],

    });
  }

  fileEvent(value) {
    console.log(value);
  }

  ngOnInit() {
  }

}
