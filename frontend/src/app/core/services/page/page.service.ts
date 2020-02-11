import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageService {
  titlePage = 'Page';
  subtitlePage = 'This is Page Module';

  constructor() {
  }
  setPageDataSubtitle(externatSubtitle: string) {
    this.subtitlePage = externatSubtitle;
  }

}
