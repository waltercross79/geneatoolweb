import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { Record } from './record.model';
import { RecordType } from './record-type.enum';
import { Observable, from } from 'rxjs';
import { PersonInRecord } from './person-in-record.model';
import { PersonType } from './person-type.enum';

@Injectable()
export class StaticDataSource {
    private persons: Person[] = [
        new Person(1, 'Josef', 'Zmek', '', new Date(1831, 5, 2), new Date(1898, 5, 31), 'M'),
        new Person(2, 'Josef', 'Zmek', '', new Date(1864, 12, 1), new Date(1954, 29, 11), 'M'),
        new Person(3, 'Marie', 'Sireichova', '', new Date(1831, 2, 2), new Date(1880, 10, 13), 'F'),
        new Person(4, 'Marie', 'Zadinova', '', new Date(1870, 8, 5), new Date(1952, 1, 7), 'F'),
        new Person(5, 'Jan', 'Zmek', '', new Date(1801, 1, 1), new Date(1850, 3, 21), 'M')
    ];

    private records: Record[] =[
        new Record(RecordType.Birth, [new PersonInRecord(this.persons.find(x => x.id === 1), PersonType.Newborn)], 
            1, new Date(1831, 5, 2), '200', '50', null, 'Deutsch Brod', null, 'HB N 1761-1836'),
            new Record(RecordType.Birth, [new PersonInRecord(this.persons.find(x => x.id === 2), PersonType.Newborn)], 
            2, new Date(1864, 12, 11), '43', '52', null, 'Deutsch Brod', null, 'HB N 1844-1867'),
            new Record(RecordType.Birth, [new PersonInRecord(this.persons.find(x => x.id === 3), PersonType.Newborn)], 
            3, new Date(1831, 2, 2), null, '52 d/p', null, 'Deutsch Brod', null, 'HB N 1761-1836'),
            new Record(RecordType.Marriage, [
                new PersonInRecord(this.persons.find(x => x.id === 1), PersonType.Groom),
                new PersonInRecord(this.persons.find(x => x.id === 3), PersonType.Bride)], 
            4, new Date(1853, 9, 1), '96', '52 d/p', null, 'Deutsch Brod', null, 'HB O 1836-1868'),
            new Record(RecordType.Marriage, [
                new PersonInRecord(this.persons.find(x => x.id === 2), PersonType.Groom),
                new PersonInRecord(this.persons.find(x => x.id === 4), PersonType.Bride)], 
            5, new Date(1890, 7, 28), '154', '217', null, 'Deutsch Brod', null, 'HB O 1868-1901')
    ];

    getPersons(): Observable<Person[]> {
        return from([this.persons]);
    }

    getRecords(): Observable<Record[]> {
        return from([this.records]);
    }
}

