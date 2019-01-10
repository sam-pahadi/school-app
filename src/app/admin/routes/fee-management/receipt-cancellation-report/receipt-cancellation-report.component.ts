import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {MatPaginatorIntl, MatSort, MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-receipt-cancellation-report',
  templateUrl: './receipt-cancellation-report.component.html',
  styleUrls: ['receipt-cancellation-report.component.scss'],
  animations: [routerTransition()]
})
export class ReceiptCancellationReportComponent implements OnInit {

  feeCollectionReport: FormGroup;
  startDate;
  endDate;
  firstDay;
  lastDay;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(public matPaginatorIntl: MatPaginatorIntl, private fb: FormBuilder) {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    this.firstDay = new Date(y, m, 1);
    this.lastDay = new Date(y, m + 1, 0);
    this.createForm(this.firstDay, this.lastDay);
    this.setTableData();
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }


  createForm(first, last) {
    this.startDate = first;
    this.endDate = last;
    this.feeCollectionReport = this.fb.group({
      startDateRange: [first],
      endDateRange: [last],
    })
  }
  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'cancelledData': '-',
        'rollNum': '-',
        'name': 'Name1',
        'class': 'IV',
        'receiptNum': '-',
        'receiptType': '-',
        'date': '-',
        'paidFees': '-',
        'paymentMode': '-',
        'installmentName': '-',
        'discount': '-',
        'cancelledBy': '-',
        'reason': '-',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = [
        'cancelledData',
        'rollNum',
        'name',
        'class',
        'receiptNum',
        'receiptType',
        'date',
        'paidFees',
        'paymentMode',
        'installmentName',
        'discount',
        'cancelledBy',
        'reason',
      ];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

}

