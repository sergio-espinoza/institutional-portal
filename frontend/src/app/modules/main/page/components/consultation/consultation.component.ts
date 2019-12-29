import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/core/services/page/page.service';
import { MatDialog } from '@angular/material';
import { PdfViewComponent } from 'src/app/shared/components';
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
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.pageService.setPageData({
      title: 'Consulta Expediente SIAF',
      subtitle: 'Sección de Consulta de Expediente SIAF'
    });
  }

  openPdf(src: string) {
    const dialogRef = this.dialog.open(PdfViewComponent, {
      panelClass: 'complete',
      data: {
        url: `https://drive.google.com/file/d/${src}/preview`
      }
    });
  }

  openDirect(index: number) {

  }

}
