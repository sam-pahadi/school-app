import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder} from "@angular/forms";
import {MatPaginatorIntl, MatSort, MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-head-wise-fee-report',
  templateUrl: './head-wise-fee-report.component.html',
  styleUrls: ['head-wise-fee-report.component.scss'],
  animations: [routerTransition()]
})
export class HeadWiseFeeReportComponent implements OnInit {

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
        'name': 'Name1',
        'class': 'IV',
        'receiptNum': '-',
        'regCharge': '-',
        'admissionFees': '-',
        'labFee': '-',
        'receiptType': '-',
        'termFee': '-',
        'adhhoc': '-',
        'sportsFee': '-',
        'securityDeposit': '-',
        'daycareAdditional': '-',
        'test': '-',
        'transportFee': '-',
        'transport': '-',
        'computerFee': '-',
        'breakage': '-',
        'educationFee': '-',
        'hostelFee': '-',
        'addFees': '-',
        'transportFare': '-',
        'bus': '-',
        'admin': '-',
        'others': '-',
        'abacus': '-',
        'gaanaFees': '-',
        'danceFees': '-',
        'discount': '-',
        'lateFee': '-',
        'receiptDate': '-',
        'paymentMode': '-',
        'cheque': '-',
        'installmentName': '-',
        'totalReceivedAmount': '-',
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = [
        'name',
        'class',
        'receiptNum',
        'regCharge',
        'admissionFees',
        'labFee',
        'receiptType',
        'termFee',
        'adhhoc',
        'sportsFee',
        'securityDeposit',
        'daycareAdditional',
        'test',
        'transportFee',
        'transport',
        'computerFee',
        'breakage',
        'educationFee',
        'hostelFee',
        'addFees',
        'transportFare',
        'bus',
        'admin',
        'addFees',
        'others',
        'abacus',
        'gaanaFees',
        'danceFees',
        'discount',
        'lateFee',
        'receiptDate',
        'paymentMode',
        'cheque',
        'installmentName',
        'totalReceivedAmount'
      ];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

}
