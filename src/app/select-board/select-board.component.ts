import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-select-board',
  templateUrl: './select-board.component.html',
  styleUrls: ['select-board.component.scss']
})
export class SelectBoardComponent implements OnInit {
  boards: string[] = ['CBSE', 'IGCSE'];
  academicyears: string[] = ['2018-2019 next (NEXT)', '2017-2018 current (CURRENT)'];

  myForm: FormGroup;

  constructor( private router: Router,
               private _fb: FormBuilder,
               private client: ClientService) {
    this.createBoardForm();
  }

  ngOnInit() {
  }

  createBoardForm() {
    this.myForm = this._fb.group({
      board: ['', Validators.required],
      academicSession: ['', Validators.required]
    });
  }


  openViewInquery(value) {
    console.log(localStorage.getItem('user_id'));
    let request = {
      user_id: localStorage.getItem('user_id'),
      board: value.board
    }
    this.client.boardSelection(request).subscribe( response => {
      console.log(response);
      // if ( response.status === 200) {
      //   if (response.body.type === 2) {
      //     this.router.navigate(['board']);
      //     localStorage.setItem('isLoggedin', 'true');
      //     localStorage.setItem('userData', response.body);
      //   } else {
      //     this.router.navigate(['dashboard']);
      //     localStorage.setItem('isLoggedin', 'true');
      //     localStorage.setItem('userData', response.body);
      //   }
      // } else {
      //
      // }
      // console.log(JSON.stringify(response));
    });
  }
}
