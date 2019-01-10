import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {EditUserSettingComponent} from "../dialog/edit-user-setting/edit-user-setting.component";

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['user-setting.component.scss'],
  animations: [routerTransition()]
})
export class UserSettingComponent implements OnInit {

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
        'user': 'Admin',
        'region': '-',
        'city': '-',
        'area': '-',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['user', 'region', 'city', 'area', 'action'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

  openUpdate(){
    let dialogRef = this.dialog.open(EditUserSettingComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '700px',
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
