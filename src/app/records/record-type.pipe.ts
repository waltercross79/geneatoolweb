import { Pipe, PipeTransform } from '@angular/core';
import { RecordType } from '../model/record-type.enum';

@Pipe({
  name: 'recordType'
})
export class RecordTypePipe implements PipeTransform {

  transform(value: number): String {
    return RecordType[value];
  }

}
