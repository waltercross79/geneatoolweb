import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';
import { ModelModule } from '../model/model.module';
import { PersonDetailComponent } from './person-detail.component';
import { PersonEditorComponent } from './person-editor.component';
import { RouterModule } from '@angular/router';

import { GenderPipe } from './gender.pipe';

@NgModule({
  declarations: [PersonListComponent, PersonDetailComponent, PersonEditorComponent, GenderPipe],
  imports: [
    CommonModule, ModelModule, RouterModule, FormsModule
  ],
  exports: [PersonListComponent, PersonDetailComponent, PersonEditorComponent]
})
export class PersonsModule { }