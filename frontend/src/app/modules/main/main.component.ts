import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { InfoModel, LinkListModel } from '../../shared/models';
import { MatBottomSheet } from '@angular/material';
import { MenuBasicComponent } from '../../shared/components';
import { TransparencyDocumentComponent } from './initial/transparency-document/transparency-document.component';
import { MainGeneralService } from '../../core/services/main/general.service';
import { WindowService } from '../../core/services/api-local/window.service';
import { InfoService } from '../../core/services/shared/info.service';

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

  constructor(
    private bottomSheet: MatBottomSheet,
    public mainGeneralService: MainGeneralService,
    private windowService: WindowService,
    private infoService: InfoService
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
    this.bottomSheet.open(TransparencyDocumentComponent).afterDismissed().subscribe(
      _ => {
        if (this.infoService.isBrowsing) {
          this.windowService.getWindow().scroll(0, 40);
          this.infoService.isBrowsing = false;
        }
      }
    );
  }

}
