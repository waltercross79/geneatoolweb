import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ModelModule } from './model/model.module';
import { PersonsModule} from './persons/persons.module';
import { RecordsModule } from './records/records.module';
import { RouterModule } from "@angular/router";

import { PersonListComponent } from './persons/person-list.component';
import { PersonDetailComponent } from './persons/person-detail.component';
import { PersonEditorComponent } from './persons/person-editor.component';
import { RecordListComponent } from './records/record-list.component';
import { RecordDetailComponent } from './records/record-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModelModule, PersonsModule, RecordsModule,
    RouterModule.forRoot([
      { path: "persons", component: PersonListComponent },
      { path: "persons/detail/:id", component: PersonDetailComponent },
      { path: "persons/:mode/:id", component: PersonEditorComponent },
      { path: "persons/:mode", component: PersonEditorComponent },      
      { path: "records", component: RecordListComponent },
      { path: "records/detail/:id", component: RecordDetailComponent },
      // { path: "persons/:mode/:id", component: PersonEditorComponent },
      // { path: "persons/:mode", component: PersonEditorComponent },      
      { path: "**", redirectTo: "/persons" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
