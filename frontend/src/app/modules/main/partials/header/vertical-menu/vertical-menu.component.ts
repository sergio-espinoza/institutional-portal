import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MenuItemModel } from '../../../../../shared/models';
import {
  infoMenu as externalInfoMenu,
  managementMenu as externalManagementMenu,
  servicesMenu as externalServicesMenu,
  imageMenu as externalImageMenu
} from '../data.header';


@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {
  @Output() closeChange = new EventEmitter<void>();

  infoMenu: MenuItemModel[] = externalInfoMenu;
  managementMenu: MenuItemModel[] = externalManagementMenu;
  servicesMenu: MenuItemModel[] = externalServicesMenu;
  imageMenu: MenuItemModel[] = externalImageMenu;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.closeChange.emit();
  }

}
