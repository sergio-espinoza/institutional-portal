import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../../../shared/models';
import { PageService } from '../../../../../core/services/page/page.service';
import { functionsData } from './management.data';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  sectionData: SectionModel = new SectionModel(
    'Gerencia General', 'https://i.imgur.com/yg3Qdqv.jpg');

  functionsData: string[] = functionsData;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
  }

}
