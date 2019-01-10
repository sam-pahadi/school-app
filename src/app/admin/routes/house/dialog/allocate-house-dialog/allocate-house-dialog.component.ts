import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {dropdownlist} from "../../../../../config/constants";

@Component({
  selector: 'app-allocate-house-dialog',
  templateUrl: './allocate-house-dialog.component.html',
  styleUrls: ['allocate-house-dialog.component.scss']
})
export class AllocateHouseDialogComponent implements OnInit {
  allocateHouse: FormGroup;
  constructor(public dialogRef: MatDialogRef<AllocateHouseDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.allocateHouseForm();
  }

  allocateHouseForm(){
    this.allocateHouse = this.fb.group({
      std: [''],
      div: [''],
    });
  }
  selectStd = dropdownlist.selectStd;
  division = dropdownlist.division;
  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
