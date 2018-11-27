import { Injectable } from "@angular/core";
import { Person } from './person.model';
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class PersonRepository {
    private persons: Person[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getPersons().subscribe(data => {
            this.persons = data;
        });
    }

    getPersons(): Person[] {
        return this.persons;
    }

    getPerson(id: string) {
        return this.persons.find(r => r.id == id);
    }

    savePerson(person: Person) {
        if(person.id == null) {
            this.dataSource
                .savePerson(person)
                .subscribe(r => this.persons.push(r));
        } else {
            this.dataSource
                .updatePerson(person)
                .subscribe(r => {
                    this.persons.splice(this.persons.findIndex(r => r.id == person.id), 1, person);
                });
        }
    }

    deletePerson(id: string) {
        this.dataSource
            .deletePerson(id)
            .subscribe(r => { 
                this.persons.splice(this.persons.findIndex(r => r.id == id), 1);
            });
    }
}






