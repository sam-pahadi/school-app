import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {dropdownlist} from "../../../../../config/constants";
import {ClientService} from '../../../../../../service/client.service';
import {MessageService} from '../../../../../services/message.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['add-detail.component.scss']
})
export class AddDetailComponent implements OnInit {

  addDetailForm: FormGroup;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{6,15}$";
  categories = dropdownlist.categories;
  school_id = localStorage.getItem('school_id');
  driver_id;

  constructor(public dialogRef: MatDialogRef<AddDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              public clientService: ClientService,
              private messageService: MessageService) {
    this.createForm();
    if (data === null) {
      this.driver_id = " ";
      this.data = {
        firstName: '',
        lastName: '',
        dob: '',
        category: '',
        maritial_status: '',
        email: '',
        password: '',
        type: '',
        school_id: '',
        physically_challenged: '',
        driver_id: '',
        gender: '',
        address: {
          address_1: '',
          address_2: '',
          address_3: '',
          city: '',
          state: '',
          pin_code: '',
          country: '',
        }
      }
    }
    this.driver_id = data._id;
  }

  createForm() {
    this.addDetailForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      category: [''],
      maritial_status: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
      school_id: ['', Validators.required],
      physically_challenged: ['', Validators.required],
      driver_id: [''],
      gender: [''],
      address: this.fb.group({
        address_1: ['', Validators.required],
        address_2: [''],
        address_3: [''],
        city: ['', Validators.required],
        state: [''],
        pin_code: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

  addDriver(value) {
    value.dob = value.dob.toLocaleDateString();
    if (value.driver_id !== " " ) {
      this.clientService.editDriver(value).subscribe( response => {
        if (response.status === 1000) {
          this.messageService.showSuccess('Edidted successfully');
        } else {
          this.messageService.showError('Something went wrong. Please try again later');
        }
      });
    } else {
      this.clientService.addDriver(value).subscribe( response => {
        if (response.status === 1000) {
          this.messageService.showSuccess('Added successfully');
        } else {
          this.messageService.showError('Something went wrong. Please try again later');
        }
      });
    }

  }

}
