import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loading: LoadingController) {}
  async showLoading(msg = 'กำลังโหลด') {
    const loading = await this.loading.create({
      message: msg,
    });
    await loading.present();
    return loading;
  }
  async doneLoading(element: HTMLIonLoadingElement) {
    return element.dismiss();
  }
}
