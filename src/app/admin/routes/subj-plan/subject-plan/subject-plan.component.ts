import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {MatDialog} from "@angular/material";
import {AddTopicComponent} from "../dialog/add-topic/add-topic.component";

@Component({
  selector: 'app-subject-plan',
  templateUrl: 'subject-plan.component.html',
  styleUrls: ['subject-plan.component.scss'],
  animations: [routerTransition()]
})
export class SubjectPlanComponent implements OnInit {

  subjectPlan: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;

  constructor( private fb: FormBuilder, public dialog: MatDialog) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
  }

  createForm(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.subjectPlan = this.fb.group({
      selectStd: [''],
      subjectName: [''],
      subjectTopic: [''],
      procededTopic: [''],
      aim: [''],
      objective: [''],
      aid: [''],
      resources: [''],
      methodologies: [''],
      techniques: [''],
      review: [''],
      noOfLecture: [''],
      priority: [''],
      startDateRange: [first],
      endDateRange: [last],
    });
  }

  selectStd = dropdownlist.selectStd;
  subjectName = dropdownlist.subjectName;

  openAddTopic(): void {
    let dialogRef = this.dialog.open(AddTopicComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  fileEvent(value) {

  }

  ngOnInit() {
  }

}
