import { Component, OnInit } from '@angular/core';
import { ExpansionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-frecuent-link',
  templateUrl: './frecuent-link.component.html',
  styleUrls: ['./frecuent-link.component.css']
})
export class FrecuentLinkComponent implements OnInit {
  frecuentLinks: ExpansionModel[] = [
    { title: 'Title 1 title 1 title 1 titl1', description: 'Description 1', icon: 'monetization_on' },
    { title: 'Title 2', description: 'Description 2', icon: 'thumb_up' },
    { title: 'Title 3', description: 'Description 3', icon: 'group' },
    { title: 'Title 4', description: 'Description 4', icon: 'search' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
