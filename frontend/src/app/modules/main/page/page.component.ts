import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../core/services/page/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public pageTitle = 'Páginas';
  public pageSubtitle = 'Módulo de Páginas';

  constructor(
    public pageService: PageService
  ) { }

  ngOnInit(): void {
  }

  // setPageData(sectionTitleOfChild: string) {
  //   this.pageTitle = `Sección de ${sectionTitleOfChild}`;
  // }
}
