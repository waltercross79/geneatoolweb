import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { PersonRepository } from './person.repository';
import { RecordRepository } from './record.repository';
import { RestRecordDataSource } from './rest.datasource.records';
import { RestPersonDataSource } from './rest.datasource.persons';


@NgModule({
  declarations: [],
  providers: [PersonRepository, RecordRepository, RestRecordDataSource, RestPersonDataSource],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class ModelModule { }
