import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { RecordFile } from "./record-file.model";

const PROTOCOL = "http";
const PORT = 8090;

@Injectable()
export class RestRecordFileDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  uploadRecordFile(recordFile: RecordFile): Observable<boolean> {
    const endpoint = `${this.baseUrl}recordfiles/${recordFile.recordId}`;
    return this.http
      .post<RecordFile>(endpoint, recordFile)
      .pipe(map(() => { return true; }));
  }

  downloadRecordFile(recordId: String) : Observable<RecordFile> {
    return this.http.get<RecordFile>(`${this.baseUrl}recordfiles/${recordId}`);        
  }

  recordFileUrl(recordId: String) : String {
    return `${this.baseUrl}recordfiles/${recordId}`;
  }
}