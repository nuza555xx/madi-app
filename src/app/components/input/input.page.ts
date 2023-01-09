import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
    @Input() public type: string = '';
    @Input() public placeholder: string = '';
    @Input() public name: string = '';
    @Input() public required = false;
    @Input() public controlName: any;
    @Input() public minlength: string = '255';
    @Input() public maxlength: string = '255';
    @Input() public disabled = false;

    constructor() {}

    ngOnInit() {}
}
