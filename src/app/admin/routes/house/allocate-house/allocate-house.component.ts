import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {AllocateHouseDialogComponent} from "../dialog/allocate-house-dialog/allocate-house-dialog.component";
import {FormGroup, FormBuilder} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-allocate-house',
  templateUrl: './allocate-house.component.html',
  styleUrls: ['allocate-house.component.scss'],
  animations: [routerTransition()]
})
export class AllocateHouseComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor( public matPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog, private fb: FormBuilder) {
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
    this.tempData.push(
      {
        'rollNum': '1678hhhj88888',
        'name': 'Name1',
        'gender': 'Male',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['rollNum', 'name', 'gender', 'red', 'yellow', 'green', 'white', 'brown', 'pink', 'black', 'testh1'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

  openAllocateHouseForm(): void {
    let dialogRef = this.dialog.open(AllocateHouseDialogComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '400px',
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
}
