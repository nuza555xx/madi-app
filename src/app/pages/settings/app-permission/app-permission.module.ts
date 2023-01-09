import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppPermissionPageRoutingModule } from './app-permission-routing.module';

import { AppPermissionPage } from './app-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPermissionPageRoutingModule
  ],
  declarations: [AppPermissionPage]
})
export class AppPermissionPageModule {}
