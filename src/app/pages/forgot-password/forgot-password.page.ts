import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public forgotPassword = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  constructor() {}

  ngOnInit() {}
}
