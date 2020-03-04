import { Component, OnInit } from '@angular/core';
import { ExpansionModel, InfoModel } from '../../../../shared/models';

import { infoDataTransparency } from './infoDataTransparency';
import { InfoService } from '../../../../core/services/shared/info.service';

@Component({
  selector: 'app-transparency-document',
  templateUrl: './transparency-document.component.html'
})

export class TransparencyDocumentComponent implements OnInit {
  groupLinkSelected: number;

  transparencyData: ExpansionModel[] = [
    { title: 'TRANSPARENCIA',
      description: 'Total 10 de esta Sección',
      icon: 'public' },
    { title: 'DOCUMENTOS DE GESTIÓN',
      description: 'Total 16 de esta Sección',
      icon: 'apartment' },
    { title: 'NORMATIVIDAD LEGAL',
      description: 'Total 8 de esta Sección',
      icon: 'gavel' },
    { title: 'RESOLUCIONES GERENCIALES',
      description: 'Total 8 de esta Sección',
      icon: 'spellcheck' },
    { title: 'INFORMACIÓN ADICIONAL',
      description: 'Total 9 de esta Sección',
      icon: 'post_add' },
  ];

  infoDataTransparency: InfoModel[][] = infoDataTransparency;

  constructor(
    public infoService: InfoService
  ) { }

  ngOnInit() {
  }
}
