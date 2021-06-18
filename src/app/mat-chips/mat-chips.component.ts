import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-chips',
  templateUrl: './mat-chips.component.html',
  styleUrls: ['./mat-chips.component.css']
})
export class MatChipsComponent implements OnInit {

  @Input('aria-orientation')  ariaOrientation:any

  constructor() { }

  ngOnInit(): void {
  }

}
