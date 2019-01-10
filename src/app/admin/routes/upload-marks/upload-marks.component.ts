import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {routerTransition} from "../../../config/router.animations";
import {dropdownlist} from "../../../config/constants";


@Component({
  selector: 'app-upload-marks',
  templateUrl: './upload-marks.component.html',
  styleUrls: ['upload-marks.component.scss'],
  animations: [routerTransition()]
})
export class UploadMarksComponent implements OnInit {

  uploadMarks: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;

  constructor(private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
  }

  createForm(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.uploadMarks = this.fb.group({
      selectStd: [''],
      division: [''],
      testCode: [''],
      note: [''],
      startDateRange: [first],
      endDateRange: [last],
    });
  }

  selectStd = dropdownlist.selectStd;
  division = dropdownlist.division;

  ngOnInit() {
  }

  fileEvent(value) {

  }

}
