import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";

@Component({
  selector: 'app-fee-scheme',
  templateUrl: './fee-scheme.component.html',
  styleUrls: ['fee-scheme.component.scss'],
  animations: [routerTransition()]
})
export class FeeSchemeComponent implements OnInit {

  feeScheme: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;
  constructor(private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
  }

  createForm(first, last) {
      this.startDate = first;
      this.endDate = last;
      this.feeScheme = this.fb.group({
        feeSchemeName: [''],
        purposeOfScheme: [''],
        startDateRange: [first],
        endDateRange: [last],
        className: [''],
        categoryName: ['']
      })
  }
  classNames = dropdownlist.className;
  categories = dropdownlist.categories;
  ngOnInit() {
  }

}
