import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginatorIntl, MatSort, MatPaginator, MatTableDataSource} from "@angular/material";
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-house-report',
  templateUrl: './house-report.component.html',
  styleUrls: ['house-report.component.scss'],
  animations: [routerTransition()]
})
export class HouseReportComponent implements OnInit {

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
        'rollNum': '1678hhhj88888',
        'name': 'Name1',
        'gender': 'Male',
        'class': 'IV',
        'division': 'A',
        'house': 'Red',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['rollNum', 'name', 'gender', 'class', 'division', 'house'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

}
