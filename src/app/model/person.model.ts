import { Marriage } from "./marriage.model";

export class Person {

    constructor(public id?: Number, public firstName?: string, public lastName?: String,
        public dateOfBirth?: Date, public dateOfDeath?: Date, public gender?: String,
        public children?: Array<Person>, public parents?: Array<Person>, public marriages?: Array<Marriage>) {
    }

    public father?(): Person {
        if(this.parents != null) {
            var f = this.parents.find(p => p.gender == 'M');
            if(f != undefined) {
                return f;
            }
        }

        return null;
    }

    public mother?(): Person {
        if(this.parents != null) {
            var m = this.parents.find(p => p.gender == 'F');
            if(m != undefined) {
                return m;
            }
        }

        return null;
    }

    public addParent(parent: Person) : void {
        if(this.parents == null) {
            this.parents = [];
        }

        // Replace existing parent, if found.
        var p = this.parents.find(e => e.gender == parent.gender);

        if(p == undefined) {
            this.parents.push(parent);
        }
        else {
            this.parents.splice(this.parents.indexOf(p), 1, parent);
        }        
    }

    public removeParent(gender: String): void {
        if(this.parents != null) {
            var p = this.parents.find(e => e.gender == gender);
            if(p != undefined) {           
                this.parents.splice(this.parents.indexOf(p), 1);
            }        
        }
    }
}