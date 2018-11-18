import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';


@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  person: Person = new Person();
  isEditing: boolean = false;

  constructor(personRepo: PersonRepository, 
    router: Router, activeRoute: ActivatedRoute) { 
      
      this.isEditing = activeRoute.snapshot.params['mode'] == 'edit';
      if(this.isEditing) {
        Object.assign(this.person, personRepo.getPerson(activeRoute.snapshot.params['id']));
      }
  }

  ngOnInit() {
  }

}
