import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';
import { PersonFilter } from '../model/person.filter';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input() context: string = "default"; // context can be default|select => default shows view, edit and delete buttons, select shows select button.
  @Input() filter: PersonFilter;
  @Output() selected = new EventEmitter<String>();
  @Output() cancelled = new EventEmitter();  

  constructor(private personRepository: PersonRepository) {     
  }

  onSelectClick(id: string) {
    this.selected.emit(id);
  }

  cancel() {
    this.cancelled.emit();
  }

  ngOnInit() {
    
  }

  getPersons(): Person[] {
    return this.personRepository.getPersons();
  }

  delete(id: number) {
    this.personRepository.deletePerson(id);
  }
}
