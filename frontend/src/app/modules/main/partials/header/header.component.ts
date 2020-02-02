import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { headerLinks } from './data.header';
import { LinkListModel } from '../../../../shared/models';
import { HorizontalMenuComponent } from '../../../../shared/components';
import { IconService } from '../../../../core/services/icon/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuChange = new EventEmitter<void>();

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

  @ViewChild(HorizontalMenuComponent, { static: true }) horizontalMenu: HorizontalMenuComponent;

  constructor(
    private iconService: IconService
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) actionInScroll($event: Event) {
    if ($event.target[this.scEl].scrollTop >= 500) {
      this.horizontalMenu.classSticky = 'sticky';
    } else {
      this.horizontalMenu.classSticky = 'no-sticky';
    }
  }

  onMenuChange() {
    this.menuChange.emit();
  }
}
