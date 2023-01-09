import { EmptyPageModule } from './../../components/empty/empty.module';
import { SkeletonListPageModule } from './../../components/skeleton-list/skeleton-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationPage } from './notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule,
    SkeletonListPageModule,
    EmptyPageModule,
  ],
  declarations: [NotificationPage],
})
export class NotificationPageModule {}
