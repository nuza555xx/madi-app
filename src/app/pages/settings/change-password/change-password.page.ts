import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.page.html',
    styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
    public changePasswordForm = new FormGroup({
        oldPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
    constructor() {}

    ngOnInit() {}
}
