import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'nameFilter',
  pure: false
})

export class NameFilterPipe implements PipeTransform {

  transform(member: Member[], input: string) {
    let output: Member[] = [];

    for(let i = 0; i < member.length; i++ ){
      let regex = /.*member[i].*/i;
      console.log(regex.test(input));
    }
  }
}
