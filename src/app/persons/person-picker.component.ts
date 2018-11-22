import { Component, OnInit } from '@angular/core';
import { PersonFilter } from '../model/person.filter';

@Component({
  selector: 'app-person-picker',
  templateUrl: './person-picker.component.html',
  styleUrls: ['./person-picker.component.css']
})
export class PersonPickerComponent implements OnInit {

  personFilter: PersonFilter = new PersonFilter("Kriz", "Lada");

  constructor() { }

  onFilterSet(filter: PersonFilter){
    Object.assign(this.personFilter, filter);
  }

  ngOnInit() {
  }

}
