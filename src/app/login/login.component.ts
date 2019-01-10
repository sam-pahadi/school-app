import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "../services/message.service";
import {errMsg, successMsg} from '../config/constants';
import {ClientService} from '../../service/client.service';
declare let Snackbar: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  index = 0;
  loginForm: FormGroup;
  myForm: FormGroup;
  constructor(private _fb : FormBuilder,
              private router : Router,
              private client: ClientService,
              private messageService: MessageService) {
    this.createLogin();
    this.createForm();
  }

  createForm() {
    this.myForm = this._fb.group({
      username: ['', [Validators.required]]
    });
  }

  createLogin() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(value) {
    this.client.login(value).subscribe( response => {
      // console.log('Chal Raha h' + JSON.stringify(response))
      const result = response.result;
      if ( result.status === 1000 && result.body.enable === true) {
        // console.log('Chal Raha h' + response.status)
        // if (response.body.type === 2) {
            this.router.navigate(['dashboard']);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('user_id', result.body.id);
            localStorage.setItem('email', result.body.email);
            localStorage.setItem('firstname', result.body.firstname);
            localStorage.setItem('lastname', result.body.lastname);
            localStorage.setItem('password', result.body.password);
            localStorage.setItem('type', result.body.type);
            localStorage.setItem('school_id', result.body.school_id);

        this.messageService.showSuccess(successMsg.loginSuccess);
        // } else {
        //   this.router.navigate(['dashboard']);
        //   localStorage.setItem('isLoggedin', 'true');
        //   localStorage.setItem('user_id', response.body.id);
        //   localStorage.setItem('email', response.body.email);
        //   localStorage.setItem('fullname', response.body.fullname);
        //   localStorage.setItem('password', response.body.password);
        //   localStorage.setItem('type', response.body.type);
        // }
      } else {
        this.messageService.showSuccess(errMsg.loginError);
      }
    });
  }

  forgotPassword(value) {
    this.client.forgotPass(value).subscribe( response => {
      const result = response;
      if (result.status === 1000) {
        console.log(result);
       alert(result.body.otp);
        // this.messageService.showSuccess(successMsg.forgetPassSuccess);
      } else {
        this.messageService.showSuccess(errMsg.forgotPassError);
      }
    });
  }

  showSuccess(text) {
    Snackbar.show({pos: 'bottom-right', text: text, showAction: false, backgroundColor: '#28a745'});
  }

  showError(err) {
    Snackbar.show({pos: 'bottom-right', text: err, showAction: false, backgroundColor: '#f44336'});
  }

  ngOnInit() {
  }

  nextIndex(ind) {
    this.index = this.index + 1;
  }

  prevIndex(ind){
    this.index = this.index - 1;
  }
}
