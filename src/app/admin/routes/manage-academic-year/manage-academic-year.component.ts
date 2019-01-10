import { Component, OnInit, ViewChild } from '@angular/core';
import {routerTransition} from "../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from "@angular/material";
import {ClientService} from '../../../../service/client.service';
@Component({
  selector: 'app-manage-academic-year',
  templateUrl: 'manage-academic-year.component.html',
  styleUrls: ['manage-academic-year.component.scss'],
  animations: [routerTransition()]
})
export class ManageAcademicYearComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(public matPaginatorIntl: MatPaginatorIntl,
              private client: ClientService) {
    this.setTableData();
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.client.getAcademicYear({
      user_id: localStorage.getItem('user_id')
    }).subscribe(response => {
      if (response.status === 1000) {
        for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body[i]);
        }
        setTimeout(() => {
          this.dataSource = new MatTableDataSource(this.tempData);
          this.displayedColumns = ['schoolName', 'board', 'academicYear', 'status'];
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }, 1000);
      }
    }, err => console.log(err));
  }


}
