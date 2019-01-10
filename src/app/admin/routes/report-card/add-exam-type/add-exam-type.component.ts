import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {AssignSubjectsComponent} from "../dialog/assign-subjects/assign-subjects.component";

@Component({
  selector: 'app-add-exam-type',
  templateUrl: './add-exam-type.component.html',
  styleUrls: ['add-exam-type.component.scss'],
  animations: [routerTransition()]
})
export class AddExamTypeComponent implements OnInit {

  addExamTypeForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(private fb: FormBuilder, public matPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog) {
    this.createForm();
    this.setTableData();
  }

  createForm(){
    this.addExamTypeForm = this.fb.group({
      className: ['', Validators.required],
      term: ['', Validators.required],
      examName: [''],
      totalExamMark: [''],
      internalExamLabel: [''],
      writtenExamLabel: [''],
      examType: ['']
    });
  }

  className = dropdownlist.className;

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'className': '1',
        'examName': '-',
        'termName': '-'
      }
    );
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['className', 'examName', 'termName', 'status', 'action'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  };

  assignSubject(){
    let dialogRef = this.dialog.open(AssignSubjectsComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '1200px',
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }


}
