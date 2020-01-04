import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../../../core/services/page/page.service';
import { consultationData } from './consultation.data';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  dataSource: any[] = consultationData;

  srcSelected: string = this.dataSource[0].src;

  displayedColumns: string[] = [ 'name', 'size' ];
  constructor(
    private pageService: PageService,
  ) { }

  ngOnInit() {
    this.pageService.setPageData({
      title: 'Consulta Expediente SIAF',
      subtitle: 'Sección de Consulta de Expediente SIAF'
    });
  }

}
