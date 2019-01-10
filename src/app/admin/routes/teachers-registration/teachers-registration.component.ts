import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {routerTransition} from '../../../config/router.animations';
import {ClientService} from '../../../../service/client.service';
import {successMsg} from '../../../config/constants';
import {MessageService} from '../../../services/message.service';
import {MatDialog, MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-teachers-registration',
  templateUrl: './teachers-registration.component.html',
  styleUrls: ['teachers-registration.component.scss'],
  animations: [routerTransition()]
})
export class TeachersRegistrationComponent implements OnInit {

  teacherReg: FormGroup;
  school_id = localStorage.getItem('school_id');
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(private fb: FormBuilder,
              private client: ClientService,
              private messageService: MessageService,
              public matPaginatorIntl: MatPaginatorIntl,
              public dialog: MatDialog) {
    this.addTeacherReg();
  }


  addTeacherReg() {
    this.teacherReg = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      qualification: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      school_id: [this.school_id, Validators.required],
      contactNumber: ['', Validators.required],
      enable: ['', Validators.required],
      teacher_id: [''],
    });
  }

  ngOnInit() {
    this.listTeachers();
  }

  createTeacher(value) {
    this.client.addTeacher(value).subscribe(response => {
      if (response.status === 1000) {
        this.messageService.showSuccess('Teacher successfully added to the record');
        this.listTeachers();
      } else {
        this.messageService.showError('Something went rong please try again later');
      }
    });
  }

  listTeachers() {
    this.tempData = [];
    this.client.listTeacher({ school_id: this.school_id}).subscribe(response => {
      if (response.status === 1000) {
        for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body[i]);
        }
        this.dataSource = new MatTableDataSource(this.tempData);
        this.displayedColumns = ['firstName', 'lastName', 'email', 'password', 'subject', 'action'];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.tempData = [];
      }
    });
  }

  // editTeacher(id) {
  //   this.client.editTeacher({
  //
  //   })
  //   console.log(id);
  // }

  deleteTeacher(id) {
    this.client.deleteTeacher({
      teacher_id: id
    }).subscribe( response => {
      if (response.status == 1000) {
        this.listTeachers();
      } else {
        this.messageService.showError('Something went rong please try again later');
      }
    });
  }

}
