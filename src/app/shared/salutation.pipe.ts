import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any, gender: string): unknown {
    if (gender == 'M') {
      return "Mr. " + value;
    } else if (gender == 'F') {
      return "Ms. " + value;
    }
    else {
      return value;
    }
  }

}
