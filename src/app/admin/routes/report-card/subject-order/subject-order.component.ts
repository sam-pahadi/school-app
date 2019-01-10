import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {dropdownlist} from "../../../../config/constants";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-subject-order',
  templateUrl: './subject-order.component.html',
  styleUrls: ['subject-order.component.scss'],
  animations: [routerTransition()]
})
export class SubjectOrderComponent implements OnInit {

  subjectOrderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.subjectOrderForm = this.fb.group({
      selectStd: ['']
    });
  }

  selectStdList = dropdownlist.selectStd;

  ngOnInit() {

  }

}
