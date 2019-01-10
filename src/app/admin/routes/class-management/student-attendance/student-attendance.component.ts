import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AttendanceClassComponent} from "../dialog/attendance-class/attendance-class.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['student-attendance.component.scss'],
  animations: [routerTransition()]
})
export class StudentAttendanceComponent implements OnInit {

  studentAtt: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.studentAttForm();
  }

  studentAttForm(){
    this.studentAtt = this.fb.group({
      pickerDob: [''],
    });
  }

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
