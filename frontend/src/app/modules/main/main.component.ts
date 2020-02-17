import { Component, OnInit, Inject, OnDestroy} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TransparencyDocumentComponent } from './initial/transparency-document/transparency-document.component';
import { MainGeneralService } from '../../core/services/main/general.service';
import { InfoService } from '../../core/services/shared/info.service';
import { WINDOW } from '../../core/services/api-local/window.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  viewTransparencyButton = false;

  bottomSheetSubscription: Subscription;

  constructor(
    private bottomSheet: MatBottomSheet,
    public mainGeneralService: MainGeneralService,
    @Inject(WINDOW) private windowRef: Window,
    private infoService: InfoService
  ) { }

  ngOnInit() {
  }

  openTransparencyMenu() {
    this.bottomSheetSubscription = this.bottomSheet.open(TransparencyDocumentComponent
      ).afterDismissed().subscribe(
      _ => {
        if (this.infoService.isBrowsing) {
          this.windowRef.scroll(0, 0);
          this.infoService.isBrowsing = false;
        }
      }
    );
  }

  toggleTransparencyMenu(childViewTransparencyButton: boolean | undefined) {
    this.viewTransparencyButton = childViewTransparencyButton;
  }

  ngOnDestroy() {
    if (this.bottomSheetSubscription) this.bottomSheetSubscription.unsubscribe();
  }
}
