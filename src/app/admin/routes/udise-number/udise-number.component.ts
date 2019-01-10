import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';
import {routerTransition} from "../../../config/router.animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {dropdownlist} from "../../../config/constants";
import {ClientService} from '../../../../service/client.service';
import {MessageService} from '../../../services/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-udise-number',
  templateUrl: './udise-number.component.html',
  styleUrls: ['udise-number.component.scss'],
  animations: [routerTransition()]
})
export class UdiseNumberComponent implements OnInit {

  udiseForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];
  school_id = localStorage.getItem('school_id');

  constructor(public matPaginatorIntl: MatPaginatorIntl,
              private fb: FormBuilder,
              private client: ClientService,
              private messageService: MessageService,
              private router: Router) {
    this.createForm();
    this.listUdise();
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }


  createForm() {
    this.udiseForm = this.fb.group({
      class: ['', Validators.required],
      udise: ['', Validators.required],
      school_id: ['', Validators.required],
    });
  }

  listUdise() {
    this.tempData = [];
    this.client.udiseList({ school_id: this.school_id}).subscribe(response => {
      // console.log(JSON.stringify(response));
      if (response.status === 1000) {
        for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body[i]);
        }
        console.log(this.tempData);
        this.dataSource = new MatTableDataSource(this.tempData);
        this.displayedColumns = ['class', 'udise', 'actions'];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.tempData = [];
      }
    });
  }

  addUdise(data) {
    this.client.udiseadd(data).subscribe(response => {
      if (response.status === 1000) {
        this.messageService.showSuccess('UDISE Number Added successfully');
        this.listUdise();
      } else {
        this.messageService.showError('Something went wrong. Please try again later');
      }
    });
  }

  deleteUdise(id) {
    this.client.udiseDelete({
      udise_id: id
    }).subscribe(response => {
      if (response.status === 1000) {
        this.messageService.showSuccess('UDISE Number Deleted successfully');
        this.listUdise();
      } else {
        this.messageService.showError('Something went wrong. Please try again later');
      }
    });
  }

  // className = dropdownlist.className;
}
