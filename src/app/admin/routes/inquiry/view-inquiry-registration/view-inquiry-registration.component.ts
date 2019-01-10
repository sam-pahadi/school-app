import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";
import {dropdownlist} from "../../../../config/constants";
import {ClientService} from '../../../../../service/client.service';
import {MessageService} from '../../../../services/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-inquiry-registration',
  templateUrl: 'view-inquiry-registration.component.html',
  styleUrls: ['view-inquiry-registration.component.scss'],
  animations: [routerTransition()]
})
export class ViewInquiryRegistrationComponent implements OnInit {

  viewInquiry: FormGroup;
  bloodGroup = dropdownlist.bloodGroup;
  school_id = localStorage.getItem('school_id');

  constructor(private fb: FormBuilder,
              private client: ClientService,
              private message: MessageService,
              private route: Router) {
    this.viewInquiryForm();
  }

  viewInquiryForm() {
    this.viewInquiry = this.fb.group({
      name: ['', Validators.required],
      class: ['', Validators.required],
      address: ['', Validators.required],
      gender: [''],
      blood_group: [''],
      fathersName: [''],
      mothersName: [''],
      mothersOcupation: [''],
      fathersOcupation: [''],
      email_id: [''],
      tavel_by: [''],
      food_choice: [''],
      contact_number: [''],
      school_id: ['', Validators.required],
      other: [''],
      dob: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(value) {
    value.dob = value.dob.toLocaleDateString();
    this.client.inqueryManagerAdd(value).subscribe( response => {
      if (response.status == 1000) {
        this.message.showSuccess('Inquery Generated');
        this.route.navigate(['inquiry/inquiry-manager']);
      } else {
        this.message.showSuccess('Something went wrong!');
      }
    });
  }
}
