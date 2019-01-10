import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-approve-profile-update',
  templateUrl: './approve-profile-update.component.html',
  styleUrls: ['approve-profile-update.component.scss'],
  animations: [routerTransition()]
})
export class ApproveProfileUpdateComponent implements OnInit {
  approveForm: FormGroup;
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
    this.approveForm = this.fb.group({
      selectList : [''],
      startDateRange: [first],
      endDateRange: [last],
    })
  }

  entityFromList: any[] = ['Teacher', 'Student'];
  ngOnInit() {
  }

}
