import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletonListPage } from './skeleton-list.page';

const routes: Routes = [
  {
    path: '',
    component: SkeletonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkeletonListPageRoutingModule {}
