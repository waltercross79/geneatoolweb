import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RecordRepository } from '../model/record.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Record } from '../model/record.model';
import { RecordType } from '../model/record-type.enum';
import { PersonType } from '../model/person-type.enum';
import { Person } from '../model/person.model';
import { PersonInRecord } from '../model/person-in-record.model';

@Component({
  selector: 'app-record-editor',
  templateUrl: './record-editor.component.html',
  styleUrls: ['./record-editor.component.css']
})
export class RecordEditorComponent implements OnInit {

  isEditing: boolean;
  isSearchingPerson: boolean;
  isAddingPerson: boolean;
  context: String = "records";

  currentlyModifiedPersonType: PersonType;
  record: Record = new Record();
  recordTypes: [number, string][] = [
    [RecordType.Birth, RecordType[RecordType.Birth]],
    [RecordType.Marriage, RecordType[RecordType.Marriage]],
    [RecordType.Death, RecordType[RecordType.Death]],
  ];
  newborn: Person;
  deceased: Person;
  groom: Person;
  bride: Person;

  constructor(private recordRepo: RecordRepository, 
    private router: Router, private activeRoute: ActivatedRoute) {             
  }

  // Logic to select existing person while creating new record.
  initPersonSearch(searchedPersonType: PersonType) {
    this.isSearchingPerson = true;
    this.currentlyModifiedPersonType = searchedPersonType;
  }

  cancelPersonSearch() {
    this.isSearchingPerson = false;
    this.currentlyModifiedPersonType = 0;
  }

  onPersonSelected(p: Person) {
    let person = new Person(); // Create a copy - may not be needed; must try.

    let existingPersonInRecord = this.record.peopleInRecord.find(pir => pir.personType == this.currentlyModifiedPersonType);

    if(existingPersonInRecord != null) {
      this.record.peopleInRecord.splice(this.record.peopleInRecord.indexOf(existingPersonInRecord), 1);
    }
    this.record.peopleInRecord.push(new PersonInRecord(Object.assign(person, p), this.currentlyModifiedPersonType));
    this.refreshLocalVarsPeopleInRecord();

    this.isSearchingPerson = false;
    this.currentlyModifiedPersonType = 0;
  }

  // Logic to add new person while creating new record.
  initPersonAdd(addedPersonType: PersonType) {
    this.isAddingPerson = true;
    this.currentlyModifiedPersonType = addedPersonType;
  }

  cancelPersonAdd() {
    this.isAddingPerson = false;
    this.currentlyModifiedPersonType = 0;
  }

  removePersonFromRecord(personType: PersonType) {
    let existingPersonInRecord = this.record.peopleInRecord.find(pir => pir.personType == personType);

    if(existingPersonInRecord != null) {
      this.record.peopleInRecord.splice(this.record.peopleInRecord.indexOf(existingPersonInRecord), 1);
      this.refreshLocalVarsPeopleInRecord();
    }
  }

  refreshLocalVarsPeopleInRecord() {
    this.newborn = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Newborn);
    this.deceased = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Deceased);
    this.bride = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Bride);
    this.groom = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Groom);
  }

  onPersonAdded(p: Person) {
    let person = new Person(); // Create a copy - may not be needed; must try.
    this.record.peopleInRecord.push(new PersonInRecord(Object.assign(person, p), this.currentlyModifiedPersonType));
    this.refreshLocalVarsPeopleInRecord();

    this.isAddingPerson = false;
    this.currentlyModifiedPersonType = 0;
  }

  ngOnInit() {
    this.isEditing = this.activeRoute.snapshot.params['mode'] == 'edit';
      if(this.isEditing) {
        Object.assign(this.record, this.recordRepo.getRecord(this.activeRoute.snapshot.params['id']));
        this.refreshLocalVarsPeopleInRecord();
      }
  }  

  save(form: NgForm) {
    this.recordRepo.saveRecord(this.record);

    this.router.navigateByUrl('/records');    
  }
}
