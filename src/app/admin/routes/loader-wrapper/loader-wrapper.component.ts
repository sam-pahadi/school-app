import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-loader-wrapper',
    templateUrl: './loader-wrapper.component.html',
    styleUrls: ['./loader-wrapper.component.scss']
})
export class LoaderWrapperComponent implements OnInit {
    @Input()
    showLoader: Boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
