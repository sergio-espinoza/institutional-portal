import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { headerLinks } from './data.header';
import { LinkListModel, SavageModel } from '../../../../shared/models';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { IconService } from '../../../../core/services/icon/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuChange = new EventEmitter<void>();

  public headerLinks: LinkListModel[] = headerLinks;
  private scEl = 'scrollingElement';

  public linkIcons: any[] = [
    { fill: '#1976d2', d: IconService.getIcon('facebook'),
      path: 'https://facebook.com' },
    { fill: '#1976d2', d: IconService.getIcon('twitter'),
      path: 'https://twitter.com' },
    { fill: '#1976d2', d: IconService.getIcon('instagram') },
    { fill: '#1976d2', d: IconService.getIcon('gmail'),
      path: 'https://mail.google.com' },
  ];

  @ViewChild(HorizontalMenuComponent, { static: true }) horizontalMenu: HorizontalMenuComponent;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) actionInScroll($event: Event) {
    if ($event.target[this.scEl].scrollTop >= 500) {
      this.horizontalMenu.classSticky = 'sticky';
    } else {
      this.horizontalMenu.classSticky = 'no-sticky';
    }
  }

  public onMenuChange(): void {
    this.menuChange.emit();
  }
}
