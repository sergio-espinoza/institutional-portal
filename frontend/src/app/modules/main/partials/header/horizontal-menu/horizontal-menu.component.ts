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
  public classSticky = 'no-sticky';

  public infoMenu: MenuItemModel[] = externalInfoMenu;
  public managementMenu: MenuItemModel[] = externalManagementMenu;
  public servicesMenu: MenuItemModel[] = externalServicesMenu;
  public imageMenu: MenuItemModel[] = externalImageMenu;

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
