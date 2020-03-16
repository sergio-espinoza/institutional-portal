import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-coordination-council',
  templateUrl: './coordination-council.component.html',
  styleUrls: ['./coordination-council.component.css']
})
export class CoordinationCouncilComponent implements OnInit {
  public sectionData: SectionModel = {
    background: 'https://i.imgur.com/B6frbJo.jpg',
    title: 'COORDINACIÓN DE REGIDORES'
  };

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
