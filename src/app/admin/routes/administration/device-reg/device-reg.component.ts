import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-device-reg',
  templateUrl: './device-reg.component.html',
  styleUrls: ['device-reg.component.scss'],
  animations: [routerTransition()]
})
export class DeviceRegComponent implements OnInit {

  deviceRegForm: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor( private fb : FormBuilder,  public matPaginatorIntl: MatPaginatorIntl) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
    this.setTableData();
  }

  teacherFromList:any[] = ['name1', 'name2'];

  createForm(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.deviceRegForm = this.fb.group({
      deviceUniqueNum : [''],
      selectList : [''],
      startDateRange: [first],
      endDateRange: [last],
    })
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'deviceNum': '2345678',
        'teacher': 'gddyg',
        'startDate': '-',
        'endDate': '-',
      }
    );

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['deviceNum', 'teacher', 'startDate', 'endDate', 'status', 'action'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

}
