import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IImgurResponseData } from '../../../models';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  public total = this.data.imagesSource.length;

  private internalCurrentIndex = this.data.selectedIndex;
  public set currentIndex(externalIndex: number) {
    this.internalCurrentIndex = Math.max(
      0, Math.min(externalIndex, this.total - 1)
    );
  }
  public get currentIndex(): number {
    return this.internalCurrentIndex;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { selectedIndex: number, imagesSource: IImgurResponseData[] }
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:keyup.ArrowRight', ['$event']) ar(e: KeyboardEvent): void {
    this.currentIndex++;
  }
  @HostListener('window:keyup.ArrowLeft', ['$event']) al(e: KeyboardEvent): void {
    this.currentIndex--;
  }

  public getCorrectDate(incorretDate: number): number {
    return incorretDate * 1000;
  }

}

