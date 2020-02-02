import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent {
  @Output() closeChange = new EventEmitter<void>();


  constructor() { }

  close() {
    this.closeChange.emit();
  }

}
