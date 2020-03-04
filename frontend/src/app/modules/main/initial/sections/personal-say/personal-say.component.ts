import { Component, OnInit } from '@angular/core';
import { SectionModel, PersonalSayModel } from '../../../../../shared/models';

@Component({
  selector: 'app-section-mayor',
  template: `
    <app-section [sectionData]="sectionData" className="initial complete">
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
    'Mayor Icon', 'El trabajo de todas las autoridades en equipo contribuye al desarrollo del distrito',
    'Juan Carlos Llacza Alcántara',
    'Alcalde del Distrito');

  constructor() { }

  ngOnInit() { }
}
