import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InfoService {
  selectedIndex: number;
  isBrowsing = false;

  constructor() { }

  setSelectedIndex(indexInserted: number) {
    this.selectedIndex = indexInserted;
  }

}
