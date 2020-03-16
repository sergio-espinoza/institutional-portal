import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IImgurResponseData } from '../../../models';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  public currentIndex = this.data.selectedIndex;
  public total = this.data.imagesSource.length;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { selectedIndex: number, imagesSource: IImgurResponseData[] }
  ) { }

  ngOnInit(): void {
  }

  public next(): void {
    this.currentIndex = Math.min(++this.currentIndex, this.total - 1);
  }
  public before(): void {
    this.currentIndex = Math.max(--this.currentIndex, 0);
  }

  @HostListener('window:keyup.ArrowRight', ['$event']) ar(e: KeyboardEvent): void {
    this.next();
  }
  @HostListener('window:keyup.ArrowLeft', ['$event']) al(e: KeyboardEvent): void {
    this.before();
  }

  public getCorrectDate(incorretDate: number): number {
    return incorretDate * 1000;
  }

}

