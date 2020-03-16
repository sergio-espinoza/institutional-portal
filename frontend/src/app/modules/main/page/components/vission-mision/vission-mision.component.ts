import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-vission-mision',
  templateUrl: './vission-mision.component.html',
  styleUrls: ['./vission-mision.component.css']
})
export class VissionMisionComponent implements OnInit {

  public sectionData: SectionModel = {
    title: 'Visión y Misión',
    background: 'https://i.imgur.com/JZzafkz.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
