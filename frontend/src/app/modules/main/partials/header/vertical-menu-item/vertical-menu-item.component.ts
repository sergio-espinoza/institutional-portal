import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemModel } from '../../../../../shared/models';

@Component({
  selector: 'app-vertical-menu-item',
  templateUrl: './vertical-menu-item.component.html',
  styleUrls: ['./vertical-menu-item.component.css']
})
export class VerticalMenuItemComponent implements OnInit {
  @Input() items: MenuItemModel[] = [];

  @Output() closeChange = new EventEmitter<void>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public onNavigate(): void {
    this.closeChange.emit();
  }

}
