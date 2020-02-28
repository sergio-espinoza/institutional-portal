import { Component, OnInit } from '@angular/core';

import { profilesData } from './profiles.data';
import { ProfileModel, SectionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  sectionData: SectionModel = {
    title: 'Personales Internos',
    background: 'https://i.imgur.com/TZ8lanL.jpg'
  }

  profilesList: ProfileModel[] = profilesData;

  constructor() { }

  ngOnInit() {
  }

}
