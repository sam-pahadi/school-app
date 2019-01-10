import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-fee-structure',
  templateUrl: './create-fee-structure.component.html',
  styleUrls: ['create-fee-structure.component.scss']
})
export class CreateFeeStructureComponent implements OnInit {
  createFeeStructureForm : FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;
  constructor(public dialogRef: MatDialogRef<CreateFeeStructureComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createFeeStructure(this.firstDay, this.lastDay);
  }

  createFeeStructure(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.createFeeStructureForm = this.fb.group({
      feeStructureName: [''],
      startDateRange: [first],
      endDateRange: [last],
    })
  }
  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
