import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// Services
import { RouteScrollService } from './providers/route-scroll/route-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private scrollService: RouteScrollService) {}

  ngOnInit() {
    this.scrollService.scrollTopNav();
  }

}
