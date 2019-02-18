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
  personTypes: [number, string][] = [
    [PersonType.Father, PersonType[PersonType.Father]],
    [PersonType.Mother, PersonType[PersonType.Mother]],
    [PersonType.Godparent, PersonType[PersonType.Godparent]],
    [PersonType.Witness, PersonType[PersonType.Witness]],
  ];
  newborn: PersonInRecord;
  deceased: PersonInRecord;
  groom: PersonInRecord;
  bride: PersonInRecord;
  otherPeople: Array<PersonInRecord> = [];

  nextAdditionalPersonFirstName: string;
  nextAdditionalPersonLastName: string;
  nextAdditionalPersonType: PersonType;
  nextAdditionalPersonID: number = -1;

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
    let existingPersonInRecord = this.record.peopleInRecord.find(pir => pir.personType == this.currentlyModifiedPersonType);

    if(existingPersonInRecord != null) {
      this.record.peopleInRecord.splice(this.record.peopleInRecord.indexOf(existingPersonInRecord), 1);
    }
    this.record.peopleInRecord.push(new PersonInRecord(p, this.currentlyModifiedPersonType));
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

  removeAdditionalPersonFromRecord(personType: PersonType, id: number) {
    let existingPersonInRecord = this.record.peopleInRecord
      .find(pir => pir.personType == personType && pir.person.id == id);

    if(existingPersonInRecord != null) {
      this.record.peopleInRecord.splice(this.record.peopleInRecord.indexOf(existingPersonInRecord), 1);
      this.refreshLocalVarsPeopleInRecord();
    }
  }

  addAdditionalPersonInRecord() {
    var p = new PersonInRecord(new Person(this.nextAdditionalPersonID, 
      this.nextAdditionalPersonFirstName, this.nextAdditionalPersonLastName), 
      this.nextAdditionalPersonType);

    this.record.peopleInRecord.push(p);
    this.refreshLocalVarsPeopleInRecord();

    this.nextAdditionalPersonFirstName = null;
    this.nextAdditionalPersonLastName = null;
    this.nextAdditionalPersonID -= 1;
    this.nextAdditionalPersonType = null;
  }

  refreshLocalVarsPeopleInRecord() {
    this.newborn = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Newborn);
    this.deceased = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Deceased);
    this.bride = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Bride);
    this.groom = this.record.peopleInRecord.find(pir => pir.personType == PersonType.Groom);
    this.otherPeople = this.record.peopleInRecord.filter(pir => pir.personType != PersonType.Newborn &&
        pir.personType != PersonType.Deceased && pir.personType != PersonType.Groom && pir.personType != PersonType.Bride);
  }

  onPersonAdded(p: Person) {
    this.record.peopleInRecord.push(new PersonInRecord(p, this.currentlyModifiedPersonType));
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
