import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.less']
})
export class SplashComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
