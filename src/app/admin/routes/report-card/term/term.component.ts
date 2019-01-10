import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormBuilder, FormGroup} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['term.component.scss'],
  animations: [routerTransition()]
})
export class TermComponent implements OnInit {
  termForm: FormGroup;
  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(private fb: FormBuilder, public matPaginatorIntl: MatPaginatorIntl) {
    this.createForm();
    this.setTableData();
    this.createSearchForm();
  }

  createSearchForm(){
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  createForm() {
    this.termForm = this.fb.group({
      selectClass: [''],
      termName: [''],
      termDescription: [''],
      termLabel: [''],
      termNote: [''],
    });
  }
  classNameList = dropdownlist.className;

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'className': '1',
        'termName': '-',
        'termDescription': '-',
        'termLabel': '-',
        'termNote': '-',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['className', 'termName', 'termDescription', 'termLabel', 'termNote', 'action'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

}
