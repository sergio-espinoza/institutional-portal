import { Component, OnInit } from '@angular/core';
import { functionsData } from './prosecutor.data';
import { SectionModel } from '../../../../../shared/models';
import { PageService } from '../../../../../core/services/page/page.service';

@Component({
  selector: 'app-prosecutor',
  templateUrl: './prosecutor.component.html',
  styleUrls: ['./prosecutor.component.css']
})
export class ProsecutorComponent implements OnInit {
  sectionData: SectionModel = new SectionModel(
    'Procuraduría Pública', 'https://i.imgur.com/yg3Qdqv.jpg');

  functionsData: string[] = functionsData;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
  }

}
