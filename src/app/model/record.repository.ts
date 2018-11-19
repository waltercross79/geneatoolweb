import { Injectable } from "@angular/core";
import { Record } from './record.model';
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class RecordRepository {

    records: Record[];

    constructor(private dataSource: StaticDataSource) { 
        dataSource.getRecords().subscribe(data => {
            this.records = data;
        });
    }

    getRecords(): Record[] {
        return this.records;
    }

    getRecord(id: number) {
        return this.records.find(r => r.id == id);
    }
}