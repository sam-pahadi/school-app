import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginatorIntl, MatTableDataSource, MatPaginator, MatSort} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-previous-year-fees',
  templateUrl: './previous-year-fees.component.html',
  styleUrls: ['previous-year-fees.component.scss'],
  animations: [routerTransition()]
})
export class PreviousYearFeesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<Element>(true, []);
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
        'rollNum': '-',
        'grNum': '-',
        'name': '-',
        'middleName': '-',
        'lastName': '-',
        'classOrDiv': '-'
      }
    );

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['select', 'rollNum', 'grNum', 'name', 'middleName', 'lastName', 'classOrDiv', 'amount'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
