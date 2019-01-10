// import { Injectable } from '@angular/core';
// declare let Snackbar: any;
// @Injectable()
// export class MessageService {
//   constructor() { }
//
//   showSuccessfullyMsg(){
//     Snackbar.show({pos: 'bottom-right', text: 'Data deleted successfully', showAction: false, backgroundColor: '#28a745'});
//   }
//
//   showErrorMsg(){
//     Snackbar.show({pos: 'bottom-right', text: 'Something went wrong', showAction: false, backgroundColor: '#555'});
//   }
//
// }
import {Injectable} from '@angular/core';
import {errMsg} from "../config/constants";
declare let Snackbar: any;
import * as alertify from 'alertifyjs';
@Injectable()
export class MessageService {
  constructor() {
  }

  showSuccess(msg) {
    Snackbar.show({
      pos: 'bottom-right',
      text: msg,
      showAction: false,
      backgroundColor: '#28a745'
    });
  }

  showError(erMsg) {
    Snackbar.show({
      pos: 'bottom-right',
      text: erMsg ? erMsg : errMsg.somethingWrong,
      showAction: false,
      backgroundColor: '#555'
    });
  }


}
