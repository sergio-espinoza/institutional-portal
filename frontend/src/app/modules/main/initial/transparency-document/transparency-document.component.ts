import { Component, OnInit } from '@angular/core';
import { ExpansionModel, InfoModel } from '../../../../shared/models';

import { infoDataTransparency } from './infoDataTransparency';
import { InfoService } from '../../../../core/services/shared/info.service';

@Component({
  selector: 'app-transparency-document',
  templateUrl: './transparency-document.component.html'
})

export class TransparencyDocumentComponent implements OnInit {
  public groupLinkSelected: number;

  public transparencyData: ExpansionModel[] = [
    { title: 'TRANSPARENCY',
      description: 'There are 10 in this Section',
      icon: 'public' },
    { title: 'MANAGEMENT DOCUMENTS',
      description: 'There are 16 in this Section',
      icon: 'apartment' },
    { title: 'LEGAL REGULATION',
      description: 'There are 8 in this Section',
      icon: 'gavel' },
    { title: 'MANAGEMENT RESOLUTIONS',
      description: 'There are 8 in this Section',
      icon: 'spellcheck' },
    { title: 'ADDITIONAL INFORMATION',
      description: 'There are 9 in this Section',
      icon: 'post_add' },
  ];

  public infoDataTransparency: InfoModel[][] = infoDataTransparency;

  constructor(
    public infoService: InfoService
  ) { }

  ngOnInit(): void {
  }
}
