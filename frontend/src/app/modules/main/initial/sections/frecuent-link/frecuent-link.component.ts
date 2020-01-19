import { Component, OnInit } from '@angular/core';
import { ExpansionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-frecuent-link',
  templateUrl: './frecuent-link.component.html',
  styleUrls: ['./frecuent-link.component.css']
})
export class FrecuentLinkComponent implements OnInit {
  frecuentLinks: ExpansionModel[] = [
    { title: 'Link 1', description: 'Description 1', icon: 'monetization_on' },
    { title: 'Link 2', description: 'Description 2', icon: 'thumb_up' },
    { title: 'Link 3', description: 'Description 3', icon: 'group' },
    { title: 'Link 4', description: 'Description 4', icon: 'search' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
