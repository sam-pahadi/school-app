import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {routerTransition} from "../../../config/router.animations";
import {errMsg} from '../../../config/constants';
import {MessageService} from '../../../services/message.service';
import {ClientService} from '../../../../service/client.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    animations: [routerTransition()]
})
export class ResetPasswordComponent implements OnInit {

    resetForm: FormGroup;

    user_id = localStorage.getItem('user_id');

    constructor(private fb: FormBuilder,
                private client: ClientService,
                private router: Router,
                private messageService: MessageService) {
        this.createResetPassword();
    }

    createResetPassword() {
        this.resetForm = this.fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            retypeNewPassword: ['', Validators.required],
            user_id: [this.user_id, Validators.required],
        });
    };

    ngOnInit() {
    }

  resetPass(value) {
      if (value.retypeNewPassword === value.newPassword) {
        // localStorage.clear();

        this.client.changePass(value).subscribe( response => {
          const result = response;
          if ( result.status === 1000 ) {
            localStorage.clear();
            this.messageService.showSuccess('Your Password Changed successfully');
            this.router.navigate(['dashboard']);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('user_id', result.body.id);
            localStorage.setItem('email', result.body.email);
            localStorage.setItem('firstname', result.body.firstname);
            localStorage.setItem('lastname', result.body.lastname);
            localStorage.setItem('password', result.body.password);
            localStorage.setItem('type', result.body.type);

          } else {
            this.messageService.showSuccess(result.message);
          }
        });
      } else {
        this.messageService.showError(errMsg.passMisMatch);
      }
      console.log(value);
  }

}
