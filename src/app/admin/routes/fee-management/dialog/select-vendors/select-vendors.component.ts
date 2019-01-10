import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-select-vendors',
  templateUrl: './select-vendors.component.html',
  styleUrls: ['select-vendors.component.scss']
})
export class SelectVendorsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectVendorsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  vendors: string[] = ['	Utsav International School,,,', '	UVA Institute', '	Abc International School', 'Transport Vendor', '	Utsav International School,'];

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
