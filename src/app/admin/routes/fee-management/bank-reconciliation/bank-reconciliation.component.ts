import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-bank-reconciliation',
  templateUrl: './bank-reconciliation.component.html',
  styleUrls: ['bank-reconciliation.component.scss'],
  animations: [routerTransition()]
})
export class BankReconciliationComponent implements OnInit {

  reconciliation: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(private fb: FormBuilder,  public matPaginatorIntl: MatPaginatorIntl) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.reconciliationFormCreate(this.firstDay, this.lastDay);
    this.setTableData();
  }

  reconciliationFormCreate(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.reconciliation = this.fb.group({
      vendorSelection: [''],
      chequeSelection: [''],
      startDateRange: [first, Validators.required],
      endDateRange: [last, Validators.required],
      chequeNum: [''],
      receiptNum: ['']
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
        'studentName': 'gg jhvj',
        'class': 'gddyg',
        'recNum': '-',
        'chequeDate': '-',
        'amount': '-',
        'status': '-',
        'reason': '-',
        'chargeIncurred': '-',
      }
    );

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['studentName', 'class', 'recNum', 'paymentDate', 'chequeDate', 'amount', 'chequeStatus', 'status', 'reason', 'chargeIncurred'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

}
