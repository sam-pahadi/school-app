import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../../config/constants";

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['division.component.scss']
})
export class DivisionComponent implements OnInit {

  allocateDivision: FormGroup;

  constructor(public dialogRef: MatDialogRef<DivisionComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private fb: FormBuilder) {
    this.allocateDivisionForm();
  }

  allocateDivisionForm(){
    this.allocateDivision = this.fb.group({
      div: [''],
    });
  }
  division = dropdownlist.division;
  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
