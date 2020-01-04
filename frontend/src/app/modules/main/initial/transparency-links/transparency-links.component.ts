import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { InfoModel } from '../../../../shared/models';

@Component({
  selector: 'app-transparency-links',
  template: `
    <div class="links">
      <app-info
        *ngFor="let link of links"
        [infoData]="link"
        [indexParent]="indexParent"
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
  @Input() indexParent: number;

  constructor() { }

  ngOnInit() { }
}
