import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['fee-structure.component.scss'],
  animations: [routerTransition()]
})
export class FeeStructureComponent implements OnInit {

  feeStructure :FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;

  constructor(private fb : FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
  }

  createForm(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.feeStructure = this.fb.group({
      className: [''],
      fee_structure_name:[''],
      startDateRange: [first],
      endDateRange: [last],
    })
  }
  classNames = dropdownlist.className;
  ngOnInit() {
  }

}
