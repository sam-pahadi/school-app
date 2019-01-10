import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {AttendanceClassComponent} from "../dialog/attendance-class/attendance-class.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['attendance-report.component.scss'],
  animations: [routerTransition()]
})
export class AttendanceReportComponent implements OnInit {

  attendanceForm: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;

  constructor( public dialog: MatDialog,  private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.attendanceFormCreate(this.firstDay, this.lastDay);
  }

  attendanceFormCreate(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.attendanceForm = this.fb.group({
      attendance: ['', Validators.required],
      filters: ['', Validators.required],
      month: ['', Validators.required],
      pickerDob: ['', Validators.required],
      startDateRange: [first, Validators.required],
      endDateRange: [last, Validators.required],
    })
  }

  attendanceType = dropdownlist.attendanceType;
  filterList = dropdownlist.filterList;
  monthType = dropdownlist.monthType;

  openClass(): void {
    let dialogRef = this.dialog.open(AttendanceClassComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '1200px',
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
  ngOnInit() {
  }

}
