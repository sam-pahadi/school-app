import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrls: ['profile-type.component.scss'],
  animations: [routerTransition()]
})
export class ProfileTypeComponent implements OnInit {
  isOn;
  constructor() { }

  ngOnInit() {
  }

}
