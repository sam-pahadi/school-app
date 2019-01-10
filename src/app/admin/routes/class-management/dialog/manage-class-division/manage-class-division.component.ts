import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-manage-class-division',
  templateUrl: './manage-class-division.component.html',
  styleUrls: ['manage-class-division.component.scss']
})
export class ManageClassDivisionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ManageClassDivisionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }


}
