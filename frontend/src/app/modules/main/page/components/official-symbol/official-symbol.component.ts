import { Component, OnInit } from '@angular/core';
import { SectionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-official-symbol',
  templateUrl: './official-symbol.component.html',
  styleUrls: ['./official-symbol.component.css']
})
export class OfficialSymbolComponent implements OnInit {
  sectionData: SectionModel = {
    title: 'Símbolos Oficiales',
    background: 'https://i.imgur.com/JeKDyf6.jpg'
  };


  constructor() { }

  ngOnInit() {
  }

}
