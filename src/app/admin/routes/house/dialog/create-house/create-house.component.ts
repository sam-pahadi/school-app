import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['create-house.component.scss']
})
export class CreateHouseComponent implements OnInit {

  createHouse: FormGroup;
  constructor(public dialogRef: MatDialogRef<CreateHouseComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.createHouseForm();
  }

  createHouseForm(){
    this.createHouse = this.fb.group({
      houseName: [''],
      description: [''],
    });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
