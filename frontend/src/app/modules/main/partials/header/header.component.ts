import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { headerLinks } from './data.header';
import { LinkListModel } from '../../../../shared/models';
import { MenuBasicComponent } from '../../../../shared/components';
import { IconService } from '../../../../core/services/icon/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLinks: LinkListModel[] = headerLinks;
  scEl = 'scrollingElement';

  linkIcons: any[] = [
    { fill: '#1976d2', d: this.iconService.getIcon('facebook'),
      path: 'https://facebook.com' },
    { fill: '#1976d2', d: this.iconService.getIcon('twitter'),
      path: 'https://twitter.com' },
    { fill: '#1976d2', d: this.iconService.getIcon('instagram') },
    { fill: '#1976d2', d: this.iconService.getIcon('gmail'),
      path: 'https://mail.google.com' },
  ];

  @ViewChild(MenuBasicComponent, { static: true }) menuBasic: MenuBasicComponent;

  constructor(
    private iconService: IconService
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) actionInScroll($event: Event) {
    if ($event.target[this.scEl].scrollTop >= 500) {
      this.menuBasic.classSticky = 'sticky';
    } else {
      this.menuBasic.classSticky = 'no-sticky';
    }
  }
}
