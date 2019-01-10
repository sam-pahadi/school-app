import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {ViewBusRouteComponent} from "../dialog/view-bus-route/view-bus-route.component";
import {AddBusRouteComponent} from "../dialog/add-bus-route/add-bus-route.component";
import {ClientService} from '../../../../../service/client.service';
import {MessageService} from '../../../../services/message.service';

@Component({
  selector: 'app-manage-bus-route',
  templateUrl: './manage-bus-route.component.html',
  styleUrls: ['manage-bus-route.component.scss'],
  animations: [routerTransition()]
})
export class ManageBusRouteComponent implements OnInit {

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
              public messageService: MessageService,
              private client: ClientService) {
    this.setTableData();
    this.createSearchForm();
    // this.rout_idGet();
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
    this.tempData.push(
      {
        'routeName': 'name 1',
        'driverName': '-',
        'status': 'Active',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['routeName', 'busRouteType', 'status', 'action'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };


  openViewBusRoute(): void {
    let dialogRef = this.dialog.open(ViewBusRouteComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  openAddBusRoute(): void {
    let dialogRef = this.dialog.open(AddBusRouteComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  deteData(id) {

  }


}
