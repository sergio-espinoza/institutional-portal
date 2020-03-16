import { Component, OnInit, Input } from '@angular/core';
import { ExpansionModel } from '../../../../shared/models';

@Component({
  selector: 'app-review',
  template: `
    <div [className]="className">
      <mat-icon>{{ reviewData.icon }}</mat-icon>
      <h2>{{ reviewData.title }}</h2>
      <p>{{ reviewData.description }}</p>
    </div>
  `,
  styles: [`
    .goal {
      width: 40%;
      height: 40%;
    }
    .link {
      min-width: 300px;
    }
    mat-icon {
      font-size: 48px;
      color: #1976d2;
    }
    h2 {
      font-size: 21px;
    }
    p {
      font-size: 14px;
    }
  `]
})

export class ReviewComponent implements OnInit {
  @Input() reviewData: ExpansionModel = {
    icon: 'thumb_up',
    title: 'Title 1',
    description: 'Description 1'
  };

  @Input() className = 'goal';

  constructor() { }

  ngOnInit(): void { }
}
