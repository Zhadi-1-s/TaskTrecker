import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  
    transform(value: any): any {
  
    if (value === Object(value)) {

      return Object.keys(value).filter(key => isNaN(Number(value[key])));

    } else {

      console.error('Provided value is not an enum.');
      
      return [];
    }
  }
}