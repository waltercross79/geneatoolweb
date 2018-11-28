import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringDate'
})
export class StringDatePipe implements PipeTransform {

  transform(value: Date, args?: any): String {
    if(value == null)
      return '';

    return value.toString().substring(0, 10);
  }

}
