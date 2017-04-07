import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMemberById(id: string){
    return this.angularFire.database.object('members/' + id);
  }

  saveMember(newMember: Member){
    this.members.push(newMember);
  }

  updateMember(editMember){
    let memberEntryInFirebase = this.getMemberById(editMember.$key);
    memberEntryInFirebase.update(
      {
        name: editMember.name,
        position: editMember.position,
        number: editMember.number,
        picUrl: editMember.picUrl,
        description: editMember.description
      }
    )
  }
}
