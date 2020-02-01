import { Component, OnInit} from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { TransparencyDocumentComponent } from './initial/transparency-document/transparency-document.component';
import { MainGeneralService } from '../../core/services/main/general.service';
import { WindowService } from '../../core/services/api-local/window.service';
import { InfoService } from '../../core/services/shared/info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private bottomSheet: MatBottomSheet,
    public mainGeneralService: MainGeneralService,
    private windowService: WindowService,
    private infoService: InfoService
  ) {
  }

  ngOnInit() {
  }


  openMenuTransparency() {
    this.bottomSheet.open(TransparencyDocumentComponent, {
    }).afterDismissed().subscribe(
      _ => {
        if (this.infoService.isBrowsing) {
          this.windowService.getWindow().scroll(0, 0);
          this.infoService.isBrowsing = false;
        }
      }
    );
  }

}
