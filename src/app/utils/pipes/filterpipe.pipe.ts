import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure:true
})
export class FilterpipePipe implements PipeTransform {

  transform(users: any[], searchTerm: string): any[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user => user.name.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
