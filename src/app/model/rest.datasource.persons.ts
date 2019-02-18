import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "./person.model";
import { PagedResults } from "./paged-results.model";

const PROTOCOL = "http";
const PORT = 80;

@Injectable()
export class RestPersonDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/v1/`;
  }
  getPersons(): Observable<PagedResults<Person>> {
    return this.http.get<PagedResults<Person>>(this.baseUrl + "persons/");
  }

  savePerson(person: Person) : Observable<Person> {
      return this.http.post<Person>(this.baseUrl + "persons/", person);
  }  

  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(`${this.baseUrl}persons/${id}`);
  }

  updatePerson(person: Person): Observable<Person> {
      return this.http.patch<Person>(`${this.baseUrl}persons/${person.id}`, person);
  }
}