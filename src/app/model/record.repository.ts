import { Injectable } from "@angular/core";
import { Record } from './record.model';
import { RestRecordDataSource } from "./rest.datasource.records";
import { Person } from "./person.model";

@Injectable()
export class RecordRepository {

    records: Record[];

    constructor(private dataSource: RestRecordDataSource) { 
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

    saveRecord(record: Record) {
        if(record.id == null) {
            this.dataSource
                .saveRecord(record)
                .subscribe(r => {                    
                    this.records.push(r);});
        } else {
            this.dataSource
                .updateRecord(record)
                .subscribe(r => {
                    this.records.splice(this.records.findIndex(r => r.id == record.id), 1, r);
                });
        }
    }

    deleteRecord(id: string) {
        this.dataSource
            .deleteRecord(id)
            .subscribe(r => { 
                this.records.splice(this.records.findIndex(r => r.id == id), 1);
            });
    }
}