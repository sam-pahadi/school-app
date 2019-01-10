import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";

@Component({
  selector: 'app-generate-roll-num',
  templateUrl: './generate-roll-num.component.html',
  styleUrls: ['generate-roll-num.component.scss'],
  animations: [routerTransition()]
})
export class GenerateRollNumComponent implements OnInit {

  searchForm: FormGroup;
  generateRollNum: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(public matPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog, private fb: FormBuilder) {
    this.generateRollNumForm();
    this.setTableData();
    this.createSearchForm();
  }

  createSearchForm(){
    this.searchForm = this.fb.group({
      search: ['']
    });
  }
  generateRollNumForm(){
    this.generateRollNum = this.fb.group({
      className: [''],
      division: [''],
    });
  }

  className = dropdownlist.className;
  division = dropdownlist.division;


  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'studName': 'name 1',
        'gender': 'Male'
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['studName', 'gender', 'rollNum'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };



}
