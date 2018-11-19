import { Person } from "./person.model";
import { PersonType } from "./person-type.enum";

export class PersonInRecord {
    constructor(public person: Person, public personType: PersonType) {

    }
}