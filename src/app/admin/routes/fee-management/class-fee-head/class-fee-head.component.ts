import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-class-fee-head',
  templateUrl: './class-fee-head.component.html',
  styleUrls: ['class-fee-head.component.scss'],
  animations: [routerTransition()]
})
export class ClassFeeHeadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
  displayedColumns;
  tempData = [];
  constructor(private matPaginatorIntl: MatPaginatorIntl) {
    this.setTableData();
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {'feeHead': 'registration charge'},
      {'feeHead': 'Admission Fee'},
      {'feeHead': 'Lab Fee'},
      {'feeHead': 'Term Fee'},
      {'feeHead': 'Adhhoc1'},
      {'feeHead': 'Sports Fee'},
      {'feeHead': 'Security Deposit'},
      {'feeHead': 'daycare additional'},
      {'feeHead': 'Test'},
      {'feeHead': 'Transport fee'},
      {'feeHead': 'computer fees'},
      {'feeHead': 'Breakage'},
      {'feeHead': 'Education fee'},
      {'feeHead': 'Hostel fee'},
      {'feeHead': 'Ad Fees'},
      {'feeHead': 'Transport Fare'},
      {'feeHead': 'Bus'},
      {'feeHead': 'Admin'},
      {'feeHead': 'Others'},
      {'feeHead': 'Abacus'},
      {'feeHead': 'Tution Fees'},
      {'feeHead': 'Gaana Fees'},
      {'feeHead': 'Dance Fees'},
      {'feeHead': 'Book Fee'},
    );

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['feeHead', 'one_five', 'bms', 'eight_eight', 'bsc_1', 'bsc_2'];
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

}
