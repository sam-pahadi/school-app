import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DescriptionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
}
