import { SelectPageModule } from './../../components/select/select.module';
import { InputPageModule } from './../../components/input/input.module';
import { InputPage } from './../../components/input/input.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule,
    InputPageModule,
    SelectPageModule
  ],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
