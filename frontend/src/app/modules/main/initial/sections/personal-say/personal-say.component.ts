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
    title: 'Main Message',
    background: 'https://i.imgur.com/47Oq4M5.jpg' };

  public personalSayData: PersonalSayModel = new PersonalSayModel(
    'https://i.imgur.com/lY20KmG.png', 'Mayor Icon',
    'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod.',
    'BRUNO VESPA',
    'Principal Director');

  constructor(

  ) { }

  ngOnInit(): void { }
}
