import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-communication-consent',
  templateUrl: './communication-consent.component.html',
  styleUrls: ['communication-consent.component.scss']
})
export class CommunicationConsentComponent implements OnInit {


  consentForm: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;

  constructor(private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.consentFormCreate(this.firstDay, this.lastDay);
  }

  consentFormCreate(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.consentForm = this.fb.group({
      title: [''],
      options: [''],
      startDateRange: [first],
      endDateRange: [last],
      description: [''],

    })
  }

  options: any = [
    {name: 'option1'}
    ];

  ngOnInit() {
  }


}
