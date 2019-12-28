import { Component, OnInit, Input } from '@angular/core';
import { MinimizedViewModel } from '../../../models';

@Component({
  selector: 'app-minimized-view',
  templateUrl: './minimized-view.component.html',
  styleUrls: ['./minimized-view.component.css']
})
export class MinimizedViewComponent implements OnInit {
  @Input() minimizedViewData: MinimizedViewModel;
  @Input() size: { width: string, height: string } = {
    width: '1300px', height: 'auto'
  };

  constructor() { }

  ngOnInit() {
  }

}
