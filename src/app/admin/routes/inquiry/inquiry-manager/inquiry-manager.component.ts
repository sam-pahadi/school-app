import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";
import {dropdownlist} from "../../../../config/constants";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {SelectClassComponent} from "../dialog/select-class/select-class.component";
import {Router} from '@angular/router';
import {ClientService} from '../../../../../service/client.service';
import {MessageService} from '../../../../services/message.service';

@Component({
  selector: 'app-inquiry-manager',
  templateUrl: 'inquiry-manager.component.html',
  styleUrls: ['inquiry-manager.component.scss'],
  animations: [routerTransition()]
})
export class InquiryManagerComponent implements OnInit {

  filterForm: FormGroup;
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{6,15}$";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];
  school_id = localStorage.getItem('school_id');

  constructor( private fb: FormBuilder,
               public matPaginatorIntl: MatPaginatorIntl,
               private client: ClientService,
               private messageService: MessageService,
               public dialog: MatDialog,
               private router: Router) {
    this.filterBoxForm();
  }
  filterBoxForm() {
    this.filterForm = this.fb.group({
      studentName: [''],
      action: [''],
      fatherName: [''],
      pickerDob: [''],
      mobileNum: [''],
    });
  }

  actionType = dropdownlist.actionType;

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
    this.listInquery();
  }


  setTableData() {
    // this.tempData = [];
    // this.tempData.push(
    //   {
    //     'name': 'Ravi',
    //     'class': 'IV',
    //     'gender': 'Male',
    //     'address': 'Sohna',
    //     'regNum': 'RX/IV/1',
    //     'interview': '-',
    //     'status': 'Admited',
    //   }
    // );
    // setTimeout(() => {
    //   this.dataSource = new MatTableDataSource(this.tempData);
    //   this.displayedColumns = ['name', 'class', 'gender', 'address', 'regNum', 'interview', 'status', 'actions'];
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // }, 1000);
  }

  openSelectClass(): void {
    this.router.navigate(['inquiry/view-inquiry-manager']);
  }

  listInquery() {
    this.tempData = [];
    this.client.inqueryList({ school_id: this.school_id}).subscribe(response => {
      if (response.status === 1000) {
        for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body[i]);
        }
        console.log(this.tempData);
        this.dataSource = new MatTableDataSource(this.tempData);
        this.displayedColumns = ['name', 'class', 'gender', 'address', 'contact_number', 'action'];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.tempData = [];
      }
    });
  }

  onchange(event, id) {
    this.client.inqueryEdit({action: event.value, inquery_id: id}).subscribe(response => {
      if (response.status === 1000) {
        this.messageService.showSuccess('Status has been changed successfully');
        this.listInquery();
      } else {
        this.messageService.showError('Something went wrong. Please try again later');
      }
    });
  }
}
