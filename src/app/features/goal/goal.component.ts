import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(" ====== on init");
  }

  ngOnChanges() {
   console.log(" ====== in ngonchange");
  }

  ngDoCheck(){
    //console.log(" ==== on do check called");
  }

  ngAfterViewInit(){
   // console.log(" ==== on after view init");
  }

}
