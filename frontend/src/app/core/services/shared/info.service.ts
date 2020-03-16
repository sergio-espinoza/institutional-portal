import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InfoService {
  public selectedIndex: number;
  public  isBrowsing = false;

  constructor(

  ) { }

  public setSelectedIndex(indexInserted: number): void {
    this.selectedIndex = indexInserted;
  }

}
