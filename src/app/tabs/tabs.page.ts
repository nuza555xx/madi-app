import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private navCtrl: NavController) {}

  selectTabs(event: any) {
    if (event.tab === 'settings') {
      this.navCtrl.navigateRoot('/tabs/settings');
    }
  }
}
