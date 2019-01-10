import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sibling-info',
  templateUrl: './sibling-info.component.html',
  styleUrls: ['sibling-info.component.scss']
})
export class SiblingInfoComponent implements OnInit {
  siblingInfo: FormGroup;
  isOn;

  constructor(public dialogRef: MatDialogRef<SiblingInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.siblingInfoForm();
  }

  siblingInfoForm(){
    this.siblingInfo = this.fb.group({
      mobileNum: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}
