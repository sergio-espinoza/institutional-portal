import { Component, OnInit } from '@angular/core';
import { SectionModel, PersonalSayModel } from '../../../../../shared/models';

@Component({
  selector: 'app-section-mayor',
  template: `
    <app-section [sectionData]="sectionData" [showPresection]="true">
      <app-personal-say [personalSayData]="personalSayData"></app-personal-say>
    </app-section>
  `
})

export class SectionMayorComponent implements OnInit {
  sectionData: SectionModel = {
    title: 'Mensaje para la Comunidad',
    background: 'https://i.imgur.com/S2iOjje.jpg' };
  personalSayData: PersonalSayModel = new PersonalSayModel(
    'https://i.imgur.com/lnpPfU1.png',
    'Mayor Icon', 'Mensaje del Alcalde',
    'Juan Carlos Llacza Alcantara',
    'Alcalde del Distrito');

  constructor() { }

  ngOnInit() { }
}
