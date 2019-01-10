import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
