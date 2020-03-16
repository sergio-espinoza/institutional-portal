import { Component, OnInit } from '@angular/core';

import { profilesData } from './profiles.data';
import { ProfileModel, SectionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  public sectionData: SectionModel = {
    title: 'Regidores',
    background: 'https://i.imgur.com/TZ8lanL.jpg'
  }

  public profilesList: ProfileModel[] = profilesData;

  constructor() { }

  ngOnInit(): void {
  }

}
