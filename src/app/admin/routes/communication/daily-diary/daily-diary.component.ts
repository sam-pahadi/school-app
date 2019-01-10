import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../../config/router.animations";

@Component({
  selector: 'app-daily-diary',
  templateUrl: './daily-diary.component.html',
  styleUrls: ['daily-diary.component.scss'],
  animations: [routerTransition()]
})
export class DailyDiaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
