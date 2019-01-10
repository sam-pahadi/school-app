import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-class-division',
  templateUrl: './class-division.component.html',
  styleUrls: ['class-division.component.scss']
})
export class ClassDivisionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClassDivisionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
