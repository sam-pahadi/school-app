import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {CreateHouseComponent} from "../dialog/create-house/create-house.component";
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['view-house.component.scss'],
  animations: [routerTransition()]
})
export class ViewHouseComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(private fb: FormBuilder, public matPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog) {
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
        'name': 'red',
        'description': 'red',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['name', 'description', 'actions'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };
  openCreateHouseForm(): void {
    let dialogRef = this.dialog.open(CreateHouseComponent, {
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
