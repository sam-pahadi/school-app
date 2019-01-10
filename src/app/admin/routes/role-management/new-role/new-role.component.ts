import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource, MatDialog} from "@angular/material";
import {UpdateRoleComponent} from "../dialog/update-role/update-role.component";
import {routerTransition} from "../../../../config/router.animations";
import {ClientService} from '../../../../../service/client.service';
import {MessageService} from '../../../../services/message.service';

@Component({
  selector: 'app-new-role',
  templateUrl: 'new-role.component.html',
  styleUrls: ['new-role.component.scss'],
  animations: [routerTransition()]
})
export class NewRoleComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  displayedColumns;
  tempData = [];
  constructor(public matPaginatorIntl: MatPaginatorIntl, public dialog: MatDialog,
              private client: ClientService,
              public message: MessageService) {
    this.setTableData();
  }

  ngOnInit() {
    this.matPaginatorIntl.nextPageLabel = "Next";
    this.matPaginatorIntl.previousPageLabel = "Previous";
  }

  setTableData() {
    this.tempData = [];
    this.client.listRole({
      school_id: localStorage.getItem('school_id')
    }).subscribe(response => {
      if (response.status === 1000) {
        for ( let i = 0; i < response.body.length; i++) {
          this.tempData.push(response.body[i]);
        }
        setTimeout(() => {
          this.dataSource = new MatTableDataSource(this.tempData);
          this.displayedColumns = ['firstName', 'lastName', 'valid_upto', 'update', 'action'];
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }, 1000);
      }
    }, err => console.log(err));
    // this.tempData = [];
    // this.tempData.push(
    //   {
    //     'rollName': 'Admin',
    //     'description': '-',
    //     'validFrom': '22/10/1290',
    //     'validUpto': '22/10/1290',
    //   }
    // );
    // setTimeout(() => {
    //   this.dataSource = new MatTableDataSource(this.tempData);
    //   this.displayedColumns = ['rollName', 'description', 'validFrom', 'validUpto', 'update', 'action'];
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // }, 1000)
  };

  openUpdateRole(element = null) {
    let dialogRef = this.dialog.open(UpdateRoleComponent, {
      // panelClass: 'app-full-bleed-dialog',
      width: '700px',
      data: element
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  togleDta(element) {
    this.client.roleToggle({
      user_id: localStorage.getItem('school_id'),
      enable: !element
    }).subscribe(response => {
      if (response.status === 1000) {
        this.message.showSuccess('Status change');
      } else {
        this.message.showError('Error');
      }
    });
  }

}
