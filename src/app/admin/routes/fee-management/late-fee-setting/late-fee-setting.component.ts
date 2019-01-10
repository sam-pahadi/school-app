import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-late-fee-setting',
  templateUrl: './late-fee-setting.component.html',
  styleUrls: ['late-fee-setting.component.scss'],
  animations: [routerTransition()]
})
export class LateFeeSettingComponent implements OnInit {

  late_fee_setting: FormGroup;
  isOn;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.late_fee_setting = this.fb.group({
      lateFee: [''],
      gracePeriod: [''],
      lateFeeAccept: ['']
    });
  }

  ngOnInit() {
  }

}
