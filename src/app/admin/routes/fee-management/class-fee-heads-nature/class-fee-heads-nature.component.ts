import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {SelectVendorsComponent} from "../dialog/select-vendors/select-vendors.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-class-fee-heads-nature',
  templateUrl: './class-fee-heads-nature.component.html',
  styleUrls: ['class-fee-heads-nature.component.scss'],
  animations: [routerTransition()]
})
export class ClassFeeHeadsNatureComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectVendor(): void {
    let dialogRef = this.dialog.open(SelectVendorsComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '600px',
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
