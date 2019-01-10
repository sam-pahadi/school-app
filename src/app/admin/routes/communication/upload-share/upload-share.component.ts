import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {UploadComponent} from "../dialog/upload/upload.component";
import {FormGroup, FormBuilder} from "@angular/forms";
import {DescriptionComponent} from "../dialog/description/description.component";
import {PublishComponent} from "../dialog/publish/publish.component";

@Component({
  selector: 'app-upload-share',
  templateUrl: './upload-share.component.html',
  styleUrls: ['upload-share.component.scss']
})
export class UploadShareComponent implements OnInit {

  searchForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(public dialog: MatDialog, private fb: FormBuilder, public matPaginatorIntl: MatPaginatorIntl) {
    this.createSearchForm();
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
        'name': 'red',
        'showTill': '28-07-2018',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['name', 'description', 'media', 'showTill', 'actions'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

  createSearchForm(){
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  shareIt(): void {
    let dialogRef = this.dialog.open(PublishComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  viewDetail(): void {
    let dialogRef = this.dialog.open(DescriptionComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  upload(): void {
    let dialogRef = this.dialog.open(UploadComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

}
