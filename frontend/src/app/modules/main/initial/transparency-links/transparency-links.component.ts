import { Component, OnInit, Input, Optional } from '@angular/core';
import { InfoModel } from '../../../../shared/models';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TransparencyDocumentComponent } from '../transparency-document/transparency-document.component';

@Component({
  selector: 'app-transparency-links',
  template: `
    <div class="links">
      <app-info
        *ngFor="let link of links"
        [infoData]="link"
        [indexParent]="indexParent"
        (infoChange)="dismissBottomSheetTransparency()"
      ></app-info>
    </div>
  `,
  styles: [`
    .links {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-flow: row wrap;
    }
  `]
})

export class TransparencyLinksComponent implements OnInit {
  @Input() links: InfoModel[] = [];
  @Input() indexParent: number;

  constructor(
    @Optional() private bottomSheetRef: MatBottomSheetRef<TransparencyDocumentComponent>,
  ) { }

  ngOnInit() { }

  public dismissBottomSheetTransparency(): void {
    if (this.bottomSheetRef) {
      this.bottomSheetRef.dismiss();
    }
  }
}
