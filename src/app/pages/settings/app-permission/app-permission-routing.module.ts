import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPermissionPage } from './app-permission.page';

const routes: Routes = [
  {
    path: '',
    component: AppPermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPermissionPageRoutingModule {}
