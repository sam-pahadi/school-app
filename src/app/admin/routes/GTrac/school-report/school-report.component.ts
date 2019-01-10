import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';
import {routerTransition} from '../../../../config/router.animations';
import {ClientService} from '../../../../../service/client.service';

@Component({
  selector: 'app-school-report',
  templateUrl: './school-report.component.html',
  styleUrls: ['school-report.component.scss'],
  animations: [routerTransition()]
})
export class SchoolReportComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  school_id = localStorage.getItem('school_id');
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
    this.client.gtrac({school_id: this.school_id}).subscribe(response => {
      // console.log(JSON.stringify(response));
      if (response.status === 1000) {
        // for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body);
        // }
        console.log(this.tempData);
        this.dataSource = new MatTableDataSource(this.tempData);
        this.displayedColumns = ['state', 'city', 'contact_number', 'pin_code', 'schoolName', 'address'];
        this.dataSource.paginator = this.paginator;
      } else {
        this.tempData = [];
      }
    });
  }

}
