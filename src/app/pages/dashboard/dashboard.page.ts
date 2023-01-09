import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public menuSlideOption = {
    slidesPerView: 4,
    initialSlide: 0,
    speed: 400,
    loop: true,
  };
  public weatherSlideOption = {
    slidesPerView: 6.5,
    spaceBetween: 10,
    initialSlide: 0,
    speed: 400,
    loop: true
  };
  public walletBalance = 15000;
  constructor() {}

  ngOnInit() {}
}
