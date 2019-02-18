import { RecordType } from './record-type.enum';
import { PersonInRecord } from './person-in-record.model';
import { PersonType } from './person-type.enum';

export class Record {

    public primaryPeopleInRecord: PersonInRecord[];
    // public recordType?: RecordType;
    // public peopleInRecord?: PersonInRecord[];
    // public houseNumber?: String;
    // public streetName?: String;
    // public city?: String;
    // public country?: String;
    // public registryBook?: String;
    // public id?: string;

    constructor(public recordType?: RecordType, public peopleInRecord?: PersonInRecord[], public id?: string, public recordDate?: Date, public folio?: String,
        public houseNumber?: String, public streetName?: String, public city?: String, public country?: String,
        public registryBook?: String) {
            if(peopleInRecord == null)            
                this.peopleInRecord = new Array<PersonInRecord>();

            this.primaryPeopleInRecord = this.setPrimaryPeopleInRecord();
    }

    // constructor(obj?: any) {
    //     Object.assign(this, obj);
    //     this.primaryPeopleInRecord = this.setPrimaryPeopleInRecord();
    // }

    setPrimaryPeopleInRecord(): PersonInRecord[] {
        return this.peopleInRecord.filter(pir => pir.personType == PersonType.Newborn
            || pir.personType == PersonType.Bride || pir.personType == PersonType.Groom
            || pir.personType == PersonType.Deceased);
    }
}