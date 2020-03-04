import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IImgurResponseData } from '../../../models';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  currentIndex = this.data.selectedIndex;
  total = this.data.imagesSource.length;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { selectedIndex: number, imagesSource: IImgurResponseData[] }
  ) {
  }


  ngOnInit() {
  }

  next() {
    this.currentIndex = Math.min(++this.currentIndex, this.total - 1);
  }
  before() {
    this.currentIndex = Math.max(--this.currentIndex, 0);
  }

  getCorrectDate(incorretDate: number): number {
    return incorretDate * 1000;
  }

  @HostListener('window:keyup.ArrowRight', ['$event']) ar(e: KeyboardEvent) {
    this.next();
  }

  @HostListener('window:keyup.ArrowLeft', ['$event']) al(e: KeyboardEvent) {
    this.before();
  }


}

