import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InfoModel } from '../../../models';
import { InfoService } from '../../../../core/services/shared/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() infoData: InfoModel;
  @Input() indexParent = 99;
  @Output() infoChange = new EventEmitter<void>();

  constructor(
    private infoService: InfoService,
  ) { }

  public sendIndexParent(event: MouseEvent): void {
    if (this.indexParent === 99) {
      return;
    }
    this.infoService.setSelectedIndex(this.indexParent);
    this.infoService.isBrowsing = true;
    this.infoChange.emit();
    event.preventDefault();
  }

}
