import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";

@Component({
  selector: 'app-upload-exam-marks',
  templateUrl: './upload-exam-marks.component.html',
  styleUrls: ['upload-exam-marks.component.scss'],
  animations: [routerTransition()]
})
export class UploadExamMarksComponent implements OnInit {

  examMarksForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.examMarksForm = this.fb.group({
      stdName : ['', Validators.required],
      division : ['', Validators.required],
      term : ['', Validators.required],
      exam : ['', Validators.required],
    })
  }
  stdName = dropdownlist.selectStd;
  division = dropdownlist.division;


  ngOnInit() {
  }

}
