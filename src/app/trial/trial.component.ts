import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  selector: string = '.main-panel';

  onScroll() {
    console.log('scrolled!!');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
