import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "./person.model";
import { Record } from "./record.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + "persons");
  }

  savePerson(person: Person) : Observable<Person> {
      return this.http.post<Person>(this.baseUrl + "persons", person);
  }  

  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.baseUrl}persons/${id}`);
  }

  updatePerson(person: Person): Observable<Person> {
      return this.http.put<Person>(`${this.baseUrl}persons/${person.id}`, person);
  }

  getRecords(): Observable<Record[]> {
      return this.http.get<Record[]>(this.baseUrl + "records");
  }

  saveRecord(record: Record): Observable<Record> {
    return this.http.post<Record>(this.baseUrl + "records", record);
  }

  deleteRecord(id: number): Observable<Record> {
      return this.http.delete<Record>(`${this.baseUrl}records/${id}`);
  }

  updateRecord(record: Record): Observable<Record> {
      return this.http.put<Record>(`${this.baseUrl}records/${record.id}`, record);
  }  
}