import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent {

  constructor(private memberService: MemberService) {}

  saveMember(name, position, number, picUrl, description){
    let newMember = new Member(name, position, number, picUrl, description);
    this.memberService.saveMember(newMember);
  }

}
