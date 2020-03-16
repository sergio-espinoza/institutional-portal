import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../../../core/services/page/page.service';
import { consultationData } from './consultation.data';
import { SectionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  public sectionData: SectionModel = {
    title: 'Consulta de Expediente SIAF',
    background: 'https://i.imgur.com/CNEp4ur.png'
  };
  public dataSource: any[] = consultationData;
  public srcSelected: string = this.dataSource[0] ? this.dataSource[0].src : '';
  public displayedColumns: string[] = [ 'name', 'size' ];

  constructor(
    private pageService: PageService,
  ) { }

  ngOnInit(): void {
  }

}
