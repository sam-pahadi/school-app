import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-assign-subjects',
  templateUrl: './assign-subjects.component.html',
  styleUrls: ['assign-subjects.component.scss']
})
export class AssignSubjectsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AssignSubjectsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  closeDilogue(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
