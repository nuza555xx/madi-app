import { Injectable } from '@angular/core';

export interface NavigationItem {
    id: string;
    title: string;
    icon: string;
    url: string;
}

const navigationItems = {
    navMain: [
        {
            id: 'edit-profile',
            title: 'ข้อมูลส่วนตัว',
            url: 'edit-profile',
            icon: 'person-circle-outline',
        },
        {
            id: 'change-password',
            title: 'เปลี่ยนรหัสผ่าน',
            url: 'change-password',
            icon: 'lock-open-outline',
        },
    ],
    navOther: [
        {
            id: 'app-permission',
            title: 'อนุญาตเข้าถึงแอปพลิเคชั่น',
            url: 'app-permission',
            icon: 'key-outline',
        },
        {
            id: 'sign-out',
            title: 'ออกจากระบบ',
            url: '../../sign-out',
            icon: 'log-out-outline',
        },
    ],
};

export class NavigationItem {
    public get() {
        return navigationItems;
    }
}
