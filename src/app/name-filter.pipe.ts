import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'nameFilter',
  pure: false
})

export class NameFilterPipe implements PipeTransform {
  transform(allMembers: Member[], userInput: string){
    if(userInput === ""){
      return allMembers;
    }else if (allMembers){
      return allMembers.filter((eachItem) => {
        return eachItem.name.toLowerCase().includes(userInput.toLowerCase()) ||
               eachItem.position.toLowerCase().includes(userInput.toLowerCase()) ||
               eachItem.number.includes(userInput);
      });
    }
  }
}
