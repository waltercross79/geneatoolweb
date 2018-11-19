import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './person.model';
import { PersonRepository } from './person.repository';
import { RecordRepository } from './record.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
  declarations: [],
  providers: [PersonRepository, RecordRepository, StaticDataSource],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
