import { Routes, RouterModule } from "@angular/router";
import { PersonListComponent } from './persons/person-list.component';
import { PersonDetailComponent } from './persons/person-detail.component';
import { PersonEditorComponent } from './persons/person-editor.component';
import { RecordListComponent } from './records/record-list.component';
import { RecordDetailComponent } from './records/record-detail.component';
import { PersonFilterComponent } from './persons/person-filter.component';
import { RecordFilterComponent } from './records/record-filter.component';
import { RecordEditorComponent } from "./records/record-editor.component";

const routes: Routes = [
    { path: "persons", component: PersonListComponent },
    { path: "persons", component: PersonFilterComponent, outlet: "sidebar" },
    { path: "persons/detail/:id", component: PersonDetailComponent },
    { path: "persons/:mode/:id", component: PersonEditorComponent },
    { path: "persons/:mode", component: PersonEditorComponent },      
    { path: "records", component: RecordListComponent },
    { path: "records", component: RecordFilterComponent, outlet: "sidebar" },
    { path: "records/detail/:id", component: RecordDetailComponent },
    { path: "records/:mode/:id", component: RecordEditorComponent },
    { path: "records/:mode", component: RecordEditorComponent },      
    { path: "**", redirectTo: "/persons" }
    
  ];

  export const routing = RouterModule.forRoot(routes);