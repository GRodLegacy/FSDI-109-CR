import { Component } from '@angular/core';
import { Message } from '../message';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  postTest = '';
  imageUrl = '';
  to = 'Everyone';
  friends = [];

  constructor( private dataSrv : DataService, private shared : SharedService) {
    this.friends = this.shared.getFriends();
    
  }

  createPost() {

    // create a message
    var m = new Message();
    m.text = this.postTest;
    m.imageUrl = this.imageUrl;
    m.from = this.shared.getUserName();
    m.to = this.to;

    this.dataSrv.postMessage(m);

    console.log("Creating post...", m);

    // clean controls
    this.postTest = '';
    this.imageUrl = '';
  }

}
