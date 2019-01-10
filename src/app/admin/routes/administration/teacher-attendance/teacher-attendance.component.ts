import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['teacher-attendance.component.scss'],
  animations: [routerTransition()]
})
export class TeacherAttendanceComponent implements OnInit {

  teacherAtt: FormGroup;
  constructor(private fb: FormBuilder) {
    this.teacherAttForm();
  }

  teacherAttForm(){
    this.teacherAtt = this.fb.group({
      pickerDob: [''],
    });
  }


  ngOnInit() {
  }
}
