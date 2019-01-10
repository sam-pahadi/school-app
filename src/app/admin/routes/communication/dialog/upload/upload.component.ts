import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;

  constructor(public dialogRef: MatDialogRef<UploadComponent>, @Inject(MAT_DIALOG_DATA) public data: any,  private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
  }

  createForm(first, last) {
  this.startDate = first;
  this.endDate = last;
    this.uploadForm = this.fb.group({
      galleryName: [''],
      description: [''],
      startDateRange: [first],
      endDateRange: [last]
    });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

  fileEvent(value) {
    console.log(value);
  }

}
