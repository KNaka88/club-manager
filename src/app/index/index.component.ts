import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [MemberService]
})
export class IndexComponent implements OnInit {
  currentRoute: string = this.router.url;
  members: FirebaseListObservable<any[]>;
  userInput: string = '';

  constructor(private memberService: MemberService, private router: Router) {
    console.log(this.router.url);
   }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  ngDoCheck() {
    console.log(this.userInput);

  }

  goToDetail(thisMember) {
    if(this.currentRoute !== "/admin"){
      this.router.navigate(['member', thisMember.$key])
    }
  }

  onChange(userInput) {
    this.userInput = userInput;
  }

}
