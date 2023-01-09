import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.page.html',
    styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
    @Input() public placeholder: string = '';
    @Input() public name: string = '';
    @Input() public required = false;
    @Input() public controlName: any;
    @Input() public minlength: string = '';
    @Input() public disabled = false;
    @Input() public options = [];
    @Input() public interface: 'popover' | 'action-sheet' = 'popover';

    constructor() {}

    ngOnInit() {}
}
