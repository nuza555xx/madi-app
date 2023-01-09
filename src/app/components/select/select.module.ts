import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPageRoutingModule } from './select-routing.module';

import { SelectPage } from './select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SelectPage],
  exports: [SelectPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectPageModule {}
