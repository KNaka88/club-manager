import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() member;

  formVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleEditForm(){
    this.formVisible = !this.formVisible;
  }

}