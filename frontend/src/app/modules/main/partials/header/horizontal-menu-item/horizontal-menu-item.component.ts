import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MenuItemModel } from '../../../../../shared/models';

@Component({
  selector: 'app-horizontal-menu-item',
  templateUrl: './horizontal-menu-item.component.html',
  styleUrls: ['./horizontal-menu-item.component.css']
})
export class HorizontalMenuItemComponent implements OnInit {
  @ViewChild('menu', { static: true }) menu: MatMenu;

  @Input() items: MenuItemModel[] = [];

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
