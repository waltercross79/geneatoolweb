import { Injectable } from "@angular/core";
import { Person } from './person.model';
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class PersonRepository {
    private persons: Person[];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getPersons().subscribe(data => {
            this.persons = data;
        });
    }

    public getPersons(): Person[] {
        return this.persons;
    }

    public getPerson(id: number) {
        return this.persons
            .find(p => p.id == id);
    }
}






