import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {ReportCardClassDivisionComponent} from "../dialog/reportCard-class-division/class-division.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-download-report',
  templateUrl: './download-report.component.html',
  styleUrls: ['download-report.component.scss'],
  animations: [routerTransition()]
})
export class DownloadReportComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openClass(): void {
    let dialogRef = this.dialog.open(ReportCardClassDivisionComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '1200px',
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
