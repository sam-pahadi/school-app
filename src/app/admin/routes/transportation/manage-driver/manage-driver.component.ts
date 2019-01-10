import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {ViewDetailComponent} from "../dialog/view-detail/view-detail.component";
import {AddDetailComponent} from "../dialog/add-detail/add-detail.component";
import {ClientService} from '../../../../../service/client.service';
import {MessageService} from '../../../../services/message.service';

@Component({
  selector: 'app-manage-driver',
  templateUrl: './manage-driver.component.html',
  styleUrls: ['manage-driver.component.scss'],
  animations: [routerTransition()]
})
export class ManageDriverComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];
  school_id = localStorage.getItem('school_id');

  constructor(public matPaginatorIntl: MatPaginatorIntl,
              public dialog: MatDialog,
              private fb: FormBuilder,
              private client: ClientService,
              private messageService: MessageService) {
    this.setTableData();
    this.createSearchForm();
  }

  createSearchForm(){
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.client.listDriver({ school_id: this.school_id}).subscribe(response => {
      // console.log(JSON.stringify(response));
      if (response.status === 1000) {
        for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body[i]);
        }
        console.log(this.tempData);
        this.dataSource = new MatTableDataSource(this.tempData);
        this.displayedColumns = ['firstName', 'gender', 'dob', 'userName', 'type', 'action'];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.tempData = [];
      }
    });
    // this.tempData = [];
    // this.tempData.push(
    //   {
    //     'fullName': 'name 1',
    //     'gender': 'Male',
    //     'dob': '22/10/1290',
    //     'userName': 'Ram123',
    //     'mobNum': '897899765',
    //     'status': 'Active',
    //   }
    // );
    // setTimeout(() => {
    //   this.dataSource = new MatTableDataSource(this.tempData);
    //   this.displayedColumns = ['firstName', 'gender', 'dob', 'userName', 'type', 'action'];
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // }, 1000);
  }


  openDetailPage(element = null): void {
    let dialogRef = this.dialog.open(ViewDetailComponent, {
      width: '700px',
      data: element,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //
    //   }
    // });
  }

  openAddDetailPage(element): void {
    let dialogRef = this.dialog.open(AddDetailComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '1200px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  deleteDriver(id) {
    this.client.deleteBusRoute({driver_id: id}).subscribe(response => {
      if (response.status === 1000) {
        this.messageService.showSuccess('Deleted Successfully');
        this.setTableData();
      } else {
        this.messageService.showError('Something went wrong. Please try again later');
      }
    });
  }

}
