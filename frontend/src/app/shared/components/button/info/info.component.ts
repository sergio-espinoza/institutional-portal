import { Component, Input, Optional } from '@angular/core';
import { InfoModel } from '../../../models';
import { InfoService } from '../../../../core/services/shared/info.service';
import { MatBottomSheetRef } from '@angular/material';
import { TransparencyDocumentComponent } from '../../../../modules/main/initial/transparency-document/transparency-document.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() infoData: InfoModel;
  @Input() indexParent = 99;
  constructor(
    private infoService: InfoService,
    @Optional() private bottomSheetRef: MatBottomSheetRef<TransparencyDocumentComponent>
  ) { }

  sendIndexParent(event: MouseEvent) {
    if (this.indexParent === 99 || !this.bottomSheetRef) {
      return;
    }
    this.infoService.setSelectedIndex(this.indexParent);
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
