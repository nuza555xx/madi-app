import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-list',
  templateUrl: './skeleton-list.page.html',
  styleUrls: ['./skeleton-list.page.scss'],
})
export class SkeletonListPage implements OnInit {
  skeletonArray = new Array(12);
  constructor() { }

  ngOnInit() {
  }

}
