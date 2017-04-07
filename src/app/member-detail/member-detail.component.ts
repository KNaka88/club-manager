import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
      console.log(this.memberId);
    });
    this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }

}
