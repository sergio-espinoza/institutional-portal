import { Component, OnInit } from '@angular/core';
import { headerLinks } from './data.header';
import { LinkListModel } from '../../../../shared/models';
import { IconService } from '../../../../core/services/icon/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLinks: LinkListModel[] = headerLinks;

  linkIcons: any[] = [
    { fill: '#1976d2', d: this.iconService.getIcon('facebook'),
      path: 'https://facebook.com' },
    { fill: '#1976d2', d: this.iconService.getIcon('twitter'),
      path: 'https://twitter.com' },
    { fill: '#1976d2', d: this.iconService.getIcon('instagram') },
    { fill: '#1976d2', d: this.iconService.getIcon('gmail'),
      path: 'https://mail.google.com' },
  ];

  constructor(
    private iconService: IconService
  ) { }

  ngOnInit() {
  }

}
