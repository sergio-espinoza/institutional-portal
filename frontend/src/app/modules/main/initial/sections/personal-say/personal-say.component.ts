import { Component, OnInit } from '@angular/core';
import { SectionModel, PersonalSayModel } from 'src/app/shared/models';

@Component({
  selector: 'app-section-mayor',
  template: `
    <app-section [sectionData]="sectionData">
      <app-personal-say></app-personal-say>
    </app-section>
  `
})

export class SectionMayorComponent implements OnInit {
  sectionData: SectionModel = { title: 'Mayor Message', background: 'https://i.imgur.com/S2iOjje.jpg' };
  personalSayData: PersonalSayModel = new PersonalSayModel();

  constructor() { }

  ngOnInit() { }
}
