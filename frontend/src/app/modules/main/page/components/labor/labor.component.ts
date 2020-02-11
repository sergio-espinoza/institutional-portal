import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../../../core/services/page/page.service';
import { SectionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.css']
})
export class LaborComponent implements OnInit {
  sectionData: SectionModel = {
    title: 'Oportunidades Laborales',
    background: 'https://i.imgur.com/yg3Qdqv.jpg'
  };

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
  }

}
