import {Component, OnInit, ViewChild} from '@angular/core';
import {ManageClassDivisionComponent} from "../dialog/manage-class-division/manage-class-division.component";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {routerTransition} from "../../../../config/router.animations";
import {DivisionComponent} from "../dialog/division/division.component";

@Component({
  selector: 'app-manage-division',
  templateUrl: './manage-division.component.html',
  styleUrls: ['manage-division.component.scss'],
  animations: [routerTransition()]
})
export class ManageDivisionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(public dialog: MatDialog, public matPaginatorIntl: MatPaginatorIntl) {
    this.setTableData();
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'firstName': 'Ravi',
        'middleName': 'kuamr',
        'lastName': 'verma',
        'division': '1(A)',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['firstName', 'middleName', 'lastName', 'division', 'actions'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

  openManageClass(): void {
    let dialogRef = this.dialog.open(ManageClassDivisionComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  openDivision(): void {
    let dialogRef = this.dialog.open(DivisionComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }
}
