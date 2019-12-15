import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotificationItemModel } from '../../../models';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  currentIndex = this.data.selectedIndex;
  total = this.data.items.length;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { selectedIndex: number, items: NotificationItemModel[] }
  ) { }


  ngOnInit() {
  }

  next() {
    this.currentIndex = Math.min(++this.currentIndex, this.total - 1);
  }
  before() {
    this.currentIndex = Math.max(--this.currentIndex, 0);
  }


}

