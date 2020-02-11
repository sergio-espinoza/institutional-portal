import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../core/services/page/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pageTitle = 'Page Module';
  pageSubtitle = 'Page Module';

  constructor(
    public pageService: PageService
  ) { }

  ngOnInit() {
  }

  setPageData(sectionTitleOfChild: string) {
    this.pageTitle = `sample of ${sectionTitleOfChild}`;
  }
}
