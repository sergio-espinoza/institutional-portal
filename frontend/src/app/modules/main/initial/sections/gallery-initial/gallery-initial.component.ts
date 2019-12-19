import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemDetailComponent } from 'src/app/shared/components';
import { NotificationItemModel } from 'src/app/shared/models';

@Component({
  selector: 'app-gallery-initial',
  templateUrl: './gallery-initial.component.html',
  styleUrls: ['./gallery-initial.component.css']
})

export class GalleryInitialComponent implements OnInit {
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
        `,
      className: 'into-gallery'
    },
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
        `,
      className: 'into-gallery'
    },
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
        `,
      className: 'into-gallery'
    },
    {
      title: 'Amazing Background',
      subtitle: 'this is Amazing Background',
      date: new Date(),
      image: 'https://thumbs.gfycat.com/ShamefulAptHogget-size_restricted.gif',
      avatar: 'https://thumbs.gfycat.com/ShamefulAptHogget-size_restricted.gif',
      description: `
        This is a Amazing Background in format Gift.
        `,
      className: 'into-gallery'
    },
    {
      title: 'Amazing Background',
      subtitle: 'this is Amazing Background',
      date: new Date(),
      image: 'https://thumbs.gfycat.com/ShamefulAptHogget-size_restricted.gif',
      avatar: 'https://thumbs.gfycat.com/ShamefulAptHogget-size_restricted.gif',
      description: `
        This is a Amazing Background in format Gift.
        `,
      className: 'into-gallery'
    },
  ];

  notificationToDisplay: NotificationItemModel[];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.notificationToDisplay = this.notificationItemData.slice(1, 5);
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
