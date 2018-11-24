import { RecordType } from './record-type.enum';
import { PersonInRecord } from './person-in-record.model';

export class Record {

    constructor(public recordType?: RecordType, public peopleInRecord?: PersonInRecord[], public id?: number, public recordDate?: Date, public folio?: String,
        public houseNumber?: String, public streetName?: String, public city?: String, public country?: String,
        public registryBook?: String) {
            if(peopleInRecord == null)            
                this.peopleInRecord = new Array<PersonInRecord>();
    }

}