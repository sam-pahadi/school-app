import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {routerTransition} from "../../../../config/router.animations";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {dropdownlist} from "../../../../config/constants";

@Component({
  selector: 'app-parent-app-feature',
  templateUrl: './parent-app-feature.component.html',
  styleUrls: ['parent-app-feature.component.scss'],
  animations: [routerTransition()]
})
export class ParentAppFeatureComponent implements OnInit {

  parentForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(public matPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog, private fb: FormBuilder) {
    this.setTableData();
    this.createForm();
  }

  createForm() {
    this.parentForm = this.fb.group({
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
        'student': 'Varun Charan Sonji'
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['student', 'rollNum', 'attendance', 'timeTable', 'review', 'schoolCalendar', 'events', 'notices', 'payment', 'homework', 'mealPlan', 'progress', 'media', 'callSupport', 'appointment', 'onlinePayment', 'timeline', 'transport', 'smileys', 'magicCrate', 'shareEnquiry', 'spellBell', 'buzz', 'health', 'faces', 'funFacts', 'stemDots', 'curosity', 'consent'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };


}
