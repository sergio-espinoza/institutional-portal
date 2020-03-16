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
  public sectionData: SectionModel = {
    title: 'Mensaje para la Comunidad',
    background: 'https://i.imgur.com/47Oq4M5.jpg' };

  public personalSayData: PersonalSayModel = new PersonalSayModel(
    'https://i.imgur.com/xQVBgaw.png',
    'Mayor Icon', 'El trabajo de todas las autoridades en equipo contribuye al desarrollo del distrito',
    'Juan Carlos Llacza Alcántara',
    'Alcalde del Distrito');

  constructor(

  ) { }

  ngOnInit(): void { }
}
