import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageService {
  pageData: { title: string, subtitle: string } = {
    title: 'Page',
    subtitle: 'This is Page Module'
  };

  constructor() {
  }

  setPageData(data: { title: string, subtitle: string }): void {
    this.pageData = data;
  }

}
