import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailComponent } from '../../../../../shared/components';
import { IImgurResponseData } from '../../../../../shared/models';
import { ImgurService } from '../../../../../core/services/external-api/imgur.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-gallery-initial',
  templateUrl: './gallery-initial.component.html',
  styleUrls: ['./gallery-initial.component.css']
})

export class GalleryInitialComponent implements OnInit, OnDestroy {

  imagesSourceSubscriber: Subscriber<IImgurResponseData>;
  imagesSource: IImgurResponseData[];
  imagesSourceToDisplay: IImgurResponseData[];


  constructor(
    public dialog: MatDialog,
    private imgurService: ImgurService
  ) { }

  ngOnInit() {
    this.getImagesFromImgur();
  }

  openDetail(index: number): void {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      panelClass: 'complete',
      data: {
        selectedIndex: index,
        imagesSource: this.imagesSource
      } as {
        selectedIndex: number,
        imagesSource: IImgurResponseData[]
      }
    });
  }

  getImagesFromImgur(): void {
    this.imgurService.getImages().subscribe(
      (imagesSource: IImgurResponseData[]) => {
        this.imagesSource = imagesSource;
        this.imagesSourceToDisplay = this.imagesSource.slice(1, 6);
      });
  }

  ngOnDestroy() {
    if (this.imagesSourceSubscriber) this.imagesSourceSubscriber.unsubscribe();
  }
}
