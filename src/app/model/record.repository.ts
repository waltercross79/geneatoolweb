import { Injectable } from "@angular/core";
import { Record } from './record.model';
import { RestRecordDataSource } from "./rest.datasource.records";
import { RestRecordFileDataSource } from "./rest.datasource.record-files";
import { RecordFile } from "./record-file.model";
import { Observable } from "rxjs";

@Injectable()
export class RecordRepository {

    records: Record[];

    constructor(private dataSource: RestRecordDataSource //,
        //private fileDataSource: RestRecordFileDataSource
        ) { 
        dataSource.getRecords().subscribe(data => {
            this.records = data;
        });
    }

    getRecords(): Record[] {
        return this.records;
    }

    getRecord(id: string) {
        return this.records.find(r => r.id == id);
    }

    saveRecord(record: Record) : Observable<Record> {
        if(record.id == null) {
            var result = this.dataSource
                .saveRecord(record);
            
            result.subscribe(r => {                    
                this.records.push(r);
            });

            return result;
                
        } else {
            var result = this.dataSource
                .updateRecord(record);

            result.subscribe(r => {
                this.records.splice(this.records.findIndex(r => r.id == record.id), 1, r);
            });

            return result;    
        }
    }

    deleteRecord(id: string) {
        this.dataSource
            .deleteRecord(id)
            .subscribe(r => { 
                this.records.splice(this.records.findIndex(r => r.id == id), 1);
            });
    }

    saveRecordFile(fileToSave: File, recordId: String) : Observable<String> {
        console.log('Inside saveRecordFile');
        return this.dataSource.uploadRecordFile(fileToSave, recordId);
    }

    getRecordFile(recordId: String) : Observable<RecordFile> {
        return this.dataSource.downloadRecordFile(recordId);            
    }

    getRecordFileUrl(recordId: String) : String {
        return this.dataSource.recordFileUrl(recordId);
    }
}