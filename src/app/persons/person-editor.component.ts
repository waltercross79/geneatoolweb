import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';
import { NgForm } from '@angular/forms';
import { PersonType } from '../model/person-type.enum';


@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  person: Person = new Person();
  father: Person;
  mother: Person;
  isEditing: boolean = false;
  genders: [string, string][] = [['M', 'Male'], ['F', 'Female']];
  @Input() public context: String = "persons";
  @Output() cancelled: EventEmitter<void> = new EventEmitter();
  @Output() saved: EventEmitter<Person> = new EventEmitter<Person>();
  isSearchingPerson: boolean;
  currentlyModifiedPersonType: PersonType;

  constructor(private personRepo: PersonRepository, 
    private router: Router, private activeRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.isEditing = (this.activeRoute.snapshot.params['mode'] == 'edit' && this.context == "persons");
    if(this.isEditing) {
      Object.assign(this.person, this.personRepo.getPerson(this.activeRoute.snapshot.params['id']));
      this.father = this.person.father();
      this.mother = this.person.mother();
    }
  }

  cancel() {    
    this.cancelled.emit();
  }

  save(form: NgForm) {
    this.personRepo.savePerson(this.person);

    if(this.context=="persons")
      this.router.navigateByUrl('/persons');
    else {
      this.saved.emit(this.person);
    }
  }

  // need event handlers to add parents
  initPersonSearch(searchedPersonType: PersonType) {
    this.isSearchingPerson = true;
    this.currentlyModifiedPersonType = searchedPersonType;
  }

  cancelPersonSearch() {
    this.isSearchingPerson = false;
    this.currentlyModifiedPersonType = 0;
  }

  onPersonSelected(p: Person) {
    this.person.addParent(p);

    if(this.currentlyModifiedPersonType == PersonType.Father) {
      this.father = p;
    }
    else {
      this.mother = p;
    }

    this.isSearchingPerson = false;
    this.currentlyModifiedPersonType = 0;
  }

  removeParent(p: Person){
    this.person.removeParent(p.gender);
  }
}
