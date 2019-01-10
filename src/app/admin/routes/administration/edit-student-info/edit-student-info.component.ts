import {Component, OnInit, ViewChild} from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {dropdownlist} from "../../../../config/constants";
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from "@angular/material";


@Component({
  selector: 'app-edit-student-info',
  templateUrl: './edit-student-info.component.html',
  styleUrls: ['edit-student-info.component.scss'],
    animations: [routerTransition()]
})
export class EditStudentInfoComponent implements OnInit {

  editStudentInfoForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];

  constructor(private fb: FormBuilder, public matPaginatorIntl: MatPaginatorIntl) {
    this.createForm();
    this.setTableData();
  }

  createForm()
  {
    this.editStudentInfoForm = this.fb.group({
      className:['', Validators.required],
      division:['', Validators.required],
    })
  }

  division = dropdownlist.division;
  className = dropdownlist.className;

  typesOfSelection: string[] = ['Gr Number', 'Roll No.', 'First Name', 'Middle Name'];

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.tempData.push(
      {
        'grNum': 'red'
      }
    );

    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tempData);
      this.displayedColumns = ['grNum', 'rollNum'];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }


}
