import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ClientService} from '../../../../../../service/client.service';
import {MessageService} from '../../../../../services/message.service';

@Component({
  selector: 'app-add-bus-point',
  templateUrl: './add-bus-point.component.html',
  styleUrls: ['add-bus-point.component.scss']
})
export class AddBusPointComponent implements OnInit {

  addDetailForm: FormGroup;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{6,15}$";
  route_id ;
  school_id = localStorage.getItem('school_id');

  constructor(public dialogRef: MatDialogRef<AddBusPointComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              public clientService: ClientService,
              private messageService: MessageService) {
    this.createForm();
    if (data === null) {
      this.route_id = " ";
      this.data = {
        bus_point: '',
        area: '',
        city: '',
        pick_up_time: '',
      };
    } else {
      this.route_id =  data._id;
    }
  }

  createForm() {
    this.addDetailForm = this.fb.group({
      bus_point: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      pick_up_time: ['', Validators.required],
      // drop_time: ['', Validators.required],
      school_id: ['', Validators.required],
      route_id: [''],
    });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  addBusRoute(value) {
    if (value.route_id !== " " ) {
      this.clientService.editBusRoute(value).subscribe( response => {
        if (response.status === 1000) {
          this.messageService.showSuccess('Edidted successfully');
        } else {
          this.messageService.showError('Something went wrong. Please try again later');
        }
      });
    } else {
      this.clientService.addBusRoute(value).subscribe( response => {
        if (response.status === 1000) {
          this.messageService.showSuccess('Added successfully');
        } else {
          this.messageService.showError('Something went wrong. Please try again later');
        }
      });
    }
  }

}
