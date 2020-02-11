import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailComponent } from '../../../../../shared/components';
import { NotificationItemModel } from '../../../../../shared/models';
import { notificationItemData } from './gallery-inicial.data';

@Component({
  selector: 'app-gallery-initial',
  templateUrl: './gallery-initial.component.html',
  styleUrls: ['./gallery-initial.component.css']
})

export class GalleryInitialComponent implements OnInit {
  notificationItemData: NotificationItemModel[] = notificationItemData;

  notificationToDisplay: NotificationItemModel[];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.notificationToDisplay = this.notificationItemData.slice(1, 6);
  }

  openDetail(index: number): void {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      panelClass: 'complete',
      data: {
        selectedIndex: index,
        items: this.notificationItemData
      } as {
        selectedIndex: number,
        items: NotificationItemModel[]
      }
    });
  }
}
