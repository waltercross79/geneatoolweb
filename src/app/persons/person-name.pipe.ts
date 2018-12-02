import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/person.model';

@Pipe({
  name: 'personname'
})
export class PersonNamePipe implements PipeTransform {

  transform(value: Person, args?: any): String {
    if(value == null)
        return '';

    return `${value.firstName} ${value.lastName}`;
  }

}
