import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../../../../shared/models';
import {
  infoMenu as externalInfoMenu,
  managementMenu as externalManagementMenu,
  servicesMenu as externalServicesMenu,
  imageMenu as externalImageMenu
} from '../data.header';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit {
  classSticky = 'no-sticky';

  infoMenu: MenuItemModel[] = externalInfoMenu;
  managementMenu: MenuItemModel[] = externalManagementMenu;
  servicesMenu: MenuItemModel[] = externalServicesMenu;
  imageMenu: MenuItemModel[] = externalImageMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
