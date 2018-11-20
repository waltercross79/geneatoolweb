import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { RecordDetailComponent } from './record-detail.component';
import { RecordEditorComponent } from './record-editor.component';
import { RecordListComponent } from './record-list.component';
import { ComalistPipe } from './comalist.pipe';
import { RecordTypePipe } from './record-type.pipe';
import { PersonTypePipe } from './person-type.pipe';
import { PersonsModule } from '../persons/persons.module';
import { RecordFilterComponent } from './record-filter.component';

@NgModule({
  declarations: [RecordDetailComponent, RecordEditorComponent, RecordListComponent, ComalistPipe, RecordTypePipe, PersonTypePipe, RecordFilterComponent],
  imports: [
    CommonModule, RouterModule, PersonsModule, FormsModule
  ]
})
export class RecordsModule { }
