import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['select-class.component.scss']
})
export class SelectClassComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectClassComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router : Router) {

  }

  openViewInquery(){
    this.router.navigate(['inquiry/view-inquiry-manager']);
    this.dialogRef.close();
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
