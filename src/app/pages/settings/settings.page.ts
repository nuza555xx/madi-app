// import {
//   BackgroundGeolocation,
//   BackgroundGeolocationConfig,
//   BackgroundGeolocationEvents,
//   BackgroundGeolocationResponse,
// } from '@awesome-cordova-plugins/background-geolocation/ngx';
import { Component, OnInit } from '@angular/core';
import { NavigationItem } from './navigations';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public navItem = new NavigationItem();
  // private backgroundGeolocationConfig: BackgroundGeolocationConfig = {
  //   notificationTitle: 'เปิดรับงาน',
  //   notificationText: 'enabled',
  //   debug: false,
  //   interval: 10000,
  //   fastestInterval: 5000,
  //   activitiesInterval: 10000,
  //   desiredAccuracy: 10,
  //   stationaryRadius: 20,
  //   distanceFilter: 30,
  //   stopOnTerminate: false,
  // };
  constructor() {}

  ngOnInit() {}
  openWorking(event: any) {
    if (event.detail.checked) {
      // this.foregroundService.start(
      //   'เปิดตำแหน่งที่ตั้ง',
      //   'เปิดรับงานสำรวจอยู่',
      //   'ic_action_name'
      // );
      // this.backgroundGeolocation
      //   .configure(this.backgroundGeolocationConfig)
      //   .then(() => {
      //     this.backgroundGeolocation
      //       .on(BackgroundGeolocationEvents.location)
      //       .subscribe((location: BackgroundGeolocationResponse) => {
      //         console.log(location);
      //       });
      //   });
      // this.backgroundGeolocation.start();
    } else {
      // this.foregroundService.stop();
      // this.backgroundGeolocation.stop();
    }
  }
}
