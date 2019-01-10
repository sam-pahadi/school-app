import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-fee-payment',
  templateUrl: './fee-payment.component.html',
  styleUrls: ['fee-payment.component.scss'],
  animations: [routerTransition()]
})
export class FeePaymentComponent implements OnInit {
  feePayment: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(private fb : FormBuilder ,private matPaginatorIntl: MatPaginatorIntl) {
    this.setTableData();
    this.createForm();
  }

  createForm(){
    this.feePayment = this.fb.group({
      gender: [''],
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
        'grNum': '576f76f6',
        'studentName': '-',
        'class': '-',
        'totalFees': '-',
        'paidTillDate': '-',
        'balance': '-',
        'dueToday': '-',
        'lastPaidDate': '-',
        'otherTotalBill': '-',
        'otherTotalPaidBill': '-'
      }
    );

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['grNum', 'studentName', 'class', 'totalFees', 'paidTillDate','balance', 'dueToday', 'lastPaidDate', 'otherTotalBill', 'otherTotalPaidBill', 'raiseBill', 'payNow', 'receipt', 'refund', 'sibling'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

}
