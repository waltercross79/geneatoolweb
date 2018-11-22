import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonFilter } from '../model/person.filter';

@Component({
  selector: 'app-person-filter',
  templateUrl: './person-filter.component.html',
  styleUrls: ['./person-filter.component.css']
})
export class PersonFilterComponent {

  @Input() personFilter = new PersonFilter();
  @Output() filterSet = new EventEmitter<PersonFilter>();

  constructor() { }

  applyFilter() {
    console.log('inisde applyFilter()');
    this.personFilter = new PersonFilter("Zme", "J");
    this.filterSet.emit(this.personFilter);
  }
}
