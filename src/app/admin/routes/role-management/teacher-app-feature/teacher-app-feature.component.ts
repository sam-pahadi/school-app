import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";

@Component({
  selector: 'app-teacher-app-feature',
  templateUrl: './teacher-app-feature.component.html',
  styleUrls: ['teacher-app-feature.component.scss'],
  animations: [routerTransition()]
})
export class TeacherAppFeatureComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(public matPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog) {
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
        'teacher': 'Varun Charan Sonji'
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['teacher', 'attendance', 'notice', 'tracking', 'media', 'callSupport', 'forms', 'misReports', 'appointment', 'polls', 'RubixPolls', 'myTimeTable', 'faq', 'utilities', 'RTDownloadProgress', 'QuickSchool', 'shareEnq', 'pendingApproval', 'adminReport', 'feeCollection', 'smilyCard', 'staffWork', 'staffAttendance', 'studentAttendance', 'classTimetable'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

}
