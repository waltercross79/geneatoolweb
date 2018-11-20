import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from "./app.routing"; 

import { ModelModule } from './model/model.module';
import { PersonsModule} from './persons/persons.module';
import { RecordsModule } from './records/records.module';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModelModule, PersonsModule, RecordsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
