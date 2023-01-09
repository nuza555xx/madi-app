import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-permission',
    templateUrl: './app-permission.page.html',
    styleUrls: ['./app-permission.page.scss'],
})
export class AppPermissionPage implements OnInit {
    public isGeolocation = 'off';
    public isNotification = 'off';

    constructor() // private notification: NotificationService // private geolocation: GeolocationService,
    {}

    ngOnInit() {
        // this.geolocation.checkPermission().then((value) => {
        //   this.isGeolocation =
        //     value.location === 'granted' && value.coarseLocation === 'granted'
        //       ? 'on'
        //       : 'off';
        // });
        // this.notification.checkPermission().then((value) => {
        //   this.isNotification = value.display === 'granted' ? 'on' : 'off';
        // });
    }

    openNotification(event: any) {
        // if (event.detail.value === 'on') {
        //   this.notification.requestPermission().then((value) => {
        //     this.isNotification = value.display === 'granted' ? 'on' : 'off';
        //   });
        // }
    }
    openGeolocation(event: any) {
        // if (event.detail.value === 'on') {
        //   this.geolocation
        //     .requestPermission()
        //     .then((value) => {
        //       this.isGeolocation =
        //         value.location === 'granted' && value.coarseLocation === 'granted'
        //           ? 'on'
        //           : 'off';
        //     });
        // }
    }
}
