import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from 'src/app/shared/models';

@Component({
  selector: 'app-vertical-menu-item',
  templateUrl: './vertical-menu-item.component.html',
  styleUrls: ['./vertical-menu-item.component.css']
})
export class VerticalMenuItemComponent implements OnInit {

  items: MenuItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
