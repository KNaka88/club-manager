import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() member;

  formVisible: boolean = false;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  toggleEditForm(){
    this.formVisible = !this.formVisible;
  }

  updateMember(member){
    this.memberService.updateMember(member);
  }

}
