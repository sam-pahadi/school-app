import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {successMsg} from "../../../config/constants";
import {MessageService} from "../../../services/message.service";
declare let Snackbar: any;

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

    @Output('sidebarAction') sidebarAction = new EventEmitter();

    isLoggedIn: boolean;
    searchForm: FormGroup;
    userName: string;

    constructor(private _fb: FormBuilder,
                private router: Router,
                private messageService: MessageService
                ) {
        this.searchform();
        this.userName = localStorage.getItem('firstname') + '' + localStorage.getItem('lastname');
        console.log(this.userName);
    }

    searchform() {
        this.searchForm = this._fb.group({
            searchText: ['']
        })
    }

    ngOnInit() {
    }

    onLoggedout() {
          this.messageService.showSuccess(successMsg.logoutSuccess);

    }


showSuccess(text) {
  Snackbar.show({pos: 'bottom-right', text: text, showAction: false, backgroundColor: '#28a745'});
}
    openResetPassword() {
        this.router.navigate(['dashboard', 'resetpassword']);
    }

    toggleSidebar() {
        this.sidebarAction.emit();
    }

}
