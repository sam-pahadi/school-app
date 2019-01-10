import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from '../../../../../../service/client.service';
import {MessageService} from '../../../../../services/message.service';

@Component({
  selector: 'app-add-bus-route',
  templateUrl: './add-bus-route.component.html',
  styleUrls: ['add-bus-route.component.scss']
})
export class AddBusRouteComponent implements OnInit {

  addRouteInfoForm: FormGroup;
  addRouteDetailForm: FormGroup;
  routeData = [];
  driverData = [];
  school_id = localStorage.getItem('school_id');

  constructor(public dialogRef: MatDialogRef<AddBusRouteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              public messageService: MessageService,
              private client: ClientService) {
    this.createRouteDetailForm();
    this.rout_idGet();
    this.getDriver();
  }

  createRouteDetailForm(){
    this.addRouteDetailForm = this.fb.group({
      route_id: ['', Validators.required],
      driver_id: ['', Validators.required],
    });
  }

  closeDilogue(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  rout_idGet() {
    this.client.listBusRoute({school_id: this.school_id}).subscribe(response => {
      if (response.status === 1000) {
        this.routeData = response.body;
      } else {
        this.routeData = [];
      }
    });
  }
  getDriver() {
    this.client.listDriver({school_id: this.school_id}).subscribe(response => {
      if (response.status === 1000) {
        this.driverData = response.body;
      } else {
        this.driverData = [];
      }
    });
  }

  mapData(value) {
    this.client.busMap(value).subscribe(response => {
      if (response.status === 1000) {
        // this.driverData = response.body;
        this.messageService.showSuccess('Added');
      } else {
        // this.driverData = [];
        this.messageService.showError('Error');

      }
    });
  }

}
