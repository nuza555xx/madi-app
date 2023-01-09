import { EmptyPageModule } from './../../components/empty/empty.module';
import { SkeletonListPageModule } from './../../components/skeleton-list/skeleton-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    SkeletonListPageModule,
    EmptyPageModule,
  ],
  declarations: [NewsPage],
})
export class NewsPageModule {}
