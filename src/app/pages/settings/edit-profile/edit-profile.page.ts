import { MetadataService } from './../../../services/metadata.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    public profileForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl(''),
        tel: new FormControl('', [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern(/((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))/g),
        ]),
        province: new FormControl(''),
        district: new FormControl(''),
    });
    public provinces = [];
    public districts = [];
    constructor(private meta: MetadataService) {}

    ngOnInit() {
        this.getProvince();
    }
    selectProvince() {
        this.getDistricts();
    }
    getProvince() {}
    getDistricts() {}
}
