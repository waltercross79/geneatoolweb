import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';
import { PersonFilter } from '../model/person.filter';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() context: string; // context can be default|select => default shows view, edit and delete buttons, select shows select button.
  @Input() filter: PersonFilter;
  personList: Person[];

  constructor(private personRepository: PersonRepository) { 
    this.personList = personRepository.getPersons();
  }

  ngOnInit() {
  }

}
