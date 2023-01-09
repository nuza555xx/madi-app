import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaPageRoutingModule } from './textarea-routing.module';

import { TextareaPage } from './textarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TextareaPage],
  exports: [TextareaPage]
})
export class TextareaPageModule {}
