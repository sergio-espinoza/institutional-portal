import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styles: [`
    :host: {
      z-index: 30;
    }
  `]
})

export class LogoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
