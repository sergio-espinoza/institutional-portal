import { Component, OnInit } from '@angular/core';
import { SectionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {
  sectionData: SectionModel = {
    background: 'https://i.imgur.com/B6frbJo.jpg',
    title: 'Alcalde del Distrito de Santa Bárbara de Carhuacayán'
  };


  constructor() { }

  ngOnInit() {
  }

}
