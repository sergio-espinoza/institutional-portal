import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { WINDOW } from '../../../core/services/api-local/window.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit, OnDestroy {
  public backgroundOne = 'hidden';
  public viewTransparencyButton = false;

  constructor(
    @Inject(WINDOW) private windowRef: Window
  ) { }

  ngOnInit(): void {
  }

  public loadMainBackground(): void {
    this.backgroundOne = 'visible';
  }

  ngOnDestroy(): void {
  }
}
