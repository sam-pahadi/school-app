import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../../config/constants";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['publish.component.scss']
})
export class PublishComponent implements OnInit {

  publishForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PublishComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.publishForm = this.fb.group({
      publishTo: [''],
      selectStd: [''],
      division: [''],
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
