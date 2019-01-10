import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-registered-teachers',
  templateUrl: './view-registered-teachers.component.html',
  styleUrls: ['view-registered-teachers.component.scss']
})
export class ViewRegisteredTeachersComponent implements OnInit {

  constructor() { }

  //Property used in parent
  stdFullName = '';

  saveData(std) {
    console.log(std);
    this.stdFullName = std.firstName + ' ' + std.lastName ;
  }

  ngOnInit() {
  }

}
