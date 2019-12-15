import { Component, OnInit, Input } from '@angular/core';
import { InfoModel } from 'src/app/shared/models';

@Component({
  selector: 'app-transparency-links',
  template: `
    <div class="links">
      <app-info
        *ngFor="let link of links"
        [infoData]="link"
      ></app-info>
    </div>
  `,
  styles: [`
    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-flow: row wrap;
    }
  `]
})

export class TransparencyLinksComponent implements OnInit {
  @Input() links: InfoModel[] = [];

  constructor() { }

  ngOnInit() { }
}
