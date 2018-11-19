import { Pipe, PipeTransform } from '@angular/core';
import { PersonInRecord } from '../model/person-in-record.model';

@Pipe({
  name: 'comalist'
})
export class ComalistPipe implements PipeTransform {

  transform(value: PersonInRecord[]): String {
    if(value == null)
      return '';

    let result: String = '';    
    
    for (let i = 0; i < value.length; i++) {
      let name = value[i].person.toString();
      if(i == 0)
        result = name;
      else
        result = result + ', ' + name;
    }

    return result;
  }

}
