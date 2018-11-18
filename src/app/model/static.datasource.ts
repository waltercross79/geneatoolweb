import { Injectable } from "@angular/core";
import { Person } from "./person.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private persons: Person[] = [
        new Person(1, "Josef", "Zmek", "", new Date(1752, 12, 16), new Date(1798, 5, 31)),
        new Person(2, "Josef", "Zmek", "", new Date(1781, 6, 1), new Date(1850, 3, 21)),
        new Person(3, "Anna", "Kopicova", "", new Date(1760, 7, 10), new Date(1803, 10, 13)),
        new Person(4, "Frantiska", "Zmekova", "", new Date(1783, 8, 5), new Date(1820, 11, 11)),
        new Person(5, "Jan", "Zmek", "", new Date(1801, 1, 1), new Date(1850, 3, 21))
    ];

    getPersons(): Observable<Person[]> {
        return from([this.persons]);
    }
}

