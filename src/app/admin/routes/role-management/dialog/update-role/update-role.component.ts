import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClientService} from '../../../../../../service/client.service';
import {MessageService} from '../../../../../services/message.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {
  updateForm: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;
  school_id = localStorage.getItem('school_id');
  user_id;

  constructor(public dialogRef: MatDialogRef<UpdateRoleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              public client: ClientService,
              private message: MessageService) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
    if (data === null) {
      this.user_id = "";
      this.data = {
        firstName: '',
        lastName: '',
        contact: '',
        type: '',
        email: '',
        password: '',
        valid_upto: ''
      };
    } else {
      this.user_id = data._id;
    }
  }

  createForm(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.updateForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      contact: [''],
      type: [''],
      email: [''],
      password: [''],
      valid_upto: [''],
      school_id: [''],
      user_id: [''],
  });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  addRole(value) {
    // value.created_at = value.created_at.toLocaleDateString();
    // value.valid_upto = value.valid_upto.toLocaleDateString();
    value.type = 2;

    if (this.user_id === "") {
      this.client.addRole(value).subscribe( response => {
        if(response.status === 1000) {
          this.message.showSuccess('Added');
        } else {
          this.message.showError('Error');
        }
      });
    } else {
      this.client.updateRole(value).subscribe( response => {
        if(response.status === 1000) {
          this.message.showSuccess('Added');
        } else {
          this.message.showError('Error');
        }
      });
    }


  }

}
