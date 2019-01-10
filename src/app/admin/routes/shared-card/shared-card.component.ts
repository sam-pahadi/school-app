import {NgModule, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
@NgModule({
    exports: [
        SharedCardComponent
    ],
    declarations: []
})
export class SharedCardComponent implements OnInit {
    @Input('image') image: string;

    constructor() { }

  ngOnInit() {
  }

}




