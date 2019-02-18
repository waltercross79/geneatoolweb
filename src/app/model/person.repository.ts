import { Injectable } from "@angular/core";
import { Person } from './person.model';
import { RestPersonDataSource } from "./rest.datasource.persons";

@Injectable()
export class PersonRepository {
    private persons: Person[] = [];

    constructor(private dataSource: RestPersonDataSource) {
        dataSource.getPersons().subscribe(data => {
            this.persons = data.results;
        });
    }

    getPersons(): Person[] {
        return this.persons;
    }

    getPerson(id: number) {
        return this.persons.find(r => r.id == id);
    }

    savePerson(person: Person) {
        if(person.id == null) {
            this.dataSource
                .savePerson(person)
                .subscribe(r => { 
                    this.persons.push(r); 
                    person.id = r.id;
                });
        } else {
            this.dataSource
                .updatePerson(person)
                .subscribe(r => {
                    this.persons.splice(this.persons.findIndex(r => r.id == person.id), 1, person);
                });
        }
    }

    deletePerson(id: number) {
        this.dataSource
            .deletePerson(id)
            .subscribe(r => { 
                this.persons.splice(this.persons.findIndex(r => r.id == id), 1);
            });
    }
}






