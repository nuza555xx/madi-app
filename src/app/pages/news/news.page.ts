import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
    constructor(private navCtrl: NavController) {}

    ngOnInit() {}

    newsDetail(item: any) {
        this.navCtrl.navigateForward('/news-detail');
    }
}
