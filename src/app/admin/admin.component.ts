import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('sidebar') sidenav: MatSidenav;

  constructor(private router: Router) { }

  toggleSidebar(sidebar: MatSidenav) {
    sidebar.toggle();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 992) {
      this.sidenav.close();
      this.sidenav.mode = 'over';
    }
    if (event.target.innerWidth > 991) {
      this.sidenav.open();
      this.sidenav.mode = 'side';
    }
  }

  ngOnInit() {
  }
  closeSidebar() {
    if (window.innerWidth < 992) {
      this.sidenav.close();
    }
  }
}
