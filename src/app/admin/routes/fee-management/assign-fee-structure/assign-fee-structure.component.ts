import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {MatDialog} from "@angular/material";
import {CreateFeeStructureComponent} from "../dialog/create-fee-structure/create-fee-structure.component";

@Component({
  selector: 'app-assign-fee-structure',
  templateUrl: './assign-fee-structure.component.html',
  styleUrls: ['assign-fee-structure.component.scss'],
  animations: [routerTransition()]
})
export class AssignFeeStructureComponent implements OnInit {

  feeStructure: FormGroup;
  constructor(private fb: FormBuilder,public dialog: MatDialog) {
    this.createForm();
  }

  createForm(){
    this.feeStructure = this.fb.group({
      className: [''],
      division: [''],
    });
  }

  className = dropdownlist.className;
  division = dropdownlist.division;

  createNew(): void {
    let dialogRef = this.dialog.open(CreateFeeStructureComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '1200px',
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
  ngOnInit() {
  }

}
