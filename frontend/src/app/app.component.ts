import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailComponent } from './shared/components';
import { InfoModel, NotificationItemModel, ItemDetailModel } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  infoData: InfoModel = {
    title: 'Data 1',
    icon: 'email',
    color: ''
  };
  notificationItemData: NotificationItemModel[] = [
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      date: new Date(),
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: `
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain,
        the Shiba Inu was originally bred for hunting.
        `
    },
    {
      title: 'Amazing Background',
      subtitle: 'this is Amazing Background',
      date: new Date(),
      image: 'https://thumbs.gfycat.com/ShamefulAptHogget-size_restricted.gif',
      avatar: 'https://thumbs.gfycat.com/ShamefulAptHogget-size_restricted.gif',
      description: `
        This is a Amazing Background in format Gift.
        `
    }
  ];

  constructor(
    public dialog: MatDialog
  ) {}

  openDetail(index: number): void {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      panelClass: 'complete',
      data: {
        selectedIndex: index,
        items: this.notificationItemData
      } as {
        selectedIndex: number,
        items: NotificationItemModel[] }
    });
  }
}
