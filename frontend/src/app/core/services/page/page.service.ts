import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageService {
  public titlePage = 'Page';
  public subtitlePage = 'This is Page Module';

  constructor(

  ) {
  }

  public setPageDataSubtitle(externatSubtitle: string) {
    this.subtitlePage = externatSubtitle;
  }

}
