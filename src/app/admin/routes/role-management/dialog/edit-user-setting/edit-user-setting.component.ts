import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {dropdownlist} from "../../../../../config/constants";

@Component({
  selector: 'app-edit-user-setting',
  templateUrl: './edit-user-setting.component.html',
  styleUrls: ['edit-user-setting.component.scss']
})
export class EditUserSettingComponent implements OnInit {

  updateForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditUserSettingComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      region: [''],
      city: [''],
      area: [''],
    });
  }
  regionList = dropdownlist.regionList;
  cityList = dropdownlist.regionList;
  areaList = dropdownlist.regionList;
  closeDilogue(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
