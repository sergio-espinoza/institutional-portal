import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div class="menu-header"></div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .menu-header {
      width: 100vw;
      height: 64px;
      position: absolute;
      background: rgba(255, 0, 0, .7);
    }
  `]
})
export class PageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
