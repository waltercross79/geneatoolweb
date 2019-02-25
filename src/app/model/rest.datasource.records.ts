import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Record } from "./record.model";
import { map } from 'rxjs/operators';
import { RecordFile } from './record-file.model';

const PROTOCOL = "http";
const PORT = 8090;

@Injectable()
export class RestRecordDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getRecords(): Observable<Record[]> {
      return this.http.get<Record[]>(this.baseUrl + "records/")
        .pipe(map(res => {
          let records: Record[] = [];

          res.forEach(r => records.push(new Record(r.recordType, r.peopleInRecord,
            r.id, r.recordDate, r.folio, r.houseNumber, r.streetName, 
            r.city, r.country, r.registryBook)));

          return records;
        }));
  }

  saveRecord(record: Record): Observable<Record> {
    return this.http.post<Record>(this.baseUrl + "records/", record)
    .pipe(map(r => new Record(r.recordType, r.peopleInRecord,
        r.id, r.recordDate, r.folio, r.houseNumber, r.streetName, 
        r.city, r.country, r.registryBook)
    ));
  }

  deleteRecord(id: string): Observable<Record> {
      return this.http.delete<Record>(`${this.baseUrl}records/${id}`);      
  }

  updateRecord(record: Record): Observable<Record> {
      return this.http.put<Record>(`${this.baseUrl}records/${record.id}`, record)
      .pipe(map(r => new Record(r.recordType, r.peopleInRecord,
        r.id, r.recordDate, r.folio, r.houseNumber, r.streetName, 
        r.city, r.country, r.registryBook)
      ));
  }  

  uploadRecordFile(fileToUpload: File, id: String): Observable<String> {
    const endpoint = `${this.baseUrl}recordfiles/${id}`;

    var formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    return this.http
      .post(endpoint, formData, { responseType: "text" });
  }

  downloadRecordFile(recordId: String) : Observable<RecordFile> {
    return this.http.get<RecordFile>(`${this.baseUrl}recordfiles/${recordId}`);        
  }

  recordFileUrl(recordId: String) : String {
    return `${this.baseUrl}recordfiles/${recordId}`;
  }
}