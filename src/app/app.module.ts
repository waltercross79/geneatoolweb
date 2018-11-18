import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ModelModule } from './model/model.module';
import { ViewerModule} from './persons/viewer.module';
import { RouterModule } from "@angular/router";

import { PersonListComponent } from './persons/person-list.component';
import { PersonDetailComponent } from './persons/person-detail.component';
import { PersonEditorComponent } from './persons/person-editor.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModelModule, ViewerModule,
    RouterModule.forRoot([
      { path: "persons", component: PersonListComponent },
      { path: "persons/detail/:id", component: PersonDetailComponent },
      { path: "persons/:mode/:id", component: PersonEditorComponent },
      { path: "persons/:mode", component: PersonEditorComponent },      
      { path: "**", redirectTo: "/persons" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
