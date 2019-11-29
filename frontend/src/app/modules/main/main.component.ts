import { Component, OnInit } from '@angular/core';
import { InfoModel, NotificationItemModel, LinkListModel } from '../../shared/models';
import { MatDialog } from '@angular/material';
import { ItemDetailComponent } from '../../shared/components';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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

  linkLists: LinkListModel[] = [
    { title: 'GitHub', subtitle: 'GitHub WebSite', icon: 'person', path: 'https://www.github.com/48479567' },
    { title: 'Google', subtitle: 'Google Link', icon: 'email', path: 'https://www.google.com' },
    { title: 'Facebook', subtitle: 'Facebook WebSite', icon: 'notifications_active', path: 'https://www.facebook.com' }
  ];

  dataSource: any[] = [
    { name: 'Document 1', size: '350 KB', createdat: new Date() },
    { name: 'Document 2', size: '1500 KB', createdat: new Date() },
    { name: 'Document 3', size: '450 KB', createdat: new Date() },
  ];

  displayedColumns: string[] = [ 'name', 'size' ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {

  }

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
