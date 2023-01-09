import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.page.html',
  styleUrls: ['./sign-out.page.scss'],
})
export class SignOutPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  backLogin() {
    this.navCtrl.navigateRoot('sign-in');
  }
}
