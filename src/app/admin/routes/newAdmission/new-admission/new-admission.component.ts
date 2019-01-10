import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";
import {dropdownlist} from "../../../../config/constants";
import {SiblingInfoComponent} from "../dialog/sibling-info/sibling-info.component";
import {MatDialog} from "@angular/material";
import {ClassDivisionComponent} from "../dialog/class-division/class-division.component";

@Component({
  selector: 'app-new-admission',
  templateUrl: 'new-admission.component.html',
  styleUrls: ['new-admission.component.scss'],
  animations: [routerTransition()]
})
export class NewAdmissionComponent implements OnInit {

  mobnumPattern = "^((\\+91-?)|0)?[0-9]{6,15}$";

  admissionInqForm: FormGroup;
  admissionForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.viewAdmissionInqForm();
    this.viewAdmissionForm();
  }
  viewAdmissionInqForm(){
    this.admissionInqForm = this.fb.group({
      inquiryNum: [''],
    });
  };

  viewAdmissionForm(){
    this.admissionForm = this.fb.group({
      firstName: ['', Validators.required],
      bloodGroup: [''],
      gender: [''],
      state: ['', Validators.required],
      inquiryNumber: [{value: '', disabled: true}],
      middleName: ['', Validators.required],
      pickerDob: [{value: '', disabled: true}, [Validators.required]],
      caste: [''],
      region: [''],
      category: [''],
      birthCity: [''],
      country: ['',Validators.required],
      parentCategory: ['',Validators.required],
      newAdmissionDate: [{value: '', disabled: true}, [Validators.required]],
      lastName: ['', Validators.required],
      nationality: ['', Validators.required],
      aadharNum: [''],
      commonFirstName: ['',Validators.required],
      commonLastName: ['',Validators.required],
      commonQualification: [''],
      annualIncome: [''],
      commonMiddletName: [''],
      commonOccupation: [''],
      commonPanNum: [''],
      commonDesignation: [''],
      commonNationalNum: [''],
      commonNationality: [''],
      commonOrganisation: [''],
      address: this.fb.group({
        commonAddressLineOne: ['', Validators.required],
        commonAddressLineTwo: [''],
        commonAddressLineThree: [''],
        commonCityName: ['', Validators.required],
        commonState: [''],
        commonMobileNum: ['', Validators.pattern(this.mobnumPattern)],
        commonEmailNum: ['', Validators.email],
        commonPhoneNum: [''],
        commonPinCode: ['', Validators.required],
        commonCountry: ['', Validators.required],
      }),
    });
  }
  annualIncome = dropdownlist.annualIncome;
  bloodGroup = dropdownlist.bloodGroup;
  states = dropdownlist.states;
  categories = dropdownlist.categories;
  countries = dropdownlist.countries;
  parentCategories = dropdownlist.parentCategories;

  // openSiblingInfo(): void {
  //   let dialogRef = this.dialog.open(SiblingInfoComponent, {
  //     // panelClass: 'app-full-bleed-dialog',
  //     width: '600px',
  //     // height:'600px'
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //
  //     }
  //   });
  // }

  // openClass(): void {
  //   let dialogRef = this.dialog.open(ClassDivisionComponent, {
  //     // panelClass: 'app-full-bleed-dialog',
  //     width: '1200px',
  //     // height:'600px'
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //
  //     }
  //   });
  // }

  ngOnInit() {
  }

}
