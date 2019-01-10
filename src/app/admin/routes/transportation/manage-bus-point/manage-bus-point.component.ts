import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {AddBusPointComponent} from "../dialog/add-bus-point/add-bus-point.component";
import {ClientService} from '../../../../../service/client.service';
import {MessageService} from '../../../../services/message.service';

@Component({
  selector: 'app-manage-bus-point',
  templateUrl: './manage-bus-point.component.html',
  styleUrls: ['manage-bus-point.component.scss'],
  animations: [routerTransition()]
})
export class ManageBusPointComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];
  school_id = localStorage.getItem('school_id');

  constructor(public matPaginatorIntl: MatPaginatorIntl,
              public dialog: MatDialog,
              private client: ClientService,
              private messageService: MessageService,
              private fb: FormBuilder) {
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
    this.client.listBusRoute({ school_id: this.school_id}).subscribe(response => {
      if (response.status === 1000) {
        for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body[i]);
        }
        console.log(this.tempData);
        this.dataSource = new MatTableDataSource(this.tempData);
        this.displayedColumns = ['bus_point', 'area', 'city', 'pick_up_time', 'action'];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.tempData = [];
      }
    });
    // this.tempData = [];
    // this.tempData.push(
    //   {
    //     'busPointName': 'name 1',
    //     'area': '-',
    //     'city': '-',
    //     'pinCode': '454567',
    //     'schoolLocation': '-',
    //     'status': 'Active',
    //   }
    // );
    // setTimeout(() => {
    //   this.dataSource = new MatTableDataSource(this.tempData);
    //   this.displayedColumns = ['busPointName', 'area', 'city', 'pinCode', 'schoolLocation', 'status', 'action'];
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // }, 1000)
  }


  openAddBusPointPage(element = null): void {
    let dialogRef = this.dialog.open(AddBusPointComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '750px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  deleteBusPOint(id) {
    this.client.deleteDriver({route_id: id}).subscribe(response => {
      if (response.status === 1000) {
        this.messageService.showSuccess('Deleted Successfully');
        this.setTableData();
      } else {
        this.messageService.showError('Something went wrong. Please try again later');
      }
    });
  }

}
