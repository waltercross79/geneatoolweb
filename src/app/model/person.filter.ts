export class PersonFilter {
    constructor(public lastName?: string, public firstName?:string, 
        public dobFrom?: Date, public dobTo?: Date, public dodFrom?: Date, public dodTo?: Date) {}
}