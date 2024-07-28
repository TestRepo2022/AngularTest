import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderformat'
})
export class GenderformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value){
      case 1:
        return "Male"
        break;
      case 2:
        return "Female"
        break;
        default:
        return "Unknown"
        break
    }
  }

}
