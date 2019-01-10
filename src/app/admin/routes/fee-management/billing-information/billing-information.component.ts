import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['billing-information.component.scss'],
  animations: [routerTransition()]
})
export class BillingInformationComponent implements OnInit {

  billingInfo: FormGroup;

  constructor(private fb : FormBuilder) {
    this.createBillingInfo();
  }

  createBillingInfo(){
    this.billingInfo = this.fb.group({
      firmDetail: this.fb.group({
        firmName: ['', Validators.required],
      }),
      contactDetails: this.fb.group({
        firstName : ['', Validators.required],
        emailId : ['', Validators.required],
        lastName : ['', Validators.required],
        primaryNum : ['', Validators.required],
        secondaryNum: ['']
      }),
      permanentAddress: this.fb.group({
        commonAddressLineOne: ['', Validators.required],
        commonAddressLineTwo: [''],
        city: ['', Validators.required],
        commonPinCode: ['', Validators.required],
        commonCountry: ['', Validators.required],
        state: ['', Validators.required],
      }),
      localAddress: this.fb.group({
        commonAddressLineOne: [''],
        commonAddressLineTwo: [''],
        city: [''],
        commonPinCode: [''],
        commonCountry: [''],
        state: [''],
      }),
      bankAccountDetails : this.fb.group({
        accountNum: [''],
        IFSC_code: [''],
        MICR_code: ['']
      }),
      legalInfo: this.fb.group({
        shopLicenseNum: [''],
        PAN_num: [''],
        TIN_num: ['']
      })
    });
  }

  states = dropdownlist.states;
  countries = dropdownlist.countries;

  ngOnInit() {
  }

}
