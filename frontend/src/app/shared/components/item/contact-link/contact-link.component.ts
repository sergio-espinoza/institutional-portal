import { Component, OnInit, Input } from '@angular/core';
import { LinkListModel } from '../../../models';

@Component({
  selector: 'app-contact-link',
  templateUrl: './contact-link.component.html',
  styleUrls: ['./contact-link.component.css']
})
export class ContactLinkComponent implements OnInit {
  @Input() contactLinkData: LinkListModel = {
    title: 'Title Contact Link',
    icon: 'email',
    path: 'https://facebook.com',
    subtitle: ''
  };
  @Input() fontSize = {
    icon: 24,
    title: 13,
    subtitle: 8
  };

  @Input() fontColor = {
    icon: '#1976d2',
    title: 'rgba(0, 0, 0, 0.87);',
    subtitle: 'rgba(0, 0, 0, 0.87);'
  };

  constructor() { }

  ngOnInit() {
  }

}
