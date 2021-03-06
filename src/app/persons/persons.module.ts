import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';
import { ModelModule } from '../model/model.module';
import { PersonDetailComponent } from './person-detail.component';
import { PersonEditorComponent } from './person-editor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { GenderPipe } from './gender.pipe';
import { PersonNamePipe } from './person-name.pipe';
import { PersonFilterComponent } from './person-filter.component';
import { PersonPickerComponent } from './person-picker.component';

@NgModule({
  declarations: [PersonListComponent, PersonDetailComponent, PersonEditorComponent, 
    GenderPipe, PersonFilterComponent, PersonPickerComponent, PersonNamePipe],
  imports: [
    CommonModule, ModelModule, RouterModule, FormsModule, SharedModule
  ],
  exports: [PersonListComponent, PersonDetailComponent, PersonEditorComponent, 
    PersonPickerComponent, PersonNamePipe]
})
export class PersonsModule { }
