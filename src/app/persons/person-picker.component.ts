import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonFilter } from '../model/person.filter';
import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';

@Component({
  selector: 'app-person-picker',
  templateUrl: './person-picker.component.html',
  styleUrls: ['./person-picker.component.css']
})
export class PersonPickerComponent implements OnInit {

  personFilter: PersonFilter;
  context: String = "select";
  @Output() selectedPerson: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter();

  constructor(private personRepo: PersonRepository) { }

  onFilterSet(filter: PersonFilter){
    Object.assign(this.personFilter, filter);
  }

  onPersonSelected(id: number) {
    // Fire even selectedPerson;
    let p = this.personRepo.getPerson(id);

    if(p != null)
      this.selectedPerson.emit(p);
  }

  cancel() {
    this.cancelled.emit();
  }

  ngOnInit() {
  }

}
