import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-attendance-class',
  templateUrl: './attendance-class.component.html',
  styleUrls: ['attendance-class.component.scss']
})
export class AttendanceClassComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AttendanceClassComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
