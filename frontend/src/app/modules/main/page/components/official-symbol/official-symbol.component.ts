import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-official-symbol',
  templateUrl: './official-symbol.component.html',
  styleUrls: ['./official-symbol.component.css']
})
export class OfficialSymbolComponent implements OnInit {
  public sectionData: SectionModel = {
    title: 'OFFICIAL SYMBOLS',
    background: 'https://i.imgur.com/JpIt1ya.jpg'
  };

  public symbols: string[] = [
    'https://i.imgur.com/Q5JMSZE.jpg',
    'https://i.imgur.com/AxIlNba.png',
    'https://i.imgur.com/LkhSmoM.png'
  ];

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
