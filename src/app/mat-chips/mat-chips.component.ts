import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mat-chips',
  templateUrl: './mat-chips.component.html',
  styleUrls: ['./mat-chips.component.css']
})
export class MatChipsComponent implements OnInit {

 left:any = document.getElementById('slideLeft')
 right:any = document.getElementById('slideRight')
  constructor() {

  }

  ngOnInit(): void {
  }
 //
  btnLeft() {
    console.log('Left')
    this.left.scrollLeft+=30;
 }

  btnRgt() {
    console.log('Right')
    this.left.scrollLeft-=30;
  }

  onScroll() {
    console.log('scrolled')
  }
}
