export class Person {

    constructor(public id?: number, public firstName?: string, public lastName?: string,
        public middleName?: string, public dateOfBirth?: Date, public dateOfDeath?: Date, public gender?: String) {
    }

    public toString(): String {
        return `${this.firstName} ${this.lastName}`;
    }
}