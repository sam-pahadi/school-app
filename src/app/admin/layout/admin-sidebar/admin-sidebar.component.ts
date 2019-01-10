import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  @Output('sidebarAction_sidebar') sidebarAction = new EventEmitter();

  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  closeSidebar() {
    this.sidebarAction.emit();
  }

}
