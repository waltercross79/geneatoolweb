import { Pipe, PipeTransform } from '@angular/core';
import { PersonType } from '../model/person-type.enum';

@Pipe({
  name: 'personType'
})
export class PersonTypePipe implements PipeTransform {

  transform(value: number): String {
    return PersonType[value];
  }

}
