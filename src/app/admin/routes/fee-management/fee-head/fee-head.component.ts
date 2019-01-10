import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-fee-head',
  templateUrl: './fee-head.component.html',
  styleUrls: ['fee-head.component.scss'],
  animations: [routerTransition()]
})
export class FeeHeadComponent implements OnInit {

  feeHead: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor( private fb: FormBuilder ,private matPaginatorIntl: MatPaginatorIntl) {
    this.setTableData();
    this.feeHeadForm();
  }

  feeHeadForm(){
    this.feeHead = this.fb.group({
      feeHead: ['', Validators.required],
      description: ['', Validators.required],
      feeHeadType:['']
    })
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'feeHead': '-',
        'feeHeadType': '-',
        'description': '-'
      }
    );

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['feeHead', 'feeHeadType', 'description', 'status', 'update'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

}
