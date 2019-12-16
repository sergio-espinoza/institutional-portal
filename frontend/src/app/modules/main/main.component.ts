import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { InfoModel, NotificationItemModel, LinkListModel } from '../../shared/models';
import { MatDialog, MatBottomSheet } from '@angular/material';
import { ItemDetailComponent, MenuBasicComponent } from '../../shared/components';
import { TransparencyDocumentComponent } from './initial/transparency-document/transparency-document.component';
import { MainGeneralService } from 'src/app/core/services/main/general.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  scEl = 'scrollingElement';

  infoData: InfoModel = {
    title: 'Data 1',
    icon: 'email',
  };
  @ViewChild(MenuBasicComponent, { static: true }) menuBasic: MenuBasicComponent;

  linkLists: LinkListModel[] = [
    { title: 'GitHub', subtitle: 'GitHub WebSite', icon: 'person', path: 'https://www.github.com/48479567' },
    { title: 'Google', subtitle: 'Google Link', icon: 'email', path: 'https://www.google.com' },
    { title: 'Facebook', subtitle: 'Facebook WebSite', icon: 'notifications_active', path: 'https://www.facebook.com' }
  ];

  dataSource: any[] = [
    { name: 'Document 1', size: '350 KB', createdat: new Date() },
    { name: 'Document 2', size: '1500 KB', createdat: new Date() },
    { name: 'Document 3', size: '450 KB', createdat: new Date() },
  ];

  displayedColumns: string[] = [ 'name', 'size' ];

  constructor(
    private bottomSheet: MatBottomSheet,
    public mainGeneralService: MainGeneralService
  ) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) actionInScroll($event: Event) {
    if ($event.target[this.scEl].scrollTop >= 300) {
      this.menuBasic.classSticky = 'sticky';
    } else {
      this.menuBasic.classSticky = 'no-sticky';
    }
  }

  openMenuTransparency() {
    this.bottomSheet.open(TransparencyDocumentComponent);
  }


}
