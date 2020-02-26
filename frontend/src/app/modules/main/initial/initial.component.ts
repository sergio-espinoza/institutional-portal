import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { WINDOW } from '../../../core/services/api-local/window.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit, OnDestroy {
  backgroundOne = 'hidden';
  viewTransparencyButton = false;

  constructor(
    @Inject(WINDOW) private windowRef: Window
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  loadMainBackground() {
    this.backgroundOne = 'visible';
  }

}
