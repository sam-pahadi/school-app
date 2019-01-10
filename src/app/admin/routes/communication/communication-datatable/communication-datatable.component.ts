import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-communication-datatable',
  templateUrl: './communication-datatable.component.html',
  styleUrls: ['communication-datatable.component.scss']
})
export class CommunicationDatatableComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];
  today = Date.now();

  constructor(public matPaginatorIntl: MatPaginatorIntl, private fb: FormBuilder) {
    this.createSearchForm();
    this.setTableData();
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
    this.tempData.push({
      'id': 111,
      'title': 'Independence Day',
      'description': 'View',
      'updatedOn': this.today,
      'createdOn': this.today,
      'createdBy': 'Admin',
      'updatedBy': 'Admin',
      'deviceNum': '-',
      'sharedOn': this.today,
    });
    setTimeout(()=> {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['title', 'description', 'attachments', 'updatedOn', 'createdOn', 'createdBy', 'updatedBy', 'deviceNum', 'sharedOn', 'actions'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

}
