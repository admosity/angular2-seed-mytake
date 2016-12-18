import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  links = {
    account: '/account'
  }



  constructor() {
  }

  ngOnInit() {
  }

  callOnOpen() {
    console.log("I'm called on open!!");
  }

  callOnClose() {
    console.log("I'm called on close!!");
  }

  onClick(event: any) {
    console.log("I'm clicked and links = ", this.links);
    console.log("clicked event = ", event);
  }

}
