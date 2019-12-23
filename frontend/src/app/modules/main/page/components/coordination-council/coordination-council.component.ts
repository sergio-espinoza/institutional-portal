import { Component, OnInit } from '@angular/core';
import { SectionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-coordination-council',
  templateUrl: './coordination-council.component.html',
  styleUrls: ['./coordination-council.component.css']
})
export class CoordinationCouncilComponent implements OnInit {
  sectionData: SectionModel = {
    background: 'https://i.imgur.com/B6frbJo.jpg',
    title: 'CONSEJO DE COORDINACIÓN'
  };

  constructor() { }

  ngOnInit() {
  }

}
