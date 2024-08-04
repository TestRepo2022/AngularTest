import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameformat'
})
export class NameformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args[0]==1){
      return "Mr. "+value;
    }
    else if(args[0]==2){
      return "Miss. "+value
    }
    else{
      return value
    }
  }

}
