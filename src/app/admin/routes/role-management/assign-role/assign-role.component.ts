import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {routerTransition} from "../../../../config/router.animations";
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['assign-role.component.scss'],
  animations: [routerTransition()]
})
export class AssignRoleComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];
  constructor(public matPaginatorIntl: MatPaginatorIntl) {
    this.setTableData();
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'userType': 'Admin'
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['userType', 'admin', 'marketing', 'finance', 'action'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };




}
