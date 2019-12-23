import { Component, OnInit } from '@angular/core';
import { SectionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-vission-mision',
  templateUrl: './vission-mision.component.html',
  styleUrls: ['./vission-mision.component.css']
})
export class VissionMisionComponent implements OnInit {

  sectionData: SectionModel = {
    title: 'Visión y Misión',
    background: 'https://i.imgur.com/38bUjFd.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
