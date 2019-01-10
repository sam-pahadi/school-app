import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";

@Component({
  selector: 'app-assign-fee-scheme',
  templateUrl: './assign-fee-scheme.component.html',
  styleUrls: ['assign-fee-scheme.component.scss'],
  animations: [routerTransition()]
})
export class AssignFeeSchemeComponent implements OnInit {
  feeScheme: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.feeScheme = this.fb.group({
      className: [''],
      division: ['']
    });
  }

  className = dropdownlist.className;
  division = dropdownlist.division;

  ngOnInit() {
  }
}
