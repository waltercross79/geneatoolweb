import { Person } from "./person.model";

export class Marriage {
    constructor(public bride: Person, public groom: Person, public dateOfWedding?: Date){

    }
}