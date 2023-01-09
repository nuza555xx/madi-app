import { TextareaPageModule } from './../../../components/textarea/textarea.module';
import { SelectPageModule } from './../../../components/select/select.module';
import { InputPageModule } from 'src/app/components/input/input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';
import { MetadataService } from 'src/app/services/metadata.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditProfilePageRoutingModule,
    InputPageModule,
    SelectPageModule,
    TextareaPageModule,
  ],
  declarations: [EditProfilePage],
  providers: [MetadataService],
})
export class EditProfilePageModule {}
