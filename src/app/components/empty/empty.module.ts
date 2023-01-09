import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyPageRoutingModule } from './empty-routing.module';

import { EmptyPage } from './empty.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EmptyPageRoutingModule],
  exports: [EmptyPage],
  declarations: [EmptyPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmptyPageModule {}
