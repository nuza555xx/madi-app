import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
    public signInForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });
    constructor(public navCtrl: NavController) {}

    ngOnInit() {}
    ionViewDidEnter() {}

    login() {
        this.navCtrl.navigateRoot('/');
    }
    async googleSignup() {}
}
