import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkeletonListPageRoutingModule } from './skeleton-list-routing.module';

import { SkeletonListPage } from './skeleton-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkeletonListPageRoutingModule
  ],
  declarations: [SkeletonListPage],
  exports: [SkeletonListPage]
})
export class SkeletonListPageModule {}
