import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {data, srcs} from '../../assets/data.js'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('currentPosition', [
      // ...
      state('zero', style({
        marginLeft: '0px'
      })),
      state('one', style({
        marginLeft: '-800px'
      })),
      state('two', style({
        marginLeft: '-1600px'
      })),
      state('three', style({
        marginLeft: '-2400px'
      })),
      transition('one <=> two', [
        animate('1s')
      ]),
      transition('two <=> three', [
        animate('1s')
      ]),
      transition('zero <=> one', [
        animate('1s')
      ]),
      transition('zero => three', [
        animate('0s')
      ]),
      transition('three => one', [
        animate('0s')
      ]),
    ]),
  ]
})
export class LandingPageComponent implements OnInit {
  positions = ['zero', 'one', 'two', 'three'];
  counter = 0;
  position = 'zero';
  animationStoped = false;
  imageSources = srcs;
  productData = data;
  constructor() {
   }

  ngOnInit() {
    setInterval(()=> this.changePosition(), 2000);
  }

  changePosition() {
    if (!this.animationStoped) {
      this.counter++;
      this.counter = this.counter % 4;
      this.position = this.positions[this.counter];
      if (this.position === 'three') {
        setTimeout(() => {
          this.position = 'one';
          this.counter = 1;
        }, 1010);
      }
      
    }
  }

  stopAnimation() {
    this.animationStoped = true;
  }

  playAnimation() {
    this.animationStoped = false;
  }



}
