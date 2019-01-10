import { Component, OnInit } from '@angular/core';
import {dropdownlist} from "../../../../config/constants";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-communication-homework',
  templateUrl: './communication-homework.component.html',
  styleUrls: ['communication-homework.component.scss']
})
export class CommunicationHomeworkComponent implements OnInit {

  homeWork: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.homeWork = this.fb.group({
      className: [''],
      subjName: [''],
    });
  }
  className = dropdownlist.className;
  subjectName = dropdownlist.subjectName;

  ngOnInit() {
  }

}
