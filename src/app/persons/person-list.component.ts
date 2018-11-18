import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList: Person[];

  constructor(private personRepository: PersonRepository) { 
    this.personList = personRepository.getPersons();
  }

  ngOnInit() {
  }

}
