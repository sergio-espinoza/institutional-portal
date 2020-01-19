import { Component, OnInit, Input } from '@angular/core';
import { MinimizedViewModel } from '../../../models';
import { WindowService } from '../../../../core/services/api-local/window.service';

@Component({
  selector: 'app-minimized-view',
  templateUrl: './minimized-view.component.html',
  styleUrls: ['./minimized-view.component.css']
})
export class MinimizedViewComponent implements OnInit {
  @Input() minimizedViewData: MinimizedViewModel;
  @Input() size: { width: string, height: string } = {
    width: '1300px', height: '100%'
  };

  constructor(
    private windowService: WindowService
  ) { }

  ngOnInit() {
    this.size.height = `${this.windowService.getWindow().innerHeight - 45}px`;
  }

}
