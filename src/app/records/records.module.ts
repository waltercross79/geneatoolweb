import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecordDetailComponent } from './record-detail.component';
import { RecordEditorComponent } from './record-editor.component';
import { RecordListComponent } from './record-list.component';
import { ComalistPipe } from './comalist.pipe';
import { RecordTypePipe } from './record-type.pipe';
import { PersonTypePipe } from './person-type.pipe';
import { PersonsModule } from '../persons/persons.module';

@NgModule({
  declarations: [RecordDetailComponent, RecordEditorComponent, RecordListComponent, ComalistPipe, RecordTypePipe, PersonTypePipe],
  imports: [
    CommonModule, RouterModule, PersonsModule
  ]
})
export class RecordsModule { }
