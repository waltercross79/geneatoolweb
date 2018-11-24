import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  person: Person = new Person();
  isEditing: boolean = false;
  genders: [string, string][] = [['M', 'Male'], ['F', 'Female']];
  @Input() public context: String = "persons";
  @Output() cancelled: EventEmitter<void> = new EventEmitter();
  @Output() saved: EventEmitter<Person> = new EventEmitter<Person>();

  constructor(private personRepo: PersonRepository, 
    private router: Router, private activeRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.isEditing = (this.activeRoute.snapshot.params['mode'] == 'edit' && this.context == "persons");
    if(this.isEditing) {
      Object.assign(this.person, this.personRepo.getPerson(this.activeRoute.snapshot.params['id']));
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

}
