import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { PersonRepository } from './person.repository';
import { RecordRepository } from './record.repository';
import { RestDataSource } from './rest.datasource';

@NgModule({
  declarations: [],
  providers: [PersonRepository, RecordRepository, RestDataSource],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class ModelModule { }
