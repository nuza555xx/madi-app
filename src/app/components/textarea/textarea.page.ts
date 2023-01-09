import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.page.html',
    styleUrls: ['./textarea.page.scss'],
})
export class TextareaPage implements OnInit {
    @Input() public placeholder: string = '';
    @Input() public name: string = '';
    @Input() public required = false;
    @Input() public controlName: any;
    @Input() public minlength: string = '';
    @Input() public disabled = false;
    @Input() public rows = 1;
    constructor() {}

    ngOnInit() {}
}
