import { MetadataService } from './../../services/metadata.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    public signupForm = new FormGroup({
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, Validators.email),

        tel: new FormControl(null, [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern(/((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))/g),
        ]),
        province: new FormControl(null),
        district: new FormControl(null),
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
    public provinces = [];
    public districts = [];
    constructor() {}

    ngOnInit() {}
}
