import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  friendName = '';
  friendList = [];


  constructor(private shared : SharedService) { 
  this.friendList = shared.getFriends();
  }

  ngOnInit() {
  }

  registerFriend() {
    this.shared.saveNewFriend(this.friendName);
    
    this.friendName = '';
  }
}
