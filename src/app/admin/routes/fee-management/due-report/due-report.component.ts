import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";

@Component({
  selector: 'app-due-report',
  templateUrl: './due-report.component.html',
  styleUrls: ['due-report.component.scss'],
  animations: [routerTransition()]
})
export class DueReportComponent implements OnInit {
  dueReport: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  createForm(){
    this.dueReport = this.fb.group({
      className: ['']
    });
  }

  className = dropdownlist.className;
  ngOnInit() {
  }

}
