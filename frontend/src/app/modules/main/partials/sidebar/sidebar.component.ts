import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { WINDOW } from '../../../../core/services/api-local/window.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() closeChange = new EventEmitter<void>();

  heightSocial: number;

  constructor(
    @Inject(WINDOW) private windowRef: Window
  ) { }

  ngOnInit() {
    this.heightSocial = this.windowRef.innerHeight - 80;
  }

  close() {
    this.closeChange.emit();
  }

}
