import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-topic',
  templateUrl: 'add-topic.component.html',
  styleUrls: ['add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {

  addTopic: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddTopicComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.addTopic = this.fb.group({
      topicName: [''],
      note: [''],
    });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
