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
  @Input() className = 'normal';
  @Input() iconColor = '#ffffff';
  @Input() fontSize = {
    icon: 24,
    title: 13,
    subtitle: 8
  };

  constructor() { }

  ngOnInit() {
  }

}
