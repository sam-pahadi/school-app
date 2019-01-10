import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-view-bus-route',
  templateUrl: './view-bus-route.component.html',
  styleUrls: ['view-bus-route.component.scss']
})
export class ViewBusRouteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewBusRouteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
